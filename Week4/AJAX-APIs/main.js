const fetch = function () {
  const isbnBtn = $("#isbn-btn")[0].checked;
  const titleBtn = $("#title-btn")[0].checked;
  if (!isbnBtn && !titleBtn) return alert("choose one please");
  const queryType = isbnBtn ? "isbn" : "title";
  const queryValue = $("#query").val();
  $.ajax({
    method: "GET",
    url: `https://www.googleapis.com/books/v1/volumes?q=${queryType}:${queryValue}`,
    success: function (data) {
      if (!data) return;
      $("#EX1-3 .results").empty();
      $("#EX1-3 .results").append(
        `<ol>
        ${data.items.map((i) => {
          return `<li>${i.volumeInfo.industryIdentifiers?.[0].identifier} - 
            ${i.volumeInfo.title} By ${
            i.volumeInfo.authors?.[0] ?? "---"
          }</li>`;
        })}
        </ol>`
      );
    },
    error: function (xhr, text, error) {
      console.log(text);
    },
  });
};

const fetchGIF = function () {
  const api_key = "28ztv9ovyB8EDz3nTGS8LbLJY2nJxbn2";
  const queryValue = $("#gif-query").val();
  $.ajax({
    method: "GET",
    url: `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${queryValue}&limit=5`,
    success: function ({ data }) {
      if (!data) return;
      $("#EX4-5 .results").empty();
      $("#EX4-5 .results").append(
        `<iframe src="${data[0]?.embed_url}" frameborder="0"></iframe>`
      );
    },
    error: function (xhr, text, error) {
      console.log(text);
    },
  });
};
