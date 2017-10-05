//= require jquery
//= require jquery_ujs
//= require bootstrap-sprockets
//= require_tree .
//= require underscore
//= require gmaps/google

$(document).ready(function(){

  $('#address-submit').on('submit', function(event){
    event.preventDefault();

    var address_user = $('#address').val()


    $.ajax({
      type:'GET',
      url:'https://maps.googleapis.com/maps/api/geocode/json?address=' + address_user,
      success: function(answer){
        var lat = answer.results[0].geometry.location.lat;
        var lng = answer.results[0].geometry.location.lng;

        $('.address-results').html('<h3 class="text-center">'+ lat +' ' +lng +' ' +'</h3>')

      },
      error: function(error){
        console.log(error);
                // alert('There was an error!');
              }
            });
  });

  var map = new google.maps.Map(document.getElementById('map'), {
  center: { lat: 48.8648482, lng: 2.3798534 },
  zoom: 14  // Change this value from 0 to 18
});
  var marker = new google.maps.Marker({
  map: map,
  position: { lat: 48.8648482, lng: 2.3798534 }
});
});