const wisdom = JSON.parse(localStorage.getItem("wisdom") || "[]");
let counter = parseInt(wisdom.length || "0");
localStorage.setItem("wisdomCounter", counter);

wisdom.forEach((text) => {
  const id = Object.keys(text)[0];
  $(".input-container ul").append(
    `<li id='${id}'> <button class="del-btn">X</button> ${text[id]}</li>`
  );
});

$("#submit-btn").click(function () {
  const text = $(this).prev().val();
  const id = `t${counter}`;
  $(".input-container ul").append(
    `<li id='${id}'> <button class="del-btn">X</button> ${text}</li>`
  );
  wisdom.push({ [id]: text });
  localStorage.setItem("wisdomCounter", ++counter);
  if (wisdom.length % 2 === 0)
    localStorage.setItem("wisdom", JSON.stringify(wisdom));
  $(this).prev().val("");
});

$("#clear-btn").click(() => localStorage.clear());

$(".input-container ul").on("click", ".del-btn", function () {
  const filteredWisdom = JSON.parse(
    localStorage.getItem("wisdom") || "[]"
  ).filter((t) => Object.keys(t)[0] !== $(this).parent()[0].id);
  localStorage.setItem("wisdom", JSON.stringify(filteredWisdom));
});
