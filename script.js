let button = document.querySelector("button");

button.addEventListener("click", function() {
    alert("سلام روی دکمه کلیک کردی");
});

button.addEventListener("click", function() {
    document.body.style.backgroundColor = "green";
});

button.addEventListener("dblclick", function() {
    document.body.style.backgroundColor = "blue";
});


