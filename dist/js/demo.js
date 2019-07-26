"use strict";

var header = document.getElementById("header");
var navBar = document.getElementById("navbar");
var bg = document.getElementById("bg");
var navbarHeight = navBar.offsetHeight;
var headerHeight = header.offsetHeight;
header.style.height = screen.height - navbarHeight;

function initParallax() {
  if (window.pageYOffset > headerHeight) {
    navBar.style.position = "fixed";
  } else {
    navBar.style.position = "absolute";
    navBar.style.top = "0";
  }

  bg.style.top = window.pageYOffset / 6 + "px";
}

window.addEventListener("scroll", initParallax);
$(document).ready(function () {
  // Add minus icon for collapse element which is open by default
  $(".collapse.show").each(function () {
    $(this).prev(".card-header").find(".fa").addClass("fa-minus").removeClass("fa-plus");
  }); // Toggle plus minus icon on show hide of collapse element

  $(".collapse").on('show.bs.collapse', function () {
    $(this).prev(".card-header").find(".fa").removeClass("fa-plus").addClass("fa-minus");
  }).on('hide.bs.collapse', function () {
    $(this).prev(".card-header").find(".fa").removeClass("fa-minus").addClass("fa-plus");
  });
});
$('#exampleModal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget); // Button that triggered the modal

  var recipient = button.data('whatever'); // Extract info from data-* attributes
  // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.

  var modal = $(this);
  modal.find('.modal-title').text('New message to ' + recipient);
  modal.find('.modal-body input').val(recipient);
});