// var end1 = new Date("Mar 31, 2022 22:00:00");
var end1 = new Date("1 April 2022 16:26 PM");
document.getElementById('enddate').innerText = end1;

const inputs = document.querySelectorAll("input")

function clock() {
    const end = new Date(end1)
    const now = new Date()
    const diff = (end - now);
    inputs[0].value = Math.floor(diff / (1000 * 60 * 60 * 24));
    inputs[1].value =  Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    inputs[2].value = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    inputs[3].value = Math.floor((diff % (1000 * 60)) / 1000);
}
clock();
if (diff == 0) {}
setInterval(
    function(){
        clock()
    },
    1000
)


