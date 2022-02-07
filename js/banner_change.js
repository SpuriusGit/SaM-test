document.addEventListener("DOMContentLoaded", function(event) {
    setInterval(function(){
        if(window.innerWidth < 992){
            $('.header_list__item').toggleClass('disabled');
        }
    },5000);
});