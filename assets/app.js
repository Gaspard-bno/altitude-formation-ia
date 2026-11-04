(function(){
  var REG = window.REGISTRY || [];
  var C = window.CONTENT || {fr:{},pt:{}};
  var LS_LANG='cortex_lang', LS_DONE='cortex_done';
  function get(k,d){try{var v=localStorage.getItem(k);return v==null?d:v}catch(e){return d}}
  function set(k,v){try{localStorage.setItem(k,v)}catch(e){}}
  var lang = get(LS_LANG,'fr');
  var done = {};
  try{ (JSON.parse(get(LS_DONE,'[]'))||[]).forEach(function(id){done[id]=1}) }catch(e){}
  function saveDone(){ set(LS_DONE, JSON.stringify(Object.keys(done))) }

  function mod(id){ var L=C[lang]||{}; return L[id] || (C.fr||{})[id] || null; }
  function curId(){ var h=(location.hash||'').replace('#',''); return REG.some(function(r){return r.id===h})?h:(REG[0]&&REG[0].id); }
  function idx(id){ for(var i=0;i<REG.length;i++) if(REG[i].id===id) return i; return 0; }

  function renderSide(){
    var side=document.getElementById('side'); if(!side) return;
    var cur=curId(), html='<div class="grp">Programme</div>';
    REG.forEach(function(r){
      var m=mod(r.id), t=m?m.title:'(à venir)';
      html+='<a href="#'+r.id+'" class="'+(r.id===cur?'on ':'')+(done[r.id]?'done':'')+'">'+
        '<span class="bdg">'+r.bdg+'</span><span class="t">'+esc(t)+'</span><span class="ck">✓</span></a>';
    });
    side.innerHTML=html;
  }
  function esc(s){return (s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')}

  function renderMain(){
    var main=document.getElementById('main'); if(!main) return;
    var id=curId(), m=mod(id), i=idx(id);
    if(!m){ main.innerHTML='<div class="mhead"><h1>Module en préparation</h1><p class="sum">Ce module arrive très bientôt.</p></div>'; return; }
    var lvl=m.level?'<span class="lvl">'+esc(m.level)+'</span>':'';
    var h='<div class="mhead"><div class="kick">'+(REG[i]?REG[i].bdg:'')+' Module '+(i)+' '+lvl+'</div>'+
      '<h1>'+esc(m.title)+'</h1><p class="sum">'+esc(m.summary||'')+'</p></div>'+ (m.html||'');
    var isDone=!!done[id];
    h+='<button class="donebtn'+(isDone?' is-done':'')+'" id="doneBtn">'+(isDone?'✓ Module terminé':'Marquer comme terminé')+'</button>';
    var prev=REG[i-1], next=REG[i+1];
    h+='<div class="mnav">';
    h+= prev?('<a href="#'+prev.id+'"><small>← Précédent</small><b>'+esc((mod(prev.id)||{}).title||'')+'</b></a>'):'<span></span>';
    h+= next?('<a class="next" href="#'+next.id+'"><small>Suivant →</small><b>'+esc((mod(next.id)||{}).title||'')+'</b></a>'):'<span></span>';
    h+='</div>';
    main.innerHTML=h;
    main.scrollTop=0; window.scrollTo(0,0);
    document.body.classList.remove('nav-open');
    var db=document.getElementById('doneBtn');
    if(db) db.onclick=function(){ if(done[id]) delete done[id]; else done[id]=1; saveDone(); renderAll(); };
  }

  function renderProg(){
    var tot=REG.length, n=0; REG.forEach(function(r){if(done[r.id])n++});
    var pct=tot?Math.round(n/tot*100):0;
    var b=document.getElementById('progBar'), p=document.getElementById('progPct');
    if(b) b.style.width=pct+'%'; if(p) p.textContent=pct+'%';
  }
  function renderAll(){ renderSide(); renderMain(); renderProg(); }

  document.addEventListener('click',function(e){
    var c=e.target.closest? e.target.closest('.copy'):null;
    if(c){ var pre=c.parentElement.querySelector('pre'); if(pre){ navigator.clipboard.writeText(pre.innerText).then(function(){ c.textContent='Copié ✓'; c.classList.add('ok'); setTimeout(function(){c.textContent='Copier';c.classList.remove('ok')},1500); }); } return; }
    var lb=e.target.closest? e.target.closest('.lang button'):null;
    if(lb){ lang=lb.getAttribute('data-lang'); set(LS_LANG,lang);
      document.querySelectorAll('.lang button').forEach(function(b){b.classList.toggle('on',b===lb)});
      document.documentElement.lang=lang; renderAll(); return; }
    var bg=e.target.id==='burger'?e.target:null;
    if(bg){ document.body.classList.toggle('nav-open'); }
  });
  window.addEventListener('hashchange',renderAll);
  document.querySelectorAll('.lang button').forEach(function(b){b.classList.toggle('on',b.getAttribute('data-lang')===lang)});
  document.documentElement.lang=lang;
  renderAll();
})();
