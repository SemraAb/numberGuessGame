var num;
var val;
var lock = false;
$(".choice").on("click", function () {
  num = $(this).val();
  var yourChoice = $("#yourChoice").html("Your choice is: ").append(num).show();
  $(".number").append(yourChoice);
  //your choice section (above)
  val = Math.floor(1 + Math.random() * 4);
  console.log("Comp choice is : ", val);
  $("#comp").html(val);
  var compChoice = $("#compChoice").html("Computer choice is: ").append(val).show();
  $(".number").append(compChoice);
  //computer choice sectionn (above)

  if (val == num) {
    $("#result").html("Oooo , congrats , YOU WIN THE GAME");
  } else {
    $("#result").html("Upss , You lose the game");
  }
  // comparison between your choice and computer (above)
});