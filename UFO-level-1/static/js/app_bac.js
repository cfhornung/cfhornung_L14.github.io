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

        // Pass to a container
        var divContainer = document.getElementById("showData");
        divContainer.innerHTML = "";
        divContainer.appendChild(table);

});