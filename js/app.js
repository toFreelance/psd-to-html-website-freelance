
$('.scene')
.on('click', '#nextBtn', nextPage)
.on('click', '#prevBtn', prevPage);

// $('.book').hammer().on("swipeleft", nextPage);
// $('.book').hammer().on("swiperight", prevPage);

function prevPage() {
  $('.flipped')
    .last()
    .removeClass('flipped')
    .addClass('active')
    .siblings('.page')
    .removeClass('active');
}
function nextPage() {
  $('.active')
    .removeClass('active')
    .addClass('flipped')
    .next('.page')
    .addClass('active')
    .siblings();
}

document.addEventListener("keydown" , function(e){

    if(e.keyCode == 39)
    {
        nextPage();
    }
    else if(e.keyCode == 37)
    {
        prevPage();
    }
})