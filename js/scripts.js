//currency values
// $1 = .81 gbp
// $1 = 117.36 yen
// $1 = 68.14 rupee
// $1 = .96 euro


//change the css classes for all controls to .controls
//remove click handlers from sliders and merge into color handlers
//fix fa icon vertical centering
//get flex list variables working

var controls = document.querySelectorAll(".color-control");

console.log(controls);

controls.forEach(control => control.addEventListener("change", function(control) {
    console.log(control);
    console.log(control.srcElement.id);
    updateColors(control);
}));

function updateColors(control) {
    var color = document.getElementById(control.srcElement.id).value;

    document.documentElement.style.setProperty(`--${control.srcElement.name}`, color);
}

function updateSliders(val) {
    console.log(val.name + ', ' + val.value + ', ' + val.dataset.input);

    var x = document.getElementById(val.dataset.input).innerText = val.value;
    //console.log(x);

    document.documentElement.style.setProperty(`--${val.name}`, val.value + val.dataset.suffix);
}
