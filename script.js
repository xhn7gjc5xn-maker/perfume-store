let products = {
  parfum1: { volume: 50, price: 79 },
  parfum2: { volume: 50, price: 69 }
};

let selectedProduct = "";

function selectVolume(product, vol, pr) {
  products[product].volume = vol;
  products[product].price = pr;
  document.getElementById("selectedVolume").innerText = vol;
  document.getElementById("selectedPrice").innerText = pr;
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
