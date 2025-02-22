setInterval(() => {
  let time = new Date();
  let timer = time.toLocaleTimeString();
  clock.innerHTML = timer;
}, 1000);
