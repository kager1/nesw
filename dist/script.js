let color = "purple";
let number = 10;
let word = "cool";

if (color === "purple") {
  $(".red").css("background", "purple");
}

if (number>100) {
  $(".yellow").text("whoah, that's a big number")
} else {
  $(".yellow").text("just a regular number, please")
}

if (word==="cool") {
  $(".green").text("The Power of DOM")
} else {
  $(".blue").text("The Power of DOM")
}