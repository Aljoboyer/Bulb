function Bulb () {
    const bulb = document.querySelector('.bulb');
    const body = document.querySelector('body')
    bulb.addEventListener("click", LightSwitch);

    function LightSwitch() {
      body.classList.toggle('on')
    }
}

Bulb()