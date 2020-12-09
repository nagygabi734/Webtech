
function insert(address, form) {
    var form = document.getElementById(form);
    var inputs = form.querySelectorAll('*[id]');
    var object = {};

    for (var i = 0; i < inputs.length; i++) {
        var property = inputs[i]['id'];
        var value = inputs[i]['value'];

        object[property] = value;
    }

    var data = JSON.stringify(object);

    $.ajax({
        type: "POST",
        url: address,
        data: data,
        dataType: "json",
        contentType: "application/json"
    });
}


function setCars() {
    $.getJSON("https://webtechcars.herokuapp.com/api/cars", function (data) {

        var select = document.getElementById("car");

        $.each(data, function (index, value) {
            var option = document.createElement("option");
            option.text = value.name;

            select.add(option);
        });
    });
}
