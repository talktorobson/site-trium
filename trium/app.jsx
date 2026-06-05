/* TRIUM BPO — app shell: tweaks, scroll reveals, toast, header state */
const { useState: useStateA, useEffect: useEffectA } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "heroViz": "panel",
  "servicesLayout": "stacked",
  "teamStyle": "navy",
  "compareStyle": "cards",
  "density": "comfortable"
}/*EDITMODE-END*/;

function useReveal(deps) {
  useEffectA(() => {
    const els = Array.from(document.querySelectorAll('.reveal'));
    if (!('IntersectionObserver' in window)) { els.forEach((e) => e.classList.add('in')); return; }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    els.forEach((e) => io.observe(e));
    return () => io.disconnect();
  }, deps);
}

function App() {
  const I = window.TriumIcons;
  const t = TWEAK_DEFAULTS;
  const [toast, setToast] = useStateA('');
  const [scrolled, setScrolled] = useStateA(false);

  useEffectA(() => {
    if (!toast) return;
    const id = setTimeout(() => setToast(''), 3400);
    return () => clearTimeout(id);
  }, [toast]);

  useEffectA(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useReveal([t.heroViz, t.servicesLayout, t.teamStyle, t.compareStyle, t.density]);

  const onWa = () => { window.open(window.TRIUM.waLink(), '_blank'); };
  const onPortal = () => {
    const url = window.TRIUM.PORTAL_URL;
    if (url && url !== '#') { window.open(url, '_blank', 'noopener'); }
    else { setToast('Portal do Cliente em implantação. Clientes recebem o acesso na ativação do contrato.'); }
  };
  const onMenu = () => setToast('Menu mobile — navegue pelas seções rolando a página.');

  const {
    Header, Hero, NumbersStrip, Pain, Services, Segments, Steps, Compare, Team, Faq, Contact, Footer,
  } = window;

  return (
    <div className="site" data-density={t.density}>
      <Header onWa={onWa} onPortal={onPortal} onMenu={onMenu} scrolled={scrolled} />
      <Hero onWa={onWa} heroViz={t.heroViz} />
      <NumbersStrip />
      <Pain />
      <Services servicesLayout={t.servicesLayout} />
      <Steps />
      <Compare compareStyle={t.compareStyle} />
      {t.servicesLayout !== 'split' && <Segments />}
      <Team teamStyle={t.teamStyle} />
      <Faq />
      <Contact onWa={onWa} />
      <Footer onWa={onWa} onPortal={onPortal} />

      <button className="wa-float" onClick={onWa} aria-label="WhatsApp"><I.whatsapp size={30} color="#fff" /></button>
      <div className={'toast' + (toast ? ' show' : '')}>{toast}</div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('app')).render(<App />);
