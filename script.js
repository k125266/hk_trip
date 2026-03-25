// Smooth scroll from hero button
document.getElementById('scroll-btn').addEventListener('click', function () {
  document.getElementById('itinerary').scrollIntoView({ behavior: 'smooth', block: 'start' });
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
