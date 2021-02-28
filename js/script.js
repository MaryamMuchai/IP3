$(document).ready(function() {
    $("#development-icon").click(function() {
    $("#development-icon").slideDown('1400').hide('1000');
    $("#development").show('1500');
    });
    $("#development").click(function(){
        $("#development").slideUp('1500');
        $("#development-icon").slideDown('1500');
      });
    });