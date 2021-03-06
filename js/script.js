var pictureSource, destinationType;

document.addEventListener('deviceready', loaded, false);

function loaded(){
	pictureSource = navigator.camera.PictureSourceType.CAMERA;
	destinationType = navigator.camera.DestinationType.DATA_URL;
}

function capturePhoto(){
	navigator.camera.getPicture(getPhoto, onFail, {
		quality:80,
		destinationType:destinationType,
		sourceType:pictureSource,
		allowEdit:true
	});
}
function getPhoto(imageData){
	var smallImage = document.getElementById('selfie');
	smallImage.style.display = 'block';
	smallImage.src = "data:image/jpeg;base64,"+imageData;
}
function onFail(message){
	alert('Failed due to: '+message);
}



$(document).ready(function(e){
	var i=0;
	$('html').addClass('js');
	
	$('[data-role=page]').on('mouseover', '[data-icon]', function(e){
		$(this).addClass('active');
	});
	$('[data-role=page]').on('mouseout', '[data-icon]', function(e){
		$(this).removeClass('active');
	});
	
	$('[data-tab=explore]').on('click', function(e){
		$('#explore').show();
		$('#share').hide();
		$('#likes').hide();
		$('header h1').text('Explore');
	});
	$('[data-tab=share]').on('click', function(e){
		$('#explore').hide();
		$('#share').show();
		$('#likes').hide();
		$('header h1').text('Share');
	});
	$('[data-tab=likes]').on('click', function(e){
		$('#explore').hide();
		$('#share').hide();
		$('#likes').show();
		$('header h1').text('Likes');
	});
	

	$('#likethis').on('click', function(e){
		$('#likes ul').append().parent().parent().parent();
	});
	
	$('#sharethis').on('click', function(e){
		i++
		$('#explore ul').append('<li id="ep'+i+'"></li>');
		$('#selfie').clone().appendTo('#ep'+i+'');			
	});
	
		$.ajax({
		url:'http://cdees.catstudents.com/snapit/data.php',
		success: function(data){
		$('#explore ul').append(data);
		}
		
		});
});