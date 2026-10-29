(() => {
const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];

// EN lives in the HTML; RU here. EN is read back from the DOM on first switch.
const RU = {
  skip:'Перейти к регистрации', register:'Регистрация',
  promise:'Суббота, когда дизайн и код наконец встречаются.',
  chipDate:'Сб, 17 апреля 2027', chipCity:'Рига', chipFrom:'от €89',
  countH:'До открытия дверей', countEnd:'Эта конференция уже прошла. До встречи в следующем году.',
  whyW:'ЗАЧЕМ',
  o1h:'Передача макетов без потерь', o1p:'Уйдёте с процессом передачи дизайна в код, который команда начнёт применять уже в понедельник.',
  o2h:'Дизайн-системы вживую', o2p:'Посмотрите, как на сцене собирают, ломают и чинят настоящие дизайн-системы.',
  o3h:'Обе стороны в одном зале', o3p:'Познакомьтесь с теми, кто на другом конце передачи макетов, за обедом, а не в очереди задач.',
  schW:'ПРОГРАММА', tdName:'Дизайн', tdLine:'от идеи к интерфейсу', tcName:'Код', tcLine:'от интерфейса к продакшену', tabAll:'Все',
  s1:'Открытие дверей, кофе и бейджи', s2:'Кейноут: Передача макетов и есть продукт',
  s3d:'Токены, которые переживут ребрендинг', s3c:'Компоненты без очереди на ревью',
  s4d:'Прототипы в браузере, а не в слайдах', s4c:'CSS, который понятен дизайнерам', s5:'Обед',
  s6d:'Воркшоп: от скетча к токенам', s6c:'Воркшоп: от токенов к компонентам',
  s7:'Панель: Кому принадлежит дизайн-система?', sAll:'Все спикеры',
  s8:'Закрытие: Одна команда, два набора инструментов', s9:'Напитки и общение до 19:00',
  nIlze:'Илзе Озола', nArturs:'Артурс Калнс', nNadia:'Надя Петрова', nTomas:'Томас Берг', nEva:'Ева Сорокина',
  nIlzeNadia:'Илзе Озола, Надя Петрова', nArtursTomas:'Артурс Калнс, Томас Берг',
  spkW:'СПИКЕРЫ', both:'Кейноут', closing:'Закрытие',
  s2t:'Передача макетов и есть продукт', s8t:'Одна команда, два набора инструментов',
  r1:'Арт-директор, Fieldnote Studio<br>Стокгольм', r2:'Руководитель дизайн-системы, Kvadrats<br>Рига',
  r3:'Фронтенд-разработчик, Pine Yard<br>Рига', r4:'Продуктовый дизайнер, Tallow<br>Таллин',
  r5:'CSS-инженер, Grain Works<br>Копенгаген', r6:'Руководитель продукта, Lumen Desk<br>Вильнюс',
  tixW:'БИЛЕТЫ', tEarly:'Ранний', tEarlyNote:'До 31 января 2027',
  tEarlyList:'<li>Все доклады обоих треков</li><li>Место на одном воркшопе</li><li>Обед, кофе и напитки</li><li>Записи после конференции</li>',
  cEarly:'Выбрать «Ранний»', hot:'Быстро раскупают', tStd:'Стандарт', tStdNote:'С 1 февраля 2027',
  tStdList:'<li>Все доклады обоих треков</li><li>Место на одном воркшопе</li><li>Обед, кофе и напитки</li><li>Записи после конференции</li>',
  cStd:'Выбрать «Стандарт»', tVipNote:'Всё из «Стандарта», а также',
  tVipList:'<li>Ужин со спикерами в пятницу, 16 апреля</li><li>Места в первых рядах</li><li>Оба воркшопа</li><li>Печатная программа и шопер</li>',
  cVip:'Выбрать VIP', boss:'Нужно согласовать с руководителем?', bossBtn:'Скопировать короткое письмо',
  regH:'Регистрация на Northlight Summit', fName:'Имя и фамилия', fEmail:'Email', fTier:'Билет',
  fDiet:'Питание', dNone:'Без ограничений', dVeg:'Вегетарианское', dVegan:'Веганское', dGluten:'Без глютена', dOther:'Другое',
  fOther:'Расскажите, что вам нужно', fConsent:'Я согласен(на), что мои данные используются только для этой регистрации.',
  demo:'Демо-форма: ничего не отправляется и не сохраняется.',
  doneH:'Вы в списке', doneRef:'Номер', doneDemo:'Демо: ничего не отправлено.',
  sumH:'Ваш билет', sumNone:'Выберите билет', sumMeta:'Сб, 17 апреля 2027 · Depot 7, Рига',
  venW:'МЕСТО', vName:'Depot 7, Old Rail Yard', vAddr:'Рига, Латвия. Двери открываются в 09:30.',
  vTramH:'Трамвай', vTram:'Линия 7 до остановки Depot, затем 3 минуты пешком.',
  vRailH:'Поезд', vRail:'10 минут пешком от Центрального вокзала Риги.',
  vParkH:'Парковка', vPark:'Мест мало. Велопарковка у главных ворот.',
  faqH:'Вопросы',
  q1:'Доклады на английском или на русском?', a1:'Все доклады на английском. Слайды и программа на английском и русском, а вопросы спикеры принимают на обоих языках.',
  q2:'Можно вернуть билет?', a2:'Да, полный возврат до 17 марта 2027. После этого билет можно передать другому человеку.',
  q3:'Можно передать билет коллеге?', a3:'Да. Пришлите нам имя и email коллеги не позднее чем за день до конференции, это бесплатно.',
  q4:'Доступна ли площадка для людей с инвалидностью?', a4:'Зал на одном уровне, вход без ступенек, есть доступный туалет и тихая комната. Если нужно что-то ещё, напишите в форме.',
  q5:'Будут ли записи докладов?', a5:'Да. Записи входят в каждый билет и придут на email примерно через две недели. Воркшопы не записываются.',
  q6:'Можно получить счёт на компанию?', a6:'Да. Добавьте реквизиты компании после регистрации, и мы пришлём счёт с НДС в течение двух рабочих дней.',
  fDate:'17 апреля 2027 · Рига',
  disc:'Концепт-проект. Вымышленное событие, люди, компании и площадка. Не связано ни с одним реальным событием. Форма ничего не отправляет.',
};
const MSG = {
  en:{name:'Please enter your name.', email:'Enter an email like name@example.com.', tier:'Choose a ticket.',
      other:'Tell us your dietary need.', consent:'Please agree to continue.',
      done:(n,t)=>`Thanks, ${n}. Your ${t} ticket for 17 April is reserved.`,
      note:'Hi, I would like to attend Northlight Summit, a one-day design and code conference in Riga on Saturday 17 April 2027. Tickets start at €89. I will come back with a design-to-code handoff process our team can use, and the talks are recorded so I can share them. Could we cover the ticket?',
      copied:'Copied', tiers:{early:'Early',standard:'Standard',vip:'VIP'},
      units:{d:['day','days'],h:['hour','hours'],m:['minute','minutes'],s:['second','seconds']}, left:d=>`${d} ${d===1?'day':'days'} to go`},
  ru:{name:'Введите имя.', email:'Введите email в формате name@example.com.', tier:'Выберите билет.',
      other:'Укажите ваши ограничения в питании.', consent:'Подтвердите согласие, чтобы продолжить.',
      done:(n,t)=>`Спасибо, ${n}. Билет «${t}» на 17 апреля забронирован.`,
      note:'Здравствуйте! Хочу посетить Northlight Summit, однодневную конференцию о дизайне и коде в Риге, в субботу 17 апреля 2027. Билеты от €89. Я привезу процесс передачи макетов в код, который пригодится нашей команде, а записи докладов можно будет показать коллегам. Можем ли мы оплатить билет?',
      copied:'Скопировано', tiers:{early:'Ранний',standard:'Стандарт',vip:'VIP'},
      units:{d:['день','дня','дней'],h:['час','часа','часов'],m:['минута','минуты','минут'],s:['секунда','секунды','секунд']},
      left:d=>`До конференции ${d} ${plural('ru',d,['день','дня','дней'])}`},
};
const PRICE = {early:89, standard:149, vip:290};
let lang = 'en';
const EN = {};
$$('[data-i18n]').forEach(e => { EN[e.dataset.i18n] ??= e.innerHTML; });

function plural(l, n, f){
  if (l === 'en') return n === 1 ? f[0] : f[1];
  const a = n % 10, b = n % 100;
  return a === 1 && b !== 11 ? f[0] : a >= 2 && a <= 4 && (b < 12 || b > 14) ? f[1] : f[2];
}
console.assert(plural('ru',1,['день','дня','дней'])==='день' && plural('ru',3,['день','дня','дней'])==='дня' && plural('ru',11,['день','дня','дней'])==='дней' && plural('ru',22,['день','дня','дней'])==='дня' && plural('ru',25,['день','дня','дней'])==='дней', 'ru plural');

/* fitted words: scale each .fit to its container's content width */
function fit(){
  $$('.fit').forEach(e => {
    const box = e.parentElement, cs = getComputedStyle(box.closest('.hero,.sec'));
    const w = box.closest('.hero,.sec').clientWidth - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight);
    e.style.fontSize = '100px';
    e.style.fontSize = Math.floor(100 * w / e.scrollWidth * 10) / 10 + 'px';
    if (box.classList.contains('hero-title')) box.style.fontSize = e.style.fontSize; // so the h1's own line box matches its words
  });
}

/* language */
function setLang(l){
  lang = l;
  document.documentElement.lang = l;
  $$('[data-i18n]').forEach(e => {
    const k = e.dataset.i18n;
    if (e.id === 'sum-tier') return;
    e.innerHTML = l === 'ru' ? (RU[k] ?? EN[k]) : EN[k];
  });
  $$('.lang button').forEach(b => b.setAttribute('aria-pressed', b.dataset.lang === l));
  try { localStorage.setItem('nls-lang', l); } catch {}
  $$('.err').forEach(e => { if (e.textContent) e.textContent = MSG[l][e.dataset.k] || ''; });
  summary(); tick(true);
  document.fonts.ready.then(fit);
}
$$('.lang button').forEach(b => b.addEventListener('click', () => setLang(b.dataset.lang)));

/* countdown: Riga is UTC+3 in April */
const START = Date.parse('2027-04-17T09:30:00+03:00');
let lastDays = -1;
function tick(force){
  const ms = START - Date.now();
  if (ms <= 0) { $('.tiles').hidden = true; $('.count-end').hidden = false; $('.count-h').hidden = true; return clearInterval(timer); }
  const v = {d:Math.floor(ms/864e5), h:Math.floor(ms/36e5)%24, m:Math.floor(ms/6e4)%60, s:Math.floor(ms/1e3)%60};
  for (const k in v) {
    $(`[data-u=${k}]`).textContent = k === 'd' ? v[k] : String(v[k]).padStart(2, '0');
    $(`[data-u-l=${k}]`).textContent = plural(lang, v[k], MSG[lang].units[k]);
  }
  if (force || v.d !== lastDays) { lastDays = v.d; $('#count-live').textContent = MSG[lang].left(v.d); }
}
const timer = setInterval(tick, 1000);

/* schedule tabs (phone) */
const tabs = $$('[role=tab]'), slots = $('#slots');
function pick(t){
  tabs.forEach(x => { const on = x === t; x.setAttribute('aria-selected', on); x.tabIndex = on ? 0 : -1; });
  slots.dataset.show = t.dataset.show; slots.setAttribute('aria-labelledby', t.id);
  slots.classList.remove('swap'); void slots.offsetWidth; slots.classList.add('swap');
}
tabs.forEach((t, i) => {
  t.addEventListener('click', () => pick(t));
  t.addEventListener('keydown', e => {
    const j = {ArrowRight:i+1, ArrowLeft:i-1, Home:0, End:tabs.length-1}[e.key];
    if (j === undefined) return;
    e.preventDefault(); const n = tabs[(j + tabs.length) % tabs.length]; pick(n); n.focus();
  });
});

/* speaker avatars: initials over two overlapping discs, cropped per person */
const OFF = [[30,34,70,62],[64,30,36,70],[50,72,40,28],[28,62,72,40],[70,66,34,32],[42,26,62,74]];
$$('[data-av]').forEach(e => {
  const [ini, n] = e.dataset.av.split(' '), [ax, ay, bx, by] = OFF[n];
  e.innerHTML = `<svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><circle cx="${ax}" cy="${ay}" r="34" fill="#E4FF3A"/><circle cx="${bx}" cy="${by}" r="34" fill="#F3EFE6" style="mix-blend-mode:multiply"/><text x="50" y="58" text-anchor="middle" font-family="Unbounded" font-weight="800" font-size="24" fill="#F3EFE6" style="mix-blend-mode:difference" letter-spacing="-.5">${ini}</text></svg>`;
});

/* tickets -> form */
const form = $('#form'), F = form.elements;
$$('[data-tier]').forEach(b => b.addEventListener('click', () => {
  const r = form.querySelector(`[name=tier][value=${b.dataset.tier}]`);
  r.checked = true; summary(); clearErr('tier');
  $('#register').scrollIntoView({behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'});
  r.focus({preventScroll: true});
}));
function summary(){
  const t = F.tier.value;
  $('#sum-tier').textContent = t ? MSG[lang].tiers[t] : (lang === 'ru' ? RU.sumNone : EN.sumNone);
  $('#sum-price').textContent = t ? '€' + PRICE[t] : (lang === 'ru' ? RU : EN).chipFrom;
}
form.addEventListener('change', e => {
  if (e.target.name === 'tier') { summary(); clearErr('tier'); }
  if (e.target.name === 'diet') { $('#other-wrap').hidden = e.target.value !== 'other'; if (e.target.value !== 'other') clearErr('other'); }
  if (e.target.name === 'consent' && e.target.checked) clearErr('consent');
});

/* validation */
const CHECK = {
  name: () => F.name.value.trim().length > 1,
  email: () => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(F.email.value.trim()),
  tier: () => !!F.tier.value,
  other: () => F.diet.value !== 'other' || F.other.value.trim().length > 1,
  consent: () => F.consent.checked,
};
const FIELD = {name:'#f-name', email:'#f-email', tier:'[name=tier]', other:'#f-other', consent:'#f-consent'};
function setErr(k){
  const e = $('#e-' + k); e.dataset.k = k; e.textContent = MSG[lang][k];
  $$(FIELD[k], form).forEach(i => i.setAttribute('aria-invalid', 'true'));
}
function clearErr(k){ $('#e-' + k).textContent = ''; $$(FIELD[k], form).forEach(i => i.removeAttribute('aria-invalid')); }
['name', 'email', 'other'].forEach(k => {
  const i = $(FIELD[k]);
  i.addEventListener('blur', () => { if (i.value) CHECK[k]() ? clearErr(k) : setErr(k); });
  i.addEventListener('input', () => { if (i.hasAttribute('aria-invalid') && CHECK[k]()) clearErr(k); });
});
form.addEventListener('submit', e => {
  e.preventDefault();
  const bad = Object.keys(CHECK).filter(k => !CHECK[k]());
  Object.keys(CHECK).forEach(k => bad.includes(k) ? setErr(k) : clearErr(k));
  if (bad.length) return $(FIELD[bad[0]], form).focus();
  const ref = 'NLS-' + Array.from(crypto.getRandomValues(new Uint8Array(4)), b => '23456789ABCDEFGHJKLMNPQRSTUVWXYZ'[b % 32]).join('');
  $('#done-text').textContent = MSG[lang].done(F.name.value.trim(), MSG[lang].tiers[F.tier.value]);
  $('#done-ref').textContent = ref;
  form.hidden = true; const d = $('#done'); d.hidden = false; d.focus();
});

/* manager note */
$('#copy-note').addEventListener('click', async () => {
  const s = $('#copied');
  try { await navigator.clipboard.writeText(MSG[lang].note); s.textContent = MSG[lang].copied; }
  catch { s.textContent = MSG[lang].note; } // no clipboard access: show the text so it can be copied by hand
  setTimeout(() => { if (s.textContent === MSG[lang].copied) s.textContent = ''; }, 2500);
});

/* phone dock: visible after the hero, hidden while the form is on screen */
const dock = $('#dock'), seen = {hero: true, form: false};
new IntersectionObserver(es => {
  es.forEach(x => seen[x.target === $('.hero') ? 'hero' : 'form'] = x.isIntersecting);
  dock.classList.toggle('on', !seen.hero && !seen.form);
}).observe($('.hero'));
new IntersectionObserver(es => es.forEach(x => { seen.form = x.isIntersecting; dock.classList.toggle('on', !seen.hero && !seen.form); })).observe($('#register'));

/* init */
let saved = null;
try { saved = localStorage.getItem('nls-lang'); } catch {}
const start = saved || (/^ru\b/i.test(navigator.language) ? 'ru' : 'en');
start === 'ru' ? setLang('ru') : (summary(), tick(true), document.fonts.ready.then(fit));
let rz; addEventListener('resize', () => { cancelAnimationFrame(rz); rz = requestAnimationFrame(fit); });
})();
