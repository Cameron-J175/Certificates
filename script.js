function dynamics() {
 let selectedValue = change.options[change.selectedIndex].value;
    if (selectedValue == "People's Person") {
     document.getElementbyId("Description").innerHTML = "ENJOY BEING THE MOST POPULAR MAN OR WOMAN IN ANY ROOM. WITH CHARM THAT CAPTIVATES AND CONFIDENCE THAT DEMANDS RESPECT. ENJOY YOUR NEW LIFE."
   } else if (selectedValue == "Person") {
     document.getElementbyId("Description").innerHTML = "ENJOY BEING A MAN OR WOMAN IN ANY ROOM. WITH CHARM AND SOME CONFIDENCE. ENJOY."
   } else if (selectedValue == "Being") {
     document.getElementbyId("Description").innerHTML ="ENJOY EXISTING IN ANY ROOM. WITH SOMETHING OR SOMETHING ELSE. GOODLUCK."
   } else if (selectedValue == "Choose Title"){
    alert("Please select a certificate");
   }
}