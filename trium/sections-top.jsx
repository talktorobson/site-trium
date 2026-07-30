/* TRIUM BPO — top sections: Header, Hero (3 visual variants), NumbersStrip, Pain */

function Header({ onWa, onPortal, onMenu, scrolled }) {
  const I = window.TriumIcons;
  const links = [
  ['Serviços', '#servicos'], ['Módulos', '#modulos'], ['Telas', '#telas'], ['Como funciona', '#como-funciona'],
  ['Segmentos', '#segmentos'], ['Equipe', '#equipe'], ['Perguntas', '#faq']];

  return (
    <header className={'hdr' + (scrolled ? ' scrolled' : '')}>
      <div className="wrap-wide nav">
        <a className="logo" href="#topo">
          <window.TriumLogo size={38} />
          <span className="word" style={{ color: "rgb(253, 254, 254)" }}>TRIUM<small>B P O</small></span>
        </a>
        <nav className="nav-links">
          {links.map(([t, h]) => <a key={t} href={h}>{t}</a>)}
          <button className="btn btn-portal" onClick={onPortal}><I.user size={15} sw={2.2} />Portal do Cliente</button>
          <a href="#contato" className="btn btn-primary">Diagnóstico gratuito</a>
        </nav>
        <button className="burger" onClick={onMenu} aria-label="Menu"><span></span><span></span><span></span></button>
      </div>
    </header>);

}

/* ---- Hero product visuals ---- */
function DeviceViz() {
  const I = window.TriumIcons;
  return (
    <div className="devices">
      <div className="float f1">
        <div className="dotok"><I.check size={17} color="#00A87E" /></div>
        <div><b>eSocial enviado</b><br />Todos os eventos no prazo</div>
      </div>
      <div className="tablet">
        <div className="tablet-screen">
          <div className="dash-top">
            <div>
              <h4>Folha de junho</h4>
              <div className="sub">Painel do gestor · 47 colaboradores</div>
            </div>
            <span className="dash-pill">Fechada</span>
          </div>
          <div className="dash-row">
            <div className="dash-card">
              <div className="lbl">Custo de pessoal</div>
              <div className="donut-wrap">
                <div className="donut"></div>
                <div className="donut-val"><b>R$312k</b><span>no mês</span></div>
              </div>
            </div>
            <div className="dash-card">
              <div className="lbl">Encargos · 6 meses</div>
              <div className="bars">
                <i style={{ height: '52%' }}></i><i style={{ height: '68%' }}></i>
                <i style={{ height: '46%' }}></i><i style={{ height: '80%' }}></i>
                <i style={{ height: '62%' }}></i><i style={{ height: '92%' }}></i>
              </div>
            </div>
          </div>
          <div className="dash-list">
            <div className="li"><span>Admissões no mês</span><b>3</b></div>
            <div className="li"><span>eSocial · eventos</span><span className="ok">No prazo</span></div>
            <div className="li"><span>Holerites no portal</span><span className="ok">Publicados</span></div>
          </div>
        </div>
      </div>
      <div className="phone">
        <div className="phone-screen">
          <div className="phone-bar"><span className="av"><I.whatsapp size={11} color="#fff" /></span>TRIUM · DP</div>
          <div className="phone-body">
            <div className="bubble">Seu holerite de junho já está disponível 👇</div>
            <div className="bubble"><div className="doc"><I.fileText size={13} color="#00A87E" />Holerite_junho.pdf</div></div>
            <div className="bubble me">Recebido, obrigado!</div>
          </div>
        </div>
      </div>
      <div className="float f2">
        <div className="dotok"><I.message size={17} color="#00A87E" sw={2.2} /></div>
        <div><b>Holerite no WhatsApp</b><br />Colaborador recebe no celular</div>
      </div>
    </div>);

}

function HoleriteViz() {
  const I = window.TriumIcons;
  return (
    <div className="mock">
      <div className="float f1"><div className="dotok"><I.check size={18} color="#00A87E" /></div><div><b>eSocial enviado</b><br />Todos os eventos no prazo</div></div>
      <div className="holerite">
        <div className="htitle">Folha de junho <span className="pill">Fechada</span></div>
        <div className="hrow"><span>Colaboradores ativos</span><b>47</b></div>
        <div className="hrow"><span>Admissões no mês</span><b>3</b></div>
        <div className="hrow"><span>Férias programadas</span><b>2</b></div>
        <div className="hrow"><span>Encargos calculados</span><b>INSS FGTS IRRF</b></div>
        <div className="hrow"><span>Holerites no portal</span><b style={{ color: '#00A87E' }}>Disponíveis</b></div>
      </div>
      <div className="float f2"><div className="dotok"><I.message size={18} color="#00A87E" sw={2.4} /></div><div><b>Holerite no WhatsApp</b><br />Colaborador recebe no celular</div></div>
    </div>);

}

function PanelViz() {
  const I = window.TriumIcons;
  const rows = [
  ['Folha de pagamento', 'Fechada'],
  ['eSocial · eventos do mês', 'No prazo'],
  ['FGTS Digital e DCTFWeb', 'Em dia'],
  ['Holerites no portal', 'Publicados']];

  return (
    <div className="panelviz">
      <h4><I.shield size={18} color="#00C896" />Status de conformidade · junho</h4>
      {rows.map(([a, b]) =>
      <div className="prow" key={a}>
          <span className="chk"><span className="ring"><I.check size={15} color="#00A87E" /></span>{a}</span>
          <span className="st">{b}</span>
        </div>
      )}
    </div>);

}

function Hero({ onWa, heroViz }) {
  const I = window.TriumIcons;
  const points = ['Implantação em até 60 dias', 'Portal e app do colaborador incluídos', 'Módulos no mesmo ambiente (ponto, NR-1, denúncias…)'];
  const Viz = heroViz === 'holerite' ? HoleriteViz : heroViz === 'panel' ? PanelViz : DeviceViz;
  return (
    <section className="hero" id="topo">
      <div className="wrap-wide hero-grid">
        <div>
          <span className="tag on-navy">BPO de folha e departamento pessoal · plataforma digital incluída</span>
          <h1>Sua folha sem erro, sem multa e <em>sem ocupar o seu dia</em></h1>
          <p className="lead">A TRIUM assume a folha de pagamento e o departamento pessoal com compliance e eSocial sob controle — e um portal digital onde o gestor, o colaborador e os módulos opcionais (ponto, recrutamento, denúncias, NR-1, PJs) convivem. Você cuida do negócio. A burocracia fica com a gente.</p>
          <div className="hero-ctas">
            <a className="btn btn-primary" href="#contato">Pedir diagnóstico gratuito</a>
            <button className="btn btn-ghost" onClick={onWa}><I.whatsapp size={17} />Falar no WhatsApp</button>
          </div>
          <div className="hero-points">
            {points.map((p) => <div key={p}><I.check size={16} color="#00C896" />{p}</div>)}
          </div>
        </div>
        <Viz />
      </div>
    </section>);

}

function NumbersStrip() {
  const items = [
  ['60 dias', 'para implantar sem parar sua operação'],
  ['100%', 'dos eventos do eSocial no prazo'],
  ['a partir de 10', 'colaboradores: nosso foco'],
  ['1 dia útil', 'para responder qualquer demanda']];

  return (
    <div className="strip"><div className="wrap-wide">
      {items.map(([n, t]) => <div className="item" key={n}><b>{n}</b>{t}</div>)}
    </div></div>);

}

function Pain() {
  const I = window.TriumIcons;
  const cards = [
  [<I.alert color="#D98E1B" />, 'Risco de multa silencioso', 'Prazos de eSocial, FGTS Digital, NR-1 e obrigações mensais mudam o tempo todo. Quando o erro aparece, a multa já é retroativa e o problema virou seu.'],
  [<I.clock color="#D98E1B" />, 'Seu tempo escorrendo pelo ralo', 'Admissão, férias, atestado, rescisão, benefício, ponto. Sem um DP estruturado, tudo isso para na mesa do dono ou de um administrativo sobrecarregado.'],
  [<I.monitor color="#D98E1B" />, 'Zero visibilidade', 'Você recebe a folha pronta, sem prévia para conferir e sem relatório de custo. O colaborador pede holerite por mensagem e espera dias pela resposta.'],
  [<I.flag color="#D98E1B" />, 'Ferramentas soltas demais', 'Ponto num sistema, denúncia em planilha, recrutamento em e-mail, PJs no WhatsApp. Cada demanda vira um sistema novo — e ninguém enxerga o quadro inteiro.']];

  return (
    <section className="sec" id="dores"><div className="wrap reveal">
      <div className="sec-head center">
        <span className="tag">O problema</span>
        <h2>A folha da sua empresa merece mais que um anexo de planilha</h2>
        <p>Na maioria das empresas do nosso porte, a folha é um serviço agregado do escritório contábil. Feita no prazo apertado, sem prévia, sem portal e sem ninguém monitorando o que muda na lei — nem o resto da rotina de gente.</p>
      </div>
      <div className="pain-grid pain-grid-4">
        {cards.map(([ic, h, p]) =>
          <div className="pain" key={h}><div className="ico">{ic}</div><h3>{h}</h3><p>{p}</p></div>
          )}
      </div>
    </div></section>);

}

Object.assign(window, { Header, Hero, NumbersStrip, Pain });