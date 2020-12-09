$(document).ready(function () {
    $.getJSON("https://webtechcars.herokuapp.com/api/cars", function (data) {
        var table = $('<table id="allTable"></table>');
        table.append("<tr>" +
            "<th id='allTableth'>Name</th>" +
            "<th id='allTableth'>Consumption</th>" +
            "<th id='allTableth'>Color</th>" +
            "<th id='allTableth'>Manufacturer</th>" +
            "<th id='allTableth'>Available</th>" +
            "<th id='allTableth'>Year</th>" +
            "<th id='allTableth'>Horsepower</th>" +
            "</tr>");
        $.each(data, function (key, value) {
            var row = $('<tr></tr>');
            var nameCell = $('<td id="allTabletd">' + value.name + '</td>');
            var consumptionCell = $('<td id="allTabletd">' + value.consumption + '</td>');
            var colorCell = $('<td id="allTabletd">' + value.color + '</td>');
            var manufacturerCell = $('<td id="allTabletd">' + value.manufacturer + '</td>');
            var availableCell = $('<td id="allTabletd">' + value.avaiable + '</td>');
            var yearCell = $('<td id="allTabletd">' + value.year + '</td>');
            var horsepowerCell = $('<td id="allTabletd">' + value.horsepower + '</td>');
            row.append(nameCell);
            row.append(consumptionCell);
            row.append(colorCell);
            row.append(manufacturerCell);
            row.append(availableCell);
            row.append(yearCell);
            row.append(horsepowerCell);
            table.append(row);
        });
        $(".carlist_container").append(table);
    });
});