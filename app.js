//function menu() {
   // var x = document.getElementById("navList");
   // if (x.style.display === "block") {
   //   x.style.display = "none";
   // } else {
   //   x.style.display = "block";
  //  }
  //}

  const navList = document.querySelector('.navList')
  function onToggleMenu(e){
    e.name = e.name === 'menu' ? 'menu' : 'menu;'
    navList.classList.toggle('top-[9%]');
  }