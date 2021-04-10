document.getElementById('nama').innerHTML = 'Nando';

$('#nim').html('20190140041');

$(function() {
    console.log("Hello");
});

// Menyembunyikan element
$("#hide").on("click", function(){
    $("#nama").hide();
});

// menampilkan kembali
$("#show").on("click", function(){
    $("#nama").show();
});

$("#toggle").on("click", function(){
    $("#nama").toggle();
});

// Fadein element html
$("#fadeIn").on("click", function(){
    $("#tanggal").fadeIn();
});

// FadeOut element html
$("#fadeOut").on("click", function(){
    $("#tanggal").fadeOut();
});

$("#fadeToggle").on("click", function(){
    $("#tanggal").fadeToggle();
});

// Slide UP
$("#slideUp").on("click", function(){
    $("#img").slideUp();
});

// slide down
$("#slideDown").on("click", function(){
    $("#img").slideDown();
});

$("#slideToggle").on("click", function(){
    $("#img").slideToggle();
});


