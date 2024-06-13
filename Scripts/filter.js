$(function() {

    let button = $('[data-btn]');

    button.click(function(event) {
        event.preventDefault;

        let clickItem = $(this).data('btn');

        $('[data-place]').each(function() {
            let workItem = $(this).data('place');
    
            if(workItem != clickItem) {
                $(this).addClass('hide');
                $(this).animate({opacity: "0"}, 500);
            }
    
            else {
                $(this).removeClass('hide');
                $(this).animate({opacity: "1"}, 500);
            }
        });
    
    });


});



