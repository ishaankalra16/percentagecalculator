var numfield1 = document.getElementById('numfield1');
var numfield2 = document.getElementById('numfield2');
var r = document.getElementById('resultfield');
var form = document.getElementById('forms');
myCalcfunction = function(event) {
    if(!numfield1.value && !numfield2.value)
        {alert("PLease enter values!");}
    else
        {   var x = parseFloat(numfield1.value);
            var y = parseFloat(numfield2.value);
            var result=x/y;
            var percent = result*100;
            r.innerText = "Answer: " + percent + "%";
            event.preventDefault();
        }
}
form.addEventListener('submit',myCalcfunction);