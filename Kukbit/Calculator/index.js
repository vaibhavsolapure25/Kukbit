
var noOfButtons = document.querySelectorAll(".button").length;
console.log(noOfButtons);
for (let i = 0; i < noOfButtons; i++) {
    document.querySelectorAll(".button")[i].addEventListener("click", function()  {
        document.querySelectorAll(".button")[i].classList.add("clicked");
        console.log("classAdded");
        setTimeout(function() {
            document.querySelectorAll(".button")[i].classList.remove("clicked");
            console.log("classRemoved");
        }, 100);
    });
}
