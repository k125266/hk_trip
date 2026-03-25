// Landscape rotate prompt
var rotateEl = document.querySelector('.rotate-prompt');
function checkOrientation() {
  var isLandscape = window.innerWidth > window.innerHeight && window.innerHeight < 500;
  rotateEl.classList.toggle('visible', isLandscape);
}
checkOrientation();
window.addEventListener('resize', checkOrientation);
window.addEventListener('orientationchange', function () {
  setTimeout(checkOrientation, 100);
});

// Page navigation
function goTo(page) {
  document.body.dataset.page = page;
  // reset scroll on the newly shown view
  var viewMap = { itinerary: 'view-itinerary', budget: 'view-budget' };
  if (viewMap[page]) document.getElementById(viewMap[page]).scrollTop = 0;
}

// Hero → Itinerary
document.getElementById('scroll-btn').addEventListener('click', function () {
  goTo('itinerary');
});

// Nav buttons (prev/next)
document.querySelectorAll('.nav-btn[data-to]').forEach(function (btn) {
  btn.addEventListener('click', function () {
    goTo(this.dataset.to);
  });
});

// Tab switching
document.querySelectorAll('.tab-btn').forEach(function (btn) {
  btn.addEventListener('click', function () {
    var tab = this.dataset.tab;
    document.querySelectorAll('.tab-btn').forEach(function (b) { b.classList.remove('active'); });
    document.querySelectorAll('.tab-panel').forEach(function (p) { p.classList.remove('active'); });
    this.classList.add('active');
    document.getElementById('tab-' + tab).classList.add('active');
  });
});
