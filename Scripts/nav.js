let offset = 0; // смещение от левого края

$(function(){

    setInterval(function (){
        offset =  offset+1;

    $(function() {
        if(offset == 1) {
            $('.slider__line').animate({left: "-100vw"}, 0);

            $('#slide1').removeClass('active');
            $('#slide2').addClass('active');
            $('#slide3').removeClass('active');
        }
    
        if(offset == 2) {
            $('.slider__line').animate({left: "-200vw"}, 0);

            $('#slide1').removeClass('active');
            $('#slide2').removeClass('active');
            $('#slide3').addClass('active');
        }
    
        if(offset == 3) {
            $('.slider__line').animate({left: "0"}, 0);
            offset = 0;

            $('#slide1').addClass('active');
            $('#slide2').removeClass('active');
            $('#slide3').removeClass('active');
            
        }
    });

        }, 5000);
});



$(function() {

    let button = $('[data-dote]');

    button.click(function(event) {
        event.preventDefault;

        let clickItem = $(this).data('dote');

        $('[data-dote]').each(function() {
            let workItem = $(this).data('dote');
    
            if(workItem == clickItem) {
                $(this).addClass('active');
            }
    
            else {
                $(this).removeClass('active');
            }
        });
    
    });


});

$('#slide1').click(function(){
    $('.slider__line').animate({left: "0"});
});

$('#slide2').click(function(){
    $('.slider__line').animate({left: "-100vw"});
});

$('#slide3').click(function(){
    $('.slider__line').animate({left: "-200vw"});
});
