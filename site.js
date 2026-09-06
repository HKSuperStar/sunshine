(() => {
  const en = document.documentElement.lang === 'en';
  const menu = document.querySelector('.menu-toggle');
  const nav = document.getElementById('site-nav');
  const close = () => { nav.classList.remove('open'); menu.setAttribute('aria-expanded', 'false'); };
  menu.addEventListener('click', () => { const open = nav.classList.toggle('open'); menu.setAttribute('aria-expanded', String(open)); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') { close(); menu.focus(); } });
  document.querySelector('[data-language]').addEventListener('click', e => { try { localStorage.setItem('sunshine-language', e.currentTarget.dataset.language); } catch (_) {} });
  const tradeForm = document.getElementById('trade-form');
  if (tradeForm) {
    const tradeOutput = document.getElementById('trade-output');
    const tradeResult = document.getElementById('trade-result');
    const tradeNote = document.getElementById('trade-note');
    const tradeCopy = document.getElementById('trade-copy');
    tradeOutput.readOnly = true;
    tradeNote.setAttribute('aria-live', 'polite');
    tradeForm.addEventListener('submit', e => {
      e.preventDefault();
      if (!tradeForm.reportValidity()) return;
      const data = new FormData(tradeForm);
      const fields = [
        ['company', 'Company / 企业名称'],
        ['email', 'Email / 工作邮箱'],
        ['product', 'Product / 产品'],
        ['market', 'Target market / 目标市场'],
        ['stage', 'Stage / 业务阶段'],
        ['goal', 'Main challenge / 主要问题']
      ];
      tradeOutput.value = fields.map(([name, label]) => `${label}: ${data.get(name) ?? ''}`).join('\n');
      tradeResult.hidden = false;
      tradeNote.textContent = en ? 'Brief generated in your browser. It has not been sent. Copy it to share.' : '需求说明已在浏览器中生成，尚未发送。可复制后分享。';
    });
    tradeCopy.addEventListener('click', async e => {
      e.preventDefault();
      try {
        await navigator.clipboard.writeText(tradeOutput.value);
        tradeNote.textContent = en ? 'Copied. The brief has not been sent.' : '已复制。需求说明尚未发送。';
      } catch (_) {
        tradeOutput.focus();
        tradeOutput.select();
        tradeNote.textContent = en ? 'Select and copy the brief manually. It has not been sent.' : '请手动复制已选中的需求说明。尚未发送。';
      }
    });
  }
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
