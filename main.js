const wordBlock = document.querySelector(".word-container");
const icon = document.querySelector(".icon-heart");
console.log(wordBlock);
function handleAnimate() {
  function wordAnimate(ms) {
    return new Promise((resolve, reject) => {
      setInterval(resolve, ms);
    });
  }
  wordAnimate(0)
    .then(() => {
      wordBlock.animate(
        {
          opacity: [0.2, 0.5],
          transform: ['rotate(0deg)', 'rotate(360deg)']
        },
        {
          direction: "alternate",
          duration: 1000,
          iterations: 4,
        }
      );
      return wordAnimate(4000);
    })
    .then(() => {
      icon.style.fontSize = "230px";
      icon.style.color = "#FF0800";
      wordBlock.style.color = "#FFFFFF";
      return wordAnimate(5000);
    })
    .then(() => {
      icon.animate(
        {
          opacity: 0.1,
          left: "+=50",
          height: "toggle",
          fontSize: "10px",
        },
        {
          direction: "alternate",
          duration: 2000,
          iterations: Infinity,
        }
      );
      return wordAnimate(0);
    })
    .then(() => {
      setInterval(() => {
        wordBlock.animate(
          {
            opacity: [0.2, 0.8],
             transform: ["scale(0.01)", "scale(1)"],
          },
          {
            duration: 4000,
            iterations: 1,
          }
        );
      }, 8000);
    });
}
handleAnimate();
