/* TRIUM BPO — mid sections: Services + Industries, Steps, Compare */

const SERVS = [
  ['fileText', 'Folha de pagamento', 'Cálculo mensal completo, com prévia para sua aprovação antes do fechamento.',
    ['Salários, horas extras, adicionais e descontos', 'Décimo terceiro, férias e médias', 'INSS, FGTS, IRRF e demais encargos', 'Relatório gerencial de custo de pessoal']],
  ['users', 'Departamento pessoal', 'Toda a rotina do colaborador, da admissão ao desligamento, sem parar na sua mesa.',
    ['Admissão digital com documentos pelo celular', 'Férias, afastamentos e controle de prazos', 'Rescisões, homologações e cálculos finais', 'Gestão de benefícios como VT, VR e plano de saúde']],
  ['shield', 'eSocial e obrigações', 'Compliance trabalhista monitorado todos os dias, não só no fechamento.',
    ['Envio de todos os eventos do eSocial no prazo', 'FGTS Digital e DCTFWeb sob controle', 'Acompanhamento de convenções coletivas', 'Alertas de mudança na legislação que afeta sua folha']],
  ['smartphone', 'Portal digital incluído', 'Tecnologia premium sem custo à parte. Seu colaborador resolve sozinho pelo celular.',
    ['Holerite e informe de rendimentos no celular', 'Solicitações de férias e documentos online', 'Comunicação direta pelo WhatsApp', 'Painel do gestor com custos e indicadores']],
];

const SEGS = [
  ['store', 'Comércio e varejo', 'Escalas, domingos e feriados, comissões e alta rotatividade sob controle.'],
  ['briefcase', 'Serviços e escritórios', 'Da agência à prestadora técnica, com benefícios e jornadas bem definidos.'],
  ['activity', 'Clínicas e saúde', 'Plantões, adicionais noturnos e categorias profissionais com piso próprio.'],
  ['utensils', 'Restaurantes e food service', 'Escala 6x1, gorjetas, turnos quebrados e a convenção do setor em dia.'],
  ['factory', 'Indústria', 'Turnos, insalubridade, periculosidade e adicionais calculados sem erro.'],
  ['truck', 'Transporte e logística', 'Jornadas especiais, diárias e horas de espera tratadas conforme a lei.'],
];

function ServCard({ s }) {
  const I = window.TriumIcons;
  const [, h, p, items] = s;
  const Ic = I[s[0]];
  return (
    <div className="serv">
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

function Services({ servicesLayout }) {
  if (servicesLayout === 'split') {
    return (
      <section className="sec navy-sec" id="servicos"><div className="wrap-wide reveal">
        <div className="sec-head left" style={{ maxWidth: 760 }}>
          <div className="fopa-badge"><b>FOPA</b><span>o serviço de folha da TRIUM</span></div>
          <h2>Folha e departamento pessoal completos, de ponta a ponta</h2>
          <p>FOPA é a primeira linha de serviços da TRIUM. Tudo que envolve o ciclo do colaborador, operado por especialistas — com a tecnologia premium incluída no contrato e os segmentos que dominamos.</p>
        </div>
        <div className="svc-split">
          <div className="serv-grid">
            {SERVS.map((s) => <ServCard key={s[1]} s={s} />)}
          </div>
          <IndustriesCard />
        </div>
      </div></section>
    );
  }
  return (
    <section className="sec navy-sec" id="servicos"><div className="wrap reveal">
      <div className="sec-head center">
        <div className="fopa-badge"><b>FOPA</b><span>o serviço de folha da TRIUM</span></div>
        <h2>Folha e departamento pessoal completos, de ponta a ponta</h2>
        <p>FOPA é a primeira linha de serviços da TRIUM. Tudo que envolve o ciclo do colaborador na sua empresa, operado por especialistas com tecnologia premium incluída no contrato.</p>
      </div>
      <div className="serv-grid">
        {SERVS.map((s) => <ServCard key={s[1]} s={s} />)}
      </div>
    </div></section>
  );
}

function PortalShowcase() {
  const I = window.TriumIcons;
  const points = [
    ['fileText', 'Aprovação da folha em 1 clique', 'Revise a prévia, confira custos e encargos e aprove o fechamento sem trocar planilha por e-mail.'],
    ['clock', 'Calendário de obrigações', 'eSocial, FGTS Digital, DCTFWeb e pagamentos com os prazos sempre à vista, nada passa batido.'],
    ['users', 'Portal do colaborador', 'Holerites, informes e documentos disponíveis para o seu time, sem sobrecarregar o seu dia.'],
  ];
  return (
    <section className="sec portal-show" id="portal"><div className="wrap-wide">
      <div className="sec-head center reveal">
        <span className="tag">Conheça o portal</span>
        <h2>Toda a sua folha em um só lugar</h2>
        <p>O portal digital vem incluído no contrato. Você acompanha o fechamento, aprova a folha e dá acesso ao time — sem instalar nada.</p>
      </div>
      <div className="portal-frame reveal">
        <div className="pf-bar">
          <span className="pf-dot"></span><span className="pf-dot"></span><span className="pf-dot"></span>
          <span className="pf-url">portal.triumbpo.com.br</span>
        </div>
        <img src="trium/portal-shot.png" loading="lazy" decoding="async" width="1600" height="1073"
          alt="Tela do portal do cliente TRIUM: prévia da folha de pagamento com custos, encargos, líquido a pagar e calendário de obrigações." />
        <span className="pf-tagimg">Imagem ilustrativa</span>
      </div>
      <div className="portal-points reveal">
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
    ['Gratuito', '01', 'Diagnóstico da sua folha', 'Analisamos sua folha atual e apontamos riscos de compliance, erros de cálculo e oportunidades de economia. Você recebe o relatório mesmo se não fechar com a gente.'],
    ['Até 60 dias', '02', 'Implantação assistida', 'Migramos cadastros, históricos e rodamos uma folha em paralelo com a atual para validar tudo. Sem interrupção, sem retrabalho para o seu time.'],
    ['Mês a mês', '03', 'Operação contínua', 'Calendário mensal definido, prévia para aprovação, fechamento no prazo e canal direto no WhatsApp com quem realmente opera a sua folha.'],
  ];
  return (
    <section className="sec navy-sec" id="como-funciona"><div className="wrap reveal">
      <div className="sec-head center">
        <span className="tag on-navy">Como funciona</span>
        <h2>Da primeira conversa à folha rodando em três passos</h2>
        <p>Migrar de fornecedor de folha parece arriscado. Nosso processo foi desenhado para a transição acontecer sem nenhum colaborador perceber.</p>
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
  ['Portal e holerite digital para o colaborador', 'Incluído no contrato', 'Não oferece ou cobra à parte'],
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

Object.assign(window, { Services, Segments, Steps, Compare });
