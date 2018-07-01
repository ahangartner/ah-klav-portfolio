console.log("Welcome to Ally's portfolio site")

$(document).ready(function () {
  $('.project-preview').on('click', function () {
    $(this).siblings('.project-details').slideToggle()
  })
})

$(document).ready(function() {
  $('.project-preview').on('click', function () {
    $(this).siblings('.preview-img').slideToggle('.grayscale')
  })
})
