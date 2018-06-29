console.log("Welcome to Ally's portfolio site")

$(document).ready(function() {
  $(".project-preview").on("click", function() {
    $(this).siblings(".project-details").slideToggle();
    });
});

$(".preview-img").on("click", function() {
    var element = document.getElementsByTagName(".preview-img");
    element.classList.toggle(".grayscale");
});
