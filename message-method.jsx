window.NUKit = window.NUKit || {};
function MessageSection(){
  const { Button } = window.NickUnsworthDesignSystem_6a6791;
  return (
    <div className="section" style={{background:'var(--surface-page)'}}>
      <div className="wrap">
        <div className="message-intro">
          <h2 style={{fontFamily:'var(--font-display)',fontSize:'var(--fs-h2)',color:'#58595B',marginBottom:'var(--sp-32)',maxWidth:'none',textAlign:'center',whiteSpace:'nowrap'}}>You Have a Message Worth <span className="nu-gradient-text" style={{fontFamily:'var(--font-accent)',fontSize:'1.44em'}}>Amplifying.</span></h2>
          <p style={{fontSize:'var(--fs-body-lg)',color:'#58595B'}}>Every person who has walked through real challenges, built meaningful expertise, or discovered a better way carries something valuable. Your story, your frameworks, and your hard-earned perspective can help someone else see what is possible.</p>
        </div>
        <div className="message-grid">
        <div className="message-figure">
          <img src="assets/nick-workshop.jpg" alt="Nick Unsworth on stage with the audience on their feet" />
        </div>
        <div>
          <div style={{display:'flex',flexDirection:'column',gap:'var(--sp-24)',maxWidth:'none'}} className="message-body">
            <p style={{fontSize:'var(--fs-body)',color:'#58595B'}}>But too many brilliant people stay hidden, not because they lack value, but because they have not yet clarified the message, built the platform, or created the business model that allows their work to reach the people it was meant to serve.</p>
            <p style={{fontFamily:'var(--font-display)',fontStyle:'normal',fontWeight:300,fontSize:'var(--fs-h4)',color:'#58595B'}}>That is where we begin.</p>
            <p style={{fontSize:'var(--fs-body)',color:'#58595B'}}>I help you take the message that is already inside you and turn it into a clear position, a credible platform, and a profitable path forward. Books, stages, podcasts, content, offers, and funnels are not random tactics. They are vehicles I use to help the right people discover you, trust you, and take the next step with you.</p>
            <p style={{fontSize:'var(--fs-body)',color:'#58595B'}}>This is about more than visibility. It is about doing work you love, getting paid to impact lives, and building something that creates greater freedom for you, your family, and the people you are called to serve.</p>
          </div>
          <div style={{marginTop:'var(--sp-40)'}}><Button variant="primary" style={{borderRadius:0}}>Explore Working With Me</Button></div>
        </div>
        </div>
      </div>
    </div>
  );
}

function MethodSection(){
  const steps = [
    {n:'01',t:'Clarify Your Message',accent:'Message',d:"Find the through-line in your experience, expertise, story, and point of view—then shape it into a message your audience immediately understands."},
    {n:'02',t:'Position Your Authority',accent:'Authority',d:'Turn your message into an unmistakable point of difference, a personal brand, and a body of proof that makes the right people pay attention.'},
    {n:'03',t:'Amplify Your Reach',accent:'Reach',d:'Use books, stages, media, podcasts, content, and strategic visibility to move your message beyond the people who already know you.'},
    {n:'04',t:'Monetize Your Impact',accent:'Impact',d:'Connect your authority to offers, a client journey, and a business model that allows you to be rewarded for the value you create.'},
    {n:'05',t:'Lead the Movement',accent:'Movement',d:'Build the confidence, community, and momentum to keep serving at a greater level—without losing the heart of why you started.'},
  ];
  return (
    <div className="section method-sec">
      <div className="wrap section-in method-split" style={{position:'relative'}}>
        <div className="method-col">
        <div style={{marginBottom:'calc(var(--sp-40) * 0.7)',maxWidth:640}}>
          <h2 style={{fontFamily:'var(--font-display)',fontSize:'var(--fs-h2)',color:'var(--nu-white)'}}>The Message-to-<span className="nu-gradient-text">Movement</span> <span className="nu-gradient-text" style={{fontFamily:'var(--font-accent)',fontSize:'1.35em'}}>Method</span></h2>
        </div>
        <div className="method-list">
          {steps.map((s,i)=>(
            <div key={i} className="method-row">
              <div style={{fontFamily:'var(--font-display)',fontSize:'3.25rem',fontWeight:300,color:'rgba(255,255,255,.22)',lineHeight:1,paddingTop:'0.2em'}}>{s.n}</div>
              <div>
                <div style={{fontFamily:'var(--font-title)',fontWeight:300,fontSize:'calc(var(--fs-h4) * 1.4)',letterSpacing:'.04em',color:'var(--nu-white)',marginTop:'-0.18em',marginBottom:'calc(var(--sp-12) * 0.25)'}}>{s.t.split(' ').slice(0,-1).join(' ')+' '}{s.accent?<span className="nu-gradient-text" style={{fontFamily:'var(--font-accent)',fontWeight:400,letterSpacing:0,textTransform:'none',fontSize:'1.7em'}}>{s.accent}</span>:s.t.split(' ').slice(-1)}</div>
                <p style={{color:'rgba(255,255,255,.78)',fontSize:'var(--fs-body)',maxWidth:680}}>{s.d}</p>
              </div>
            </div>
          ))}
        </div>
        </div>
        <div className="method-figure"><img src="assets/method-nick-clean.png" alt="Nick Unsworth on stage" /></div>
      </div>
    </div>
  );
}

Object.assign(window.NUKit, { MessageSection, MethodSection });
