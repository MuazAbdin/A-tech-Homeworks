$("#add-human-btn").on("click", function () {
  $(".humans-list>ul").append(
    `<li class="list-item">${$("input[id='name']").val()}</li>`
  );
});

$(".humans-list>ul").on("click", "li", function () {
  $(this).remove();
});

/* ################## */

const boxes = [
  $(".change-color-boxes .box:first-child"),
  $(".change-color-boxes .box:last-child"),
];
for (let i in boxes) {
  i = parseInt(i);
  boxes[i].mouseenter(() => {
    boxes[(i + 1) % boxes.length].css("background-color", "darkred");
  });
  boxes[i].mouseleave(() => {
    boxes[(i + 1) % boxes.length].css("background-color", "#8e44ad");
  });
}

/* ################## */

// $(".add-to-cart .item[data-instock='true']").click(function () {
//   $("#cart").append(`<div class=cart-item>${$(this).text()}</div>`);
// });

const counter = {};
$("#items").on("click", ".item", function () {
  if ($(this).data().instock) {
    const key = $(this).text();
    counter[key] = (counter[key] || 0) + 1;
    const count = counter[key];
    $(".cart-item").filter(`:contains('${key}')`).remove();
    $("#cart").append(
      `<div class=cart-item>${key} ${count > 1 ? `X${count}` : ""}</div>`
    );
  }
});

$("#cart").on("click", ".cart-item", function () {
  const key = $(this).text().split(" ")[0];
  const count = --counter[key];
  if (count === 0) $(this).remove();
  else $(this).text(`${key} ${count > 1 ? `X${count}` : ""}`);
});

/* ################## */

const fruits = [
  { name: "Orange", color: "orange" },
  { name: "Banana", color: "yellow" },
  { name: "Coconut", color: "brown" },
  { name: "Kiwi", color: "brown" },
  { name: "Lemon", color: "yellow" },
  { name: "Cucumber", color: "green" },
  { name: "Persimmon", color: "orange" },
  { name: "Pumpkin", color: "orange" },
];

const basket = $(".fruit-basket #basket");
for (let { name, color } of fruits) {
  basket.append(`<div class="${color}">${name}</div>`);
}

/* ################## */

for (let color of $("#colors>span")) {
  $(color).addClass("picker");
  $(color).css("background-color", `${$(color).data().color}`);
  $(color).click(function () {
    $(".color-picker>.box").css("background-color", `${$(this).data().color}`);
  });
}
