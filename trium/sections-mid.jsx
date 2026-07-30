/* TRIUM BPO — mid sections: Services + Modules + Industries, Steps, Portal, Compare */
const { useState: useStateM, useEffect: useEffectM } = React;

const SERVS = [
  ['fileText', 'Folha de pagamento', 'Cálculo mensal completo no motor TOTVS Protheus, com prévia para sua aprovação antes do fechamento.',
    ['Motor TOTVS Protheus (cálculo, encargos e eSocial)', 'Salários, horas extras, adicionais e descontos', 'Décimo terceiro, férias e médias', 'Relatório gerencial de custo de pessoal']],
  ['users', 'Departamento pessoal', 'Toda a rotina do colaborador, da admissão ao desligamento, sem parar na sua mesa.',
    ['Admissão digital com documentos pelo celular', 'Férias, afastamentos e controle de prazos', 'Rescisões, homologações e cálculos finais', 'Rotina de benefícios: VT, VR, plano de saúde e similares']],
  ['shield', 'eSocial e obrigações', 'Compliance trabalhista monitorado todos os dias, não só no fechamento.',
    ['Envio de todos os eventos do eSocial no prazo', 'FGTS Digital e DCTFWeb sob controle', 'Acompanhamento de convenções coletivas', 'Alertas de mudança na legislação que afeta sua folha']],
  ['smartphone', 'Portal digital incluído', 'Portal do gestor e app do colaborador no mesmo contrato — sem software à parte.',
    ['Holerite e informe de rendimentos no celular', 'Solicitações de férias e documentos online', 'Comunicação e comunicados pelo canal digital', 'Painel do gestor com custos, obrigações e status']],
];

/* Sellable modules (trium-portal ModuleKey) — optional expanders on FOPA */
const MODULES = [
  ['clock', 'Solução de Ponto', 'Coleta e tratamento de jornada desenhados sobre a Portaria 671, com espelho e exportação para a folha.',
    ['Batida no app ou quiosque, com comprovante', 'Apuração de HE, noturno, banco de horas e faltas', 'Espelho de ponto e fechamento da competência', 'Exportação para o TOTVS Protheus (sem retrabalho manual)']],
  ['userPlus', 'Recrutamento', 'Da vaga à admissão no mesmo cadastro da folha — sem ATS solto e sem re-digitação.',
    ['Página de carreiras e candidatura com LGPD', 'Pipeline de triagem e entrevistas', 'Proposta e aceite com trilha auditável', 'Convergência oferta → admissão no DP']],
  ['flag', 'Canal de Denúncias', 'Canal confidencial alinhado à Lei 14.457/2022, com protocolo e ouvidoria dedicada.',
    ['Denúncia anônima pelo app do colaborador', 'Protocolo e chave de acompanhamento', 'Apuração com prazos e trilha de acesso', 'Visão gerencial agregada, sem expor o conteúdo']],
  ['activity', 'Gestão de Riscos NR-1', 'Adequação à Portaria MTE 1.419/2024 (NR-1): fatores psicossociais no PGR, com pesquisa, matriz, planos e dossiê para fiscalização.',
    ['Instrumentos científicos à escolha: COPSOQ III-BR ou HSE Indicator Tool (HSE-IT)', 'Matriz de risco por célula organizacional (avalia o trabalho, não a pessoa)', 'Planos de ação com vínculo ao inventário e dossiê para o auditor', 'Atuação de psicólogo ou responsável técnico independente nomeado por você — a plataforma organiza; a responsabilidade técnica é do profissional']],
  ['building', 'Gestão de PJs', 'Prestadores e contratos em trilho separado do CLT, com guardrails contra pejotização irregular.',
    ['Cadastro de prestadores e contratos', 'Fluxo de NF e documentos do prestador', 'App próprio do prestador (magic link)', 'Alertas de risco de mascaramento de vínculo']],
];

const SEGS = [
  ['factory', 'Indústria', 'Turnos, insalubridade, periculosidade e adicionais calculados sem erro.'],
  ['store', 'Comércio e varejo', 'Escalas, domingos e feriados, comissões e alta rotatividade sob controle.'],
  ['briefcase', 'Serviços e escritórios', 'Da agência à prestadora técnica, com benefícios e jornadas bem definidos.'],
  ['activity', 'Clínicas e saúde', 'Plantões, adicionais noturnos e categorias profissionais com piso próprio.'],
  ['utensils', 'Restaurantes e food service', 'Escala 6x1, gorjetas, turnos quebrados e a convenção do setor em dia.'],
  ['truck', 'Transporte e logística', 'Jornadas especiais, diárias e horas de espera tratadas conforme a lei.'],
];

function ServCard({ s, badge }) {
  const I = window.TriumIcons;
  const [, h, p, items] = s;
  const Ic = I[s[0]];
  return (
    <div className="serv">
      {badge ? <span className="serv-badge">{badge}</span> : null}
      <div className="ico"><Ic color="#00C896" size={26} /></div>
      <h3>{h}</h3><p>{p}</p>
      <ul>{items.map((it) => <li key={it}>{it}</li>)}</ul>
    </div>
  );
}

function IndustriesCard() {
  const I = window.TriumIcons;
  return (
    <div className="ind-card">
      <h3>Segmentos que conhecemos de perto</h3>
      <p className="ind-sub">Cada setor tem sindicato, convenção coletiva e rotina próprios. Operamos com as particularidades de cada um.</p>
      <div className="ind-grid">
        {SEGS.map(([ic, h, p]) => {
          const Ic = I[ic];
          return (
            <div className="ind-tile" key={h}>
              <div className="ico"><Ic color="#00A87E" size={20} /></div>
              <h4>{h}</h4><p>{p}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function ModulesBlock() {
  return (
    <div className="modules-block reveal" id="modulos">
      <div className="sec-head center modules-head">
        <div className="fopa-badge"><b>Módulos</b><span>completam a operação no mesmo portal</span></div>
        <h2>O que sobe no mesmo ambiente, quando a sua empresa precisa</h2>
        <p>Além do FOPA, a TRIUM opera módulos contratáveis no portal.triumbpo.com.br — ponto, recrutamento, denúncias, NR-1 e gestão de PJs. Você ativa o que faz sentido; o time e o colaborador usam o mesmo login.</p>
      </div>
      <div className="serv-grid modules-grid">
        {MODULES.map((s) => <ServCard key={s[1]} s={s} badge="Módulo opcional" />)}
      </div>
    </div>
  );
}

function Services({ servicesLayout }) {
  if (servicesLayout === 'split') {
    return (
      <section className="sec navy-sec" id="servicos"><div className="wrap-wide reveal">
        <div className="sec-head left" style={{ maxWidth: 760 }}>
          <div className="fopa-badge"><b>FOPA</b><span>o serviço de folha da TRIUM</span></div>
          <h2>Folha e departamento pessoal completos, de ponta a ponta</h2>
          <p>FOPA é o núcleo da TRIUM: folha, DP, eSocial e portal digital. Em cima disso, módulos opcionais cobrem ponto, recrutamento, denúncias, riscos NR-1 e gestão de prestadores — no mesmo ambiente.</p>
        </div>
        <div className="svc-split">
          <div className="serv-grid">
            {SERVS.map((s) => <ServCard key={s[1]} s={s} badge="Núcleo FOPA" />)}
          </div>
          <IndustriesCard />
        </div>
        <ModulesBlock />
      </div></section>
    );
  }
  return (
    <section className="sec navy-sec" id="servicos"><div className="wrap reveal">
      <div className="sec-head center">
        <div className="fopa-badge"><b>FOPA</b><span>o serviço de folha da TRIUM</span></div>
        <h2>Folha e departamento pessoal completos, de ponta a ponta</h2>
        <p>FOPA é o núcleo da TRIUM: folha, DP, eSocial e portal digital incluídos. Módulos opcionais completam a operação no mesmo portal — sem trocar de sistema a cada demanda.</p>
      </div>
      <div className="serv-grid">
        {SERVS.map((s) => <ServCard key={s[1]} s={s} badge="Núcleo FOPA" />)}
      </div>
      <ModulesBlock />
    </div></section>
  );
}

/* App journeys (webm) + desktop stills — demo tenants */
const JOURNEYS = [
  {
    id: 'colab',
    badge: 'Colaborador PF',
    title: 'App do colaborador CLT',
    blurb: 'Acesso sem senha, holerites, documentos, férias e perfil — instalável no celular.',
    steps: ['Acesso', 'Holerites', 'Documentos', 'Férias', 'Perfil'],
    video: 'trium/video/colab-pf.webm',
    poster: 'trium/video/colab-pf-poster.jpg',
    aria: 'Jornada no app do colaborador CLT: acesso, holerites, documentos e férias',
  },
  {
    id: 'prest',
    badge: 'Prestador PJ',
    title: 'App do prestador',
    blurb: 'Trilho separado do CLT: contratos, financeiro e documentos no PWA do prestador.',
    steps: ['Acesso', 'Home', 'Contratos', 'Financeiro'],
    video: 'trium/video/prestador-pj.webm',
    poster: 'trium/video/prestador-pj-poster.jpg',
    aria: 'Jornada no app do prestador PJ: acesso, contratos e financeiro',
  },
];

const DESK_TABS = [
  {
    id: 'rh',
    label: 'Gestor RH',
    blurb: 'Portal web do cliente: home, folha, recrutamento e NR-1 no mesmo login.',
    shots: [
      { src: 'trium/shots/web-rh-home.png', alt: 'Home do portal do gestor RH', cap: 'Home do gestor', kind: 'desktop' },
      { src: 'trium/shots/web-rh-folha.png', alt: 'Prévia da folha no portal do cliente', cap: 'Prévia da folha', kind: 'desktop' },
      { src: 'trium/shots/web-rh-nr1-hub.png', alt: 'Hub NR-1 com checklist de adequação', cap: 'Hub NR-1', kind: 'desktop' },
      { src: 'trium/shots/web-rh-recrutamento.png', alt: 'Recrutamento no portal do cliente', cap: 'Recrutamento', kind: 'desktop' },
    ],
  },
  {
    id: 'compliance',
    label: 'Ouvidor e psicólogo',
    blurb: 'Canal de denúncias (Lei 14.457) e NR-1 com RT/psicólogo independente nomeado pelo cliente.',
    shots: [
      { src: 'trium/shots/web-ouvidor-acompanhar.png', alt: 'Acompanhar denúncia com protocolo e chave', cap: 'Acompanhar denúncia', kind: 'desktop' },
      { src: 'trium/shots/web-psi-responsaveis.png', alt: 'Nomeação de RT e psicólogo independente na NR-1', cap: 'Psicólogo / RT independente', kind: 'desktop' },
      { src: 'trium/shots/web-rh-relatos.png', alt: 'Relatos NR-1 vs canal de denúncias', cap: 'Relatos × denúncias', kind: 'desktop' },
    ],
  },
];

function JourneyPhone({ j, active }) {
  return (
    <figure className="journey-card">
      <div className="journey-meta">
        <span className="journey-badge">{j.badge}</span>
        <h3>{j.title}</h3>
        <p>{j.blurb}</p>
        <ul className="journey-steps" aria-label="Passos da jornada">
          {j.steps.map((s) => <li key={s}>{s}</li>)}
        </ul>
      </div>
      <div className="phone-chrome journey-phone">
        <span className="phone-notch" aria-hidden="true"></span>
        {active ? (
          <video
            key={j.video}
            src={j.video}
            poster={j.poster}
            playsInline
            muted
            loop
            autoPlay
            preload="metadata"
            aria-label={j.aria}
          />
        ) : (
          <img src={j.poster} alt={j.aria} loading="lazy" decoding="async" />
        )}
      </div>
    </figure>
  );
}

function ShotFrame({ shot }) {
  return (
    <figure className="shot-card desktop">
      <div className="desk-chrome">
        <div className="pf-bar">
          <span className="pf-dot"></span><span className="pf-dot"></span><span className="pf-dot"></span>
          <span className="pf-url">portal.triumbpo.com.br</span>
        </div>
        <img src={shot.src} loading="lazy" decoding="async" alt={shot.alt} />
      </div>
      <figcaption>{shot.cap}</figcaption>
    </figure>
  );
}

function PersonaGallery() {
  /* journeys always mounted once in view; desk tabs for RH / compliance stills */
  const [deskTab, setDeskTab] = useStateM('rh');
  const [journeysOn, setJourneysOn] = useStateM(true);
  const desk = DESK_TABS.find((t) => t.id === deskTab) || DESK_TABS[0];

  useEffectM(() => {
    if (!window.matchMedia) return;
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const apply = () => setJourneysOn(!mq.matches);
    apply();
    mq.addEventListener?.('change', apply);
    return () => mq.removeEventListener?.('change', apply);
  }, []);

  return (
    <div className="persona-gallery reveal" id="telas">
      <div className="sec-head center">
        <span className="tag">Apps e portal em ação</span>
        <h2>Jornadas reais: colaborador PF e prestador PJ</h2>
        <p>Vídeos gravados no produto (ambiente de demonstração). Dois apps no celular — CLT e PJ — e o portal web do gestor no mesmo ecossistema.</p>
      </div>

      <div className="journey-pair">
        {JOURNEYS.map((j) => (
          <JourneyPhone key={j.id} j={j} active={journeysOn} />
        ))}
      </div>
      <p className="shot-note">Jornadas em loop, sem áudio · dados fictícios de demonstração</p>

      <div className="desk-block">
        <div className="shot-tabs" role="tablist" aria-label="Portal web">
          {DESK_TABS.map((t) => (
            <button
              key={t.id}
              type="button"
              role="tab"
              aria-selected={deskTab === t.id}
              className={'shot-tab' + (deskTab === t.id ? ' active' : '')}
              onClick={() => setDeskTab(t.id)}
            >{t.label}</button>
          ))}
        </div>
        <p className="shot-blurb">{desk.blurb}</p>
        <div className="shot-grid desks">
          {desk.shots.map((s) => <ShotFrame key={s.src} shot={s} />)}
        </div>
      </div>
    </div>
  );
}

function PortalShowcase() {
  const I = window.TriumIcons;
  const points = [
    ['fileText', 'Aprovação da folha em 1 clique', 'Revise a prévia, confira custos e encargos e aprove o fechamento sem trocar planilha por e-mail.'],
    ['clock', 'Ponto e calendário de obrigações', 'Jornada, eSocial, FGTS Digital e pagamentos com prazos à vista — nada passa batido.'],
    ['users', 'App do colaborador', 'Holerites, documentos, férias e, quando contratados, ponto e canal de denúncias no celular.'],
    ['flag', 'Compliance no dia a dia', 'Denúncias (Lei 14.457), riscos psicossociais NR-1 (Portaria MTE 1.419/2024) e documentos do DP no mesmo ambiente do gestor.'],
    ['userPlus', 'Recrutamento até a admissão', 'Vaga, pipeline e oferta convergem para o cadastro de DP — sem re-digitação.'],
    ['building', 'Prestadores e PJs', 'Contratos e fluxo de NF de prestadores em trilho separado do CLT, com visão do gestor.'],
  ];
  return (
    <section className="sec portal-show" id="portal"><div className="wrap-wide">
      <div className="sec-head center reveal">
        <span className="tag">Conheça o portal</span>
        <h2>Folha, gente e compliance em um só lugar</h2>
        <p>O portal do cliente e o app do colaborador vêm com o FOPA. Módulos opcionais entram no mesmo ambiente — sem instalar nada e sem planilha paralela.</p>
      </div>
      <div className="portal-frame reveal">
        <div className="pf-bar">
          <span className="pf-dot"></span><span className="pf-dot"></span><span className="pf-dot"></span>
          <span className="pf-url">portal.triumbpo.com.br</span>
        </div>
        <img src="trium/shots/web-rh-folha.png" loading="lazy" decoding="async" width="1280" height="858"
          alt="Tela do portal do cliente TRIUM: prévia da folha de pagamento com custos, encargos, líquido a pagar e calendário de obrigações." />
        <span className="pf-tagimg">Imagem ilustrativa</span>
      </div>
      <div className="portal-points portal-points-6 reveal">
        {points.map(([ic, t, d]) => {
          const Ico = I[ic];
          return (
            <div className="pp" key={t}>
              <span className="pp-ico"><Ico size={20} color="#00A87E" /></span>
              <div><h4>{t}</h4><p>{d}</p></div>
            </div>
          );
        })}
      </div>
      <PersonaGallery />
      <div className="portal-cta reveal">
        <a className="btn btn-navy" href="#contato">Pedir meu diagnóstico gratuito</a>
      </div>
    </div></section>
  );
}

function Segments() {
  const I = window.TriumIcons;
  return (
    <section className="sec" id="segmentos" style={{ paddingTop: 0 }}><div className="wrap reveal">
      <div className="sec-head center">
        <span className="tag">Para quem trabalhamos</span>
        <h2>Segmentos que conhecemos de perto</h2>
        <p>Cada setor tem sindicato, convenção coletiva e rotina próprios. Operamos a folha com as particularidades de cada um, sem tratamento genérico.</p>
      </div>
      <div className="seg-grid">
        {SEGS.map(([ic, h, p]) => {
          const Ic = I[ic];
          return <div className="seg" key={h}><div className="ico"><Ic color="#00A87E" /></div><div><h3>{h}</h3><p>{p}</p></div></div>;
        })}
      </div>
    </div></section>
  );
}

function Steps() {
  const steps = [
    ['Gratuito', '01', 'Diagnóstico da sua folha', 'Analisamos sua folha atual e apontamos riscos de compliance, erros de cálculo e oportunidades de economia. Também enxergamos se ponto, denúncias, NR-1 ou PJs entram no desenho. Você recebe o relatório mesmo se não fechar com a gente.'],
    ['Até 60 dias', '02', 'Implantação assistida', 'Migramos cadastros, históricos e rodamos uma folha em paralelo com a atual. O portal do cliente e o app do colaborador sobem juntos; módulos opcionais ativam no mesmo ambiente.'],
    ['Mês a mês', '03', 'Operação contínua', 'Calendário mensal, prévia para aprovação, fechamento no prazo e canal direto no WhatsApp com quem opera a sua carteira — com os módulos contratados no mesmo portal.'],
  ];
  return (
    <section className="sec navy-sec" id="como-funciona"><div className="wrap reveal">
      <div className="sec-head center">
        <span className="tag on-navy">Como funciona</span>
        <h2>Da primeira conversa à folha rodando em três passos</h2>
        <p>Migrar de fornecedor de folha parece arriscado. Nosso processo foi desenhado para a transição acontecer sem nenhum colaborador perceber — e para módulos extras entrarem sem novo projeto de zero.</p>
      </div>
      <div className="steps">
        {steps.map(([badge, num, h, p], i) => (
          <div className="step" key={num}>
            <span className="badge-time">{badge}</span>
            <div className="num">{num}</div><h3>{h}</h3><p>{p}</p>
          </div>
        ))}
      </div>
    </div></section>
  );
}

const CMP_ROWS = [
  ['Prévia da folha antes do fechamento', 'Sempre, todo mês', 'Raramente'],
  ['Motor de folha de mercado', 'TOTVS Protheus', 'Planilha ou sistema genérico'],
  ['Portal do gestor + app do colaborador', 'Incluído no FOPA', 'Não oferece ou cobra à parte'],
  ['Ponto, denúncias, NR-1 e PJs no mesmo ambiente', 'Módulos no mesmo portal', 'Ferramentas soltas ou inexistentes'],
  ['Monitoramento de prazos e legislação', 'Diário e proativo', 'Reativo, no fechamento'],
  ['Acompanhamento de convenção coletiva', 'Por sindicato e categoria', 'Quando o cliente avisa'],
  ['Canal de atendimento', 'WhatsApp direto com o especialista', 'Email com fila de espera'],
  ['Relatório gerencial de custo de pessoal', 'Todo mês', 'Sob demanda'],
];

function Compare({ compareStyle }) {
  const I = window.TriumIcons;
  const head = (
    <div className="sec-head center">
      <span className="tag">Por que a TRIUM</span>
      <h2>O que muda quando a folha sai do contador e vai para um especialista</h2>
      <p>Respeitamos o seu contador e trabalhamos junto com ele. Mas folha de pagamento é uma disciplina própria, e tratar como serviço agregado custa caro.</p>
    </div>
  );

  if (compareStyle === 'versus') {
    return (
      <section className="sec" id="porque"><div className="wrap reveal">
        {head}
        <div className="vs-grid">
          <div className="vs-col win">
            <div className="vs-head"><h3>TRIUM BPO</h3><span className="vs-tag">Especialista</span></div>
            {CMP_ROWS.map(([a, b]) => (
              <div className="vs-li" key={a}><I.check size={17} color="#00C896" /><span>{b} <span style={{ opacity: .6 }}>· {a.toLowerCase()}</span></span></div>
            ))}
          </div>
          <div className="vs-mid">vs</div>
          <div className="vs-col lose">
            <div className="vs-head"><h3>Folha no contador</h3><span className="vs-tag">Agregado</span></div>
            {CMP_ROWS.map(([a, , c]) => (
              <div className="vs-li" key={a}><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#B8552F" strokeWidth="2.4" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg><span>{c} <span style={{ opacity: .7 }}>· {a.toLowerCase()}</span></span></div>
            ))}
          </div>
        </div>
      </div></section>
    );
  }

  if (compareStyle === 'cards') {
    return (
      <section className="sec" id="porque"><div className="wrap reveal">
        {head}
        <div className="cmp-cards">
          <div className="cmp-card win">
            <h3>Com a TRIUM BPO</h3>
            {CMP_ROWS.map(([a, b]) => (
              <div className="row" key={a}><I.check size={16} color="#00C896" /><span><b style={{ color: '#fff', fontFamily: 'var(--font-display)' }}>{b}</b> — {a.toLowerCase()}</span></div>
            ))}
          </div>
          <div className="cmp-card lose">
            <h3>Folha no escritório contábil</h3>
            {CMP_ROWS.map(([a, , c]) => (
              <div className="row" key={a}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#B8552F" strokeWidth="2.4" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg><span>{c} — {a.toLowerCase()}</span></div>
            ))}
          </div>
        </div>
      </div></section>
    );
  }

  return (
    <section className="sec" id="porque"><div className="wrap reveal">
      {head}
      <div className="compare">
        <table>
          <thead><tr><th>O que você recebe</th><th>TRIUM BPO</th><th>Folha no escritório contábil</th></tr></thead>
          <tbody>
            {CMP_ROWS.map(([a, b, c]) => (
              <tr key={a}>
                <td>{a}</td>
                <td className="yes"><span className="cmark"><I.check size={16} color="#00A87E" />{b}</span></td>
                <td className="no"><span className="cmark"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#B8552F" strokeWidth="2.4" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>{c}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div></section>
  );
}

Object.assign(window, { Services, PortalShowcase, Segments, Steps, Compare });
