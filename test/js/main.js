var restAni = document.querySelector(".main-resttime");
var creditAni = document.querySelector(".main-credits");
var noticeAni = document.querySelector(".main-noticeBoard");
console.log(restAni.style.opacity);

restAni.addEventListener("animationstart", function(e) {
    restAni.style.opacity = "1";
}, false);

creditAni.addEventListener("animationstart", function(e) {
    creditAni.style.opacity = "1";
}, false);

noticeAni.addEventListener("animationstart", function(e) {
    noticeAni.style.opacity = "1";
}, false);

// goChat() {
    
// }