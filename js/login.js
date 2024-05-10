"use strict"

$(document).ready( () => {

    $("#submit").click( () => {
        const email = $("#email").val().trim();
        const password = $("#pwd").val().trim();

        const emailPattern = /^[\w\.\-]+@[\w\.\-]+\.[a-zA-Z]+$/;
        const pwdPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,8}$/;

        let isValid = true;
        if (email === "" || !emailPattern.test(email)) {
            isValid = false;
            alert("email is required");
        }
        if (password === "") {
            isValid = false;
            alert("password is required");
        }
        if (!isValid) {
            $("#login-form").preventDefault();
        }
        if (isValid) {
            window.alert("thank you");
            $("#email").val("");
            $("#pwd").val("");
            $("#remember").removeAttr('checked');
        }
        $("#email").focus();
    });
    $("#email").focus();
});
