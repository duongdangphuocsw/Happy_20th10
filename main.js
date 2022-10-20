const wordBlock = document.querySelector(".word-container");
const icon = document.querySelector(".icon-heart");
console.log(wordBlock);
function handleAnimate() {
  function wordAnimate(ms) {
    return new Promise((resolve, reject) => {
      setInterval(resolve, ms);
    });
  }
  wordAnimate(1000)
    .then(() => {
      wordBlock.animate([{ transform: " rotate3d(2, 1, 2, 360deg)" }], {
        duration: 1000,
        iterations: 4,
      });
      return wordAnimate(4000);
    })
    .then(() => {
      icon.style.fontSize = "230px";
      icon.style.color = "#FF0800";
      wordBlock.style.color = "#FFFFFF"
      return wordAnimate(5000);
    })
    .then(() => {
      icon.animate(
        {
          opacity: 0.1,
          left: "+=50",
          height: "toggle",
          fontSize: "10px"
        },
        {
          duration: 2000,
          iterations: Infinity,
        }
      );
      return wordAnimate(0);
    })
    .then(() => {
      setInterval(() => {
        wordBlock.animate([{ transform: " rotate3d(2, 1, 2, 360deg)" }], {
          duration: 1000,
          iterations: 4,
        });
      }, 6000);
    });
}
handleAnimate();
