let inputArray = [
  { name: "Name1", text: " === Text1 === " },
  { name: "Name2", text: " === Text2 === " },
  { name: "Name3", text: " === Text3 === " },
  { name: "Name4", text: " === Text4 === " },
];

const render = function () {
  $(".posts").empty();
  for (let { name, text } of inputArray) {
    $(".posts").append(
      `<div class="post-item">
        <div>${name} :</div>
        <p>${text}</p>
      </div>`
    );
  }
};

render();

$("button").click(function (e) {
  e.preventDefault();
  const name = $("#name").val();
  const text = $("#text").val();
  inputArray.push({ name, text });
  $("#name").val("");
  $("#text").val("");
  render();
});

$(".posts").on("click", ".post-item", function () {
  const name = $(this).children()[0].innerText.split(" ")[0];
  // for (let post of inputArray)
  //   console.log(`${post.name} ${name} ${post.name !== name}`);
  inputArray = inputArray.filter((post) => post.name !== name);
  render();
});
