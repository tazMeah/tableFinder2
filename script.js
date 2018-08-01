"use strict";

let tableNumber;
let reservations = [];

// when you click a table


$("body").on("click", "div.available", (e)=> {
    $("#bottom").toggle();
    tableNumber = $(e.target).index();

    // show table number in the form
    $("#tableNumber span").text(tableNumber+1);
    

})





// when you click the save button or the cancel button

$("#save").click(function(){
    $("#bottom").toggle();

      reservations[tableNumber] = [`${$("input#name").val()}`, `${$("input#phone").val()}`, `${$("input#party").val()}`];

    // clear form contents
    $("form input").val("");

    // mark table as reserved
    $("#table div").eq(tableNumber).toggleClass("available reserved");


})


// when you click cancel

$("#cancel").click(function(){
    $("#bottom").toggle();
    $("form input").val("");


})

// when you hover over a reserved table. show its contents

$("body").on("mouseenter", "div.reserved", (e)=> {
    // copied from on click
        $("#bottom").slideUp( 300 ).delay( 800 ).fadeIn( 400 );
        tableNumber = $(e.target).index();


        // show table number in the form
        $("#tableNumber span").text(tableNumber+1);

        // show reserved contents
        $("#name").val("Name: " + reservations[tableNumber][0]); 
        $("#phone").val("Phone: " + reservations[tableNumber][1]);
        $("#party").val("Party of: " + reservations[tableNumber][2]);

    
    

})
