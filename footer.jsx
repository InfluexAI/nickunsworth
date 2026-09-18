window.NUKit = window.NUKit || {};
function SiteFooter(){
  const links = ['Home','About Nick','Work With Me','Success Stories','Speaking & Media','Contact'];
  const legal = ['Terms & Conditions','Privacy Policy','Disclaimer'];
  return (
    <div style={{background:'var(--surface-dark)',color:'var(--text-on-dark-secondary)',padding:'var(--sp-64) var(--sp-40) var(--sp-40)'}}>
      <div className="wrap" style={{padding:0,display:'flex',flexDirection:'column',alignItems:'center'}}>
        <div style={{fontFamily:'var(--font-title)',fontWeight:300,fontSize:'28px',letterSpacing:'.04em',color:'var(--text-on-dark)'}}>NICK UNSWORTH</div>
        <div style={{width:'100%',height:1,background:'rgba(255,255,255,.14)',margin:'var(--sp-32) 0'}}></div>
        <div style={{display:'flex',gap:'var(--sp-32)',flexWrap:'wrap',justifyContent:'center',marginBottom:'var(--sp-40)'}}>
          {links.map((l,i)=>(<a key={i} href="#" style={{color:i===0?'var(--nu-flame-orange)':'var(--text-on-dark)',fontSize:'var(--fs-small)',fontWeight:600,whiteSpace:'nowrap'}}>{l}</a>))}
        </div>
        <div style={{display:'flex',gap:'var(--sp-24)',flexWrap:'wrap',justifyContent:'center',fontSize:'var(--fs-small)'}}>
          <span style={{color:'var(--text-on-dark-secondary)'}}>&copy; Nick Unsworth</span>
          {legal.map((l,i)=>(<a key={i} href="#" style={{color:'var(--text-on-dark-secondary)'}}>{l}</a>))}
        </div>
      </div>
    </div>
  );
}
window.NUKit.SiteFooter = SiteFooter;
