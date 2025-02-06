function dynamics() {
 let change = document.getElementById("Ctitle");
 let selectedValue = change.options[change.selectedIndex].value;
    if (selectedValue == "People's Person") {
        document.getElementById("Description").innerHTML = "ENJOY BEING THE MOST POPULAR MAN OR WOMAN IN ANY ROOM. WITH CHARM THAT CAPTIVATES AND CONFIDENCE THAT DEMANDS RESPECT. ENJOY YOUR NEW LIFE.";
        document.getElementById("CEOName").innerHTML = "JOHN CHARLES"
        document.getElementById("CEOTitle").innerHTML = "CEO OF POPULAR GUYS" 
   } else if (selectedValue == "Person") {
        document.getElementById("Description").innerHTML = "ENJOY BEING A MAN OR WOMAN IN ANY ROOM. WITH CHARM AND SOME CONFIDENCE. ENJOY."
        document.getElementById("CEOName").innerHTML = "JONAH CHARLES"
        document.getElementById("CEOTitle").innerHTML = "CEO OF GUYS" 
   } else if (selectedValue == "Being") {
        document.getElementById("Description").innerHTML = "ENJOY EXISTING IN ANY ROOM. WITH SOMETHING OR SOMETHING ELSE. GOODLUCK."
        document.getElementById("CEOName").innerHTML = "DEREK"
        document.getElementById("CEOTitle").innerHTML = "CEO OF EXISTING"
   } else if (selectedValue == "Choose Title"){
    alert("Please select a certificate");
   }
}

const monthNames = [
     "January", "February", "March", "April", "May", "June",
     "July", "August", "September", "October", "November", "December"
   ];
let date =  new Date();
let year = date.getFullYear();
let month = monthNames[date.getMonth()];
let day = date.getDate();
document.getElementById("currentdate").innerHTML = "AS OF " + month + " " + day + ", " + year;
