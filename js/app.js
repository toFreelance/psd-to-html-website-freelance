
$('.scene')
.on('click', '#nextBtn', prevPage )
.on('click', '#prevBtn', nextPage);

// $('.book').hammer().on("swipeleft", nextPage);
// $('.book').hammer().on("swiperight", prevPage);

function nextPage() {
  $('.flipped')
    .last()
    .removeClass('flipped')
    .addClass('active')
    .siblings('.page')
    .removeClass('active');
}
function prevPage() {
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
        prevPage();
    }
    else if(e.keyCode == 37)
    {
        nextPage();
    }
})