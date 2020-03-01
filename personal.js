$(function(){
    $('.card').on('click', function(){
        $('.hidden-content').css({
            'top':'0px',
            'opacity': '1',
            'transition-delay': '.3s',
        });
    });

    $('.bottomBtn').on('click', function(){
        $('.hidden-content').fadeOut( "slow" );
    });

});

