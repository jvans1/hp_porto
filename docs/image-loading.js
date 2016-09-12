$(document).ready(function(){
  var imageTuples = $('[data-load-in-background]').each(function(_, elem){
      var src = $(elem).data('load-in-background');
      var fullSizedImg = $("<img />");
      fullSizedImg.attr('src', src).on("load", function(){
        $(elem).closest(".img-container").replaceWith(fullSizedImg);
      });
  });
});

