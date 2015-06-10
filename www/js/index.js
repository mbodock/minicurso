document.addEventListener("deviceready", start, false);
function start() {
    $(document).ready(function(){
        console.log(device);
        $('.bdk-alert').click(function(){
            navigator.notification.alert("Alerta do android", function(){}, "Titulo");
        });
        $('.bdk-vibrate').click(function(){
            navigator.vibrate(1000);
        });
    });
}
