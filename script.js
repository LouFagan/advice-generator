let adviceId = document.querySelector(".advice-id");
let adviceBx = document.querySelector(".advice-box");
const requestBtn = document.querySelector(".request-btn");

requestBtn.addEventListener("click", function () {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => {
      let id = data.slip.id;
      let textBox = data.slip.advice;
      // console.log(data.slip);

      adviceId.textContent = `Advice #${id}`;
      adviceBx.textContent = `"${textBox}"`;
    })
    .catch(function (error) {
      alert(error);
    });
});
