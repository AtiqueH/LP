// mobile menu
var burger = document.getElementById('burger'), menu = document.getElementById('menu');
burger.addEventListener('click', function () {
  var open = menu.classList.toggle('open');
  burger.setAttribute('aria-expanded', open);
});
menu.addEventListener('click', function (e) {
  if (e.target.tagName === 'A') {
    menu.classList.remove('open');
    burger.setAttribute('aria-expanded', 'false');
  }
});

// contact form: opens WhatsApp with the message prefilled
document.getElementById('form').addEventListener('submit', function (e) {
  e.preventDefault();
  var n = document.getElementById('fname').value.trim(),
      c = document.getElementById('fcontact').value.trim(),
      m = document.getElementById('fmsg').value.trim(),
      err = document.getElementById('err');
  if (!n || !c || !m) {
    err.textContent = 'Please fill in your name, contact details, and message.';
    return;
  }
  err.textContent = '';
  var text = 'Hi Atiqur, I\'m ' + n + ' (' + c + ').\n\n' + m;
  window.open('https://wa.me/8801581769249?text=' + encodeURIComponent(text), '_blank', 'noopener');
});

document.getElementById('yr').textContent = new Date().getFullYear();