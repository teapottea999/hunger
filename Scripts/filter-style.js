$(function() {

    let button = $('[data-btn]');

    button.click(function(event) {
        event.preventDefault;

        let clickItem = $(this).data('btn');

        $('[data-btn]').each(function() {
            let workItem = $(this).data('btn');
    
            if(workItem == clickItem) {
                $(this).addClass('chosed');
            }
    
            else {
                $(this).removeClass('chosed');
            }
        });
    
    });


});