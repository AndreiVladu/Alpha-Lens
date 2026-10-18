// Tab-uri Nuntă / Botez / Cununie / Majorat: se vede un singur eveniment odată
const tabButtons = document.querySelectorAll('.event-tabs button');
const eventSections = document.querySelectorAll('.event-section');

function showEvent(id) {
  if (!document.getElementById(id)) id = 'nunta';
  eventSections.forEach(section => section.classList.toggle('active', section.id === id));
  tabButtons.forEach(btn => {
    const isActive = btn.dataset.tab === id;
    btn.classList.toggle('active', isActive);
    btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
  });
}

tabButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    showEvent(btn.dataset.tab);
    history.replaceState(null, '', '#' + btn.dataset.tab);
  });
});

// Un link de forma preturi.html#botez deschide direct tab-ul Botez
document.querySelector('.pricing-wrap').classList.add('tabs-ready');
showEvent(window.location.hash.slice(1));
