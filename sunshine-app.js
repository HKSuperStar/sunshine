(function () {
  'use strict';

  const content = window.SUNSHINE_CONTENT;
  const storageKey = 'sunshine-language';
  const esc = (value) => String(value).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const getPath = (object, path) => path.split('.').reduce((value, key) => value && value[key], object);
  const readLanguage = () => {
    try {
      const value = window.localStorage.getItem(storageKey);
      return value === 'en' ? 'en' : 'zh';
    } catch (_) {
      return content.defaultLanguage;
    }
  };
  let language = readLanguage();
  let activeAgent = 'acquisition';
  let activeOperationsAgent = 'business';
  let activeDeliveryAgent = 'data';

  const setText = (id, value) => {
    const element = document.getElementById(id);
    if (element) element.textContent = value;
  };
  const setHeading = (id, first, highlight) => {
    const element = document.getElementById(id);
    if (element) element.innerHTML = `${esc(first)}<span class="gold-text">${esc(highlight)}</span>`;
  };
  const setInput = (id, value) => {
    const element = document.getElementById(id);
    if (element) element.placeholder = value;
  };

  function renderPage() {
    const C = content.languages[language];
    document.documentElement.lang = language === 'en' ? 'en' : 'zh-CN';
    document.title = C.pageTitle;
    const description = document.querySelector('meta[name="description"]');
    if (description) description.setAttribute('content', C.description);

    document.querySelectorAll('[data-i18n]').forEach((element) => {
      const value = getPath(C, element.dataset.i18n);
      if (value !== undefined) element.textContent = value;
    });
    document.querySelectorAll('[data-language-option]').forEach((element) => {
      element.classList.toggle('language-option-active', element.dataset.languageOption === language);
    });

    setText('hero-description', C.hero.description);
    setText('hero-primary', C.hero.primaryCta);
    setText('hero-secondary', C.hero.secondaryCta);
    setText('hero-title', C.hero.title);
    if (C.brandVideo) {
      setText('brand-video-kicker', C.brandVideo.kicker);
      setHeading('brand-video-title', C.brandVideo.titlePlain, C.brandVideo.titleHighlight);
      setText('brand-video-description', C.brandVideo.description);
      const brandVideoEl = document.getElementById('brand-video-player');
      if (brandVideoEl && brandVideoEl.getAttribute('src') !== C.brandVideo.videoSrc) {
        const wasPlaying = !brandVideoEl.paused;
        brandVideoEl.setAttribute('src', C.brandVideo.videoSrc);
        brandVideoEl.load();
        if (wasPlaying) brandVideoEl.play().catch(() => {});
      }
    }
    setText('architecture-kicker', C.architecture.kicker);
    setHeading('architecture-title', language === 'en' ? 'Growth is not more tools. ' : '增长不是更多工具，', language === 'en' ? 'It is a shorter path to outcomes.' : '而是一条更短的结果链。');
    setText('architecture-description', C.architecture.description);
    document.getElementById('architecture-image')?.setAttribute('alt', C.architecture.imageAlt);
    setText('services-kicker', C.services.kicker);
    setHeading('services-title', language === 'en' ? 'From being seen, to being chosen, ' : '从被看见，到被选择，', language === 'en' ? 'to making results reusable.' : '再到结果可复用。');
    setText('services-description', C.services.description);
    setText('process-kicker', C.process.kicker);
    setHeading('process-title', language === 'en' ? 'Every step has evidence. ' : '每一步都有证据，', language === 'en' ? 'Every cycle gets smarter.' : '每一轮都会变得更聪明。');
    setText('products-kicker', C.products.kicker);
    setHeading('products-title', language === 'en' ? 'Four modules connected to one ' : '四个模块，连接同一个', language === 'en' ? 'business goal.' : '业务目标。');
    setText('agents-kicker', C.agents.kicker);
    setHeading('agents-title', language === 'en' ? 'Turn customer signals into ' : '把客户信号，', language === 'en' ? 'the next growth action.' : '变成下一步增长动作。');
    setText('agents-description', C.agents.description);
    setText('agents-demo-note', C.agents.demoNote);
    const selectedAgent = C.agents.items.find((item) => item.id === activeAgent) || C.agents.items[0];
    activeAgent = selectedAgent.id;
    document.getElementById('agent-tabs').innerHTML = C.agents.items.map((item) => `<button type="button" class="agent-tab${item.id === activeAgent ? ' active' : ''}" data-agent="${esc(item.id)}" style="--agent-accent:${esc(item.accent)}" aria-pressed="${item.id === activeAgent}"><span class="tab-index">${esc(item.index)}</span><span><strong>${esc(item.title)}</strong><small>${esc(item.short)}</small></span><span class="tab-arrow" aria-hidden="true">↗</span></button>`).join('');
    document.getElementById('agent-detail').style.setProperty('--agent-accent', selectedAgent.accent);
    document.getElementById('agent-detail').innerHTML = `<div class="agent-detail-top"><span class="agent-detail-eyebrow">${esc(selectedAgent.eyebrow)}</span><span class="agent-detail-count">${esc(selectedAgent.index)} / 04</span></div><h3>${esc(selectedAgent.title)}</h3><p class="agent-detail-description">${esc(selectedAgent.description)}</p><div class="agent-detail-columns"><div class="agent-detail-column"><span class="agent-detail-label">${esc(C.agents.questionsLabel)}</span>${selectedAgent.questions.map((question) => `<p><span>＋</span>${esc(question)}</p>`).join('')}</div><div class="agent-detail-column"><span class="agent-detail-label">${esc(C.agents.inputsLabel)}</span><div class="agent-chips">${selectedAgent.inputs.map((input) => `<span class="agent-chip">${esc(input)}</span>`).join('')}</div></div></div><div class="agent-detail-footer"><div><span class="agent-detail-label">${esc(C.agents.outputsLabel)}</span><div class="agent-output-list">${selectedAgent.outputs.map((output) => `<span><i></i>${esc(output)}</span>`).join('')}</div></div><div class="agent-progress"><span style="width:${Number(selectedAgent.index) / C.agents.items.length * 100}%"></span></div><span class="agent-progress-number">${esc(selectedAgent.index)}</span></div>`;
    document.querySelectorAll('#agent-tabs [data-agent]').forEach((button) => button.addEventListener('click', () => { activeAgent = button.dataset.agent; renderPage(); }));
    setText('operations-kicker', C.operations.kicker);
    setHeading('operations-title', language === 'en' ? 'Keep operating decisions in sync with ' : '让经营决策，', language === 'en' ? 'every supply signal.' : '跟上每一个供应链信号。');
    setText('operations-description', C.operations.description);
    setText('operations-demo-note', C.operations.demoNote);
    const selectedOperationsAgent = C.operations.items.find((item) => item.id === activeOperationsAgent) || C.operations.items[0];
    activeOperationsAgent = selectedOperationsAgent.id;
    document.getElementById('operations-tabs').innerHTML = C.operations.items.map((item) => `<button type="button" class="agent-tab${item.id === activeOperationsAgent ? ' active' : ''}" data-operations-agent="${esc(item.id)}" style="--agent-accent:${esc(item.accent)}" aria-pressed="${item.id === activeOperationsAgent}"><span class="tab-index">${esc(item.index)}</span><span><strong>${esc(item.title)}</strong><small>${esc(item.short)}</small></span><span class="tab-arrow" aria-hidden="true">↗</span></button>`).join('');
    document.getElementById('operations-detail').style.setProperty('--agent-accent', selectedOperationsAgent.accent);
    document.getElementById('operations-detail').innerHTML = `<div class="agent-detail-top"><span class="agent-detail-eyebrow">${esc(selectedOperationsAgent.eyebrow)}</span><span class="agent-detail-count">${esc(selectedOperationsAgent.index)} / 04</span></div><h3>${esc(selectedOperationsAgent.title)}</h3><p class="agent-detail-description">${esc(selectedOperationsAgent.description)}</p><div class="agent-detail-columns"><div class="agent-detail-column"><span class="agent-detail-label">${esc(C.operations.questionsLabel)}</span>${selectedOperationsAgent.questions.map((question) => `<p><span>＋</span>${esc(question)}</p>`).join('')}</div><div class="agent-detail-column"><span class="agent-detail-label">${esc(C.operations.inputsLabel)}</span><div class="agent-chips">${selectedOperationsAgent.inputs.map((input) => `<span class="agent-chip">${esc(input)}</span>`).join('')}</div></div></div><div class="agent-detail-footer"><div><span class="agent-detail-label">${esc(C.operations.outputsLabel)}</span><div class="agent-output-list">${selectedOperationsAgent.outputs.map((output) => `<span><i></i>${esc(output)}</span>`).join('')}</div></div><div class="agent-progress"><span style="width:${Number(selectedOperationsAgent.index) / C.operations.items.length * 100}%"></span></div><span class="agent-progress-number">${esc(selectedOperationsAgent.index)}</span></div>`;
    document.querySelectorAll('#operations-tabs [data-operations-agent]').forEach((button) => button.addEventListener('click', () => { activeOperationsAgent = button.dataset.operationsAgent; renderPage(); }));
    setText('delivery-kicker', C.delivery.kicker);
    setHeading('delivery-title', language === 'en' ? 'Move data insight into the ' : '让数据洞察，', language === 'en' ? 'delivery room.' : '研发交付现场。');
    setText('delivery-description', C.delivery.description);
    setText('delivery-demo-note', C.delivery.demoNote);
    const selectedDeliveryAgent = C.delivery.items.find((item) => item.id === activeDeliveryAgent) || C.delivery.items[0];
    activeDeliveryAgent = selectedDeliveryAgent.id;
    document.getElementById('delivery-tabs').innerHTML = C.delivery.items.map((item) => `<button type="button" class="agent-tab${item.id === activeDeliveryAgent ? ' active' : ''}" data-delivery-agent="${esc(item.id)}" style="--agent-accent:${esc(item.accent)}" aria-pressed="${item.id === activeDeliveryAgent}"><span class="tab-index">${esc(item.index)}</span><span><strong>${esc(item.title)}</strong><small>${esc(item.short)}</small></span><span class="tab-arrow" aria-hidden="true">↗</span></button>`).join('');
    document.getElementById('delivery-detail').style.setProperty('--agent-accent', selectedDeliveryAgent.accent);
    document.getElementById('delivery-detail').innerHTML = `<div class="agent-detail-top"><span class="agent-detail-eyebrow">${esc(selectedDeliveryAgent.eyebrow)}</span><span class="agent-detail-count">${esc(selectedDeliveryAgent.index)} / 04</span></div><h3>${esc(selectedDeliveryAgent.title)}</h3><p class="agent-detail-description">${esc(selectedDeliveryAgent.description)}</p><div class="agent-detail-columns"><div class="agent-detail-column"><span class="agent-detail-label">${esc(C.delivery.questionsLabel)}</span>${selectedDeliveryAgent.questions.map((question) => `<p><span>＋</span>${esc(question)}</p>`).join('')}</div><div class="agent-detail-column"><span class="agent-detail-label">${esc(C.delivery.inputsLabel)}</span><div class="agent-chips">${selectedDeliveryAgent.inputs.map((input) => `<span class="agent-chip">${esc(input)}</span>`).join('')}</div></div></div><div class="agent-detail-footer"><div><span class="agent-detail-label">${esc(C.delivery.outputsLabel)}</span><div class="agent-output-list">${selectedDeliveryAgent.outputs.map((output) => `<span><i></i>${esc(output)}</span>`).join('')}</div></div><div class="agent-progress"><span style="width:${Number(selectedDeliveryAgent.index) / C.delivery.items.length * 100}%"></span></div><span class="agent-progress-number">${esc(selectedDeliveryAgent.index)}</span></div>`;
    document.querySelectorAll('#delivery-tabs [data-delivery-agent]').forEach((button) => button.addEventListener('click', () => { activeDeliveryAgent = button.dataset.deliveryAgent; renderPage(); }));
    if (C.businessModel) { setText('business-model-kicker', C.businessModel.kicker); setHeading('business-model-title', C.businessModel.titlePlain, C.businessModel.titleHighlight); setText('business-model-description', C.businessModel.description); document.getElementById('business-model-grid').innerHTML = C.businessModel.items.map(([title, desc], index) => `<article class="rounded-2xl border border-[var(--line)] bg-mist p-6"><div class="text-3xl font-black text-gold-deep">0${index + 1}</div><h3 class="mt-5 font-black text-navy">${esc(title)}</h3><p class="mt-2 leading-7 text-body">${esc(desc)}</p></article>`).join(''); }
    setText('proof-kicker', C.proof.kicker);
    setHeading('proof-title', language === 'en' ? 'Translate complex AI capability into ' : '把复杂的 AI 能力，翻译成管理者能看懂的', language === 'en' ? 'business results.' : '业务结果。');
    setText('proof-description', C.proof.description);
    setText('positioning-kicker', C.positioning.kicker);
    setText('positioning-title', C.positioning.title);
    setText('positioning-description', C.positioning.description);
    setText('positioning-status', C.positioning.status);
    document.getElementById('positioning-grid').innerHTML = C.positioning.items.map(([title, desc], index) => `<article class="rounded-2xl border border-[var(--line)] bg-mist p-6"><div class="text-3xl font-black text-gold-deep">0${index + 1}</div><h3 class="mt-5 font-black text-navy">${esc(title)}</h3><p class="mt-2 leading-7 text-body">${esc(desc)}</p></article>`).join('');
    if (C.capabilities) { setText('capabilities-kicker', C.capabilities.kicker); setHeading('capabilities-title', C.capabilities.titlePlain, C.capabilities.titleHighlight); setText('capabilities-description', C.capabilities.description); document.getElementById('capabilities-grid').innerHTML = C.capabilities.items.map((line) => `<div class="flex items-start gap-3 rounded-xl border border-[var(--line)] bg-white p-4"><span class="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-gold" aria-hidden="true"></span><p class="text-sm leading-7 text-body">${esc(line)}</p></div>`).join(''); }
    setText('industry-label', C.industries.label);
    setText('faq-kicker', C.faq.kicker);
    setHeading('faq-title', language === 'en' ? 'Answer the important questions ' : '开始之前，先把', language === 'en' ? 'before you begin.' : '关键问题说清楚。');
    setText('contact-eyebrow', C.contact.eyebrow);
    setText('contact-title', C.contact.title);
    setText('contact-description', C.contact.description);
    setText('company-label', C.contact.company);
    setText('email-label', C.contact.email);
    setText('goal-label', C.contact.goal);
    setInput('company', C.contact.companyPlaceholder);
    setInput('email', C.contact.emailPlaceholder);
    setInput('goal', C.contact.goalPlaceholder);
    setText('contact-submit', C.contact.submit);
    setText('footer-copyright', C.footer.copyright);
    setText('footer-top', C.footer.top);
    setText('footer-contact', C.footer.contact);

    document.getElementById('business-grid').innerHTML = C.business.map((item) => `<article class="group rounded-3xl border border-[var(--line)] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-soft sm:p-8"><div class="flex items-start justify-between gap-4"><span class="display text-4xl font-black text-gold/70">${esc(item.index)}</span><span class="rounded-full bg-mist px-3 py-1 text-xs font-bold text-navy">${esc(item.english)}</span></div><h3 class="display mt-7 text-2xl font-black">${esc(item.title)}</h3><p class="mt-3 font-semibold text-navy">${esc(item.promise)}</p><p class="mt-4 leading-7 text-body">${esc(item.detail)}</p><div class="mt-7 grid gap-4 border-t border-[var(--line)] pt-5 sm:grid-cols-2"><div><div class="text-xs font-bold uppercase tracking-widest text-gold-deep">${esc(C.services.input)}</div><div class="mt-2 text-sm leading-6 text-body">${item.inputs.map(esc).join(' · ')}</div></div><div><div class="text-xs font-bold uppercase tracking-widest text-navy">${esc(C.services.output)}</div><div class="mt-2 text-sm leading-6 text-body">${item.outputs.map(esc).join(' · ')}</div></div></div></article>`).join('');
    document.getElementById('process-grid').innerHTML = C.process.items.map(([num, title, desc]) => `<article class="rounded-2xl border border-[var(--line)] bg-white p-5"><div class="text-sm font-black text-gold-deep">${esc(num)}</div><h3 class="mt-5 font-black text-navy">${esc(title)}</h3><p class="mt-3 text-sm leading-6 text-body">${esc(desc)}</p></article>`).join('');
    document.getElementById('product-grid').innerHTML = C.products.items.map((item, index) => `<article class="relative overflow-hidden rounded-3xl border border-[var(--line)] bg-white p-6 shadow-sm sm:p-8"><div class="absolute right-0 top-0 h-32 w-32 rounded-bl-full bg-gold/10"></div><div class="relative"><span class="text-xs font-black uppercase tracking-[.2em] text-gold-deep">${esc(item.tag)} · 0${index + 1}</span><h3 class="display mt-5 text-3xl font-black text-navy">${esc(item.title)}</h3><p class="mt-2 font-bold text-gold-deep">${esc(item.summary)}</p><p class="mt-5 max-w-xl leading-7 text-body">${esc(item.description)}</p><div class="mt-7 flex flex-wrap gap-2">${item.modules.map((module) => `<span class="rounded-full border border-[var(--line)] bg-mist px-3 py-1.5 text-sm font-semibold text-navy">${esc(module)}</span>`).join('')}</div></div></article>`).join('');
    document.getElementById('proof-grid').innerHTML = C.proof.items.map(([title, desc], index) => `<article class="rounded-2xl border border-[var(--line)] bg-white p-6"><div class="text-3xl font-black text-gold-deep">0${index + 1}</div><h3 class="mt-5 font-black text-navy">${esc(title)}</h3><p class="mt-2 leading-7 text-body">${esc(desc)}</p></article>`).join('');
    document.getElementById('industry-list').innerHTML = C.industries.items.map((item) => `<span class="rounded-full border border-[var(--line)] bg-white px-4 py-2 text-sm font-semibold text-navy">${esc(item)}</span>`).join('');
    document.getElementById('faq-list').innerHTML = C.faq.items.map(([question, answer], index) => `<details class="group py-5" ${index === 0 ? 'open' : ''}><summary class="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-navy"><span>${esc(question)}</span><span class="text-xl text-gold-deep transition group-open:rotate-45">＋</span></summary><p class="max-w-3xl pt-4 leading-7 text-body">${esc(answer)}</p></details>`).join('');

    const toggle = document.getElementById('language-toggle');
    toggle.setAttribute('aria-pressed', String(language === 'en'));
    toggle.setAttribute('aria-label', `${C.language.label}: ${language === 'en' ? 'English' : '中文'}`);
    const menuButton = document.getElementById('menu-button');
    menuButton.setAttribute('aria-label', language === 'en' ? 'Open menu' : '打开菜单');
    const form = document.getElementById('contact-form');
    form.dataset.successMessage = C.contact.success;
  }

  document.getElementById('language-toggle').addEventListener('click', () => {
    language = language === 'zh' ? 'en' : 'zh';
    try { window.localStorage.setItem(storageKey, language); } catch (_) { /* private browsing */ }
    renderPage();
  });
  const menuButton = document.getElementById('menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  menuButton.addEventListener('click', () => { const open = mobileMenu.classList.toggle('hidden') === false; menuButton.setAttribute('aria-expanded', String(open)); menuButton.textContent = open ? '×' : '☰'; });
  document.querySelectorAll('#mobile-menu a').forEach((link) => link.addEventListener('click', () => { mobileMenu.classList.add('hidden'); menuButton.setAttribute('aria-expanded', 'false'); menuButton.textContent = '☰'; }));
  document.getElementById('contact-form').addEventListener('submit', (event) => { event.preventDefault(); document.getElementById('form-note').textContent = event.currentTarget.dataset.successMessage; event.currentTarget.reset(); });
  renderPage();
}());
