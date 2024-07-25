let timer = document.getElementById('timer');
let defuseElement = document.getElementById("defuser");
let count = 10;
let intervalId = setInterval(function() {
    count = count - 1;
    timer.textContent = count;
    if (count === 0) {
        timer.textContent = "BOOM";
        clearInterval(intervalId);
    }
}, 1000);
defuseElement.addEventListener("keydown", function(event) {
    let bombDefuserText = defuseElement.value;
    if (event.key === "Enter" && bombDefuserText === "defuse" && count !== 0) {
        timer.textContent = "You did it!!";
        clearInterval(intervalId);
    }


});
