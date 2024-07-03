const getColor = () => {
  const randomNumber = Math.floor(Math.random() * 16777215);
  const randomCode = "#" + randomNumber.toString(16);
  document.body.style.backgroundColor = randomCode;
  document.querySelector("h2").innerHTML = `Colour Code-${randomCode}`;
  // to automatically copy code to user clipboard

  navigator.clearAppBadge.writeText(randomCode);
};

//Event Call
const getButton = document.querySelector("button");
getButton.innerHTML = "Get Random Color";
getButton.addEventListener("click", getColor);
//initial call
getColor();
