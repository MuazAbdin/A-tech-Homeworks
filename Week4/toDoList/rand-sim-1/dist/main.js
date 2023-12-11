const renderer = new Renderer();

const add = function () {
  $.post("/todo", { text: $("#todo-input").val() }, function (todos) {
    renderer.render(todos);
    $("#todo-input").val("");
  });
};

$("#todos").on("click", ".todo", function () {
  const id = $(this).data().id;
  $.ajax({
    method: "PUT",
    url: "/todo/" + id,
    data: { updateField: "priority" },
    success: (todos) => renderer.render(todos),
  });
});

$("#todos").on("click", ".fa-check-circle", function (event) {
  event.stopPropagation();
  const id = $(this).closest(".todo").data().id;
  $.ajax({
    method: "PUT",
    url: "/todo/" + id,
    data: { updateField: "complete" },
    success: (todos) => renderer.render(todos),
  });
});

$("#todos").on("click", ".fa-trash", function (event) {
  event.stopPropagation();
  const id = $(this).closest(".todo").data().id;
  $.ajax({
    method: "DELETE",
    url: "/todo/" + id,
    success: (todos) => renderer.render(todos),
  });
});

$.get("/todos", (todos) => renderer.render(todos));
