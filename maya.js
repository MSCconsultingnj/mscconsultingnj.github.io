/* Maya · Asistente virtual de MSC International · Fase 1 (sin IA externa)
   Responde solo con la base de conocimiento aprobada. No guarda datos:
   los datos del visitante se envían por WhatsApp o correo solo si él lo decide.
   Para cambiar respuestas, edite el objeto KB más abajo. */
(function () {
  'use strict';
  var CAL = 'https://cal.com/mscconsultingnj/consulta-inicial';
  var WA = '17328155662';
  var MAIL = 'info@mscconsultingnj.com';

  /* ---------- Base de conocimiento (fuente: Base_de_conocimiento_MSC_v2.md) ---------- */
  var KB = {
    servicios: {
      kw: ['servicio', 'ofrecen', 'hacen', 'que hacen', 'service', 'offer', 'what do you do'],
      es: 'Ofrecemos directamente:<ul><li><b>Diseño de páginas web</b> adaptadas a celulares, con WhatsApp y SEO local (5 a 15 días hábiles).</li><li><b>Manejo de redes sociales</b>: Facebook, Instagram y LinkedIn, con contenido bilingüe.</li><li><b>IA y automatización</b>: chatbots, agenda 24/7 y flujos de trabajo (7 a 10 días hábiles).</li><li><b>Orientación en formularios y trámites</b> (24 a 72 horas hábiles).</li></ul>Y coordinamos con <b>aliados autorizados</b>: contabilidad, taxes y formación de compañías; notarización y bodas; traducciones certificadas; clases de español.',
      en: 'We provide directly:<ul><li><b>Website design</b>, mobile-friendly, with WhatsApp and local SEO (5 to 15 business days).</li><li><b>Social media management</b>: Facebook, Instagram and LinkedIn, bilingual content.</li><li><b>AI and automation</b>: chatbots, 24/7 booking and workflows (7 to 10 business days).</li><li><b>Guidance with forms and paperwork</b> (24 to 72 business hours).</li></ul>And we coordinate with <b>authorized partners</b>: accounting, taxes and company formation; notary and weddings; certified translations; Spanish classes.',
      next: ['consulta', 'precios', 'aliados']
    },
    consulta: {
      kw: ['cita', 'agendar', 'agenda', 'consulta', 'gratis', 'reservar', 'appointment', 'book', 'free', 'consultation', 'schedule'],
      es: 'La <b>consulta inicial de diagnóstico es gratis los primeros 30 minutos</b>, por teléfono o Google Meet. Cada 30 minutos adicionales cuestan $20. Las visitas presenciales tienen un costo que se acuerda antes, salvo que estén incluidas en un acuerdo de servicio.<br><br>Prepare un breve resumen de sus objetivos, sus dudas sobre el servicio de interés y los datos de su compañía.',
      en: 'The <b>initial consultation is free for the first 30 minutes</b>, by phone or Google Meet. Each additional 30 minutes is $20. On-site visits have a cost agreed in advance, unless included in a service agreement.<br><br>Please prepare a short summary of your goals, your questions about the service and your company details.',
      act: 'cal', next: ['horario', 'cancelar']
    },
    precios: {
      kw: ['precio', 'costo', 'cuesta', 'cuanto', 'tarifa', 'cobran', 'price', 'cost', 'how much', 'rate', 'fee'],
      es: 'Nuestros precios se confirman en la <b>consulta inicial gratuita</b>, según el alcance de cada caso; así le damos un monto exacto y no una cifra que luego cambie. La consulta es gratis los primeros 30 minutos y cada 30 minutos adicionales cuestan $20.',
      en: 'Our prices are confirmed in the <b>free initial consultation</b>, based on the scope of each case, so you get an exact amount rather than a figure that changes later. The consultation is free for the first 30 minutes; each additional 30 minutes is $20.',
      act: 'cal', next: ['pago', 'servicios']
    },
    horario: {
      kw: ['horario', 'hora', 'abierto', 'abren', 'disponib', 'hours', 'open', 'when'],
      es: 'Atendemos con cita previa (hora del Este):<ul><li>Lunes a viernes: 12:00–3:00 p.m. y 4:00–7:00 p.m.</li><li>Sábado: 9:00 a.m.–12:00 p.m. y 2:00–6:00 p.m.</li><li>Domingo: 3:00–6:00 p.m.</li></ul>Se puede reservar con al menos 2 horas de anticipación y hasta 15 días por adelantado.',
      en: 'We work by appointment (Eastern Time):<ul><li>Monday to Friday: 12:00–3:00 p.m. and 4:00–7:00 p.m.</li><li>Saturday: 9:00 a.m.–12:00 p.m. and 2:00–6:00 p.m.</li><li>Sunday: 3:00–6:00 p.m.</li></ul>Book at least 2 hours ahead and up to 15 days in advance.',
      act: 'cal'
    },
    cancelar: {
      kw: ['cancelar', 'reprogramar', 'cambiar mi cita', 'cancel', 'reschedule', 'change my appointment'],
      es: 'Puede cancelar o reprogramar con al menos <b>24 horas de anticipación</b>, con los enlaces "Reprogramar" o "Cancelar" de su correo de confirmación. Por favor, no responda "No" a la invitación del calendario: eso no cancela la cita.',
      en: 'You can cancel or reschedule at least <b>24 hours in advance</b> using the "Reschedule" or "Cancel" links in your confirmation email. Please do not reply "No" to the calendar invitation: that does not cancel the appointment.'
    },
    zona: {
      kw: ['donde', 'ubica', 'direccion', 'oficina', 'zona', 'ciudad', 'condado', 'union', 'where', 'location', 'office', 'area', 'county'],
      es: 'Estamos en <b>Elizabeth, NJ 07202</b>. No tenemos oficina abierta al público: atendemos por teléfono, videollamada o visita al cliente, siempre con cita, en Union County y el resto de New Jersey.',
      en: 'We are in <b>Elizabeth, NJ 07202</b>. We have no walk-in office: we serve by phone, video call or client visit, always by appointment, in Union County and the rest of New Jersey.',
      next: ['consulta']
    },
    pago: {
      kw: ['pago', 'pagar', 'zelle', 'paypal', 'efectivo', 'deposito', 'reembolso', 'payment', 'pay', 'cash', 'deposit', 'refund'],
      es: 'Aceptamos <b>efectivo, Zelle, transferencia bancaria, cheque y PayPal</b>. Los proyectos web y de automatización requieren un depósito inicial del 50%. Las consultas ya realizadas, el depósito una vez iniciado el diseño y los meses ya iniciados de planes mensuales no son reembolsables.<br><br>Por seguridad, nunca pedimos datos de tarjetas ni bancarios por este chat.',
      en: 'We accept <b>cash, Zelle, bank transfer, check and PayPal</b>. Web and automation projects require a 50% initial deposit. Completed consultations, the deposit once design has started, and monthly plans once the month has begun are non-refundable.<br><br>For your security, we never ask for card or bank details in this chat.'
    },
    mantenimiento: {
      kw: ['mantenimiento', 'actualiza', 'maintenance', 'update'],
      es: 'Sí. Ofrecemos <b>planes mensuales de mantenimiento web</b> según la cantidad de actualizaciones al mes (textos, fotos, horarios, servicios), y también actualizaciones sueltas. El manejo de redes sociales es un plan mensual aparte. Le damos el detalle en la consulta inicial.',
      en: 'Yes. We offer <b>monthly website maintenance plans</b> based on the number of updates per month (text, photos, hours, services), as well as one-off updates. Social media management is a separate monthly plan. We give you the details in the initial consultation.',
      act: 'cal'
    },
    formularios: {
      kw: ['formulario', 'tramite', 'uscis', 'aplicacion', 'documento', 'form', 'paperwork', 'application'],
      es: 'Le orientamos paso a paso en el llenado de formularios oficiales y la preparación de expedientes. Traiga un borrador o los datos que pide el formulario y sus documentos de soporte vigentes (identificación, facturas o comprobantes).<br><br><i>MSC no es un bufete de abogados y no ofrece asesoría legal ni representación migratoria. Si su caso requiere un abogado, le referimos a un profesional autorizado.</i>',
      en: 'We guide you step by step in filling out official forms and preparing files. Bring a draft or the data the form asks for, plus your current supporting documents (ID, invoices or receipts).<br><br><i>MSC is not a law firm and does not provide legal advice or immigration representation. If your case needs an attorney, we refer you to a licensed professional.</i>',
      act: 'cal'
    },
    aliados: {
      kw: ['aliado', 'notari', 'boda', 'traduc', 'contab', 'tax', 'impuesto', 'llc', 'compania', 'empresa', 'clase', 'espanol', 'partner', 'notary', 'wedding', 'translat', 'account', 'company', 'class', 'spanish'],
      es: 'Coordinamos estos servicios con <b>aliados autorizados e independientes</b> en New Jersey:<ul><li>Contabilidad, taxes y formación de compañías (LLC, EIN).</li><li>Notarización y bodas civiles.</li><li>Traducciones certificadas español–inglés (24 a 48 horas hábiles).</li><li>Clases de español para niños y adultos.</li></ul><i>Los servicios contables, notariales, legales y de traducción certificada son prestados por aliados autorizados.</i>',
      en: 'We coordinate these services with <b>authorized, independent partners</b> in New Jersey:<ul><li>Accounting, taxes and company formation (LLC, EIN).</li><li>Notary and civil weddings.</li><li>Certified Spanish–English translations (24 to 48 business hours).</li><li>Spanish classes for children and adults.</li></ul><i>Accounting, notarial, legal and certified translation services are provided by authorized partners.</i>',
      next: ['consulta', 'persona']
    },
    legal: {
      kw: ['abogado', 'legal', 'inmigra', 'migratori', 'green card', 'residencia', 'lawyer', 'attorney', 'immigration'],
      es: 'No ofrecemos asesoría legal ni representación migratoria: MSC no es un bufete de abogados. Sí le orientamos en el llenado de formularios que usted mismo puede presentar, y si su caso requiere un abogado, le referimos a un profesional autorizado.',
      en: 'We do not provide legal advice or immigration representation: MSC is not a law firm. We can guide you in filling out forms you can file yourself, and if your case needs an attorney, we refer you to a licensed professional.',
      next: ['formularios', 'persona']
    },
    idioma: {
      kw: ['idioma', 'ingles', 'language', 'english', 'speak'],
      es: 'Atendemos en <b>español e inglés</b>.',
      en: 'We serve in <b>Spanish and English</b>.'
    },
    privacidad: {
      kw: ['privacidad', 'datos', 'seguridad', 'confidencial', 'privacy', 'data', 'secure', 'confidential'],
      es: 'Guardamos sus documentos en cuentas protegidas con verificación en dos pasos, no vendemos ni compartimos sus datos, activamos protección de identidad en dominios y solo acceden el consultor principal o el aliado que atiende su caso.',
      en: 'We store your documents in accounts protected with two-step verification, we never sell or share your data, we enable identity protection on domains, and only the lead consultant or the partner handling your case has access.'
    },
    persona: {
      kw: ['persona', 'humano', 'asesor', 'hablar', 'llamar', 'whatsapp', 'contacto', 'queja', 'human', 'person', 'agent', 'talk', 'call', 'contact', 'complaint'],
      es: 'Con gusto le paso con nuestro equipo. Respondemos por WhatsApp en menos de 2 horas en horario de atención. También puede llamar al <b>732-815-5662</b> o escribir a <b>' + MAIL + '</b>.',
      en: 'I will gladly connect you with our team. We reply on WhatsApp within 2 hours during business hours. You can also call <b>732-815-5662</b> or email <b>' + MAIL + '</b>.',
      act: 'human'
    }
  };
  var MENU = ['servicios', 'consulta', 'precios', 'horario', 'aliados', 'persona'];
  var LABEL = {
    servicios: ['Servicios', 'Services'], consulta: ['Consulta gratis', 'Free consultation'], precios: ['Precios', 'Prices'],
    horario: ['Horario', 'Hours'], aliados: ['Aliados', 'Partners'], persona: ['Hablar con una persona', 'Talk to a person'],
    pago: ['Formas de pago', 'Payment'], cancelar: ['Cancelar o reprogramar', 'Cancel or reschedule'], formularios: ['Formularios', 'Forms']
  };
  var T = {
    es: { title: 'Maya · MSC International', sub: 'Asistente virtual', ph: 'Escriba su pregunta…', send: 'Enviar', open: 'Abrir chat con Maya', close: 'Cerrar',
      hello: '¡Hola! Le doy la bienvenida a MSC International. Soy Maya, su asistente virtual. ¿En qué puedo ayudarle hoy?',
      cal: 'Agendar consulta gratis', wa: 'Escribir por WhatsApp', mail: 'Enviar correo', lead: 'Dejar mis datos',
      dunno: 'No tengo esa información confirmada en este momento. Permítame derivar su consulta con nuestro equipo para darle una respuesta precisa.',
      off: 'Ahora estamos fuera del horario de atención. Déjenos su consulta y le responderemos el próximo día hábil.',
      fName: 'Nombre', fMsg: 'Motivo de su consulta', fGo: 'Enviar por WhatsApp',
      waIntro: 'Hola, escribo desde la web de MSC International.', waName: 'Nombre', waMsg: 'Consulta',
      teaser: '¿Tiene preguntas? <b>Chatee con Maya</b>', teaserS: 'Chatee con Maya', tClose: 'Cerrar aviso',
      note: 'Maya responde con información general. No comparta datos de tarjetas, bancarios ni números de identificación.' },
    en: { title: 'Maya · MSC International', sub: 'Virtual assistant', ph: 'Type your question…', send: 'Send', open: 'Open chat with Maya', close: 'Close',
      hello: 'Hello! Welcome to MSC International. I am Maya, your virtual assistant. How can I help you today?',
      cal: 'Book free consultation', wa: 'Message on WhatsApp', mail: 'Send email', lead: 'Leave my details',
      dunno: 'I do not have that information confirmed right now. Let me pass your question to our team so they can give you an accurate answer.',
      off: 'We are currently outside business hours. Leave us your question and we will reply on the next business day.',
      fName: 'Name', fMsg: 'What do you need?', fGo: 'Send via WhatsApp',
      waIntro: 'Hello, I am writing from the MSC International website.', waName: 'Name', waMsg: 'Question',
      teaser: 'Questions? <b>Chat with Maya</b>', teaserS: 'Chat with Maya', tClose: 'Dismiss',
      note: 'Maya gives general information. Do not share card, bank or ID numbers.' }
  };

  /* Avatar ilustrado de Maya (dibujado en código; no es una foto) */
  var AV = '<svg viewBox="0 0 64 64" aria-hidden="true"><defs><clipPath id="mayaC"><circle cx="32" cy="32" r="32"/></clipPath></defs><g clip-path="url(#mayaC)"><circle cx="32" cy="32" r="32" fill="#0B3D6E"/>' +
    '<path d="M11 66c1-13 9-21 21-21s20 8 21 21z" fill="#D98B1C"/>' +
    '<path d="M18 30c0-10 6-17 14-17s14 7 14 17c0 6-2 11-3 13-1-6-3-9-5-11-4 2-10 2-15-1-2 3-4 6-5 12-1-2-0-8 0-13z" fill="#1B2430"/>' +
    '<ellipse cx="32" cy="31" rx="10" ry="12" fill="#E9B98F"/>' +
    '<path d="M22 27c3-6 7-8 10-8s8 2 10 7c-5 1-12-1-15-5-1 2-3 5-5 6z" fill="#1B2430"/>' +
    '<circle cx="28" cy="31" r="1.4" fill="#1B2430"/><circle cx="36" cy="31" r="1.4" fill="#1B2430"/>' +
    '<path d="M28.5 36.5c2 1.6 5 1.6 7 0" stroke="#9C4F3A" stroke-width="1.4" fill="none" stroke-linecap="round"/>' +
    '<path d="M19 31a13 13 0 0 1 26 0" stroke="#F2B455" stroke-width="2.6" fill="none"/>' +
    '<rect x="16" y="29" width="5" height="8" rx="2.5" fill="#F2B455"/><rect x="43" y="29" width="5" height="8" rx="2.5" fill="#F2B455"/>' +
    '<path d="M45.5 37c0 4-3 6-7 6.5" stroke="#F2B455" stroke-width="1.8" fill="none"/><circle cx="38" cy="43.5" r="1.8" fill="#F2B455"/></g></svg>';

  /* ---------- utilidades ---------- */
  function L() { return (document.documentElement.lang || 'es').slice(0, 2) === 'en' ? 'en' : 'es'; }
  function norm(s) { return s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, ''); }
  function openNow() {
    var p = new Intl.DateTimeFormat('en-US', { timeZone: 'America/New_York', weekday: 'short', hour: 'numeric', minute: 'numeric', hour12: false }).formatToParts(new Date());
    var d = '', h = 0, m = 0;
    p.forEach(function (x) { if (x.type === 'weekday') d = x.value; if (x.type === 'hour') h = +x.value % 24; if (x.type === 'minute') m = +x.value; });
    var t = h + m / 60;
    var r = { Sun: [[15, 18]], Sat: [[9, 12], [14, 18]] }[d] || [[12, 15], [16, 19]];
    return r.some(function (a) { return t >= a[0] && t < a[1]; });
  }
  function match(q) {
    var n = norm(q), best = null, score = 0;
    Object.keys(KB).forEach(function (k) {
      var s = 0;
      KB[k].kw.forEach(function (w) { if (n.indexOf(norm(w)) > -1) s += w.length; });
      if (s > score) { score = s; best = k; }
    });
    return best;
  }

  /* ---------- estilos ---------- */
  var css = '#maya,#maya *{box-sizing:border-box;letter-spacing:normal;text-transform:none}#maya div,#maya p{margin:0}#maya .mh,#maya .mch{position:static;background-image:none}' +
    '#maya-b{position:fixed;right:18px;bottom:18px;z-index:9999;width:60px;height:60px;border-radius:50%;border:0;cursor:pointer;background:#0B3D6E;box-shadow:0 8px 24px rgba(11,61,110,.35);display:flex;align-items:center;justify-content:center}' +
    '#maya-b{width:64px;height:64px;padding:0;background:#0B3D6E;border:3px solid #fff}#maya-b svg{width:100%;height:100%;border-radius:50%}' +
    '#maya-b::after{content:"";position:absolute;right:2px;top:2px;width:13px;height:13px;border-radius:50%;background:#1F8F4E;border:2px solid #fff}' +
    '#maya .mav{width:38px;height:38px;flex:none;border-radius:50%;border:2px solid #fff;overflow:hidden}#maya .mav svg{width:100%;height:100%;display:block}' +
    '#maya-t{position:fixed;right:92px;bottom:30px;z-index:9998;display:none;align-items:center;gap:8px;background:#fff;color:#1B2430;border:1px solid #DCE3EC;border-radius:14px;padding:9px 10px 9px 14px;box-shadow:0 10px 28px rgba(11,61,110,.22);font:14px/1.3 system-ui,-apple-system,"Segoe UI",Roboto,Arial,sans-serif;cursor:pointer;max-width:calc(100vw - 110px)}' +
    '#maya-t.on{display:flex}#maya-t b{color:#0B3D6E}#maya-t button{background:none;border:0;font-size:18px;line-height:1;color:#56667B;cursor:pointer;padding:2px 4px}' +
    '#maya-t .tl{display:inline}#maya-t .ts{display:none}@media (max-width:600px){#maya-t .tl{display:none}#maya-t .ts{display:inline;font-weight:700;color:#0B3D6E}}' +
    '#maya-b:focus-visible,#maya-t button:focus-visible{outline:3px solid #F2B455;outline-offset:2px}' +
    '#maya-b:focus-visible,#maya button:focus-visible,#maya a:focus-visible{outline:3px solid #F2B455;outline-offset:2px}' +
    '#maya{position:fixed;right:18px;bottom:90px;z-index:9999;width:min(370px,calc(100vw - 24px));height:min(560px,calc(100vh - 110px));background:#fff;color:#1B2430;border-radius:18px;box-shadow:0 18px 50px rgba(0,0,0,.25);display:none;flex-direction:column;overflow:hidden;font:15px/1.45 system-ui,-apple-system,"Segoe UI",Roboto,Arial,sans-serif}' +
    '#maya.on{display:flex}#maya .mh{background:#0B3D6E;color:#fff;padding:12px 14px;display:flex;align-items:center;gap:10px;border-bottom:4px solid #D98B1C}' +
    '#maya .mh b{display:block;font-size:15px}#maya .mh small{color:#C9D7E6;font-size:12px}#maya .mh button{margin-left:auto;background:none;border:0;color:#fff;font-size:22px;cursor:pointer;line-height:1}' +
    '#maya .mlg{flex:1;overflow-y:auto;padding:14px;display:flex;flex-direction:column;gap:10px;background:#F4F7FB}' +
    '#maya .mm{max-width:88%;padding:10px 12px;border-radius:14px;background:#fff;border:1px solid #E1E8F0}#maya .mm ul{margin:6px 0 0;padding-left:18px}' +
    '#maya .mu{align-self:flex-end;background:#0B3D6E;color:#fff;border-color:#0B3D6E}' +
    '#maya .mch{display:flex;flex-wrap:wrap;gap:6px}#maya .mch button,#maya .mch a{font:inherit;font-size:13px;padding:6px 11px;border-radius:999px;border:1px solid #0B3D6E;background:#fff;color:#0B3D6E;cursor:pointer;text-decoration:none}' +
    '#maya .mch .mp{background:#D98B1C;border-color:#D98B1C;color:#1B1200;font-weight:700}' +
    '#maya form.mq{display:flex;gap:6px;padding:10px;border-top:1px solid #E1E8F0}#maya input,#maya textarea{flex:1;font:inherit;padding:9px 11px;border:1px solid #C9D3DF;border-radius:10px;min-width:0}' +
    '#maya form.mq button{font:inherit;font-weight:700;background:#0B3D6E;color:#fff;border:0;border-radius:10px;padding:0 14px;cursor:pointer}' +
    '#maya form.mld{display:grid;gap:6px}#maya form.mld button{font:inherit;font-weight:700;background:#1F8F4E;color:#fff;border:0;border-radius:10px;padding:9px;cursor:pointer}' +
    '#maya .mnt{font-size:11px;color:#6B7785;padding:0 12px 8px;text-align:center}';
  var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);

  /* ---------- estructura ---------- */
  var btn = document.createElement('button');
  btn.id = 'maya-b'; btn.type = 'button';
  btn.innerHTML = AV;
  var box = document.createElement('div');
  box.id = 'maya'; box.setAttribute('role', 'dialog'); box.setAttribute('aria-modal', 'false');
  var tip = document.createElement('div'); tip.id = 'maya-t';
  document.body.appendChild(box); document.body.appendChild(tip); document.body.appendChild(btn);
  function tipOff() { tip.classList.remove('on'); try { sessionStorage.setItem('mayaTip', '0'); } catch (e) {} }
  function tipBuild() {
    var t = T[L()];
    tip.innerHTML = '<span class="tl">' + t.teaser + '</span><span class="ts">' + t.teaserS + '</span><button type="button" aria-label="' + t.tClose + '">×</button>';
    tip.querySelector('button').onclick = function (e) { e.stopPropagation(); tipOff(); };
  }
  tip.onclick = function () { tipOff(); if (!box.classList.contains('on')) toggle(); };
  var tipSeen = false; try { tipSeen = sessionStorage.getItem('mayaTip') === '0'; } catch (e) {}
  tipBuild();
  if (!tipSeen) setTimeout(function () { if (!box.classList.contains('on')) tip.classList.add('on'); }, 4000);
  var log, started = false;

  function build() {
    var t = T[L()];
    btn.setAttribute('aria-label', t.open);
    box.setAttribute('aria-label', t.title);
    box.innerHTML = '<div class="mh"><span class="mav">' + AV + '</span><div><b>' + t.title + '</b><small>' + t.sub + '</small></div><button type="button" aria-label="' + t.close + '">×</button></div>' +
      '<div class="mlg" aria-live="polite"></div>' +
      '<form class="mq"><input type="text" maxlength="300" aria-label="' + t.ph + '" placeholder="' + t.ph + '"><button type="submit">' + t.send + '</button></form>' +
      '<div class="mnt">' + t.note + '</div>';
    log = box.querySelector('.mlg');
    box.querySelector('.mh button').onclick = toggle;
    box.querySelector('form.mq').onsubmit = function (e) {
      e.preventDefault();
      var i = this.querySelector('input'), v = i.value.trim();
      if (!v) return; i.value = ''; user(v); answer(match(v));
    };
    started = false;
  }
  function add(html, cls) { var d = document.createElement('div'); d.className = 'mm ' + (cls || ''); d.innerHTML = html; log.appendChild(d); log.scrollTop = log.scrollHeight; return d; }
  function user(txt) { var d = add('', 'mu'); d.textContent = txt; }
  function chips(keys, extra) {
    var lg = L(), d = document.createElement('div'); d.className = 'mch';
    (extra || []).forEach(function (a) { d.appendChild(a); });
    (keys || []).forEach(function (k) {
      var b = document.createElement('button'); b.type = 'button'; b.textContent = LABEL[k][lg === 'en' ? 1 : 0];
      b.onclick = function () { user(b.textContent); answer(k); }; d.appendChild(b);
    });
    log.appendChild(d); log.scrollTop = log.scrollHeight;
  }
  function link(text, href, primary) { var a = document.createElement('a'); a.href = href; a.target = '_blank'; a.rel = 'noopener'; a.textContent = text; if (primary) a.className = 'mp'; return a; }
  function leadBtn() {
    var t = T[L()], b = document.createElement('button'); b.type = 'button'; b.textContent = t.lead;
    b.onclick = function () {
      var f = document.createElement('form'); f.className = 'mld mm';
      f.innerHTML = '<input required maxlength="80" aria-label="' + t.fName + '" placeholder="' + t.fName + '"><textarea required maxlength="400" rows="3" aria-label="' + t.fMsg + '" placeholder="' + t.fMsg + '"></textarea><button type="submit">' + t.fGo + '</button>';
      f.onsubmit = function (e) {
        e.preventDefault();
        var n = f.querySelector('input').value.trim(), q = f.querySelector('textarea').value.trim();
        var msg = t.waIntro + '\n' + t.waName + ': ' + n + '\n' + t.waMsg + ': ' + q;
        window.open('https://wa.me/' + WA + '?text=' + encodeURIComponent(msg), '_blank', 'noopener');
      };
      log.appendChild(f); f.querySelector('input').focus(); log.scrollTop = log.scrollHeight;
    };
    return b;
  }
  function human() {
    var t = T[L()];
    if (!openNow()) add(t.off);
    chips(null, [link(t.wa, 'https://wa.me/' + WA, true), link(t.mail, 'mailto:' + MAIL), leadBtn()]);
  }
  function answer(k) {
    var lg = L(), t = T[lg];
    if (!k) { add(t.dunno); human(); return; }
    var e = KB[k]; add(e[lg]);
    if (e.act === 'cal') chips(e.next, [link(t.cal, CAL, true)]);
    else if (e.act === 'human') human();
    else chips(e.next || MENU.filter(function (x) { return x !== k; }).slice(0, 3));
  }
  function start() { if (started) return; started = true; add(T[L()].hello); chips(MENU); }
  function toggle() {
    var on = box.classList.toggle('on');
    btn.setAttribute('aria-expanded', on);
    if (on) { tipOff(); start(); box.querySelector('input').focus(); } else btn.focus();
  }
  btn.onclick = toggle;
  window.mayaOpen = function () { if (!box.classList.contains('on')) toggle(); };
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && box.classList.contains('on')) toggle(); });
  new MutationObserver(function () { var on = box.classList.contains('on'); build(); tipBuild(); if (on) start(); })
    .observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
  build();
})();
