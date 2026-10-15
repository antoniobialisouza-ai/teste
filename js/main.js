const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector("#main-nav");

if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
  });

  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Abrir menu");
    });
  });
}

const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();

const dateInput = document.querySelector("#guest-date");
if (dateInput) {
  const today = new Date();
  const localToday = new Date(today.getTime() - today.getTimezoneOffset() * 60000)
    .toISOString()
    .split("T")[0];
  dateInput.min = localToday;
}

const reservationForm = document.querySelector("#reservation-form");
if (reservationForm) {
  reservationForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(reservationForm);
    const name = String(formData.get("name") || "").trim();
    const date = String(formData.get("date") || "");
    const party = String(formData.get("party") || "");
    const time = String(formData.get("time") || "");

    if (!name || !date) {
      reservationForm.reportValidity();
      return;
    }

    const [yearPart, monthPart, dayPart] = date.split("-");
    const readableDate = `${dayPart}/${monthPart}/${yearPart}`;
    const message = [
      "Olá! Gostaria de consultar a disponibilidade de uma mesa.",
      "",
      `Nome: ${name}`,
      `Data desejada: ${readableDate}`,
      `Período: ${time}`,
      `Pessoas: ${party}`,
      "",
      "Poderiam confirmar a disponibilidade, por favor?"
    ].join("\n");

    // Troque o número abaixo pelo WhatsApp real do restaurante, com código do país e DDD.
    const whatsappNumber = "5551999999999";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  });
}