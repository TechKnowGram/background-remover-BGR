var hd_req_obj={"image_url":"","source_image_width":"","source_image_height":"","output_image_width":"","output_image_height":"","is_image_downloaded":"0","is_hd":true,"template_details":{"type":"product_background","is_background_available":true,"background_image":"","background_color":"","is_shadow_available":false,"shadow_value":"0","full_hd_image_path":"","full_hd_template_path":""}}
var obj_placeholder=null;var obj_background=null;var obj=null;var canvas_element=document.createElement('canvas');var img_obj=document.getElementById('mainImageElement');var _height=728;var _width=728;var _top=0;var _left=0;canvas_element.width=_width;canvas_element.height=_height;var canvas=new fabric.Canvas(canvas_element)
$(document).on('ready',function(e){$(window).bind("load",function(){setBackgroundImageFromUrl(baseURL()+'/static/images/design_templates/product_photo_optimizer/bg_image/1.jpg')
setPlaceholderImageFromUrl(baseURL()+'/static/images/design_templates/product_photo_optimizer/placeholder.png')});$(document).on('click','#btnUploadImage',function(e){$("#uploadImage").trigger("click");});loadTemplateAndBgImage()
$(document).on('click','.templateImage',function(event){var URL=$(this).attr('src');if(URL!=''){loadTemplate(baseURL()+URL)}});$(document).on('click','.bgImage',function(event){$('.bgImage').removeClass('active');$(this).addClass('active');setBackgroundImageFromUrl(baseURL()+$.trim($(this).attr('src')).replace("thumbnail","bg_image"));});$(document).on('change','#uploadImage',function(event){if(isImageProcessing==false){$('#mainImageElement').removeClass('w-100');if(this.files[0]!='undefined'){filenameWithoutExt=this.files[0].name.split(/\.(?=[^\.]+$)/)[0]
uploadPlaceholderImage(this.files[0])
reset_bubble()}}else{alert("You can upload one image at a time")}});$(document).on('click','.chooseColor',function(e){var background_color=$(this).attr('style');background_color=$.trim(background_color.split(":")[1])
setBackgroundColor(background_color)});$(document).on('change','#showInputWithClear',function(e){var background_color=$('.sp-preview-inner').attr('style');background_color=$.trim(background_color.split(":")[1]).slice(0,-1)
if(background_color!='transparent'){setBackgroundColor(rgb2hex(background_color))}});$("#shadowSlider").on("change",function(){apply_shadow($(this).val())});$(document).on('click','#btnDownloadPreview',function(e){this.href=canvas.toDataURL({format:'jpg',quality:0.8,})
this.download=filenameWithoutExt+'.png'});$(document).on('click','#btnDownloadHD',function(e){if(hd_req_obj.is_hd){hd_car_design_template(hd_req_obj)
$('#btnDownloadHD').addClass('btn-hd');}});});function setPlaceholderImageFromFile(file){var logoBlobURL=URL.createObjectURL(file);setPlaceholderImageFromUrl(logoBlobURL)}
var _url=''
function setBackgroundImageFromUrl(url){_url=url;var center=canvas.getCenter();fabric.Image.fromURL(url,function(img){var scale=canvas.height/img.height
var _width=scale*img.width
if(obj_placeholder!=null){if(canvas.width>=_width){scale=canvas.width/img.width}}else{scale=728/img.width}
canvas.setBackgroundImage(img,canvas.renderAll.bind(canvas),{scaleX:scale,scaleY:scale,top:center.top,left:center.left,originX:'center',originY:'center'});img_obj.src=canvas.toDataURL('png');hd_req_obj.template_details.is_background_available=true;hd_req_obj.template_details.background_image=url;});}
function setPlaceholderImageFromUrl(url){if(obj_placeholder!=null){canvas.remove(obj_placeholder).renderAll();}
var templateScaleWidth=728;var templateScaleHeight=728;fabric.Image.fromURL(url,function(img){if(img.width>img.height){canvas.setDimensions({width:728,height:(728/img.width)*img.height});var deduct=canvas.width-canvas.width*0.96
var scale=(canvas.width-deduct)/img.width;var oImg=img.set({top:(canvas.height/2)-(img.height*scale/2),left:(canvas.width/2)-(templateScaleWidth/2)}).scale(scale);}else{canvas.setDimensions({width:(728/img.height)*img.width,height:728});var deduct=canvas.height-canvas.height*0.96
var scale=(canvas.height-deduct)/img.height;var oImg=img.set({top:(canvas.height/2)-templateScaleHeight,left:(canvas.width/2)-(img.width*scale/2)}).scale(scale);}
canvas.centerObject(oImg);canvas.add(oImg).renderAll();obj_placeholder=oImg;img_obj.src=canvas.toDataURL('png');view_template_thumbnail(url)
setBackgroundImageFromUrl(_url)});}
function setBackgroundColor(colorCode){canvas.setBackgroundImage(null);canvas.backgroundColor=colorCode;canvas.renderAll();img_obj.src=canvas.toDataURL('png');hd_req_obj.template_details.is_background_available=false;hd_req_obj.template_details.background_color=colorCode;}
function baseURL(){return window.location.origin;}
function loadTemplateAndBgImage(){var templateImageList=['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg','9.jpg','10.jpg','11.jpg','12.jpg','13.jpg','14.jpg','15.jpg'];templateImageList.forEach(function(image,i){var SRC="/static/images/design_templates/product_photo_optimizer/thumbnail/"+image
if(i==0){$('#divBgImage').append(`<img class="bgImage active" src="`+SRC+`">`)}
else{$('#divBgImage').append(`<img class="bgImage" src="`+SRC+`">`)}});}
function progressbar_show_hide(isHide=true){if(isHide){$('#uploadImageProgressBar').css('display','none')}
else{$('#uploadImageProgressBar').css('display','')}}
function apply_shadow(value){obj_placeholder.shadow=null;canvas.remove(obj_placeholder).renderAll();obj_placeholder.shadow=new fabric.Shadow({color:'#4a4b4d',angle:90,direction:1,blur:parseInt(value)});canvas.add(obj_placeholder).renderAll();img_obj.src=canvas.toDataURL('png');hd_req_obj.template_details.is_shadow_available=(value=='0')?false:true;hd_req_obj.template_details.shadow_value=value;}
var rgb2hex=(rgb)=>`#${rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/).slice(1).map(n=>parseInt(n,10).toString(16).padStart(2,'0')).join('')}`