// 向下探索 → show content view
document.getElementById('scroll-btn').addEventListener('click', function () {
  document.body.classList.add('content-mode');
  document.getElementById('view-content').scrollTop = 0;
});

// 回到首頁 → show hero view
document.getElementById('back-btn').addEventListener('click', function () {
  document.body.classList.remove('content-mode');
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
