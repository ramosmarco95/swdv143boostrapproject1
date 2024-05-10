"use strict"

$(document).ready( () => {

    $("#submit").click( () => {
        const name = $("#name").val().trim();
        const email = $("#email").val().trim();

        const emailPattern = /^[\w\.\-]+@[\w\.\-]+\.[a-zA-Z]+$/;
        const namePatter = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,8}$/;

        let isValid = true;
        if (email === "" || !emailPattern.test(email)) {
            isValid = false;
            alert("email is required");
        }
        if (name === "") {
            isValid = false;
            alert("name is required");
        }
        if (!isValid) {
            $("#subscribe_form").preventDefault();
        }
        if (isValid) {
            window.alert("thank you");
            $("#name").val("");
            $("#email").val("");
            $("#subscription").removeAttr('checked');
        }
        $("#name").focus();
    });
    $("#name").focus();
});