let products = {
  parfum1: { volume: 50, price: 79, stockId: "stockCount-parfum1" },
  parfum2: { volume: 50, price: 69, stockId: "stockCount-parfum2" }
};

let selectedProduct = "";

function selectVolume(product, v, p) {
  products[product].volume = v;
  products[product].price = p;
  document.getElementById("selectedVolume").innerText = v;
  document.getElementById("selectedPrice").innerText = p;
}

function openModal(product) {
  selectedProduct = product;
  document.getElementById("modal").style.display = "block";
  document.getElementById("selectedVolume").innerText = products[product].volume;
  document.getElementById("selectedPrice").innerText = products[product].price;
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

function sendOrder() {
  let name = document.getElementById("name").value;
  let contact = document.getElementById("contact").value;

  let message = `Заказ ${selectedProduct}\nОбъем: ${products[selectedProduct].volume} мл\nЦена: €${products[selectedProduct].price}\nИмя: ${name}\nКонтакт: ${contact}`;

  let url = `https://t.me/YOUR_USERNAME?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}

function directTelegram() {
  window.open("https://t.me/YOUR_USERNAME", "_blank");
}
