window.NUKit = window.NUKit || {};
function OffersSection(){
  const { Button } = window.NickUnsworthDesignSystem_6a6791;
  const { useState } = React;
  const [active, setActive] = useState(0);
  const offers = [
    {phase:'PHASE 01 \u00b7 FREE',title:'Bestseller on Fire Workshop',d:'A free, practical first step for people ready to use a bestselling book as the launchpad for more authority, visibility, and business growth.',cta:'Start With My Free Workshop'},
    {phase:'PHASE 02 \u00b7 COACHING',title:'Bestseller on Fire Coaching',d:'A guided path to clarify your message, create the authority assets that matter, and build a platform that turns your expertise into opportunity.',cta:'Explore Coaching With Me'},
    {phase:'PHASE 03 \u00b7 DONE-FOR-YOU',title:'Done-for-You Publishing',d:'High-touch support for leaders who want a professional partner to help transform their message into a strategically positioned bestselling book and top tier media assets.',cta:'Explore Publishing With Me'},
    {phase:'PHASE 04 \u00b7 ELITE',title:'Million Dollar Brand Elite',d:'A selective experience for leaders ready to elevate their authority, expand their reach, and build a premium brand and business ecosystem.',cta:'Inquire With Our Team'},
  ];
  const o = offers[active];
  return (
    <div className="section" style={{background:'var(--nu-black)',position:'relative',overflow:'hidden',padding:0}}>
      <img src="assets/hero-stage.png" alt="" style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover',opacity:.35}} />
      <div style={{position:'absolute',inset:0,background:'linear-gradient(90deg,rgba(17,17,17,.97) 0%,rgba(17,17,17,.9) 45%,rgba(17,17,17,.75) 100%)'}}></div>
      <div className="wrap" style={{position:'relative',display:'grid',gridTemplateColumns:'200px 1fr',gap:'var(--sp-48)',padding:'calc(var(--sp-120) + 180px) var(--sp-40) calc(var(--sp-120) + 180px)',alignItems:'start'}}>
        <div style={{display:'flex',flexDirection:'column',gap:'var(--sp-40)',position:'relative'}}>
          <div style={{position:'absolute',left:5,top:6,bottom:6,width:1,background:'rgba(255,255,255,.18)'}}></div>
          {offers.map((s,i)=>(
            <div key={i} onClick={()=>setActive(i)} style={{display:'flex',alignItems:'flex-start',gap:'var(--sp-16)',cursor:'pointer',position:'relative'}}>
              <div style={{width:11,height:11,borderRadius:'50%',marginTop:4,flexShrink:0,background:i===active?'var(--nu-flame-orange)':'rgba(255,255,255,.3)'}}></div>
              <div>
                <div style={{fontFamily:'var(--font-title)',fontWeight:700,fontSize:'var(--fs-small)',color:i===active?'var(--nu-flame-orange)':'rgba(255,255,255,.4)'}}>{String(i+1).padStart(2,'0')}</div>
                <div style={{fontFamily:'var(--font-title)',fontSize:'var(--fs-body)',color:i===active?'var(--nu-white)':'rgba(255,255,255,.45)'}}>{s.title.split(' ').slice(-1)}</div>
              </div>
            </div>
          ))}
        </div>
        <div>
          <h2 style={{fontFamily:'var(--font-display)',fontSize:'clamp(1.75rem,3.4vw,var(--fs-h1))',fontWeight:700,color:'var(--nu-white)',marginBottom:'var(--sp-32)',whiteSpace:'nowrap'}}>{o.title}</h2>
          <p style={{fontSize:'var(--fs-body-lg)',color:'rgba(255,255,255,.8)',maxWidth:640,marginBottom:'var(--sp-40)'}}>{o.d}</p>
          <Button variant="primary">{o.cta}</Button>
        </div>
      </div>
    </div>
  );
}

function AuthoritySection(){
  const stats = [
    {v:'$70M+',l:'generated online and through in-person events'},
    {v:'2',l:'companies exited'},
    {v:'3x',l:'Inc. 5000, three years in a row'},
    {v:'1,000s',l:'entrepreneurs served'},
  ];
  return (
    <div className="section" style={{position:'relative',background:'var(--nu-black)',overflow:'hidden'}}>
      <img src="assets/hero-stage.png" alt="Nick Unsworth on stage with a full audience" style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover',objectPosition:'center 20%',opacity:.5}} />
      <div style={{position:'absolute',inset:0,background:'linear-gradient(180deg,rgba(17,17,17,.88) 0%,rgba(17,17,17,.94) 100%)'}}></div>
      <div className="wrap section-in" style={{position:'relative'}}>
        <div style={{textAlign:'center',margin:'0 auto var(--sp-64)'}}>
          <h2 style={{fontFamily:'var(--font-display)',fontSize:'var(--fs-h2)',color:'var(--nu-white)',whiteSpace:'nowrap'}}>A Career Spent Turning Knowledge Into Impact</h2>
        </div>
        <div className="stat-grid">
          {stats.map((s,i)=>(
            <div key={i} style={{textAlign:'center'}}>
              <div className="nu-gradient-text" style={{fontFamily:'var(--font-display)',fontSize:'3.5rem',fontWeight:300,lineHeight:1}}>{s.v}</div>
              <p style={{color:'rgba(255,255,255,.75)',fontSize:'var(--fs-body)',marginTop:'var(--sp-16)',letterSpacing:'.02em'}}>{s.l}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

Object.assign(window.NUKit, { OffersSection, AuthoritySection });
