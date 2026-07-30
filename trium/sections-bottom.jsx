/* TRIUM BPO — bottom sections: Team, Faq, Contact, Footer */
const { useState: useStateB } = React;

const MEMBERS = [
['R', 'teal', 'Roberta', 'Operação de DP', 'Especialista em departamento pessoal. Lidera a célula de analistas, define o padrão de qualidade e supervisiona cada fechamento antes de chegar a você.', false],
['L', 'amber', 'Larissa', 'Jurídico e compliance', 'Advogada. Responsável pelo compliance trabalhista, pelos contratos e pela leitura jurídica de convenções coletivas e mudanças na lei que afetam a sua folha.', false],
['', 'teal', 'Célula de analistas de folha', 'Operação dedicada', 'Analistas plenos e juniores dedicados por carteira de clientes, sob supervisão direta da Roberta. Modelo boutique: poucos clientes por analista, prévia todo mês e resposta em até um dia útil.', true]];


function Team({ teamStyle }) {
  const I = window.TriumIcons;
  const navy = teamStyle === 'navy';
  const wrapClass = 'sec' + (navy ? ' navy-sec' : ' team-light');
  const gridClass = 'team-grid' + (navy ? ' navy' : '') + (teamStyle === 'row' ? ' team-row-mode' : '');

  const renderMember = ([init, ring, name, role, bio, creed]) =>
  <div className={'member' + (ring === 'amber' ? ' alt' : '') + (creed ? ' creed' : '')} key={name}>
      <div className="avatar">{creed ? <I.users size={30} color="#00C896" sw={1.8} /> : init}</div>
      <div className="member-body">
        <h3>{name}</h3>
        <span className="role">{role}</span>
        <p>{bio}</p>
      </div>
    </div>;


  return (
    <section className={wrapClass} id="equipe">
      {!navy && <div className="team-rule-top" />}
      <div className="wrap reveal">
        <div className="sec-head center">
          <span className={'tag' + (navy ? ' on-navy' : '')}>Quem cuida da sua folha</span>
          <h2>Profissionais experientes à frente, analistas dedicados na operação</h2>
          <p>A TRIUM combina a liderança direta de duas profissionais experientes com uma célula de analistas de folha dedicados. Você sempre sabe quem opera a sua carteira e fala direto com essa pessoa.</p>
        </div>
        <div className={teamStyle === 'row' ? 'team-row' + (navy ? ' navy' : '') : gridClass}>
          {MEMBERS.map(renderMember)}
        </div>
      </div>
    </section>);

}

function Faq() {
  const I = window.TriumIcons;
  const qa = [
  ['Preciso trocar de contador para contratar a TRIUM?', 'Não. A TRIUM assume a folha e o departamento pessoal. Seu contador continua cuidando da contabilidade e do fiscal, e nós entregamos a ele todos os relatórios e integrações que precisar. Na prática, o trabalho dele fica mais fácil.'],
  ['Minha empresa é pequena. Vale a pena terceirizar?', 'Nosso foco são empresas a partir de 10 colaboradores, justamente as que não têm RH interno ou têm uma equipe pequena. É nesse porte que a terceirização traz mais retorno, porque o custo de um erro de folha ou de uma multa é proporcionalmente muito maior.'],
  ['Como funciona o preço?', 'O valor é por colaborador ativo por mês (e, em alguns módulos, por prestador), com o portal digital já incluído no FOPA. Cada proposta é montada sob medida após o diagnóstico gratuito, de acordo com o porte, a complexidade e os módulos que você quiser ativar. Não publicamos tabela fixa no site.'],
  ['O que é o Portal do Cliente?', 'É o ambiente digital (portal.triumbpo.com.br) onde o gestor acompanha a folha: prévia, custos, documentos, solicitações e obrigações. O colaborador usa o app para holerites, documentos e, se contratados, ponto e canal de denúncias. Módulos opcionais entram no mesmo login.'],
  ['Quais módulos além da folha vocês oferecem?', 'No mesmo portal: Solução de Ponto (Portaria 671), Recrutamento (da vaga à admissão), Canal de Denúncias (Lei 14.457), Gestão de Riscos NR-1 (Portaria MTE 1.419/2024 — psicossocial no PGR) e Gestão de PJs (prestadores em trilho separado do CLT). Você contrata o que precisa; o FOPA é o núcleo.'],
  ['Posso contratar só o ponto, a denúncia ou a NR-1?', 'Sim para ponto, denúncias e NR-1 como módulos no desenho da TRIUM — o diagnóstico define se entram com o FOPA ou em configuração específica. Recrutamento roda sobre a relação de folha/DP (não vendemos um ATS solto). Em todos os casos o ambiente é o mesmo portal.'],
  ['O que a NR-1 cobre na prática e preciso de psicólogo?', 'A Portaria MTE 1.419/2024 exige gestão de riscos psicossociais no PGR. No módulo você escolhe o instrumento científico (COPSOQ III-BR ou HSE Indicator Tool), roda o ciclo com anonimato por desenho, gera inventário, planos e dossiê. A TRIUM/plataforma não substitui o profissional: você nomeia responsável técnico e, quando preciso, psicólogo independente para relatos críticos e revisão do inventário — a ferramenta organiza, documenta e evidencia.'],
  ['Meus dados e os dos colaboradores ficam seguros?', 'Sim. Dados de folha e de gente são sensíveis pela LGPD e tratamos como tal. Operamos com acordo de tratamento de dados em todos os contratos, acesso segregado por cliente e processos desenhados para a lei brasileira de proteção de dados. No canal de denúncias, o conteúdo da apuração fica restrito ao ouvidor autorizado.'],
  ['E se eu já tiver um sistema de folha?', 'Sem problema. No diagnóstico avaliamos o que você já usa e definimos juntos o melhor caminho. Podemos operar a folha no nosso ambiente ou avaliar a operação sobre a sua ferramenta atual; módulos como ponto e portal do colaborador também se encaixam nesse desenho.']];

  const [open, setOpen] = useStateB(0);
  return (
    <section className="sec" id="faq"><div className="wrap reveal">
      <div className="sec-head center">
        <span className="tag">Perguntas frequentes</span>
        <h2>O que todo mundo pergunta antes de contratar</h2>
      </div>
      <div className="faq-list">
        {qa.map(([q, a], i) =>
          <div className={'faq-item' + (open === i ? ' open' : '')} key={q}>
            <button className="faq-q" onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}>
              {q}<I.plus size={18} />
            </button>
            <div className="faq-a" style={{ maxHeight: open === i ? 520 : 0 }}><p>{a}</p></div>
          </div>
          )}
      </div>
    </div></section>);

}

function Contact({ onWa }) {
  const I = window.TriumIcons;
  const [sent, setSent] = useStateB(false);
  const [busy, setBusy] = useStateB(false);
  const [form, setForm] = useStateB({ nome: '', empresa: '', whats: '', email: '', porte: '', msg: '', lgpd: false });
  const [errs, setErrs] = useStateB({});
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.type === 'checkbox' ? e.target.checked : e.target.value });
  const points = [
  'Resposta em até 1 dia útil',
  'Relatório de diagnóstico é seu, feche ou não com a gente',
  'Conversa direto com quem vai operar a sua folha'];

  const submit = async (e) => {
    e.preventDefault();
    const need = ['nome', 'empresa', 'whats', 'porte'];
    const ne = {};
    need.forEach((k) => {if (!form[k]) ne[k] = true;});
    if (!form.lgpd) ne.lgpd = true;
    setErrs(ne);
    if (Object.keys(ne).length > 0) return;

    const cfg = window.TRIUM;
    setBusy(true);
    const payload = {
      Nome: form.nome,
      Empresa: form.empresa,
      WhatsApp: form.whats,
      Email: form.email || 'nao informado',
      Colaboradores: form.porte,
      Situacao: form.msg || 'nao informado',
      _subject: 'Novo lead site TRIUM: ' + form.empresa,
      _template: 'table',
      _captcha: 'false',
    };
    try {
      const r = await fetch('https://formsubmit.co/ajax/' + cfg.FORM_EMAIL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!r.ok) throw new Error('fail');
      setSent(true);
    } catch (err) {
      // fallback: abre o WhatsApp já com os dados preenchidos
      const text =
        'Olá! Quero um diagnóstico gratuito de folha.\n' +
        'Nome: ' + form.nome + '\n' +
        'Empresa: ' + form.empresa + '\n' +
        'WhatsApp: ' + form.whats + '\n' +
        (form.email ? 'Email: ' + form.email + '\n' : '') +
        'Colaboradores: ' + form.porte +
        (form.msg ? '\nSituação atual: ' + form.msg : '');
      window.open(cfg.waLink(text), '_blank');
    } finally {
      setBusy(false);
    }
  };
  return (
    <section className="sec contact" id="contato"><div className="wrap contact-grid reveal">
      <div>
        <span className="tag on-navy">Vamos conversar</span>
        <h2>Peça seu diagnóstico gratuito de folha</h2>
        <p className="sub">Em uma conversa de 30 minutos, entendemos sua operação e devolvemos um relatório com riscos, custos e o que dá para melhorar. Sem compromisso.</p>
        <ul className="contact-points">
          {points.map((p) => <li key={p}><I.check size={18} color="#00C896" />{p}</li>)}
        </ul>
        <button className="wa-direct" onClick={onWa}><I.whatsapp size={20} />Chamar no WhatsApp agora</button>
      </div>
      <div className="lead-form">
        {!sent ?
          <form onSubmit={submit} noValidate>
            <h3>Ou deixe seus dados que a gente chama você</h3>
            <div className="two-col">
              <div className={'field' + (errs.nome ? ' err' : '')}><label>Nome</label><input value={form.nome} onChange={set('nome')} placeholder="Seu nome" /></div>
              <div className={'field' + (errs.empresa ? ' err' : '')}><label>Empresa</label><input value={form.empresa} onChange={set('empresa')} placeholder="Nome da empresa" /></div>
            </div>
            <div className="two-col">
              <div className={'field' + (errs.whats ? ' err' : '')}><label>WhatsApp</label><input value={form.whats} onChange={set('whats')} type="tel" placeholder="(15) 99999 9999" /></div>
              <div className="field"><label>Email</label><input value={form.email} onChange={set('email')} type="email" placeholder="voce@empresa.com.br" /></div>
            </div>
            <div className={'field' + (errs.porte ? ' err' : '')}>
              <label>Quantos colaboradores CLT?</label>
              <select value={form.porte} onChange={set('porte')}>
                <option value="" disabled>Selecione</option>
                <option>Menos de 10</option><option>10 a 30</option><option>31 a 60</option><option>61 a 99</option><option>100 ou mais</option>
              </select>
            </div>
            <div className="field"><label>Conte rapidamente como é sua folha e a rotina de gente hoje</label><textarea value={form.msg} onChange={set('msg')} rows="3" placeholder="Ex: contador cuida da folha, 45 CLT, sem portal; preciso de ponto e denúncias"></textarea></div>
            <label className="consent"><input type="checkbox" checked={form.lgpd} onChange={set('lgpd')} style={errs.lgpd ? { outline: '2px solid #B8552F' } : {}} /><span>Autorizo o uso dos meus dados apenas para este contato, conforme a LGPD.</span></label>
            <button type="submit" className="btn btn-navy" disabled={busy}>{busy ? 'Enviando…' : 'Quero meu diagnóstico gratuito'}</button>
            <p className="form-note">Você também pode enviar os mesmos dados direto pelo WhatsApp.</p>
          </form> :

          <div className="form-ok">
            <I.checkCircle size={52} color="#00A87E" />
            <h3>Recebemos seu pedido</h3>
            <p>Vamos chamar você em até 1 dia útil, {form.nome ? form.nome.split(' ')[0] : ''}. Se preferir adiantar, é só clicar no botão do WhatsApp.</p>
          </div>
          }
      </div>
    </div></section>);

}

function Footer({ onWa, onPortal }) {
  return (
    <footer className="ft"><div className="wrap-wide">
      <div className="foot-grid">
        <div>
          <div className="logo" style={{ marginBottom: '1rem' }}>
            <window.TriumLogo size={32} />
            <span className="word" style={{ fontSize: '1.05rem' }}>TRIUM<small>B P O</small></span>
          </div>
          <p style={{ maxWidth: 320 }}>Terceirização de folha e departamento pessoal (FOPA) para empresas que não têm RH interno. Portal digital incluído e módulos opcionais no mesmo ambiente.</p>
        </div>
        <div>
          <h4>Serviços</h4>
          <a href="#servicos">FOPA · Folha e DP</a><a href="#servicos">eSocial e obrigações</a>
          <a href="#portal">Portal e app do colaborador</a><a href="#telas">Telas por persona</a>
          <a href="#modulos">Ponto · Recrutamento · Denúncias · NR-1 · PJs</a>
        </div>
        <div>
          <h4>A TRIUM</h4>
          <a href="#equipe">Equipe</a><a href="#segmentos">Segmentos atendidos</a>
          <a href="#faq">Perguntas frequentes</a><a href="#" onClick={(e) => {e.preventDefault();onPortal();}}>Portal do Cliente</a>
        </div>
        <div>
          <h4>Contato</h4>
          <a href="#" onClick={(e) => {e.preventDefault();onWa();}}>WhatsApp</a>
          <a href="mailto:contato@triumbpo.com.br">contato@triumbpo.com.br</a>
          <a href="#contato">Diagnóstico gratuito</a>
        </div>
      </div>
      <div className="foot-bottom">
        <span>© 2026 TRIUM BPO. Todos os direitos reservados.</span>
        <span>triumbpo.com.br · fopa.com.br · Comprometidos com a LGPD</span>
      </div>
    </div></footer>);

}

Object.assign(window, { Team, Faq, Contact, Footer });