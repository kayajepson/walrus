$(document).ready(function() {
  $(".clickable").click(function() {
    $(".walrus-showing").toggle();
    $(".walrus-hidden").toggle();
  });

  $(".clicky").click(function() {
    $(".cat-showing").fadeIn();
  });

  $(".clickout").click(function() {
    $(".cat-hidden").fadeOut();
  });
});
