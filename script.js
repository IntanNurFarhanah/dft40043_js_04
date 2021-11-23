function myFunction() {
    alert("The form was submitted");
}

function loadImage() {
    alert("Image is loaded");
}

function myClick() {
    document.getElementById("demo").innerHTML = "Hello World";
}

function focusFunction() {
    // Focus = Changes the background color of input to yellow
    document.getElementById("myInput").style.background = "yellow";
}

function blurFunction() {
    // No focus = Changes the background color of input to red
    document.getElementById("myInput").style.background = "red";
}

function focusFunction() {
    // Focus = Changes the background color of input to yellow
    document.getElementById("myInput").style.background = "yellow";
}

function blurFunction() {
    // No focus = Changes the background color of input to red
    document.getElementById("myInput").style.background = "red";
}

function myFunction() {
    var txt;
    var r = confirm("Press a button!\nEither OK or Cancel.\nThe button you pressed will be displayed in the result window.");
    if (r == true) {
      txt = "You pressed OK!";
    } else {
      txt = "You pressed Cancel!";
    }
    document.getElementById("submit").innerHTML = txt;
  }

  function promptFunction() {
    alert("Hello\nHow are you?");
  }