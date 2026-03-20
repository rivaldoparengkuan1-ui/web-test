// CEK AMAN (biar gak error kalau elemen belum ada)
document.addEventListener("DOMContentLoaded", function () {

  const hamburger = document.getElementById('hamburger');
  const menu = document.getElementById('menu');

  if (hamburger && menu) {
    hamburger.addEventListener('click', () => {
      menu.classList.toggle('active');
    });
  }

});