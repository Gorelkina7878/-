$(document).ready(function(){
   //карусель
   $('.carousel__row').owlCarousel({
      loop:true,
      nav:true,
      margin:16,
      mouseDrag:true,
      touchDrag:true,
      video:true,
      dots:true,
      responsive:{
         300:{items:1},
         760:{items:1},
      }
   });

   //галерея
   Fancybox.bind("[data-fancybox]", {
      hideScrollbar: true
   });

   //фак
   $('.faq__title').on('click', function(){
      $(this).toggleClass('active');
   });

   //форма
   $(function(){
      $( "#feedback-popup").dialog({
        autoOpen: false
      });
      
      $('.feedback-btn').on('click', function(e){
         e.preventDefault();
         $('#feedback-popup').dialog({
            width: 400
         });
         $('#feedback-popup').dialog('open');
      });
   });
});