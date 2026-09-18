window.NUKit = window.NUKit || {};
function OffersSection(){
  const { Button, Card, Badge } = window.NickUnsworthDesignSystem_6a6791;
  const offers = [
    {badge:'FREE',title:'Bestseller on Fire Workshop',d:'A free, practical first step for people ready to use a bestselling book as the launchpad for more authority, visibility, and business growth.',cta:'Start With My Free Workshop',variant:'light'},
    {badge:'COACHING',title:'Bestseller on Fire Coaching',d:'A guided path to clarify your message, create the authority assets that matter, and build a platform that turns your expertise into opportunity.',cta:'Explore Coaching With Me',variant:'light'},
    {badge:'DONE-FOR-YOU',title:'Done-for-You Publishing',d:'High-touch support for leaders who want a professional partner to help transform their message into a strategically positioned bestselling book and top tier media assets.',cta:'Explore Publishing With Me',variant:'dark'},
  ];
  return (
    <div className="section" style={{background:'var(--surface-page)'}}>
      <div className="wrap section-in">
        <div style={{marginBottom:'var(--sp-64)',maxWidth:640,marginLeft:'auto',marginRight:'auto',textAlign:'center'}}>
          <h2 style={{fontFamily:'var(--font-display)',fontSize:'var(--fs-h2)',color:'#58595B'}}>Ways to Work With Nick</h2>
        </div>
        <div className="offer-grid">
          {offers.map((o,i)=>(
            <div key={i} style={{display:'flex',flexDirection:'column',padding:'var(--sp-40) var(--sp-32)',borderTop:'2px solid var(--nu-flame-orange)',background:'var(--nu-white)',boxShadow:'var(--shadow-subtle)'}}>
              <div className="nu-gradient-text" style={{fontFamily:'var(--font-display)',fontSize:'2.5rem',fontWeight:300,marginBottom:'var(--sp-24)'}}>{String(i+1).padStart(2,'0')}</div>
              <h3 style={{fontFamily:'var(--font-display)',fontSize:'var(--fs-h4)',marginBottom:'var(--sp-16)',color:'#58595B'}}>{o.title}</h3>
              <p style={{fontSize:'var(--fs-body)',color:'#58595B',flex:1,marginBottom:'var(--sp-24)'}}>{o.d}</p>
              <a href="#" className="link-cta">{o.cta} <span aria-hidden="true">&rarr;</span></a>
            </div>
          ))}
        </div>
        <div style={{marginTop:'var(--sp-24)',borderRadius:'var(--radius-lg)',background:'var(--grad-ember-dark)',padding:'var(--sp-48)',display:'flex',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',gap:'var(--sp-24)',boxShadow:'var(--shadow-medium)'}}>
          <div style={{maxWidth:640}}>
            <h3 style={{fontFamily:'var(--font-display)',fontSize:'var(--fs-h3)',color:'var(--nu-white)',marginBottom:'var(--sp-12)'}}>Million Dollar Brand Elite</h3>
            <p style={{color:'rgba(255,255,255,.78)',fontSize:'var(--fs-body)'}}><span style={{whiteSpace:'nowrap'}}>A selective experience for leaders ready to elevate their authority, expand their reach,</span><br/><span style={{whiteSpace:'nowrap'}}>and build a premium brand and business ecosystem.</span></p>
          </div>
          <Button variant="primary">Inquire With Our Team</Button>
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
          <h2 style={{fontFamily:'var(--font-display)',fontSize:'var(--fs-h2)',color:'var(--nu-white)',whiteSpace:'nowrap'}}>A career spent turning knowledge into impact.</h2>
        </div>
        <div className="stat-grid">
          {stats.map((s,i)=>(
            <div key={i} style={{textAlign:'center'}}>
              <div className="nu-gradient-text" style={{fontFamily:'var(--font-display)',fontSize:'3.5rem',fontWeight:300,lineHeight:1}}>{s.v}</div>
              <p style={{color:'rgba(255,255,255,.75)',fontSize:'var(--fs-small)',marginTop:'var(--sp-16)',letterSpacing:'.02em'}}>{s.l}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

Object.assign(window.NUKit, { OffersSection, AuthoritySection });
