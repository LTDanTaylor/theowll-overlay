
// Simple JS for subtle pulsing glow and time counter (used on Starting Soon)
(function(){
  const title = document.querySelector('.neon-title');
  if(title){
    let t=0;
    setInterval(()=>{ t+=0.02; const scale=1+Math.sin(t)/80; title.style.transform='scale('+scale+')'; },33);
  }
  // Optional countdown element support
  const countdownEl = document.getElementById('countdown');
  if(countdownEl){
    // default 5 minutes
    let remaining = parseInt(countdownEl.getAttribute('data-seconds')||300,10);
    function update(){
      const m = Math.floor(remaining/60).toString().padStart(2,'0');
      const s = (remaining%60).toString().padStart(2,'0');
      countdownEl.textContent = `${m}:${s}`;
      if(remaining>0) remaining--;
    }
    update();
    setInterval(update,1000);
  }
})();
