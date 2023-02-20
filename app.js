//function menu() {
   // var x = document.getElementById("navList");
   // if (x.style.display === "block") {
   //   x.style.display = "none";
   // } else {
   //   x.style.display = "block";
  //  }
  //}

  const navLinks = document.querySelector('.nav-links')
  function onToggleMenu(e){
    e.name = e.name === 'menu' ? 'close' : 'menu'
    navLinks.classList.toggle('top-[9%]');
  }