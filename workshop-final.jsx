window.NUKit = window.NUKit || {};
function WorkshopSection(){
  const { Button, Input } = window.NickUnsworthDesignSystem_6a6791;
  return (
    <div className="section" style={{background:'var(--surface-warm)'}}>
      <div className="wrap workshop-grid">
        <div>
          <h2 style={{fontFamily:'var(--font-display)',fontSize:'var(--fs-h2)',color:'#58595B',marginBottom:'var(--sp-16)'}}>Bestseller on Fire Workshop</h2>
          <p style={{fontFamily:'var(--font-display)',fontStyle:'normal',fontWeight:300,fontSize:'var(--fs-h3)',color:'#58595B',marginBottom:'var(--sp-24)'}}>Write, Publish, Launch, and Profit From Your New Bestselling Book.</p>
          <div style={{display:'flex',flexDirection:'column',gap:'var(--sp-16)',maxWidth:'var(--text-measure)',marginBottom:'var(--sp-8)'}}>
            <p style={{fontSize:'var(--fs-body)',color:'#58595B'}}>If you are an expert, entrepreneur, author, speaker, coach, influencer, or creator, a bestselling book can become more than a book. It can become the authority asset that opens doors to ideal clients, podcasts, stages, media, and higher-value opportunities.</p>
            <p style={{fontSize:'var(--fs-body)',color:'#58595B'}}>In my free live workshop, I'll show you how to turn the knowledge already inside you into a book that helps you grow your influence, impact, and income—without letting writer's block, confusion, or a full calendar keep you stuck.</p>
          </div>
        </div>
        <div style={{background:'var(--nu-white)',borderRadius:'var(--radius-lg)',padding:'var(--sp-40)',boxShadow:'var(--shadow-medium)',border:'1px solid var(--border-default)'}}>
          <image-slot id="bestseller-book-mockup" shape="rounded" radius="12" style={{display:'block',width:'100%',height:200,marginBottom:'var(--sp-24)'}} placeholder="Bestseller on Fire book cover mockup"></image-slot>
          <div style={{display:'flex',flexDirection:'column',gap:'var(--sp-16)'}}>
            <Input label="Name" placeholder="Your first name" />
            <Input label="Email" placeholder="you@email.com" type="email" />
            <Button variant="primary" style={{justifyContent:'center',marginTop:'var(--sp-8)'}}>Save My Seat in Nick's Free Workshop</Button>
            <p style={{fontSize:'var(--fs-small)',color:'#58595B',textAlign:'center'}}>By joining, you agree to receive emails from Nick Unsworth. Unsubscribe anytime.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function FinalCTA(){
  const { Button } = window.NickUnsworthDesignSystem_6a6791;
  return (
    <div className="section" style={{position:'relative',background:'var(--grad-ember-dark)',overflow:'hidden',textAlign:'center'}}>
      <div style={{position:'absolute',width:900,height:900,borderRadius:'50%',background:'var(--glow-ember)',top:'-40%',left:'50%',transform:'translateX(-50%)'}}></div>
      <div className="wrap section-in" style={{position:'relative',maxWidth:900,margin:'0 auto'}}>
        <h2 style={{fontFamily:'var(--font-display)',fontSize:'clamp(1.75rem,3.2vw,2.75rem)',color:'var(--nu-white)',marginBottom:'var(--sp-24)',maxWidth:800,marginLeft:'auto',marginRight:'auto'}}>
          Your message can become the brand, business, and movement you are here to lead.
        </h2>
        <p style={{fontSize:'var(--fs-body-lg)',color:'rgba(255,255,255,.82)',marginBottom:'var(--sp-40)',maxWidth:560,marginLeft:'auto',marginRight:'auto'}}>
          If you're ready to stop sitting on what you know and start building the platform it deserves, I'll help you take the next right step.
        </p>
        <Button variant="primary">Start With My Free Workshop</Button>
      </div>
      <div style={{position:'relative',display:'flex',flexWrap:'nowrap',justifyContent:'center',marginTop:'var(--sp-64)',overflowX:'auto'}}>
        {[
          {name:'Facebook',label:'Stay Connected',path:'M15 8.5h-1.2c-.9 0-1.3.5-1.3 1.3V11H15l-.3 2H12.5v6h-2v-6H9V11h1.5V9.5C10.5 7.6 11.6 6 13.6 6H15v2.5z'},
          {name:'X',label:'Fuel the Conversation',path:'M13.6 10.6 20.4 3h-1.6l-5.9 6.6L8.1 3H3l7.1 9.9L3 19.9h1.6l6.3-7 5 7h5.1l-7.4-9.9zm-2.2 2.5-.7-1L5 4.3h2.4l4.7 6.5.7 1 6.1 8.5h-2.4l-5.1-7.2z'},
          {name:'Instagram',label:'Behind the Scenes',path:'M8 4h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4zm4 4.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm4.6-1.9a.9.9 0 1 0 0 1.8.9.9 0 0 0 0-1.8z',outline:true},
          {name:'YouTube',label:'Watch. Learn. Grow.',path:'M20.5 8.2c0-1.4-1.1-2.5-2.5-2.6C16 5.4 12 5.4 12 5.4s-4 0-6 .2c-1.4.1-2.5 1.2-2.5 2.6C3.4 9.6 3.4 12 3.4 12s0 2.4.1 3.8c0 1.4 1.1 2.5 2.5 2.6 2 .2 6 .2 6 .2s4 0 6-.2c1.4-.1 2.5-1.2 2.5-2.6.1-1.4.1-3.8.1-3.8s0-2.4-.1-3.8zM10 15V9l5 3-5 3z'},
          {name:'LinkedIn',label:'Let\u2019s Connect',path:'M6.9 8.5a1.9 1.9 0 1 0 0-3.8 1.9 1.9 0 0 0 0 3.8zM5.2 10h3.4v9H5.2v-9zm5.6 0h3.3v1.3h.1c.5-.9 1.6-1.5 2.9-1.5 3.1 0 3.6 1.9 3.6 4.4V19h-3.4v-4.2c0-1 0-2.3-1.4-2.3s-1.7 1.1-1.7 2.3V19h-3.4v-9z'}
        ].map((s,i)=>(
          <React.Fragment key={s.name}>
            {i>0&&<div style={{width:1,background:'rgba(255,255,255,.3)',alignSelf:'stretch',flexShrink:0}}></div>}
            <a href="#" aria-label={s.name} style={{padding:'var(--sp-32) var(--sp-24)',display:'flex',flexDirection:'column',alignItems:'center',gap:'var(--sp-16)',flexShrink:0}}>
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
