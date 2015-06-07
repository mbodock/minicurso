$(document).ready(function(){
    $('.bdk-alert').click(function(){
        alert("Hello World!");
    });
    $('.bdk-vibrate').click(function(){
        navigator.vibrate(1000);
    });
});
