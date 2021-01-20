var xe = document.getElementById('bike');
var vat = document.getElementById('block');
function jump() {
    if(xe.classList != "animate") {
        xe.classList.add("animate")
    }
    setTimeout(() => {
        xe.classList.remove("animate")
    }, 500);
}
var checkDead = setInterval(() => {
    var xeBottom =
     parseInt(window.getComputedStyle(xe).
     getPropertyValue("bottom"));
    var blockleft = 
    parseInt(window.getComputedStyle(block).
    getPropertyValue("left"));
    if(blockleft > 0 && blockleft < 40 &&
        xeBottom < 60) {
            alert("Mew mew Cube <3")
    }
}, 10);