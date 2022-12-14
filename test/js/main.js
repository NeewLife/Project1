function Clock (){
    var today = new Date();

    var year = today.getFullYear();
    var month = ('0' + (today.getMonth() + 1)).slice(-2);
    var day = ('0' + today.getDate()).slice(-2);
    var hours = ('0' + today.getHours()).slice(-2); 
    var minutes = ('0' + today.getMinutes()).slice(-2);
    var seconds = ('0' + today.getSeconds()).slice(-2); 

    var dateString = year + '-' + month  + '-' + day;
    var timeString = hours + ':' + minutes  + ':' + seconds;
    document.getElementById("header-time").innerHTML = dateString + " | " + timeString;
}
Clock();
setInterval(Clock, 1000);

var chatAni = document.querySelector('.main-chat');
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

function buttonClose(){
    chatAni.style.animationName = 'scale-out-chat';
    chatAni.style.animationFillMode = 'forwards';
    restAni.style.animationName = 'scale-out-rest';
    restAni.style.animationFillMode = 'forwards';
    creditAni.style.animationName = 'scale-out-credits';
    creditAni.style.animationFillMode = 'forwards';
    noticeAni.style.animationName = 'scale-out-notice';
    noticeAni.style.animationFillMode = 'forwards';
}

chatAni.addEventListener("click", function(){
    buttonClose();
    // setTimeout(function(){
    //     window.location.href = './post/Chat.html';
    // }, 1800);
     var layerClass = ".right-layer";
     var layers = document.querySelectorAll(layerClass);
     setTimeout(function(){
        for (const layer of layers) {
            layer.classList.toggle("active");
          }
        }, 1800);
     
    }
)

restAni.addEventListener("click", function(){
    buttonClose();
    setTimeout(function(){
        window.location.href = './post/RestTime.html';
    }, 1800);
})

creditAni.addEventListener("click", function(){
    buttonClose();
    setTimeout(function(){
        window.location.href = './post/Credits.html';
    }, 1800);
})

noticeAni.addEventListener("click", function(){
    buttonClose();
    setTimeout(function(){
        window.location.href = './post/NoticeBoard.html';
    }, 1800);
})

