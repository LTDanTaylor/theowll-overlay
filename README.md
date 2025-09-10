# theowll-overlay

:root{
  --pink:#ff6fb5;
  --purple:#7a3ff2;
  --blue:#4fb0ff;
  --bg1: linear-gradient(135deg, rgba(255,111,181,0.12), rgba(122,63,242,0.12));
}
html,body{height:100%;margin:0;font-family:Inter,Arial,Helvetica,sans-serif;background:linear-gradient(180deg,#0b0520 0%, #15072a 100%);overflow:hidden;}
.center{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:18px;}
.neon-title{font-size:84px;letter-spacing:6px;color:var(--pink);text-transform:uppercase;font-weight:800;text-align:center;
  text-shadow:
    0 0 30px rgba(255,111,181,0.25),
    0 0 60px rgba(122,63,242,0.18),
    0 0 100px rgba(79,176,255,0.12);
  }
.subtitle{font-size:20px;color:rgba(255,255,255,0.85);opacity:0.95}
/* Owl card */
.owl-card{width:420px;height:280px;border-radius:22px;display:flex;align-items:center;justify-content:center;
  backdrop-filter: blur(6px);-webkit-backdrop-filter:blur(6px);
  background: linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01));
  border:1px solid rgba(255,255,255,0.06);box-shadow:0 10px 30px rgba(0,0,0,0.6);
  position:relative;overflow:hidden;
}
.owl-card img{max-width:80%;max-height:80%;filter:drop-shadow(0 8px 40px rgba(0,0,0,0.6));transform:translateY(6px);}
/* smoke layers */
.smoke{
  position:absolute;inset:0;pointer-events:none;
  background-image: url('assets/owl_intermission.png');
  background-repeat:no-repeat;background-position:center bottom;background-size:contain;
  opacity:0.14;mix-blend-mode:screen;filter:blur(6px) saturate(1.2);
  animation: drift 14s linear infinite;
}
.smoke.smoke-2{opacity:0.08;transform:scaleX(-1);animation-duration:18s;animation-direction:reverse;}
@keyframes drift{
  0%{transform:translateY(0) translateX(0) rotate(0deg);}
  50%{transform:translateY(-40px) translateX(18px) rotate(1deg);}
  100%{transform:translateY(0) translateX(0) rotate(0deg);}
}
/* glowing underline */
.glow-line{
  width:320px;height:6px;border-radius:6px;background:linear-gradient(90deg,var(--pink),var(--purple),var(--blue));
  box-shadow:0 6px 30px rgba(122,63,242,0.28),0 0 60px rgba(79,176,255,0.12);
}
/* footer */
.footer{position:absolute;bottom:18px;width:100%;text-align:center;color:rgba(255,255,255,0.65);font-size:13px}
/* responsive */
@media (max-width:900px){
  .neon-title{font-size:46px}
  .owl-card{width:320px;height:220px}
}
