$(document).ready(function() {

  $("#design").click(function(){
    $("#design-showing").toggle();
    $(".hide-design-image").toggle();
  })

  $("#development").click(function(){
    $("#development-showing").toggle();
    $(".hide-development-image").toggle();
  })

  $("#productManagement").click(function(){
    $("#product-management-showing").toggle();
    $(".hide-product-management").toggle();
  })

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
      });
