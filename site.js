(() => {
  const en = document.documentElement.lang === 'en';
  const menu = document.querySelector('.menu-toggle');
  const nav = document.getElementById('site-nav');
  const close = () => { nav.classList.remove('open'); menu.setAttribute('aria-expanded', 'false'); };
  menu.addEventListener('click', () => { const open = nav.classList.toggle('open'); menu.setAttribute('aria-expanded', String(open)); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') { close(); menu.focus(); } });
  document.querySelector('[data-language]').addEventListener('click', e => { try { localStorage.setItem('sunshine-language', e.currentTarget.dataset.language); } catch (_) {} });
  const form = document.getElementById('contact-form');
  if (!form) return;
  const output = document.getElementById('brief-output'), note = document.getElementById('form-note');
  form.addEventListener('submit', e => {
    e.preventDefault();
    const data = new FormData(form);
    output.value = `${en?'Company':'企业名称'}: ${data.get('company')}\n${en?'Email':'工作邮箱'}: ${data.get('email')}\n${en?'Project brief':'当前需求'}:\n${data.get('goal')}`;
    document.getElementById('brief-panel').hidden = false;
    note.textContent = en ? 'Brief generated. Copy it to share with your SunShine contact.' : '需求说明已生成，可复制后分享给你的 SunShine 联系人。';
  });
  document.getElementById('copy-brief').addEventListener('click', async () => {
    try { await navigator.clipboard.writeText(output.value); note.textContent = en ? 'Copied.' : '已复制。'; }
    catch (_) { output.focus(); output.select(); note.textContent = en ? 'Select and copy the brief manually.' : '请手动复制已选中的需求说明。'; }
  });
})();
