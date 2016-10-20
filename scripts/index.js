(function () {
  'use strict';
  document.addEventListener('deviceready', onDeviceReady.bind(this), false);
  var pictureSource, destinationType;
  function onDeviceReady() {
    pictureSource = navigator.camera.PictureSourceType;
    destinationType = navigator.camera.DestinationType;

    document.getElementById("capturePhoto").onclick = function () {
      navigator.camera.getPicture(onPhotoDataSuccess, onFail, {
        quality : 50,
        destinationType : destinationType.DATA_URL
      });
    };

    document.getElementById("geolocationdata").addEventListener("click", function () {
      navigator.geolocation.getCurrentPosition(onSuccess, Error, {enableHighAccuracy: true});
    });

    var watchId = navigator.geolocation.watchPosition(Success, Error);
    
    document.getElementById("geowatch").addEventListener("click", function () {
      navigator.geolocation.watchPosition(watchId);
    });





    /*document.getElementById("barcode").onclick=function barcode(){
			cordova.plugins.barcodeScanner.encode(cordova.plugins.barcodeScanner.Encode.TEXT_TYPE, "http://www.nytimes.com", function(success) {
				alert("encode success: " + success);
			}, function(fail) {
				alert("encoding failed: " + fail);
			}
												 );
		};*/

  }


  function onPhotoDataSuccess(imageData) {

    var smallImage = document.getElementById('smallImage');

    smallImage.style.display = 'block';

    smallImage.src = "data:image/jpeg;base64," + imageData;

  }

  function onFail(message) {

    alert('Failed because: ' + message);

  }

  function Success(position)
  {
    document.getElementById("watchSpace").innerHTML = 'Latitude: ' + position.coords.latitude + '<br>' +
      'Longitude ' + position.coords.longitude + '<br>' +
      '<hr/>' +  document.getElementById("watchSpace").innerHTML;
  }


  function Error(error) {
    alert('code' + error.code + '\n' +
          'message' + error.message + '\n');
  }


  var onSuccess = function (position) {
    alert("Latitude:" + position.coords.latitude + '\n' +
          "Longitude" + position.coords.longitude + '\n');
  };


})();


