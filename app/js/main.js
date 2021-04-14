$(document).ready(function () {
    const video = $('.hero-video__video')[0]

    // Кнопка play
    $('.hero-video__play').click(function (e) { 
        if($(this).hasClass('hero-video__play--active')){
            $(this).removeClass('hero-video__play--active');
            video.pause()
        } else {            
            $(this).addClass('hero-video__play--active');
            video.play()
        }
    });
    video.onended = function () {        
        $('.hero-video__play').removeClass('hero-video__play--active');
     }

    // Кнопка звука
    $('.hero-video__volume').click(function () { 
        if($(this).hasClass('hero-video__volume--mute')){
            $(this).removeClass('hero-video__volume--mute');
            $(this).addClass('hero-video__volume--unmute');
            video.muted = !video.muted
        } else {            
            $(this).removeClass('hero-video__volume--unmute');
            $(this).addClass('hero-video__volume--mute');            
            video.muted = !video.muted
        }
     })

});