$("h1").css("color", "blue");
$(".red-div").css("color", "red");
$("li:nth-child(1)").css("color", "green");
$("li:nth-child(2)").css("color", "pink");
$("#brown-div").css("color", "brown");

$("#b1").addClass("box");
$("#b2").addClass("box");

// $(".box").hover((e) => {
//   // $("#b1").css("background-color", "blue");
//   e.target.style.backgroundColor = "blue";
// });

$(".box").hover(function () {
  $(this).css("background-color", "blue");
});

$("#my-input").val("Terabyte");
$("#my-input__btn").click(() => alert($("#my-input").val()));

const { barcode, expirationdate } = $("#data-element").data();
console.log(
  `The item with barcode ${barcode} will expire on ${expirationdate}`
);

$(".feedme").on("click", function () {
  $(".feed-container").append(`<div class=feedme> ${$(this).text()} </div>`);
  // $(".feed-container").append($(this).clone());
});

const names = [
  { first: "Alex", last: "Johnson" },
  { first: "Byron", last: "Loveall" },
  { first: "Cassandra", last: "Wuthers" },
  { first: "Deandre", last: "Rahm" },
  { first: "Ellena", last: "Freeman" },
];

for (let name of names) {
  $(".names-container").append(
    `<div class=human>${name.first} - ${name.last}</div>`
  );
}

$("#plague").hover(function () {
  $(this).remove();
});

$("#add-blog__btn").click(() => {
  $("#blogs").append(`<div class="blog">SOME TEXT!!</div>`);
});

$("#blogs").on("click", ".blog", function () {
  $(this).text("blargh");
});
