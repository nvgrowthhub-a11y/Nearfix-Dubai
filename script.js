document.getElementById("serviceForm").addEventListener("submit", function(e){
  e.preventDefault();

  let name = document.getElementById("name").value;
  let address = document.getElementById("address").value;
  let service = document.getElementById("service").value;
  let message = document.getElementById("message").value;

  let text = `New Service Request:%0AName: ${name}%0AAddress: ${address}%0AService: ${service}%0AMessage: ${message}`;

  // WhatsApp send
  window.open(`https://wa.me/918796493504?text=${text}`, "_blank");

  // Email send (mailto fallback)
  window.location.href = `mailto:nvgrowthhub@gmail.com?subject=Service Request&body=${text}`;
});