(() => {
  const root = document.documentElement;
  const button = document.querySelector('.theme-toggle');
  const system = matchMedia('(prefers-color-scheme: dark)');
  const isDark = () => root.dataset.theme ? root.dataset.theme === 'dark' : system.matches;
  function syncThemeControl() {
    const dark = isDark();
    if (button) {
      button.setAttribute('aria-label', dark ? '切换到浅色模式' : '切换到深色模式');
      button.title = dark ? '切换到浅色模式' : '切换到深色模式';
    }
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', dark ? '#181f1c' : '#f5f3ec');
  }
  if (button) {
    button.hidden = false;
    button.addEventListener('click', () => {
      const next = isDark() ? 'light' : 'dark';
      root.dataset.theme = next;
      try { localStorage.setItem('personal-site-theme', next); } catch { /* Theme still works for this page. */ }
      syncThemeControl();
    });
  }
  system.addEventListener('change', syncThemeControl);
  syncThemeControl();
  document.querySelectorAll('[data-year]').forEach(el => { el.textContent = String(new Date().getFullYear()); });
})();
