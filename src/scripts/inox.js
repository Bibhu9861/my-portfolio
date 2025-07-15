function BookClick(){
    document.getElementById("button-container").style.display = "none";
    document.getElementById("summary-container").style.display = "block";


    document.getElementById("lblMovie").textContent = document.getElementById("lstMovie").value;
    document.getElementById("lblDate").textContent = document.getElementById("lstDate").value;
    document.getElementById("lblCinema").textContent = document.getElementById("lstCinema").value;
    document.getElementById("lblTime").textContent = document.getElementById("lstTime").value;

    movieName = document.getElementById("lstMovie").value;
    poster =  document.getElementById("imgPoster");

    if(movieName=="SIKANDAR"){
        poster.src = "../public/images/sikandar.jpg";
    }else {
        poster.src = "../public/images/black-bag.jpg";
    }
 
}

function EditClick(){
    document.getElementById("lblTitle").innerHTML = "Modify Booking";
    document.getElementById("btnBook").innerHTML = "Save";
    document.getElementById("btnBook").className = "btn btn-success";
}