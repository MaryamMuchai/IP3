
$(document).ready(function(){
    $("#development-image").click(function(){
      $("#development-image").slideDown('1500').hide('1000');
      $("#development").show('1500');
    });
    $("#development").click(function(){
      $("#development").slideUp('1500');
      $("#development-image").slideDown('1500');
    });
  });
  
  $(document).ready(function(){
    $("#design-image").click(function(){
      $("#design-image").slideDown('1500').hide('1000');
      $("#design").show('1500');
    });
    $("#design").click(function(){
      $("#design").slideUp('1500');
      $("#design-image").slideDown('1500');
    });
  });
  
  $(document).ready(function(){
    $("#product-image").click(function(){
      $("#product-image").slideDown('1500').hide('1000');
      $("#product").show('1500');
    });
    $("#product").click(function(){
      $("#product").slideUp('1500');
      $("#product-image").slideDown('1500');
    });
  });

  //Overlay images
//portfolio section
  $('.work').hover(function(){
      $('.working',this).slideToggle('slow');
   }, function(){
      $('.working',this).slideToggle('slow');
   });


  //Form Validation section
    $("form#form").on('submit',function(event){
    event.preventDefault();
    let name = $("input#name").val();
    let email = $("input#email").val();
    let message = $("textarea#message").val();
    key = "82e3bc835b59fa96b885f27ed-us1"
    
    if ($("input#name").val() && $("input#email").val()){
              alert ("Hey " + name + ", Thanks for reaching out");
          }
          else {
              alert("Please provide your correct name and email!");
          }

      });
