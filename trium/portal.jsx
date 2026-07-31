/* TRIUM BPO — Client Portal peek screen */
const { useState: useStateP } = React;

function Portal() {
  const I = window.TriumIcons;
  const [active, setActive] = useStateP('Folha de pagamento');
  const [approved, setApproved] = useStateP(false);

  const nav = [
    ['Visão geral', 'activity'],
    ['Folha de pagamento', 'fileText'],
    ['Colaboradores', 'users'],
    ['Documentos', 'monitor'],
    ['Calendário de obrigações', 'clock'],
    ['Relatórios', 'shield'],
  ];

  const rows = [
    ['AM', 'Ana Martins', 'Vendas', '4.820,00', '1.012,20', '3.807,80'],
    ['CR', 'Carlos Ribeiro', 'Operações', '3.640,00', '764,40', '2.875,60'],
    ['JF', 'Júlia Ferraz', 'Administrativo', '5.200,00', '1.196,00', '4.004,00'],
    ['MS', 'Marcos Souza', 'Logística', '3.180,00', '667,80', '2.512,20'],
    ['PA', 'Paula Aragão', 'Atendimento', '2.950,00', '619,50', '2.330,50'],
  ];

  const obrigacoes = [
    ['ok', 'eSocial · eventos periódicos', 'Enviado em 03/jun', 'No prazo', 'ok'],
    ['ok', 'FGTS Digital', 'Guia emitida · 05/jun', 'Em dia', 'ok'],
    ['due', 'DCTFWeb', 'Vence em 15/jun', 'A vencer', 'due'],
    ['due', 'Pagamento da folha', 'Programado · 05/jun', 'A liberar', 'due'],
  ];

  return (
    <div className="portal">
      <aside className="pside">
        <div className="logo">
          <window.TriumLogo size={32} />
          <span className="word">TRIUM<small>B P O</small></span>
        </div>
        <nav className="pnav">
          <div className="pnav-label">Operação</div>
          {nav.slice(0, 4).map(([t, ic]) => {
            const Ic = I[ic];
            return <a key={t} className={active === t ? 'active' : ''} onClick={() => setActive(t)}><Ic size={18} sw={2} />{t}</a>;
          })}
          <div className="pnav-label">Acompanhamento</div>
          {nav.slice(4).map(([t, ic]) => {
            const Ic = I[ic];
            return <a key={t} className={active === t ? 'active' : ''} onClick={() => setActive(t)}><Ic size={18} sw={2} />{t}</a>;
          })}
        </nav>
        <div className="pside-foot">
          <a href="TRIUM Landing.html"><I.message size={16} sw={2} />Voltar ao site</a>
        </div>
      </aside>

      <div className="pmain">
        <header className="ptop">
          <div className="psearch"><I.monitor size={16} sw={2} />Buscar colaborador, documento ou evento…</div>
          <div className="ptop-right">
            <div className="pbell"><I.clock size={18} sw={2} color="#5C6F82" /><span className="dot"></span></div>
            <div className="puser">
              <div className="who" style={{ textAlign: 'right' }}><b>Padaria Estrela Ltda</b><span>Gestor · Roberto Lima</span></div>
              <div className="av">RL</div>
            </div>
          </div>
        </header>

        <main className="pcontent">
          <div className="pcrumb">Folha de pagamento <b>›</b> Junho 2026 <b>›</b> Prévia</div>
          <div className="phead">
            <div>
              <h1>Folha de junho · prévia para aprovação</h1>
              <p className="sub">47 colaboradores ativos · fechamento programado para 05/jun · prévia disponível para conferência.</p>
            </div>
            <div className="phead-actions">
              {!approved ? (
                <span className="pbadge"><I.clock size={14} sw={2.2} color="#D98E1B" />Aguardando sua aprovação</span>
              ) : (
                <span className="pbadge" style={{ background: 'var(--teal-tint-10)', color: 'var(--teal-dark)' }}><I.check size={14} color="#00A87E" />Folha aprovada</span>
              )}
              <button className="pbtn ghost"><I.fileText size={16} sw={2} />Baixar prévia</button>
              <button className="pbtn primary" onClick={() => setApproved(true)}><I.check size={16} color={approved ? '#fff' : '#0B2540'} />{approved ? 'Aprovada' : 'Aprovar folha'}</button>
            </div>
          </div>

          <div className="pstats">
            <div className="pstat">
              <div className="lbl"><I.fileText size={13} sw={2} color="#5C6F82" />Custo total</div>
              <div className="val">R$ 312.480</div>
              <div className="delta">+2,4% vs. maio</div>
            </div>
            <div className="pstat">
              <div className="lbl"><I.users size={13} sw={2} color="#5C6F82" />Colaboradores</div>
              <div className="val">47</div>
              <div className="delta">+3 admissões</div>
            </div>
            <div className="pstat">
              <div className="lbl"><I.shield size={13} sw={2} color="#5C6F82" />Encargos</div>
              <div className="val">R$ 84.190</div>
              <div className="delta flat">INSS · FGTS · IRRF</div>
            </div>
            <div className="pstat">
              <div className="lbl"><I.check size={13} sw={2} color="#5C6F82" />Líquido a pagar</div>
              <div className="val">R$ 228.290</div>
              <div className="delta flat">5 folhas conferidas</div>
            </div>
          </div>

          <div className="pgrid">
            <div className="pcard">
              <div className="pcard-h"><h3>Prévia por colaborador</h3><a>Ver todos os 47 ›</a></div>
              <table className="ptable">
                <thead><tr><th>Colaborador</th><th>Setor</th><th style={{ textAlign: 'right' }}>Proventos</th><th style={{ textAlign: 'right' }}>Descontos</th><th style={{ textAlign: 'right' }}>Líquido</th></tr></thead>
                <tbody>
                  {rows.map(([in_, nome, setor, prov, desc, liq]) => (
                    <tr key={nome}>
                      <td><span className="emp"><span className="a">{in_}</span>{nome}</span></td>
                      <td style={{ color: 'var(--grey)' }}>{setor}</td>
                      <td className="num">{prov}</td>
                      <td className="num neg">−{desc}</td>
                      <td className="num">{liq}</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot><tr><td colSpan="2">Total · 47 colaboradores</td><td className="num">312.480,00</td><td className="num">84.190,00</td><td className="num">228.290,00</td></tr></tfoot>
              </table>
            </div>

            <div className="pside-stack">
              <div className="pcard">
                <div className="pcard-h"><h3>Calendário de obrigações</h3></div>
                <div className="pcard-body">
                  {obrigacoes.map(([ick, t, sub, st, stk]) => (
                    <div className="obrow" key={t}>
                      <div className={'ic ' + ick}>{ick === 'ok' ? <I.check size={17} color="#00A87E" /> : <I.alert size={16} sw={2} color="#D98E1B" />}</div>
                      <div className="t"><b>{t}</b><span>{sub}</span></div>
                      <span className={'st ' + stk}>{st}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pmsg">
                <h4><I.message size={18} sw={2.2} color="#00C896" />Seu analista de folha</h4>
                <p>A prévia de junho está pronta. Qualquer ajuste de horas extras ou benefícios, me chame antes do fechamento em 05/jun.</p>
                <a className="wa" href="mailto:contato@triumbpo.com.br"><I.message size={16} color="#fff" sw={2.2} />Falar com a Roberta</a>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('app')).render(<Portal />);
