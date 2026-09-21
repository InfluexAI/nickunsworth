window.NUKit = window.NUKit || {};
function WorkshopSection(){
  const { Button, Input } = window.NickUnsworthDesignSystem_6a6791;
  return (
    <div className="section workshop-hero">
      <div className="workshop-hero-veil"></div>
      <div className="wrap workshop-hero-in">
        <div className="workshop-copy">
          <h2 style={{fontFamily:'var(--font-display)',fontSize:'var(--fs-h2)',fontWeight:300,color:'var(--nu-white)',marginBottom:'var(--sp-16)'}}>Bestseller on Fire <span className="nu-gradient-text" style={{fontFamily:'var(--font-accent)',fontWeight:400,fontSize:'1.4em'}}>Workshop</span></h2>
          <p style={{fontFamily:'var(--font-display)',fontWeight:300,fontSize:'var(--fs-h3)',color:'rgba(255,255,255,.92)',marginBottom:'var(--sp-24)'}}>Write, Publish, Launch, and Profit From Your New Bestselling Book.</p>
          <div style={{display:'flex',flexDirection:'column',gap:'var(--sp-16)',maxWidth:'var(--text-measure)'}}>
            <p style={{fontSize:'var(--fs-body)',color:'rgba(255,255,255,.82)'}}>If you are an expert, entrepreneur, author, speaker, coach, influencer, or creator, a bestselling book can become more than a book. It can become the authority asset that opens doors to ideal clients, podcasts, stages, media, and higher-value opportunities.</p>
            <p style={{fontSize:'var(--fs-body)',color:'rgba(255,255,255,.82)'}}>In my free live workshop, I'll show you how to turn the knowledge already inside you into a book that helps you grow your influence, impact, and income—without letting writer's block, confusion, or a full calendar keep you stuck.</p>
          </div>
        </div>
        <div className="workshop-optin">
          <div className="workshop-optin-head">Save Your Seat — Free Live Workshop</div>
          <form className="workshop-optin-row" onSubmit={(e)=>e.preventDefault()}>
            <input className="pill-field" type="text" placeholder="Name" aria-label="Name" />
            <input className="pill-field" type="email" placeholder="Email" aria-label="Email" />
            <Button variant="primary" type="submit" style={{flex:'0 0 auto',justifyContent:'center'}}><span style={{display:'block',textAlign:'center',whiteSpace:'nowrap'}}>SAVE MY SEAT + SUBSCRIBE</span></Button>
          </form>
          <p className="workshop-optin-fine">By joining, you agree to receive emails from Nick Unsworth. Unsubscribe anytime.</p>
        </div>
      </div>
    </div>
  );
}

function FinalCTA(){
  const { Button } = window.NickUnsworthDesignSystem_6a6791;
  return (
    <div className="section final-cta" style={{position:'relative',overflow:'hidden',textAlign:'center'}}>
      <div style={{position:'absolute',inset:0,background:'radial-gradient(74% 46% at 50% 26%,rgba(8,5,5,.82) 0%,rgba(8,5,5,.5) 62%,rgba(8,5,5,.24) 100%),linear-gradient(180deg,rgba(10,6,6,.5) 0%,rgba(10,6,6,.36) 55%,rgba(10,6,6,.58) 100%)'}}></div>
      <div className="wrap section-in" style={{position:'relative',maxWidth:1180,margin:'0 auto'}}>
        <h2 style={{fontFamily:'var(--font-display)',fontSize:'clamp(1.68rem,3.08vw,2.65rem)',color:'var(--nu-white)',marginBottom:'var(--sp-24)',maxWidth:'none',marginLeft:'auto',marginRight:'auto'}}>
          <span className="cta-head-line" style={{display:'block',textAlign:'center'}}>Your message can become the brand, business, and movement</span><br/><span className="nu-gradient-text cta-accent">You Are Here to Lead.</span>
        </h2>
        <p style={{fontSize:'var(--fs-body-lg)',color:'rgba(255,255,255,.82)',marginBottom:'var(--sp-40)',maxWidth:'none',marginLeft:'auto',marginRight:'auto'}}>
          <span className="cta-sub-line">If you're ready to stop sitting on what you know and start building</span><br/><span className="cta-sub-line">the platform it deserves, I'll help you take the next right step.</span>
        </p>
        <Button variant="primary">Start With My Free Workshop</Button>
      </div>
      <div className="social-row" style={{position:'relative',display:'flex',flexWrap:'wrap',justifyContent:'center',marginTop:'var(--sp-64)'}}>
        {[
          {name:'Facebook',label:'Stay Connected',path:'M15 8.5h-1.2c-.9 0-1.3.5-1.3 1.3V11H15l-.3 2H12.5v6h-2v-6H9V11h1.5V9.5C10.5 7.6 11.6 6 13.6 6H15v2.5z'},
          {name:'X',label:'Fuel the Conversation',path:'M13.6 10.6 20.4 3h-1.6l-5.9 6.6L8.1 3H3l7.1 9.9L3 19.9h1.6l6.3-7 5 7h5.1l-7.4-9.9zm-2.2 2.5-.7-1L5 4.3h2.4l4.7 6.5.7 1 6.1 8.5h-2.4l-5.1-7.2z'},
          {name:'Instagram',label:'Behind the Scenes',path:'M8 4h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4zm4 4.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm4.6-1.9a.9.9 0 1 0 0 1.8.9.9 0 0 0 0-1.8z',outline:true},
          {name:'YouTube',label:'Watch. Learn. Grow.',path:'M20.5 8.2c0-1.4-1.1-2.5-2.5-2.6C16 5.4 12 5.4 12 5.4s-4 0-6 .2c-1.4.1-2.5 1.2-2.5 2.6C3.4 9.6 3.4 12 3.4 12s0 2.4.1 3.8c0 1.4 1.1 2.5 2.5 2.6 2 .2 6 .2 6 .2s4 0 6-.2c1.4-.1 2.5-1.2 2.5-2.6.1-1.4.1-3.8.1-3.8s0-2.4-.1-3.8zM10 15V9l5 3-5 3z'},
          {name:'LinkedIn',label:'Let\u2019s Connect',path:'M6.9 8.5a1.9 1.9 0 1 0 0-3.8 1.9 1.9 0 0 0 0 3.8zM5.2 10h3.4v9H5.2v-9zm5.6 0h3.3v1.3h.1c.5-.9 1.6-1.5 2.9-1.5 3.1 0 3.6 1.9 3.6 4.4V19h-3.4v-4.2c0-1 0-2.3-1.4-2.3s-1.7 1.1-1.7 2.3V19h-3.4v-9z'}
        ].map((s,i)=>(
          <React.Fragment key={s.name}>
            {i>0&&<div className="social-div" style={{width:1,background:'rgba(255,255,255,.3)',alignSelf:'stretch',flexShrink:0}}></div>}
            <a href="#" aria-label={s.name} style={{padding:'calc(var(--sp-32) * 1.6) 84px',display:'flex',flexDirection:'column',alignItems:'center',gap:'var(--sp-16)',flexShrink:0}}>
              {s.outline
                ? <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="var(--nu-white)" strokeWidth="1.5"><rect x="4" y="4" width="16" height="16" rx="4"/><circle cx="12" cy="12" r="3.5"/><circle cx="17" cy="7" r="0.9" fill="var(--nu-white)" stroke="none"/></svg>
                : <svg width="60" height="60" viewBox="0 0 24 24" fill="var(--nu-white)"><path d={s.path}/></svg>}
              <span style={{color:'var(--nu-white)',fontSize:'var(--fs-body)',fontWeight:600,whiteSpace:'nowrap'}}>{s.label}</span>
            </a>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

Object.assign(window.NUKit, { WorkshopSection, FinalCTA });
