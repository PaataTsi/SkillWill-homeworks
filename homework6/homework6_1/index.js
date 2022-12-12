const modal = document.getElementById("Mymodal");
const btn = document.getElementById("opn_modal");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}

