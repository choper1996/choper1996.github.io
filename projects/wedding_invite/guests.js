document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);

  const she = params.get("?she");
  const he = params.get("?he");

  const sheSpan = document.querySelector(".she");
  const heSpan = document.querySelector(".he");
  const endingSpan = document.querySelector(".ending");
  const unionSpan = document.querySelector(".union");
  const defaultGuest = document.querySelector(".default-guest");

  console.log(he);
  console.log(she);

  sheSpan.innerText = she;
  heSpan.innerText = he;

  let ending = "ой"
  let union = "";

  if (she && he) {
    ending = "ие"
    union = " и ";
  } else if (she) {
    ending = "ая"
  }

  if (she || he) {
    defaultGuest.innerText = ""
  }

  endingSpan.innerText = ending;
  unionSpan.innerText = union;
});
