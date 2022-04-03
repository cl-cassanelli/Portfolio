function scroll() {
  
    let value = 0;
    let valueContainer = document.querySelectorAll(".value-text");
    let barValue = document.querySelectorAll(".progress-value");


  valueContainer.forEach(res =>  {

    value = res.innerHTML.split("%")[0]
    let progressValue = 0;
    let progressEndValue = value;
  
    let progress = setInterval(() => {
      progressValue++;
      res.textContent = `${progressValue}%`;
      if (progressValue == progressEndValue) {
        clearInterval(progress);
      }
    }, 16);

  })
}

scroll();