function solution() {
  $(".solutions").empty();
  const getRandomBookPromise = $.get(
    "https://random-word-api.herokuapp.com/word"
  ).then((word) => {
    // console.log(word);
    $(".solutions").append(`<div>Random word is: <b>${word}</b></div>`);
    return $.get(
      `https://www.googleapis.com/books/v1/volumes?q=intitle:${word}`
    );
  });

  const getRandomGIFPromise = $.get(
    "https://api.giphy.com/v1/gifs/random?api_key=28ztv9ovyB8EDz3nTGS8LbLJY2nJxbn2"
  );

  Promise.all([getRandomBookPromise, getRandomGIFPromise])
    .then(([book, gif]) => {
      $(".solutions").append(
        `<div> <b>${book.totalItems}</b> books found </div> 
        <br /><hr /><br />`
      );
      $(".solutions").append(
        `<div>Random GIF: </div>
        <br />
        <iframe src="${gif.data.embed_url}" frameborder="0"></iframe>`
      );
      console.log(book);
    })
    .catch((error) => console.log(error.message));
}
