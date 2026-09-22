window.NUKit = window.NUKit || {};
function OffersSection(){
  const { Button } = window.NickUnsworthDesignSystem_6a6791;
  const { useState } = React;
  const [active, setActive] = useState(0);
  const offers = [
    {phase:'PHASE 01 \u00b7 FREE',title:'Bestseller on Fire Workshop',accent:'Workshop',d:'A free, practical first step for people ready to use a bestselling book as the launchpad for more authority, visibility, and business growth.',cta:'Start With My Free Workshop'},
    {phase:'PHASE 02 \u00b7 COACHING',title:'Bestseller on Fire Coaching',bg:'assets/offers-coaching-bg.png',accent:'Coaching',d:'A guided path to clarify your message, create the authority assets that matter, and build a platform that turns your expertise into opportunity.',cta:'Explore Coaching With Me'},
    {phase:'PHASE 03 \u00b7 DONE-FOR-YOU',bg:'assets/offers-publishing-bg.png',title:'Done-for-You Publishing',accent:'Publishing',d:'High-touch support for leaders who want a professional partner to help transform their message into a strategically positioned bestselling book and top tier media assets.',cta:'Explore Publishing With Me'},
    {phase:'PHASE 04 \u00b7 ELITE',bg:'assets/offers-elite-bg.png',title:'Million Dollar\nBrand Elite',accent:'Elite',d:'A selective experience for leaders ready to elevate their authority, expand their reach, and build a premium brand and business ecosystem.',cta:'Inquire With Our Team'},
  ];
  const o = offers[active];
  return (
    <div className="section offers-sec" style={{background:'var(--nu-black)',position:'relative',overflow:'hidden',padding:0}}>
      <img src={o.bg||'assets/offers-book-bg.jpg'} alt="" className={o.bg?'offers-bg-img offers-bg-photo':'offers-bg-img offers-bg-book'} />
      <div style={{position:'absolute',inset:0,background:'linear-gradient(90deg,rgba(10,8,7,.94) 0px,rgba(10,8,7,.88) var(--offers-copy-end),rgba(10,8,7,.4) calc(var(--offers-copy-end) + 90px),rgba(10,8,7,0) calc(var(--offers-copy-end) + 170px))'}}></div>
      <div className="offers-copy-ground" aria-hidden="true"></div>
      <div className="wrap" style={{position:'relative',padding:'calc(var(--sp-64) + 120px) var(--sp-40) 0'}}>
        <h2 style={{fontFamily:'var(--font-display)',fontSize:'calc(var(--fs-h2) * 1.3)',fontWeight:300,color:'var(--nu-white)',margin:0,maxWidth:690}}>Ways to <span className="nu-gradient-text" style={{fontFamily:'var(--font-accent)',fontWeight:400,fontSize:'1.4em'}}>Work</span> With Nick</h2>
      </div>
      <div className="wrap offers-copy-grid" style={{position:'relative',display:'grid',gridTemplateColumns:'var(--offers-rail) minmax(0,var(--offers-copy))',gap:'var(--offers-gap)',padding:'var(--sp-48) var(--sp-40) calc(var(--sp-64) + 120px)',alignItems:'start'}}>
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
          <h2 style={{fontFamily:'var(--font-display)',fontSize:'clamp(1.75rem,3.4vw,var(--fs-h1))',fontWeight:300,color:'var(--nu-white)',marginTop:'-0.18em',marginBottom:'var(--sp-32)',}}><span style={{whiteSpace:'pre-line'}}>{o.title.slice(0,o.title.length-o.accent.length)}</span><span className="nu-gradient-text" style={{fontFamily:'var(--font-accent)',fontWeight:400,fontSize:'1.4em',display:'block'}}>{o.accent}</span></h2>
          <p style={{fontSize:'var(--fs-body-lg)',color:'rgba(255,255,255,.8)',maxWidth:640,marginBottom:'var(--sp-40)',textWrap:'pretty'}} className="offer-desc">{o.d}</p>
          <Button variant="primary">{o.cta}</Button>
        </div>
      </div>
    </div>
  );
}

function AuthoritySection(){
  const stats = [
    {v:'$70M+',l:'Generated Online and\nIn-Person'},
    {v:'Two',l:'Companies Exited'},
    {v:'Inc. 5000',l:'Three Years in a Row'},
    {v:'Thousands',l:'Of Entrepreneurs Served'},
  ];
  return (
    <div className="section authority-sec">
      <img src="assets/authority-bg.jpg" alt="Nick Unsworth speaking on stage" className="authority-bg" />
      <div className="authority-veil"></div>
      <div className="wrap section-in authority-in">
        <div className="stat-stack">
          <h2 style={{fontFamily:'var(--font-display)',fontSize:'var(--fs-h2)',fontWeight:300,color:'var(--nu-white)',marginBottom:'var(--sp-40)',textAlign:'center'}}>A Career Spent Turning<br/>Knowledge Into <span className="nu-gradient-text" style={{fontFamily:'var(--font-accent)',fontWeight:400,fontSize:'1.4em'}}>Impact</span></h2>
          <div className="stat-grid">
          {stats.map((s,i)=>(
            <div className="stat-cell" key={i}>
              <div className="nu-gradient-text stat-num" style={{fontFamily:'var(--font-display)',fontWeight:300,lineHeight:1}}>{s.v}</div>
              <p className="stat-label">{s.l}</p>
            </div>
          ))}
          </div>
        </div>
      </div>
    </div>
  );
}

Object.assign(window.NUKit, { OffersSection, AuthoritySection });
