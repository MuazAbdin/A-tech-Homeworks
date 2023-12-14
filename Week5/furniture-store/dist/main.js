function showProducts() {
  $.get("/all-products").then((store) => {
    $("#all-products").empty();
    store.forEach((prod) => {
      $("#all-products").append(
        `<div>There are <b>${prod.inventory}</b> units of <b>${prod.name}</b> for <b>${prod.price}</b> per unit.</div>`
      );
    });
  });
}

function toggleProducts(button) {
  let showStatus = $(button).data("show");
  if (!showStatus) {
    $("#all-products").show();
    $(button)[0].innerText = "Hide Products";
    $(button).data("show", true);
  } else {
    $("#all-products").hide();
    $(button)[0].innerText = "Show Products";
    $(button).data("show", false);
  }
}

function deposit() {
  $("#money")[0].innerText = `$${$("#money-intput").val()}`;
}

function checkAdmin() {
  const isAdmin = $("#yes")[0].checked;
  if (isAdmin) {
    $("#sale").show();
    return true;
  }
  $("#sale").hide();
  return false;
}

function makeSale() {
  if (!checkAdmin()) return;
  $.get("/sale/?admin=true").then(() => {
    showProducts();
  });
}

function showPrice() {
  const name = $("#pname").val();
  $.get(`/priceCheck/${name}`).then(({ price }) => {
    $("#product-details").append(`<div>${name} price is ${price}</div>`);
  });
}

function buyItem(itemName) {
  const money = parseInt($("#money")[0].innerText.slice(1) || 0);
  const name = itemName ? itemName : $("#pname").val();
  $.get(`/priceCheck/${name}`)
    .then(({ price }) => {
      // console.log(price);
      if (!price) return Promise.resolve("Item not found");
      if (price > money) return Promise.resolve("You should find a job!");
      return $.get(`/buy/${name}`);
    })
    .then((result) => {
      if (typeof result === "string")
        return $("#product-details").append(`<div>${result}</div>`);
      const { name, price, inventory } = result;
      $("#product-details").append(
        `<div>${name} is bought for $${price} ${inventory} left.</div>`
      );
      $("#money")[0].innerText = `$${money - price}`;
      showProducts();
    })
    .catch((error) => console.log(error.message));
}

function clearLog() {
  $("#product-details").empty();
}

showProducts();

let interval = null;
let lastCheckedPrice = 120;

function startChecking() {
  interval = setInterval(() => {
    const money = parseInt($("#money")[0].innerText.slice(1) || 0);
    $.get("/priceCheck/chair").then(({ price }) => {
      if (price < lastCheckedPrice) {
        lastCheckedPrice = price;
        buyItem("chair");
        $("#check-interval-details").append(`<div>bought chair for less</div>`);
        console.log("bought chair for less");
      } else {
        $("#check-interval-details").append(
          `<div>still waiting for a price drop...</div>`
        );
        console.log("still waiting for a price drop...");
      }
    });
  }, 3000);
}

function stopChecking() {
  clearInterval(interval);
  interval = null;
}

function toggleCheck(button) {
  let checkStatus = $(button).data("check");
  if (!checkStatus) {
    startChecking();
    $(button)[0].innerText = "Stop Chair Check & Buy";
    $(button).data("check", true);
  } else {
    stopChecking();
    $(button)[0].innerText = "Start Chair Check & Buy";
    $(button).data("check", false);
  }
}
