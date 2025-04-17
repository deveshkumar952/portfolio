

function Menu(e) {
    let list = document.querySelector('ul');
e.name === 'menu' ? (e.name = "close",list.classList.add('top-[80px]') , list.classList.add('opacity-100')) :( e.name = "menu" ,list.classList.remove('top-[80px]'),list.classList.remove('opacity-100'))
}



document.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("click", function (e) {
      const ripple = document.createElement("span");
      ripple.className = "ripple";
      this.appendChild(ripple);
  
      ripple.style.left = `${e.offsetX}px`;
      ripple.style.top = `${e.offsetY}px`;
  
      setTimeout(() => {
        ripple.remove();
      }, 600);
    });
  });
  