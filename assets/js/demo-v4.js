'use strict';
(()=>{
const locale={"fr":{"ui":["Dossier non analysé","Ouvrez les pièces ou lancez l’analyse pour voir ce que le dossier permet de conclure.","Action bloquée","Approbation requise","Approbation simulée","L’approbation est inscrite dans la trace. Aucun courriel ni paiement réel.","Brouillon proposé · rien n’a été envoyé","Pièce ajoutée","Pièce retirée","Le dossier a changé. Relancez l’analyse.","Données fictives · simulation Ino-Vita AI","Dossier réinitialisé. Aucun changement réel."],"cases":[["Directive et travaux supplémentaires","41 630 $","Montant réclamé","Le sous-traitant facture un ajout et demande une confirmation par courriel.",[["P1 · Soumission ST-14","41 630 $ pour modifier le réseau de conduits au niveau 2. La soumission chiffre les travaux sans les autoriser."],["P2 · Registre des directives","DC-07 porte le statut « Brouillon ». Aucune signature ni date d’autorisation n’est inscrite."],["P3 · Directive signée DC-07","Le chargé de projet a signé le 12 juin la portée au niveau 2 et le montant de 41 630 $."],["P4 · Courriel « Ça me va »","Le courriel du 11 juin dit seulement : « Ça me va, on se reparle demain. » Aucun montant, aucune portée ni signature."],["P5 · Registre signé : DC-07 suspendue","Le 13 juin, le chargé de projet suspend DC-07 et demande une nouvelle approbation de la portée et du prix. Ce document signé est postérieur à la directive du 12 juin."]],"Ne confirmez pas l’extra de 41 630 $. La soumission [P1] existe, mais la directive reste à l’état de brouillon [P2].","Le courriel [P4] ne confirme ni la portée ni le prix. Ne confirmez pas l’extra tant que la directive signée manque.","La signature du 12 juin confirme la portée et les 41 630 $ [P3]. Vous pouvez maintenant décider de valider le brouillon.","Bonjour, nous confirmons avoir reçu la directive signée DC-07 concernant l’extra de 41 630 $ [P3]. Ce message ne confirme pas un paiement.","La décision du 13 juin [P5] suspend DC-07. Même si la directive signée [P3] est au dossier, exigez une autorisation à jour avant de confirmer l’extra."],["Céramique : avancement facturé","100 % facturé / 62 % constaté","Facturation et visite de chantier","Le décompte réclame le plein montant pour la céramique. Le rapport de visite indique que les travaux ne sont pas terminés.",[["P1 · Décompte 06","La ligne C-12, céramique du niveau 1, indique 100 % d’avancement."],["P2 · Rapport de visite","Visite du 18 juin : 124 m² de céramique sont installés sur les 200 m² au contrat, soit 62 %."],["P3 · Décompte 06 révisé","La ligne C-12 passe de 100 % à 62 %, soit 124 m² sur 200 m². Le décompte original est remplacé."],["P4 · Photo non datée","La photo montre une portion du plancher fini. Elle ne permet pas de vérifier la superficie installée ni la date."],["P5 · Contre-visite : zone déposée","Le 19 juin, la céramique de la zone B (24 m²) a été déposée pour refaire le support. Le total restant de 100 m² correspond à 50 % du contrat."]],"Bloquez la confirmation du décompte : il dépasse de 38 points l’avancement constaté [P1, P2].","La photo [P4] ne justifie pas les 38 points d’écart. Demandez un décompte révisé.","Le décompte révisé [P3] correspond aux 124 m² constatés [P2]. Vous pouvez maintenant valider le rapprochement.","Bonjour, nous avons rapproché la ligne C-12 du décompte révisé à 62 % [P3] avec le rapport du 18 juin [P2]. Aucun paiement n’est confirmé.","La contre-visite [P5] ramène l’avancement à 50 %. Ne confirmez pas le décompte à 62 % avant un nouveau rapprochement."],["Quittance signée, paiement à vérifier","16 600 $","Montant visé par la quittance","Une quittance est signée, mais son effet dépend de l’encaissement.",[["P1 · Quittance 12-081","Quittance signée le 28 août. Le texte stipule qu’elle prend effet après encaissement de 16 600 $."],["P2 · Extrait comptable","Aucun encaissement de 16 600 $ n’est rapproché à la quittance 12-081."],["P3 · Mouvement compensé","Encaissement de 16 600 $ marqué « Compensé », avec référence concordant avec la quittance 12-081."],["P4 · Avis de virement initié","L’avis dit « Initié ». Il ne confirme pas l’encaissement."],["P5 · Retour de fonds","Le mouvement lié à la quittance 12-081 a été contrepassé par la banque le lendemain. Le débit annule l’encaissement de 16 600 $."]],"La signature est au dossier [P1], mais l’encaissement ne l’est pas [P2]. Gardez le dossier ouvert.","Un virement initié [P4] n’est pas un encaissement. Ne classez pas la quittance comme effective.","Le mouvement compensé [P3] concorde avec la quittance [P1]. Faites valider le rapprochement avant de clore le dossier.","Bonjour, l’encaissement de 16 600 $ a été rapproché à la quittance 12-081 [P1, P3]. Le rapprochement est prêt pour validation.","La contrepassation [P5] annule l’encaissement. La quittance reste conditionnelle, même si la transaction initiale apparaît au dossier."]]},"en":{"ui":["Not yet reviewed","Open the documents or review the file to see what the evidence supports.","Action blocked","Approval required","Approval simulated","The approval is recorded in the log. No real email or payment.","Proposed draft · nothing was sent","Document added","Document removed","The file changed. Review it again.","Fictional data · Ino-Vita AI simulation","Case reset. No changes to any real file."],"cases":[["Directive and extra work","$41,630","Amount claimed","The subcontractor bills for an extra and requests confirmation by email.",[["P1 · Quote ST-14","$41,630 to modify ductwork on Level 2. The quote sets a price but does not authorize the work."],["P2 · Directive register","DC-07 is marked “Draft.” No signature or approval date is recorded."],["P3 · Signed directive DC-07","The project manager signed for the Level 2 scope and $41,630 on June 12."],["P4 · “Looks good” email","The June 11 email says only: “Looks good, let’s talk tomorrow.” No price, scope or signature."],["P5 · Signed register: DC-07 suspended","On June 13, the project manager signed a suspension of DC-07 and requested renewed approval of its scope and price. This postdates the signed June 12 directive."]],"Do not confirm the $41,630 extra. The quote is on file [P1], but the directive is still a draft [P2].","The email [P4] confirms neither scope nor price. Do not confirm the extra without the signed directive.","The June 12 signed directive supports the scope and $41,630 [P3]. You can now decide whether to approve the draft.","Hello, we confirm receipt of signed directive DC-07 for the $41,630 extra [P3]. This message does not confirm payment.","The June 13 decision [P5] suspends DC-07. Even with the signed directive [P3] on file, require current authorization before confirming the extra."],["Tile installation: billed progress","100% billed / 62% verified","Billing and site inspection","The payment application claims full completion for tile. The inspection shows work is still incomplete.",[["P1 · Payment application 06","Line C-12, Level 1 tiling, is listed as 100% complete."],["P2 · Site inspection report","June 18 inspection: 124 m² of tile installed out of the 200 m² contracted, or 62%."],["P3 · Revised application 06","Line C-12 changes from 100% to 62%, or 124 m² out of 200 m². This supersedes the original."],["P4 · Undated photo","This photo shows a section of finished floor. It does not establish total installed area or date."],["P5 · Follow-up inspection: tile removed","On June 19, 24 m² of tile in Zone B was removed to repair the substrate. The remaining 100 m² is 50% of the contracted area."]],"Block confirmation of the application. It exceeds verified progress by 38 percentage points [P1, P2].","The photo [P4] cannot explain the 38-point gap. Ask for a revised payment application.","The revised application [P3] matches the 124 m² verified in the inspection [P2]. You can now approve the reconciliation.","Hello, we reconciled revised line C-12 at 62% [P3] with the June 18 site inspection [P2]. No payment is confirmed.","The follow-up inspection [P5] puts progress at 50%. Do not confirm the 62% application until the figures are reconciled again."],["Signed release, cleared funds unverified","$16,600","Amount covered by the release","A release was signed, but it only takes effect after funds clear.",[["P1 · Release 12-081","Signed August 28. The release says it takes effect after $16,600 clears."],["P2 · Ledger extract","No cleared $16,600 receipt is matched to release 12-081."],["P3 · Cleared transaction","Receipt of $16,600 marked “Cleared,” with a reference matching release 12-081."],["P4 · Transfer initiation notice","The notice says “Initiated,” not “Cleared.”"],["P5 · Transaction reversal","The bank reversed the transaction associated with release 12-081 the next day. The reversal cancels the $16,600 receipt."]],"The signed release is on file [P1], but cleared funds are not [P2]. Keep the file open.","A transfer initiation notice [P4] is not proof of cleared funds. Do not mark the release effective.","The cleared transaction [P3] matches the release [P1]. Get the reconciliation approved before closing the file.","Hello, the cleared $16,600 receipt was matched to release 12-081 [P1, P3]. The reconciliation is ready for approval.","The reversal [P5] cancels the receipt. The release remains conditional even if the original transaction is still on file."]]}};
const main=document.querySelector('main.sim');
if (!main) return;
const {ui,cases}=locale[main.dataset.lang]||locale.en;
const el=id=>document.getElementById(id);
const choices=Array.from(main.querySelectorAll('[data-case]'));
const keys=['extra','avance','paiement'];
const media=window.matchMedia('(max-width: 820px)');
const opts=[el('add'),el('weak'),el('conflict')];
let ix=0,phase='initial',log=[];
const card=el('decision-card'), sr=el('status'), approval=el('approve');
const source=el('docs'), analyze=el('analyze'), quick=el('analyze-quick');
const docNodes=new Map();
function record(message){
  log.push(message);
  const li=document.createElement('li');li.textContent=message;
  el('log').append(li);
  el('trace-count').textContent='('+log.length+')';
  el('receipt').disabled=false;
}
function renderDocs(replace=false){
  const all=cases[ix][4];
  if (replace) {source.replaceChildren();docNodes.clear();}
  for (const [i,[name,text]] of all.entries()){
    const on=i<2||opts[i-2]?.checked;
    if (!on) {docNodes.get(i)?.remove();docNodes.delete(i);continue;}
    if (docNodes.has(i)) continue;
    const details=document.createElement('details'), summary=document.createElement('summary'), p=document.createElement('p');
    summary.id='demo-piece-'+(i+1);summary.textContent=name;p.textContent=text;details.append(summary,p);docNodes.set(i,details);
    const next=Array.from(docNodes.keys()).filter(j=>j>i).sort((a,b)=>a-b)[0];
    source.insertBefore(details,docNodes.get(next)||null);
  }
}
function fillCitations(target,text){
  target.replaceChildren();
  for (const term of text.split(/(\[P\d(?:, P\d)*\])/g)){
    if(!/^\[P\d/.test(term)){target.append(term);continue;}
    const references=term.match(/P\d/g);
    references.forEach((ref,i)=>{
      if(i) target.append(' ');
      const n=Number(ref.slice(1));
      const details=docNodes.get(n-1);
      if(!details){target.append('['+ref+']');return;}
      const link=document.createElement('a');link.className='sim-cite';link.href='#'+details.firstElementChild.id;
      link.textContent='['+ref+']';link.setAttribute('aria-label',cases[ix][4][n-1][0]);
      link.addEventListener('click',event=>{event.preventDefault();details.open=true;details.firstElementChild.focus();});
      target.append(link);
    });
  }
}
function update(next, headline, description, draft=''){
  phase=next;
  card.dataset.phase=next;
  el('status-text').textContent=headline;
  fillCitations(el('reason'),description);

  el('draft').hidden=!draft;
  fillCitations(el('draft-text'),draft);
  approval.hidden=!draft;
  approval.disabled=next!=='ready';
}
function start(i,{reset=false}={}){
  ix=i;
  const [title,amount,metric,intro,docs]=cases[i];
  el('case-title').textContent=title;el('amount').textContent=amount;el('metric').textContent=metric;el('intro').textContent=intro;
  for (const [n,control] of opts.entries()){
    control.checked=false;control.disabled=false;
    el(['extra-label','weak-label','conflict-label'][n]).textContent=docs[2+n]?.[0]||'';
    control.disabled=!docs[2+n];
  }
  el('conflict-row').hidden=!docs[4];
  quick.disabled=false;analyze.disabled=false;el('reset').disabled=false;
  choices.forEach((button,j)=>button.setAttribute('aria-pressed',String(j===i)));
  log=[];el('log').replaceChildren();el('trace-count').textContent='(0)';el('trail').open=false;el('receipt').disabled=true;
  renderDocs(true);update('initial',ui[0],ui[1]);
  if (reset) el('reason').textContent=ui[11];
  syncLanguageLinks();
}
function syncLanguageLinks(){
  const other=main.dataset.lang==='fr'?'/en/demo/':'/demo/';
  for(const a of document.querySelectorAll('a[href]')){
    const raw=a.getAttribute('href');
    if (raw.split(/[?#]/)[0]===other) a.href=other+'?case='+keys[ix]+'#main';
  }
}
choices.forEach(button=>button.addEventListener('click',()=>{
  const index=keys.indexOf(button.dataset.case);
  if (index!==ix && index!==-1) start(index);
}));
opts.forEach((control,i)=>control.addEventListener('change',()=>{
  renderDocs();update('initial',ui[0],ui[9]);record((control.checked?ui[7]:ui[8])+': '+cases[ix][4][2+i][0]+'.');
}));
// Announce the result atomically through role=status. Mobile scrolls without taking keyboard/screen reader focus.
function review(event){
  const [, , , , ,missing,weak,ready,draft,conflict]=cases[ix];
  const hasConflict=opts[2].checked;
  const mayApprove=opts[0].checked&&!hasConflict;
  update(mayApprove?'ready':'blocked',mayApprove?ui[3]:ui[2],hasConflict?conflict:mayApprove?ready:opts[1].checked?weak:missing,mayApprove?draft:'');
  record(el('status-text').textContent+': '+el('reason').textContent);
  if (media.matches) {
    card.scrollIntoView({block:'start'});
    if(event.currentTarget===quick && event.detail===0) card.focus({preventScroll:true});
  }
}
analyze.addEventListener('click',review);quick.addEventListener('click',review);
approval.addEventListener('click',()=>{
  if(phase!=='ready') return;
  const old=el('draft-text').textContent;
  // Restore a stable focus before removing the approval action from tab order.
  el('return-evidence').focus();
  update('simulated',ui[4],ui[5],old);record(ui[4]+': '+ui[5]);
});
el('return-evidence').addEventListener('click',e=>{e.preventDefault();el('weak').focus();});
el('reset').addEventListener('click',()=>{start(ix,{reset:true});choices[ix].focus();});
el('receipt').addEventListener('click',()=>{
  if(!log.length) return;
  const output=[ui[10],cases[ix][0],'',...log.map((line,i)=>String(i+1).padStart(2,'0')+'. '+line)].join('\n');
  const objectURL=URL.createObjectURL(new Blob([output],{type:'text/plain;charset=utf-8'}));
  const a=document.createElement('a');a.href=objectURL;a.download=main.dataset.lang==='fr'?'trace-demo-ino-vita.txt':'ino-vita-demo-log.txt';
  main.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(objectURL),1000);
});
el('draft-label').textContent=ui[6];
const requested=keys.indexOf(new URLSearchParams(window.location.search).get('case'));
start(requested<0?0:requested);
})();
