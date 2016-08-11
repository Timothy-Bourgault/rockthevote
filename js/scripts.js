$(document).ready(function() {

  // var age = parseInt(prompt("Enter your age, citizen."));

  $("form#ageCheck").submit(function(event) {
    var age = parseInt($("#userAge").val());
    if (age >= 18) {
      $("#eighteenOver").show();
    }
    else {
      $("#eighteenUnder").show();
    }
    event.preventDefault ();
  })


  // var cit = confirm("Are you a citizen, citizen?");
  // if (cit === true) {
  //   alert("Congratulations, the fate of the Republic rests upon your shoulders!");
  // }
});
