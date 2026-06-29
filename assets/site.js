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
// Pestañas presencial / online (página de cursos)
document.addEventListener('click', function(e){
  var tab = e.target.closest('.tab');
  if(!tab) return;
  var name = tab.getAttribute('data-tab');
  document.querySelectorAll('.tab').forEach(function(t){
    var on = t === tab;
    t.classList.toggle('active', on);
    t.setAttribute('aria-selected', on ? 'true' : 'false');
  });
  document.querySelectorAll('.tab-panel').forEach(function(p){
    p.classList.toggle('hidden', p.getAttribute('data-panel') !== name);
  });
});
