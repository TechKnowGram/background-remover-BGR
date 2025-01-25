var hd_req_obj={"image_url":"","source_image_width":"","source_image_height":"","output_image_width":"","output_image_height":"","is_image_downloaded":"0","is_hd":true,"template_details":{"type":"change_background","is_background_available":true,"background_image":"","background_color":"","full_hd_image_path":"","full_hd_template_path":""}}
var obj_placeholder=null;var obj_background=null;var obj=null;var canvas_element=document.createElement('canvas');var img_obj=document.getElementById('mainImageElement');var _height=728;var _width=728;var _top=0;var _left=0;canvas_element.width=_width;canvas_element.height=_height;var canvas=new fabric.Canvas(canvas_element)
$(document).on('ready',function(e){$(window).bind("load",function(){setBackgroundImageFromUrl(baseURL()+'/static/images/design_templates/change_image_background/bg_image/1.jpg')
setPlaceholderImageFromUrl(baseURL()+'/static/images/design_templates/change_image_background/placeholder-small.png')});$(document).on('click','#btnUploadImage',function(e){$("#uploadImage").trigger("click");});$(document).on('click','#btnUploadImageBackground',function(e){$("#uploadImageBackground").trigger("click");});loadTemplateAndBgImage()
$(document).on('click','.templateImage',function(event){var URL=$(this).attr('src');if(URL!=''){loadTemplate(baseURL()+URL)}});$(document).on('click','.bgImage',function(event){$('.bgImage').removeClass('active');$(this).addClass('active');setBackgroundImageFromUrl(baseURL()+$.trim($(this).attr('src')).replace("thumbnail","bg_image"));});$(document).on('change','#uploadImageBackground',function(event){var file=this.files[0];if(file!='undefined'){setBackgroundImageFromUrl(URL.createObjectURL(file),'file')}});$(document).on('change','#uploadImage',function(event){if(isImageProcessing==false){var file=this.files[0];if(file!='undefined'){filenameWithoutExt=file.name.split(/\.(?=[^\.]+$)/)[0]
uploadPlaceholderImage(file)}}else{alert("You can upload one image at a time")}});$(document).on('click','.chooseColor',function(e){var background_color=$(this).attr('style');background_color=$.trim(background_color.split(":")[1])
setBackgroundColor(background_color)});$(document).on('change','#showInputWithClear',function(e){var background_color=$('.sp-preview-inner').attr('style');background_color=$.trim(background_color.split(":")[1]).slice(0,-1)
if(background_color!='transparent'){setBackgroundColor(rgb2hex(background_color))}});$(document).on('click','#btnDownloadPreview',function(e){this.href=canvas.toDataURL({format:'jpg',quality:0.8,})
this.download=filenameWithoutExt+'.png'});$(document).on('click','#btnDownloadHD',function(e){if(hd_req_obj.is_hd){hd_car_design_template(hd_req_obj)
$('#btnDownloadHD').addClass('btn-hd');}});});function setPlaceholderImageFromFile(file){var logoBlobURL=URL.createObjectURL(file);setPlaceholderImageFromUrl(logoBlobURL)
activate_download_button()}
var _type=''
var _url=''
function setBackgroundImageFromUrl(url,type=''){_type=type
_url=url
if(type=='file'){var center=canvas.getCenter();fabric.Image.fromURL(url,function(img){var scale=canvas.height/img.height
var _width=scale*img.width
if(obj_placeholder.width>=_width){scale=canvas.width/img.width}
canvas.setBackgroundImage(img,canvas.renderAll.bind(canvas),{scaleX:scale,scaleY:scale,top:center.top,left:center.left,originX:'center',originY:'center'});img_obj.src=canvas.toDataURL('png');hd_req_obj.template_details.is_background_available=true;toDataUrl(url,function(myBase64){hd_req_obj.template_details.background_image=myBase64;if(type=='file'){$('#thumb_placeholder_background').attr('src',myBase64)}});});}else{var center=canvas.getCenter();fabric.Image.fromURL(url,function(img){var scale=0;if(obj_placeholder!=null){scale=canvas.height/img.height
var _width=scale*img.width
if(canvas.width>=_width){scale=canvas.width/img.width}}else{scale=728/img.width}
img.set({scaleX:scale,scaleY:scale,top:center.top,left:center.left,originX:'center',originY:'center'})
canvas.setBackgroundImage(img)
canvas.renderAll()
img_obj.src=canvas.toDataURL('png');hd_req_obj.template_details.is_background_available=true;toDataUrl(url,function(myBase64){hd_req_obj.template_details.background_image=myBase64;if(type=='file'){$('#thumb_placeholder_background').attr('src',myBase64)}});});}}
function toDataUrl(url,callback){var xhr=new XMLHttpRequest();xhr.onload=function(){var reader=new FileReader();reader.onloadend=function(){callback(reader.result);}
reader.readAsDataURL(xhr.response);};xhr.open('GET',url);xhr.responseType='blob';xhr.send();}
function setPlaceholderImageFromUrl(url){if(obj_placeholder!=null){canvas.remove(obj_placeholder).renderAll();}
var templateScaleWidth=728;var templateScaleHeight=728;fabric.Image.fromURL(url,function(img){if(img.width>img.height){canvas.setDimensions({width:728,height:(728/img.width)*img.height});var scale=(canvas.width)/img.width;var oImg=img.set({top:canvas.height-img.height*(scale),left:(canvas.width/2)-(templateScaleWidth/2)}).scale(scale);}else{canvas.setDimensions({width:(728/img.height)*img.width,height:728});var scale=(canvas.height)/img.height;var oImg=img.set({top:canvas.height-templateScaleHeight,left:(canvas.width/2)-(img.width*(scale))/2}).scale(scale);}
canvas.add(oImg).renderAll();obj_placeholder=oImg;img_obj.src=canvas.toDataURL('png');view_template_thumbnail(url)
setBackgroundImageFromUrl(_url,_type);});}
function setBackgroundColor(colorCode){canvas.setBackgroundImage(null);canvas.backgroundColor=colorCode;canvas.renderAll();img_obj.src=canvas.toDataURL('png');hd_req_obj.template_details.is_background_available=false;hd_req_obj.template_details.background_color=colorCode;}
function baseURL(){return window.location.origin;}
function loadTemplateAndBgImage(){var templateImageList=['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg','9.jpg','10.jpg','11.jpg','12.jpg'];templateImageList.forEach(function(image,i){var SRC="/static/images/design_templates/change_image_background/thumbnail/"+image;if(i==0){$('#divBgImage').append(`<img class="bgImage active" src="`+SRC+`">`)}
else{$('#divBgImage').append(`<img class="bgImage" src="`+SRC+`">`)}});}
function loadImageFromURL(URL){if(URL!=''){loadTemplate(baseURL()+URL)}}
function loadBgImageFromURL(url){if(url!=''){uploadBackground(baseURL()+url)}}
function uploadImage(inputImage){progressbar_show_hide(false)
var csrftoken=$('meta[name=csrf-token]').attr('content');var formdata=new FormData();formdata.append("source_image_file",inputImage);$('#canvasProgressBar').css('display','');$.ajaxSetup({beforeSend:function(xhr,settings){if(!/^(GET|HEAD|OPTIONS|TRACE)$/i.test(settings.type)){xhr.setRequestHeader("X-CSRFToken",csrftoken)}}});$.ajax({url:'/upload_image',type:'POST',processData:false,contentType:false,data:formdata,xhr:function(){var xhr=new window.XMLHttpRequest();xhr.upload.addEventListener("progress",function(evt){if(evt.lengthComputable){var current_progress=evt.loaded/evt.total
current_progress=parseInt(current_progress*100)
$('#uploadImageInnerProgressBar').css('width',current_progress.toString()+'%')
if(current_progress===100){progressbar_show_hide()}}},false);return xhr;},success:function(data){$('#canvasProgressBar').css('display','none');data=JSON.parse(data)
var preview_image_url=baseURL()+data.preview_size_output_image
uploadPlaceholder(preview_image_url)
$('#thumb_placeholder').attr('src',preview_image_url);$('#btnDownloadPreview').removeClass('disable');$('#btnDownloadHD').removeClass('disable');},error:function(err){}});}
function uploadPlaceholder(inputImage){fetch(inputImage).then(function(response){return response.blob();}).then(function(data){var image=new fabric.Image(data);let old=obj_placeholder
var reader=new FileReader();reader.onload=function(event){var imageObj=new Image();imageObj.src=event.target.result;imageObj.onload=function(){var image=new fabric.Image(imageObj);canvas.width=image.width;canvas.height=image.height;obj.remove(old);image.set({left:old.left,top:old.top})
image.set({id:old.id});obj.add(image);obj_placeholder=image;refreshCanvas(obj)}}
reader.readAsDataURL(data)});}
function uploadBackground(inputImage){fetch(inputImage).then(function(response){return response.blob();}).then(function(data){var image=new fabric.Image(data);let old=obj_background
let left=old.left;let top=old.top;let angle=old.angle;var reader=new FileReader();reader.onload=function(event){var imageObj=new Image();imageObj.src=event.target.result;imageObj.onload=function(){var image=new fabric.Image(imageObj);obj.remove(old);obj.remove(obj_placeholder);image.scaleToWidth(old.getScaledWidth())
image.set({angle:angle,left:left,top:top,})
image.set({id:old.id});obj.add(image);obj.add(obj_placeholder);obj_background=image;refreshCanvas(obj)}}
reader.readAsDataURL(data)});}
function uploadBackgroundColor(inputColor){obj.remove(obj_background);obj.remove(obj_placeholder);canvas.setBackgroundColor(inputColor);obj.add(obj_placeholder);refreshCanvas(obj)}
function uploadTemplate(inputImage){fetch(inputImage).then(function(response){return response.blob();}).then(function(data){var image=new fabric.Image(data);let old=obj_placeholder
let left=old.left;let top=old.top;let angle=old.angle;var reader=new FileReader();reader.onload=function(event){var imageObj=new Image();imageObj.src=event.target.result;imageObj.onload=function(){var image=new fabric.Image(imageObj);obj.remove(old);obj.remove(obj_placeholder);image.scaleToWidth(old.getScaledWidth())
image.set({angle:angle,left:left,top:top,})
image.set({id:old.id});obj.add(image);obj_placeholder=image;refreshCanvas(obj)}}
reader.readAsDataURL(data)});}
function progressbar_show_hide(isHide=true){if(isHide){$('#uploadImageProgressBar').css('display','none')}
else{$('#uploadImageProgressBar').css('display','')}}
var rgb2hex=(rgb)=>`#${rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/).slice(1).map(n=>parseInt(n,10).toString(16).padStart(2,'0')).join('')}`