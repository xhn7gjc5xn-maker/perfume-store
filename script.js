let volume = 50;
let price = 79;

function selectVolume(v, p) {
  volume = v;
  price = p;
  document.getElementById("selectedVolume").innerText = v;
  document.getElementById("selectedPrice").innerText = p;
}

function openModal() {
  document.getElementById("modal").style.display = "block";
  document.getElementById("selectedVolume").innerText = volume;
  document.getElementById("selectedPrice").innerText = price;
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

function sendOrder() {
  let name = document.getElementById("name").value;
  let contact = document.getElementById("contact").value;

  let message = `Заказ Parfum1\nОбъем: ${volume} мл\nЦена: €${price}\nИмя: ${name}\nКонтакт: ${contact}`;
  let url = `https://t.me/YOUR_USERNAME?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}

function directTelegram() {
  window.open("https://t.me/YOUR_USERNAME", "_blank");
}
