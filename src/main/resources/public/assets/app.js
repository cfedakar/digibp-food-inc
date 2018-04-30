/*
 * Copyright (c) 2018. University of Applied Sciences and Arts Northwestern Switzerland FHNW.
 * All rights reserved.
 */

$(document).ready(function () {
    $('#imageFile').fileselect();
    $("#form").submit(function (event) {
        event.preventDefault();
        $("#loader").show();
        $("#formContainer").hide();
        $.ajax({
            type: "POST",
            processData: false,
            contentType: false,
            url: "/api/food/snap/v1/order",
            data: new FormData(this),
            success: function (data, textStatus, response) {
                $("#loader").hide();
                $("#resultModal").modal();
                $('#result').text(data.message);
                $("#formContainer").show();
            },
            error: function (jqXHR, textStatus, errorThrown) {
                $("#loader").hide();
                $("#formContainer").show();
                console.log(jqXHR, textStatus, errorThrown);
            }
        });
    });
});