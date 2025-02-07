const certificate = {peopleP:"People's Person", person:"Person", being:"Being"}
document.getElementById("peopleP").innerHTML = certificate.peopleP
document.getElementById("person").innerHTML = certificate.person
document.getElementById("being").innerHTML = certificate.being

function dynamics() {
 const name = {popularP:"- JOHN CHARLES", guys:"- JONAH CHARLES", exist:"- DEREK"}
 const title = {jC:"POPULAR GUYS", joC:"GUYS", d:"EXISTING"}
 let change = document.getElementById("Ctitle");
 let selectedValue = change.options[change.selectedIndex].value;
    if (selectedValue == "People's Person") {
        document.getElementById("Description").innerHTML = "ENJOY BEING THE MOST POPULAR MAN OR WOMAN IN ANY ROOM. WITH CHARM THAT CAPTIVATES AND CONFIDENCE THAT DEMANDS RESPECT. ENJOY YOUR NEW LIFE.";
        document.getElementById("CEOName").innerHTML = name.popularP
        document.getElementById("CEOTitle").innerHTML = "CEO OF " + title.jC 
   } else if (selectedValue == "Person") {
        document.getElementById("Description").innerHTML = "ENJOY BEING A MAN OR WOMAN IN ANY ROOM. WITH CHARM AND SOME CONFIDENCE. ENJOY."
        document.getElementById("CEOName").innerHTML = name.guys
        document.getElementById("CEOTitle").innerHTML = "CEO OF " + title.joC 
   } else if (selectedValue == "Being") {
        document.getElementById("Description").innerHTML = "ENJOY EXISTING IN ANY ROOM. WITH SOMETHING OR SOMETHING ELSE. GOODLUCK."
        document.getElementById("CEOName").innerHTML = name.exist
        document.getElementById("CEOTitle").innerHTML = "CEO OF " + title.d
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
