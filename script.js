"use strict";
$(document).ready(function(){

    let tableNumber;
    let reservations = [];

    // when you click a table


    $("body").on("click", "div.available", (e)=> {
        $("#bottom").fadeIn();
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



    $("#table").on("mouseenter", ".reserved", (e)=>{
        $("article").fadeIn();
        tableNumber = $(e.target).index();
        $("article div").text(tableNumber + 1); // table with number inside
        $("article h2 span").text(reservations[tableNumber][0]); // name of reserver
        $("article p").text(`Party of ${reservations[tableNumber][2]}`) // party size
    })

    $("body").on("mouseleave", "#table", (e)=>{
        $("article").fadeOut();
        
    })
})