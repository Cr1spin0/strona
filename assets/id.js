if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/sw.js").then(() => {
    console.log("Service Worker zarejestrowany!");
  });
}
document.addEventListener("DOMContentLoaded", function () {
    const helpImg = document.querySelector(".help_img");
    const helpBox = document.getElementById("helpBox");
    let interval;

    helpImg.addEventListener("click", function () {
        console.log("Kliknięto ikonę!"); // 🔹 Sprawdź, czy kliknięcie działa

        helpBox.classList.toggle("visible");

        if (helpBox.classList.contains("visible")) {
            let dots = "";
            interval = setInterval(() => {
                dots = dots.length < 3 ? dots + "." : "";
                helpBox.textContent = "Tutaj jest pomoc" + dots;
            }, 500);
        } else {
            clearInterval(interval);
            helpBox.textContent = "Tutaj jest pomoc...";
        }
    });
});
