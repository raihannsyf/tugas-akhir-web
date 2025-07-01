document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const formMessage = document.getElementById('formMessage');

  if (!name || !email || !message) {
    formMessage.textContent = "Semua kolom harus diisi.";
    formMessage.style.color = "red";
    return;
  }

  formMessage.textContent = "Terima kasih! Pesan Anda telah dikirim.";
  formMessage.style.color = "green";
  this.reset();
});
