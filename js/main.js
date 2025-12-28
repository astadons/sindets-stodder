const figur = document.querySelector("#HotspotFigur");

console.log(document.querySelector("#HotspotFigur"));

/*************HotSpotFigur**********/

document.querySelector("#HotspotFigur").addEventListener("mouseover", moseOverHead);

function moseOverHead() {
  console.log("moseOverHead");

  document.querySelector("#efficiency").classList.remove("hide");
  document.querySelector("#efficiency").classList.add("fadeIn");

  document.querySelector("#requirement").classList.remove("hide");
  document.querySelector("#requirement").classList.add("fadeIn");

  document.querySelector("#requirement").addEventListener("animationend", cleanup);

  document.querySelector("#HotspotFigur").style.fill = "blue";

  function mouseoutHead() {
    console.log("mouseoutHead");

    document.querySelector("#efficiency").classList.remove("hide");
    document.querySelector("#efficiency").classList.add("fadeIn");

    document.querySelector("#requirement").classList.remove("hide");
    document.querySelector("#requirement").classList.add("fadeIn");

    document.querySelector("#requirement").addEventListener("animationend", cleanup);

    document.querySelector("#HotspotFigur").style.fill = "blue";
  }
  /*************HotSpotFigur**********/
  document.querySelector("#HotspotHoved").addEventListener("mouseover", moseOverHead);

  /*************HotSpotFigur**********/
  document.querySelector("#HotspotStodder").addEventListener("mouseover", moseOverHead);
}

document.querySelector("#HotspotFigur").addEventListener("click", clickHead);

function clickHead() {
  console.log("clickHead");

  document.querySelector("#efficiency").classList.remove("hide");
  document.querySelector("#efficiency").classList.add("fadeIn");

  document.querySelector("#requirement").classList.remove("hide");
  document.querySelector("#requirement").classList.add("fadeIn");

  document.querySelector("#requirement").addEventListener("animationend", cleanup);

  document.querySelector("#efficiency").classList.remove("hide");
  document.querySelector("#efficiency").classList.add("fadeIn");

  document.querySelector("#requirement").classList.remove("hide");
  document.querySelector("#requirement").classList.add("fadeIn");

  document.querySelector(".info-text > h2").textContent = "Figuren";
  document.querySelector("#efficiency").innerHTML = `<h3>Asta</h3>
<p>bla bla bla<p/>`;
  document.querySelector("#requirement").innerHTML = `<h3>Asta</h3>
<p>bla bla bla<p/>`;
  document.querySelector("#requirement").innerHTML = `<h3>Asta</h3>
<p>bla bla bla<p/>`;
}

document.querySelector("#info-text").classList("fadeIn");

/******************Animation************/

function animateBoxes() {
  document.querySelector("#efficiency").classList.remove("hide");
  document.querySelector("#efficiency").classList.add("fadeIn");
  document.querySelector("#requirement").classList.remove("hide");
  document.querySelector("#requirement").classList.add("fadeIn");

  document.querySelector("#requirement").addEventListener("animationend", cleanup);
  document.querySelector("efficiency").addEventListener("animationend", cleanup);
}

function cleanup() {
  console.log("cleanup");
  document.querySelector("#requirement").removeEventListener("animationend", cleanup);
  document.querySelector("#efficiency").classList.remove("fadeIn");
  document.querySelector("#requirement").classList.remove("fadeIn");
}
