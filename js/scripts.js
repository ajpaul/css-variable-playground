document.addEventListener("DOMContentLoaded", function(event) { 
  
    var controls = document.querySelectorAll(".control");
    var checkboxes = document.querySelectorAll(".checkbox-list input[type='checkbox']");

    //set the flex-start box to checked since it's the default flex value
    document.getElementById("box1").checked = true;

    //set the listeners for the controls
    controls.forEach(control => control.addEventListener("change", function(control) {
        controlChange(control);
    }));

    checkboxes.forEach(checkbox => checkbox.addEventListener("change", function(checkbox) {
        checkboxChange(checkbox, checkboxes);
    }));
});


//listener functions
function controlChange(control) {
    var ctrl = control.srcElement.value;

    document.documentElement.style.setProperty(`--${control.srcElement.name}`, ctrl + control.srcElement.dataset.suffix);

    if(control.srcElement.dataset.input)
        document.getElementById(control.srcElement.dataset.input).innerText = ctrl + control.srcElement.dataset.suffix;
}

function checkboxChange(checkbox, checkboxes) {

    for (var i = 0; i < checkboxes.length; i++) {
        
        if(checkboxes[i].name !== checkbox.srcElement.name)
            checkboxes[i].checked = false;
    }

    document.documentElement.style.setProperty('--justify-content', checkbox.srcElement.name);
}


