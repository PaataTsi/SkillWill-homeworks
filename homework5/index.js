

/// exercise1


document.getElementById("hider").addEventListener("click", hideAction);

let hidden = false;

function hideAction() {
  hidden = !hidden;
  if (hidden) {
    document.getElementById('text').style.visibility = 'hidden';
  } else {
    document.getElementById('text').style.visibility = 'visible';
  }
}


/// exercise2

const card = document.createElement('div');
card.innerHTML = "card";
document.getElementById("profile").appendChild(card);


const h2 = document.createElement("h2");
h2.innerHTML = "Paata";
document.getElementById("profile").appendChild(h2);

const aLink = document.createElement("a");
aLink.setAttribute('href','#');
aLink.innerHTML = 'Go to Profile';
document.getElementById("profile").appendChild(aLink);

///exercise3


document.getElementById("profile").style.backgroundColor = "red";

myFunction();

