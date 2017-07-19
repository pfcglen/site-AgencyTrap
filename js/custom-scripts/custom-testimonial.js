
define(['jquery','cycle'], function($, cycle){

   $('#jQuery-cycle').cycle({
        fx: 'fade',
        timeout: 4000,
        speed:1000,
        fit: 0,
        pause: true,
        pager:  '#cyleDots'
    });
});


