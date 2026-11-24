var form = document.getElementById("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  var name = document.getElementById("name").value;
  var message = document.getElementById("message").value;

  if (name == "" || message == "") {
    alert("Please fill in your name and message.");
    return;
  }

  var text = "Hi Atiqur, I am " + name + ". " + message;
  window.open("https://wa.me/8801581769249?text=" + encodeURIComponent(text));
});