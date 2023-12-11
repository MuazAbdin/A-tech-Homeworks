class Controller {
  constructor() {}

  // getPosts() {
  //   return $.get("/todos");
  // }

  // addPost() {}

  updatePost(id) {
    return $.ajax({
      method: "PUT",
      url: "/todo/" + id,
      success: (todos) => todos,
    });
  }

  deletePost(id) {
    return $.ajax({
      method: "DELETE",
      url: "/todo/" + id,
      success: (todos) => todos,
    });
  }
}
