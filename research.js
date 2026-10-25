const topic = document.querySelector('.topic-help');
if (topic) {
  const trigger = topic.querySelector('.topic-trigger');
  const explanation = topic.querySelector('.topic-explanation');
  let pinned = false;
  const show = (open) => {
    explanation.hidden = !open;
    trigger.setAttribute('aria-expanded', String(open));
  };
  trigger.addEventListener('pointerenter', (event) => {
    if (event.pointerType !== 'touch') show(true);
  });
  topic.addEventListener('pointerleave', (event) => {
    if (event.pointerType !== 'touch' && !pinned && document.activeElement !== trigger) show(false);
  });
  trigger.addEventListener('focus', () => show(true));
  trigger.addEventListener('click', () => {
    pinned = !pinned;
    show(pinned);
  });
  trigger.addEventListener('blur', () => {
    if (!pinned) show(false);
  });
  document.addEventListener('pointerdown', (event) => {
    if (!topic.contains(event.target)) {
      pinned = false;
      show(false);
    }
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      pinned = false;
      show(false);
    }
  });
}
