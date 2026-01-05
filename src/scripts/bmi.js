function CalculateClick(){
    var age = document.getElementById("txtAge").value;
    var m = parseFloat(document.getElementById("txtHeight").value)/100;
    var lb = parseFloat(document.getElementById("txtWeight").value);

    if (isNaN(lb) || lb <= 0 || lb > 300) {
        alert("Weight must be between 1 and 300 kg");
        return;
    }

    if (isNaN(m) || m <= 0) {
        alert("Please enter a valid height");
        return;
    }

    if (isNaN(age) || age <= 0 || age > 120) {
        alert("Please enter a valid age");
        return;
    }


    if(lb > 0 && m > 0) {
     var BMI = (lb/(m*m)).toFixed(2);

    document.getElementById("checkyourBMI").innerHTML = `Your BMI is <span class='fs-1 fw-bold'> ${BMI} </span>`;

    // const progress = document.getElementById("statusBar");
    // progress.value = BMI ;

    let category = '';
    if(BMI < 18.5) category = "UnderWeight".fontcolor('gray');
    else if(BMI < 24.9) category = "Normal".fontcolor('green');
    else if(BMI < 29.9) category = "OverWeight".fontcolor('goldenrod');
    else category = "Obese".fontcolor('red');

    document.getElementById("checkyourBMI").innerHTML += `(${category})`;
 }
 else {
    alert("Plese enter valid Height and Weight !")
 }
}