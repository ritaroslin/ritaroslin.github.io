
// listener på resize
// koppla på request animation frame

// CALCULATE HEIGHT

GetHeight();

window.addEventListener("resize", GetHeight);

function GetHeight() {
    var height = document.getElementById("divHeight").clientHeight;

    height = height + "px";         // ska bli 362. 312 + 25 + 25


    document.getElementById("divHeight").style.height = height;

    console.log(height);
}

