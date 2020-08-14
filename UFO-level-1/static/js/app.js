$(document).ready(function () {
        var arrItems = [];          // Create an array to store items
        $.each(data, function (index, value) {
            arrItems.push(value);          // Load it up
        });

        // headers
        var col = [];
        for (var i = 0; i < arrItems.length; i++) {
            for (var key in arrItems[i]) {
                if (col.indexOf(key) === -1) {
                    col.push(key);
                }
            }
        }
    
        // create table
        var table = document.createElement("table");

        var tr = table.insertRow(-1);         // Rows

        for (var i = 0; i < col.length; i++) {
            var th = document.createElement("th");      
            th.innerHTML = col[i];
            tr.appendChild(th);
        }

         // Load the table
         for (var i = 0; i < arrItems.length; i++) {

            tr = table.insertRow(-1);

            for (var j = 0; j < col.length; j++) {
                var tabCell = tr.insertCell(-1);
                tabCell.innerHTML = arrItems[i][col[j]];
            }
        }

 // Filter the table
 var count = table.rows.length;  

for (var i=0; i<count; i++) {    
    if (table.rows[i].cells[0].innerHTML == "1/2/2010"){
    table.rows[i].cells[0].style.background = "#00AA00";
  table.rows[i].cells[1].style.background  = "#00AA00";
   table.rows[i].cells[2].style.background  = "#00AA00";
   table.rows[i].cells[3].style.background  = "#00AA00";
   table.rows[i].cells[4].style.background  = "#00AA00";
   table.rows[i].cells[5].style.background  = "#00AA00";
    table.rows[i].cells[6].style.background  = "#00AA00";
   } else {
}
}




// Pass to a container
        var divContainer = document.getElementById("showData");
        divContainer.innerHTML = "";
        divContainer.appendChild(table);
});