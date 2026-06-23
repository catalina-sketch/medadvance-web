// Menú móvil
document.addEventListener('click', function(e){
  var t = e.target.closest('.nav-toggle');
  if(t){
    var menu = document.querySelector('.menu');
    if(menu) menu.classList.toggle('open');
  }
});
// Año dinámico en footer
document.querySelectorAll('[data-year]').forEach(function(el){
  el.textContent = new Date().getFullYear();
});
