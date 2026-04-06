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

// Reset any stale horizontal scroll on load
['view-itinerary', 'view-budget', 'view-checklist'].forEach(function (id) {
  var el = document.getElementById(id);
  if (el) { el.scrollLeft = 0; el.scrollTop = 0; }
});

// Page navigation
function goTo(page) {
  document.body.dataset.page = page;
  var viewMap = { itinerary: 'view-itinerary', budget: 'view-budget', checklist: 'view-checklist' };
  if (viewMap[page]) {
    var el = document.getElementById(viewMap[page]);
    el.scrollLeft = 0;
    el.scrollTop = 0;
  }
}

// Hero → Itinerary
document.getElementById('scroll-btn').addEventListener('click', function () {
  goTo('itinerary');
});

// Hero → Checklist
document.getElementById('checklist-btn').addEventListener('click', function () {
  goTo('checklist');
});

// Nav buttons (prev/next)
document.querySelectorAll('.nav-btn[data-to]').forEach(function (btn) {
  btn.addEventListener('click', function () {
    goTo(this.dataset.to);
  });
});

// Tab switching (itinerary tabs)
document.querySelectorAll('#itinerary .tab-btn').forEach(function (btn) {
  btn.addEventListener('click', function () {
    var tab = this.dataset.tab;
    document.querySelectorAll('#itinerary .tab-btn').forEach(function (b) { b.classList.remove('active'); });
    document.querySelectorAll('#itinerary .tab-panel').forEach(function (p) { p.classList.remove('active'); });
    this.classList.add('active');
    document.getElementById('tab-' + tab).classList.add('active');
  });
});

// Checklist: sessionStorage + progress bar
var CHECKLIST_TOTAL = 47;

function updateProgress() {
  var checked = document.querySelectorAll('.chk:checked').length;
  document.getElementById('progress-count').textContent = checked + ' / ' + CHECKLIST_TOTAL;
  document.getElementById('progress-bar').style.width = (checked / CHECKLIST_TOTAL * 100) + '%';
}

function applyCheckedClass(cb) {
  cb.closest('.checklist-item').classList.toggle('checked', cb.checked);
}

document.querySelectorAll('.chk').forEach(function (cb) {
  if (sessionStorage.getItem('chk-' + cb.id) === 'true') {
    cb.checked = true;
    applyCheckedClass(cb);
  }
  cb.addEventListener('change', function () {
    sessionStorage.setItem('chk-' + cb.id, cb.checked);
    applyCheckedClass(cb);
    updateProgress();
  });
});

updateProgress();
