(() => {
  try {
    const saved = localStorage.getItem('personal-site-theme');
    if (saved === 'light' || saved === 'dark') document.documentElement.dataset.theme = saved;
  } catch { /* The system color preference remains available when storage is blocked. */ }
})();
