"use strict"

$(document).ready( () => {

    $("#submit").click( () => {
        const name = $("#name").val().trim();
        const lstName = $("#lstName").val().trim();
        const email = $("#email").val().trim();

        const emailPattern = /^[\w\.\-]+@[\w\.\-]+\.[a-zA-Z]+$/;
        const namePatter = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,8}$/;
        const lstNamePatter = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,8}$/;

        let isValid = true;
        if (email === "" || !emailPattern.test(email)) {
            isValid = false;
            alert("email is required");
        }
        if (name === "" /* || !namePatter.test(name) */) {
            isValid = false;
            alert("name is required");
        }
        if (lstName === ""/*  || !lstNamePatter.test(lstName) */) {
            isValid = false;
            alert("last name is required");
        }
        if (!isValid) {
            $("#contact_form").preventDefault();
        }
        if (isValid) {
            window.alert("thank you");
            $("#name").val("");
            $("#email").val("");
            $("#lstName").val("");
            $("#terms").removeAttr('checked');
        }
        $("#name").focus();
    });
    $("#name").focus();
});