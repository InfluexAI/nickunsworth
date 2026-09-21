window.NUKit = window.NUKit || {};
function Nav(){
  const { Button } = window.NickUnsworthDesignSystem_6a6791;
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(()=>{
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const links = ['About Nick','Work With Me','Speaking & Media','Success Stories','Contact'];
  const textColor = scrolled ? '#58595B' : 'var(--nu-white)';
  return (
    <div style={{position:'fixed',top:0,left:0,right:0,zIndex:50,background:scrolled?'rgba(255,255,255,.96)':'transparent',backdropFilter:scrolled?'blur(6px)':'none',borderBottom:scrolled?'1px solid var(--border-default)':'1px solid rgba(255,255,255,.14)',transition:'background 200ms ease,border-color 200ms ease'}}>
      <div className="wrap" style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'var(--sp-16) var(--sp-40)',gap:'var(--sp-16)'}}>
        <div style={{fontFamily:'var(--font-title)',fontWeight:300,fontSize:'var(--fs-h4)',letterSpacing:'.03em',color:textColor,whiteSpace:'nowrap'}}>NICK UNSWORTH</div>
        <div className="nav-links" style={{gap:'var(--sp-24)'}}>
          {links.map((l,i)=>(<a key={i} href="#" style={{fontSize:'var(--fs-small)',fontWeight:400,color:textColor,whiteSpace:'nowrap'}}>{l}</a>))}
          <Button variant="primary" style={{padding:'var(--sp-12) var(--sp-24)',fontSize:'var(--fs-small)',whiteSpace:'nowrap'}}>Join the Workshop</Button>
        </div>
        <button className="nav-burger" onClick={()=>setOpen(!open)} style={{background:'none',border:'none',cursor:'pointer',flexDirection:'column',gap:'var(--sp-4)',padding:'var(--sp-8)'}}>
          <span style={{width:24,height:2,background:textColor,display:'block'}}></span>
          <span style={{width:24,height:2,background:textColor,display:'block'}}></span>
          <span style={{width:24,height:2,background:textColor,display:'block'}}></span>
        </button>
      </div>
      {open && (
        <div style={{display:'flex',flexDirection:'column',gap:'var(--sp-16)',padding:'var(--sp-8) var(--sp-24) var(--sp-24)',borderTop:'1px solid rgba(255,255,255,.14)',background:'var(--nu-black)'}}>
          {links.map((l,i)=>(<a key={i} href="#" style={{fontSize:'var(--fs-body)',fontWeight:400,color:'var(--nu-white)'}}>{l}</a>))}
          <Button variant="primary" style={{padding:'var(--sp-16) var(--sp-24)',fontSize:'var(--fs-small)',justifyContent:'center'}}>Join the Workshop</Button>
        </div>
      )}
    </div>
  );
}

function Hero(){
  const { Button } = window.NickUnsworthDesignSystem_6a6791;
  return (
    <div style={{position:'relative',background:'var(--nu-black)',overflow:'hidden'}}>
      <img src="assets/hero-stage.png" alt="Nick Unsworth speaking on stage to a full room" style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover',objectPosition:'center 30%'}} />
      <div style={{position:'absolute',inset:0,background:'linear-gradient(100deg,rgba(0,0,0,.86) 0%,rgba(0,0,0,.62) 45%,rgba(17,17,17,.35) 100%)'}}></div>
      <div className="wrap section-in" style={{position:'relative',padding:'var(--sp-144) var(--sp-40) var(--sp-96)',maxWidth:920,margin:'0 auto',textAlign:'center',display:'flex',flexDirection:'column',alignItems:'center'}}>
        <h1 style={{fontFamily:'var(--font-display)',fontSize:'var(--fs-hero)',color:'var(--nu-white)',lineHeight:1.32,fontWeight:300,marginTop:'var(--sp-24)',marginBottom:'var(--sp-24)',transform:'translateY(-10%)'}}>
          <span style={{whiteSpace:'nowrap'}}>Turn Your <span className="nu-gradient-text" style={{fontFamily:'var(--font-accent)',fontSize:'1.2em'}}>Message</span> Into a</span><br/><span className="nu-gradient-text">Million-Dollar Brand</span>
        </h1>
        <div style={{transform:'translateY(-20%)'}}>
        <p style={{fontFamily:'var(--font-body)',fontWeight:400,fontSize:'var(--fs-body-lg)',color:'rgba(255,255,255,.88)',marginTop:'var(--sp-24)',lineHeight:'var(--lh-body)'}} className="hero-sub-para">
          <span className="hero-sub-line" style={{whiteSpace:'nowrap'}}>I'm Nick Unsworth, and I help experts, entrepreneurs, speakers, authors, coaches, and leaders</span><br className="hero-br"/>{' '}
          <span className="hero-sub-line" style={{whiteSpace:'nowrap'}}>turn what they know into a message people remember, a platform people trust, and a business</span><br className="hero-br"/>{' '}
          <span className="hero-sub-line" style={{whiteSpace:'nowrap'}}>that creates the freedom to impact more lives.</span>
        </p>
        <div className="hero-cta-row" style={{justifyContent:'center'}}>
          <Button variant="primary">Start With My Free Bestseller on Fire Workshop</Button>
          <Button variant="secondaryDark">See How I Can Help</Button>
        </div>
        </div>
      </div>
    </div>
  );
}

function FeaturedIn(){
  const logos = ['logo-1','logo-2','inc5000','logo-3','logo-4','nbc','marketwatch','logo-5','logo-6','ap','logo-7'];
  return (
    <div style={{background:'var(--nu-black)'}}>
      <div style={{padding:'var(--sp-64) var(--sp-24) var(--sp-40)'}}>
        <div style={{display:'flex',flexDirection:'column',alignItems:'center',gap:'var(--sp-24)',width:'100%'}}>
          <div className="nu-eyebrow" style={{color:'var(--text-on-dark-secondary)'}}>AS SEEN ON</div>
          <div style={{display:'flex',gap:'var(--sp-8)',alignItems:'center',flexWrap:'nowrap',justifyContent:'space-between',width:'100%'}}>
            {logos.map((l,i)=>(<img key={i} src={'assets/logos/'+l+'.png'} alt="Media logo" style={{height:44,width:'auto',maxWidth:100,objectFit:'contain',opacity:.85,flexShrink:1,minWidth:0}} />))}
          </div>
        </div>
      </div>
      <div style={{width:'100%',overflow:'hidden',marginTop:'var(--sp-24)',lineHeight:0}}>
        <img src="assets/divider.svg" alt="" style={{width:'100%',display:'block',transform:'scaleY(-1)',marginBottom:-2}} />
      </div>
    </div>
  );
}

Object.assign(window.NUKit, { Nav, Hero, FeaturedIn });
