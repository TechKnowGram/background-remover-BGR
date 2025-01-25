var hd_req_obj={"image_url":"","source_image_width":"","source_image_height":"","output_image_width":"","output_image_height":"","is_image_downloaded":"0","is_hd":true,"template_details":{"type":"car_design","is_background_available":true,"background_image":"","background_color":"","is_logo_available":false,"logo_position":"","logo_image":"","full_hd_image_path":"","full_hd_template_path":""}}
var obj_logo=null;var obj_placeholder=null;var obj_background=null;var obj=null;var _old_obj_logo=null;var isLogo=false;var canvas_element=document.createElement('canvas');var img_obj=document.getElementById('mainImageElement');var _height=485;var _width=728;var _top=0;var _left=0;var _w=0;var _h=0;var is_logo_uploaded=false;var logoPosition='top-right';canvas_element.width=_width;canvas_element.height=_height;var canvas=new fabric.Canvas(canvas_element)
$(document).on('ready',function(e){$(window).bind("load",function(){setBackgroundImageFromUrl(baseURL()+'/static/images/design_templates/car_design_template/bg_image/1.jpg')
setPlaceholderImageFromUrl(baseURL()+'/static/images/design_templates/car_design_template/car_placeholder.png')
setLogoFromUrl(baseURL()+'/static/images/design_templates/car_design_template/logo.png')});$(document).on('click','#btnUploadImage',function(e){$("#uploadImage").trigger("click");});$(document).on('click','#btnUploadLogo',function(e){$("#uploadLogo").trigger("click");});loadTemplateAndBgImage()
$(document).on('click','.templateImage',function(event){var URL=$(this).attr('src');if(URL!=''){loadTemplate(baseURL()+URL)}});$(document).on('click','.bgImage',function(event){$('.bgImage').removeClass('active');$(this).addClass('active');setBackgroundImageFromUrl(baseURL()+$.trim($(this).attr('src')).replace("thumbnail","bg_image"));});$(document).on('change','#uploadImage',function(event){if(isImageProcessing==false){if(this.files[0]!='undefined'){filenameWithoutExt=this.files[0].name.split(/\.(?=[^\.]+$)/)[0]
uploadPlaceholderImage(this.files[0])}}else{alert("You can upload one image at a time")}});$(document).on('change','#uploadLogo',function(event){if(this.files[0]!='undefined'){setLogoFromFile(this.files[0])}});$(document).on('click','.place-decider',function(e){setLogoPosition($.trim($(this).attr('value')))});$(document).on('click','.chooseColor',function(e){var background_color=$(this).attr('style');background_color=$.trim(background_color.split(":")[1])
setBackgroundColor(background_color)});$(document).on('change','#showInputWithClear',function(e){var background_color=$('.sp-preview-inner').attr('style');background_color=$.trim(background_color.split(":")[1]).slice(0,-1)
if(background_color!='transparent'){setBackgroundColor(rgb2hex(background_color))}});$(document).on('click','#btnDownloadPreview',function(e){if(!is_logo_uploaded){canvas.remove(obj_logo).renderAll()}
this.href=canvas.toDataURL("image/jpeg",0.8)
this.download=filenameWithoutExt+'.png'
if(!is_logo_uploaded){canvas.add(obj_logo).renderAll()
img_obj.src=canvas.toDataURL('png');}});$(document).on('click','#btnDownloadHD',function(e){if(hd_req_obj.is_hd){hd_car_design_template(hd_req_obj)
$('#btnDownloadHD').addClass('btn-hd');}});});function setPlaceholderImageFromFile(file){var logoBlobURL=URL.createObjectURL(file);setPlaceholderImageFromUrl(logoBlobURL)
activate_download_button()}
function setLogoFromFile(file){canvas.remove(obj_logo).renderAll();img_obj.src=canvas.toDataURL('png');var reader=new FileReader();reader.onload=function(f){var data=f.target.result;fabric.Image.fromURL(data,function(img){var oImg=img.set({left:556,top:50}).scale(88/img.width);canvas.add(oImg).renderAll();obj_logo=oImg;is_logo_uploaded=true;view_logo_thumbnail(URL.createObjectURL(file))
setLogoPosition(logoPosition)
hd_req_obj.template_details.is_logo_available=true;hd_req_obj.template_details.logo_image=data;hd_req_obj.template_details.logo_position=logoPosition;});};reader.readAsDataURL(file);}
function setLogoFromUrl(url){fabric.Image.fromURL(url,function(img){obj_logo=img.set({top:20,left:canvas.width-25-img.width});canvas.add(obj_logo).renderAll();img_obj.src=canvas.toDataURL('png');});}
function setLogoPosition(position='top-right'){var obj_temp=obj_logo;canvas.remove(obj_logo).renderAll();if(position=='top-right'){obj_temp.set({top:20,left:canvas.width-25-obj_temp.getScaledWidth()});}
if(position=='top-left'){obj_temp.set({top:20,left:25});}
if(position=='bottom-left'){obj_temp.set({top:canvas.height-20-obj_temp.getScaledHeight(),left:25});}
if(position=='bottom-right'){obj_temp.set({top:canvas.height-20-obj_temp.getScaledHeight(),left:canvas.width-25-obj_temp.getScaledWidth()});}
canvas.add(obj_temp).renderAll();img_obj.src=canvas.toDataURL('png');obj_logo=obj_temp;logoPosition=position;if(hd_req_obj.template_details.is_logo_available==true){hd_req_obj.template_details.logo_position=logoPosition;}}
function setBackgroundImageFromUrl(url){fabric.Image.fromURL(url,function(img){canvas.setBackgroundImage(img,canvas.renderAll.bind(canvas),{scaleX:canvas.width/img.width,scaleY:canvas.height/img.height});img_obj.src=canvas.toDataURL('png');hd_req_obj.template_details.is_background_available=true;hd_req_obj.template_details.background_image=url;});}
function setPlaceholderImageFromUrl(url){if(obj_placeholder!=null){canvas.remove(obj_placeholder).renderAll();}
var templateScaleWidth=612;var templateScaleHeight=324;fabric.Image.fromURL(url,function(img){var templateScaleWidth=612;var templateScaleHeight=324;var scale=templateScaleWidth/img.width;var _width=scale*img.width
var _height=scale*img.height
if(_height>templateScaleHeight){scale=templateScaleHeight/img.height;}
_width=scale*img.width
_height=scale*img.height
var oImg=img.set({top:300-_height/2,left:canvas.width/2-_width/2}).scale(scale);canvas.add(oImg).renderAll();obj_placeholder=oImg;img_obj.src=canvas.toDataURL('png');view_template_thumbnail(url)});}
function setBackgroundColor(colorCode){canvas.setBackgroundImage(null);canvas.backgroundColor=colorCode;canvas.renderAll();img_obj.src=canvas.toDataURL('png');hd_req_obj.template_details.is_background_available=false;hd_req_obj.template_details.background_color=colorCode;}
function baseURL(){return window.location.origin;}
function loadTemplateAndBgImage(){var templateImageList=['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg','9.jpg','10.jpg','11.jpg','12.jpg'];templateImageList.forEach(function(image,i){var SRC="/static/images/design_templates/car_design_template/thumbnail/"+image;if(i==0){$('#divBgImage').append(`<img class="bgImage active" src="`+SRC+`">`)}
else{$('#divBgImage').append(`<img class="bgImage" src="`+SRC+`">`)}});}
function progressbar_show_hide(isHide=true){if(isHide){$('#uploadImageProgressBar').css('display','none')}
else{$('#uploadImageProgressBar').css('display','')}}
var rgb2hex=(rgb)=>`#${rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/).slice(1).map(n=>parseInt(n,10).toString(16).padStart(2,'0')).join('')}`