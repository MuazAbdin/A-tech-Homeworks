class Renderer {
  #template = null;

  constructor() {
    this.#registerHelpers();
    this.#registerPartials();
    this.#template = Handlebars.compile($("#todo-template").html());
  }

  #registerHelpers() {
    Handlebars.registerHelper("isComplete", (status) => {
      return status ? "complete" : "";
    });

    Handlebars.registerHelper("priority", (status) => {
      switch (status) {
        case "HIGH":
          return "p-high";
        case "MID":
          return "p-mid";
        default:
          return "p-low";
      }
    });
  }
  #registerPartials() {}

  render(todos) {
    $("#todos").empty();
    $("#todos").append(this.#template({ todos }));
  }
}
