var filenameWithoutExt=""
var isImageProcessing=false;$(document).on('ready',function(e){$(document).on('dragover','html',function(e){e.preventDefault();e.stopPropagation();});$(document).on("drop",'html',function(e){if(isImageProcessing==false){if(e.originalEvent.dataTransfer){if(e.originalEvent.dataTransfer.files.length){e.preventDefault();e.stopPropagation();var source_image=e.originalEvent.dataTransfer.files[0];filenameWithoutExt=source_image.name.split(/\.(?=[^\.]+$)/)[0]
var ext=source_image.name.split(/\.(?=[^\.]+$)/)[1];var ext_list=['jpg','png','jpeg','JPG','PNG','JPEG']
if($.inArray(ext,ext_list)!=-1){uploadPlaceholderImage(source_image)}else{alert("Only jpg, png, and jpeg file format supported")}}}
if(hd_req_obj.template_details.type=='product_background'){reset_bubble()}}else{alert("You can upload one image at a time")}});$(document).on('click','#shareFacebook',function(e){var URL="https://www.facebook.com/sharer/sharer.php?u=https://www.slazzer.com&quote="+window.location.href
openNewTab(URL)});$(document).on('click','#shareTwitter',function(e){var URL="https://twitter.com/intent/tweet?text=&hashtags=slazzer&url="+window.location.href
openNewTab(URL)});});function view_template_thumbnail(url){$('#thumb_placeholder').attr('src',url);}
function view_logo_thumbnail(url){$('#thumb_logo').attr('src',url);}
function activate_download_button(is_hd=true){$('#btnDownloadPreview').removeClass('disable');if(is_hd){$('#btnDownloadHD').removeClass('disable');}else{$('#btnDownloadHD').addClass('disable');}}
function uploadPlaceholderImage(inputImage){isImageProcessing=true;progressbar_show_hide(false)
var trim_extra_transparent_area=1;if(hd_req_obj.template_details.type=='change_background'){trim_extra_transparent_area=0;}
if(hd_req_obj.template_details.type=='real_estate'){trim_extra_transparent_area=0;}
var csrftoken=$('meta[name=csrf-token]').attr('content');var formdata=new FormData();formdata.append("source_image_file",inputImage);formdata.append("is_design_template",1);formdata.append("trim_extra_transparent_area",trim_extra_transparent_area);$('#canvasProgressBar').css('display','');$.ajaxSetup({beforeSend:function(xhr,settings){if(!/^(GET|HEAD|OPTIONS|TRACE)$/i.test(settings.type)){xhr.setRequestHeader("X-CSRFToken",csrftoken)}}});$.ajax({url:'/upload_image',type:'POST',processData:false,contentType:false,data:formdata,xhr:function(){var xhr=new window.XMLHttpRequest();xhr.upload.addEventListener("progress",function(evt){if(evt.lengthComputable){var current_progress=evt.loaded/evt.total
current_progress=parseInt(current_progress*100)
$('#uploadImageInnerProgressBar').css('width',current_progress.toString()+'%')
if(current_progress===100){progressbar_show_hide()}}},false);return xhr;},success:function(data){isImageProcessing=false;$('#btnUploadImage').text("Switch Image");$('#canvasProgressBar').css('display','none');data=JSON.parse(data)
hd_req_obj.is_image_downloaded="0";save_data_for_hd(data)
var preview_image_url=baseURL()+data.preview_size_output_image
setPlaceholderImageFromUrl(preview_image_url)
view_template_thumbnail(preview_image_url)
activate_download_button(data.full_size_image_available)
if(hd_req_obj.template_details.type=="recipe_template"){url1=preview_image_url;}},error:function(err){}});}
function save_data_for_hd(data){hd_req_obj.image_url=data.original_image;hd_req_obj.source_image_width=data.preview_size_image_width;hd_req_obj.source_image_height=data.preview_size_image_height;hd_req_obj.output_image_width=data.full_size_image_width;hd_req_obj.output_image_height=data.full_size_image_height;hd_req_obj.is_image_downloaded="0";hd_req_obj.is_hd=data.full_size_image_available;}
function openNewTab(url){window.open(url,'_blank');}