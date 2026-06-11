(function () {
  var THEMES = ['light', 'dark', 'fatih'];
  var KEY = 'fatih-lib-theme';

  function apply(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(KEY, theme);
    document.querySelectorAll('[data-theme-btn]').forEach(function (btn) {
      btn.classList.toggle('active', btn.dataset.themeBtn === theme);
    });
  }

  function init() {
    var saved = localStorage.getItem(KEY);
    apply(THEMES.includes(saved) ? saved : 'fatih');
    document.querySelectorAll('[data-theme-btn]').forEach(function (btn) {
      btn.addEventListener('click', function () { apply(btn.dataset.themeBtn); });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
