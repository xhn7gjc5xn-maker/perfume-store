let products = {
  parfum1: { name: "Parfum1", volume: 50, price: 79 },
  parfum2: { name: "Parfum2", volume: 50, price: 69 }
};

let selectedProduct = "parfum1";

function selectVolume(product, v, p, button) {
  products[product].volume = v;
  products[product].price = p;

  // Убираем подсветку со всех кнопок этого продукта
  let buttons = button.parentElement.querySelectorAll('button');
  buttons.forEach(b => b.classList.remove('active-volume'));

  // Подсвечиваем выбранную кнопку
  button.classList.add('active-volume');

  // Обновляем модалку, если она открыта
  if (selectedProduct === product && document.getElementById("modal").style.display === "block") {
    document.getElementById("selectedVolume").innerText = v;
    document.getElementById("selectedPrice").innerText = p;
  }
}

function openModal(product) {
  selectedProduct = product;
  document.getElementById("modal").style.display = "block";
  document.getElementById("selectedProductName").innerText = products[product].name;
  document.getElementById("selectedVolume").innerText = products[product].volume;
  document.getElementById("selectedPrice").innerText = products[product].price;
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

function sendOrder() {
  let name = document.getElementById("name").value;
  let contact = document.getElementById("contact").value;

  let message = `Заказ ${products[selectedProduct].name}\nОбъем: ${products[selectedProduct].volume} мл\nЦена: €${products[selectedProduct].price}\nИмя: ${name}\nКонтакт: ${contact}`;

  // Ссылка на Telegram Марии
  let url = `https://t.me/stankevichmaria?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}

function directTelegram() {
  // Прямая ссылка на Telegram Марии
  window.open("https://t.me/stankevichmaria", "_blank");
}
