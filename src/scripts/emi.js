function AmountChange(){
    document.getElementById("txtAmount").value = document.getElementById("rangeAmount").value;
}
function YearsChange(){
    document.getElementById("txtYears").value = document.getElementById("rangeYears").value;
}
function RateChange(){
    document.getElementById("txtRate").value = document.getElementById("rangeRate").value;
}

function TextAmountChange(){
    document.getElementById("rangeAmount").value = document.getElementById("txtAmount").value;
}

function CalculateClick(){
    /*  
        EMI  = P * R * (Math.pow(1+R,N)) / (Math.pow(1+R,N)-1)
        P = Amount You need
        N = Number of Months YearNumber * 12
        R = Interest Rate % convert to number Rate/12/100
    */
    var P = document.getElementById("txtAmount").value;
    var N = parseInt(document.getElementById("txtYears").value) * 12;
    var R = parseFloat(document.getElementById("txtRate").value)/12/100;

    if (isNaN(P) || P < 100000 || P > 1000000) {
        document.getElementById("msg").innerHTML =
            "<span class='text-danger'>Loan amount must be between ₹1,00,000 and ₹10,00,000</span>";
        return; // STOP execution
    }

    var EMI = P * R * (Math.pow(1+R,N)) / (Math.pow(1+R,N)-1);

    document.getElementById("msg").innerHTML = "Your monthly installment amount is <span class='fs-4 fw-bold'> &#8377;" + Math.round(EMI).toLocaleString('en-in') + "</span> for next " + (N/12) + " years";

}