// Uses an object to define every certificate then disaplys the certificates in the needed area using innerHTML
const certificate = {peopleP:"People's Person", person:"Person", being:"Being"};
document.getElementById("peopleP").innerHTML = certificate.peopleP;
document.getElementById("person").innerHTML = certificate.person;
document.getElementById("being").innerHTML = certificate.being;

// Function for the portions of the page that change with the certificates
function dynamics() {
//  Objects to define the CEOs and their titles
 const name = {popularP:"- JOHN CHARLES", guys:"- JONAH CHARLES", exist:"- DEREK"};
 const title = {jC:"POPULAR GUYS", joC:"GUYS", d:"EXISTING"};
//  Defines the selected value
 let change = document.getElementById("Ctitle");
 let selectedValue = change.options[change.selectedIndex].value;
//  Loop checks for the values of the certificates and displays the corresponding information
    if (selectedValue == "People's Person") {
        document.getElementById("Description").innerHTML = "ENJOY BEING THE MOST POPULAR MAN OR WOMAN IN ANY ROOM. WITH CHARM THAT CAPTIVATES AND CONFIDENCE THAT DEMANDS RESPECT. ENJOY YOUR NEW LIFE.";
        document.getElementById("CEOName").innerHTML = name.popularP;
        document.getElementById("CEOTitle").innerHTML = "CEO OF " + title.jC ;
   } else if (selectedValue == "Person") {
        document.getElementById("Description").innerHTML = "ENJOY BEING A MAN OR WOMAN IN ANY ROOM. WITH CHARM AND SOME CONFIDENCE. ENJOY.";
        document.getElementById("CEOName").innerHTML = name.guys;
        document.getElementById("CEOTitle").innerHTML = "CEO OF " + title.joC ;
   } else if (selectedValue == "Being") {
        document.getElementById("Description").innerHTML = "ENJOY EXISTING IN ANY ROOM. WITH SOMETHING OR SOMETHING ELSE. GOODLUCK.";
        document.getElementById("CEOName").innerHTML = name.exist;
        document.getElementById("CEOTitle").innerHTML = "CEO OF " + title.d;
   } else if (selectedValue == "Choose Title"){
    alert("Please select a certificate");
   }
}

// Array to define the names of months in order from 0 - 11
const monthNames = [
     "January", "February", "March", "April", "May", "June",
     "July", "August", "September", "October", "November", "December"
   ];
// Defines the day, year, and name of the current month
let date =  new Date();
let year = date.getFullYear();
// Displays the month by name by pulling from the monthNames array
let month = monthNames[date.getMonth()];
let day = date.getDate();
document.getElementById("currentdate").innerHTML = "AS OF " + month + " " + day + ", " + year;
