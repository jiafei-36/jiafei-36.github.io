document.querySelectorAll('.nav-dropdown').forEach((group) => {
  const link = group.querySelector('.math-nav-link');
  const submenu = group.querySelector('.nav-submenu');
  let touchInput = false;
  let touchWasOpen = false;
  const setOpen = (open) => {
    submenu.hidden = !open;
    link.setAttribute('aria-expanded', String(open));
  };
  group.addEventListener('pointerenter', (event) => {
    if (event.pointerType !== 'touch') setOpen(true);
  });
  group.addEventListener('pointerleave', (event) => {
    if (event.pointerType !== 'touch' && !group.contains(document.activeElement)) setOpen(false);
  });
  group.addEventListener('focusin', () => setOpen(true));
  group.addEventListener('focusout', (event) => {
    if (!group.contains(event.relatedTarget)) setOpen(false);
  });
  link.addEventListener('pointerdown', (event) => {
    touchInput = event.pointerType === 'touch';
    touchWasOpen = !submenu.hidden;
  });
  link.addEventListener('click', (event) => {
    if (touchInput && !touchWasOpen) {
      event.preventDefault();
      setOpen(true);
    }
    touchInput = false;
  });
  group.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      event.preventDefault();
      link.focus();
      setOpen(false);
    }
  });
  document.addEventListener('pointerdown', (event) => {
    if (!group.contains(event.target)) setOpen(false);
  });
});
