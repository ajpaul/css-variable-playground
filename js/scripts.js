//currency values
// $1 = .81 gbp
// $1 = 117.36 yen
// $1 = 68.14 rupee
// $1 = .96 euro


//change the css classes for all controls to .controls
//remove click handlers from sliders and merge into color handlers
//fix fa icon vertical centering
//fix right margin
//remove FA folder and add CDN link...github is screwy
//fix live moving of input ranges

var controls = document.querySelectorAll(".color-control");
var checkboxes = document.querySelectorAll(".checkbox-list input[type='checkbox']");

console.log(checkboxes);

document.getElementById("box1").checked = true;

console.log(controls);

controls.forEach(control => control.addEventListener("change", function(control) {
    updateColors(control);
}));

checkboxes.forEach(checkbox => checkbox.addEventListener("change", function(checkbox) {
    checkboxChange(checkbox);
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

function checkboxChange(checkbox) {
    console.log(checkbox);
    console.log(checkbox.srcElement.checked);

    for (var i = 0; i < checkboxes.length; i++) {
        
        if(checkboxes[i].name !== checkbox.srcElement.name)
            checkboxes[i].checked = false;
    }

    document.documentElement.style.setProperty('--justify-content', checkbox.srcElement.name);
}


