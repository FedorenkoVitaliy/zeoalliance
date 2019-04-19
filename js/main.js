//Popup
const togglePopup = document.getElementsByClassName("togglePopup")[0];
const popup = document.getElementsByClassName("popup")[0];
const [overlay,close,cancel,confirm] = [
    document.getElementsByClassName("overlay")[0],
    document.getElementsByClassName("popup__close")[0],
    document.getElementsByClassName("popup__cancel")[0],
    document.getElementsByClassName("popup__confirm")[0]];
togglePopup.addEventListener("click", function(){
    if(overlay.classList.contains("active")){
        overlay.classList.remove("active");
    }
    else{
        overlay.classList.add("active");
    }
});
popup.addEventListener("click", function () {
    event.stopPropagation();
});
const closePop = function(){
    overlay.classList.remove("active");
};
[overlay,close,cancel].map(el => el.addEventListener("click", closePop));

confirm.addEventListener("click", function(){
    closePop();
    setTimeout(()=>alert("DONE"), 300);
});





