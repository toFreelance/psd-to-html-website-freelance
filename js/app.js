
/*************************************
 * FLIP BOOK
 ************************************/
$('.scene')
.on('click', '#nextBtn', prevPage )
.on('click', '#prevBtn', nextPage);

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

/*************************************
 * END FLIP BOOK
 ************************************/
