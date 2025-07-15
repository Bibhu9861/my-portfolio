function btnClick(){
    var userTxt = document.getElementById("txtInput").value;
    var txtSize = document.getElementById("rangTxt").value;
    var textColor = document.getElementById("color").value;
    var letterCase = document.getElementById("Case").value;


    if(letterCase=="upper"){
        document.getElementById("result").innerHTML = userTxt.fontsize(txtSize).fontcolor(textColor).toUpperCase();
    }else{
        document.getElementById("result").innerHTML = userTxt.fontsize(txtSize).fontcolor(textColor).toLowerCase();
    }
}
