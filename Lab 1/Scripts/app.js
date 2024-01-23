let header1 = document.getElementByID("li");
let displayEvent = document.getElementByID("");

header1.addEvent("click", function () {
    console.log("Event: Click");
    displayEvent.innerHTML("Event: Click {Header}");
});

header1.addEvent("mouseover", function () {
    console.log("Event: Mouse Over");
    displayEvent.innerHTML("Event: Mouse Over {Header}");
});