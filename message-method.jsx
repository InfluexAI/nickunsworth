window.NUKit = window.NUKit || {};
function MessageSection(){
  const { Button } = window.NickUnsworthDesignSystem_6a6791;
  return (
    <div className="section" style={{background:'var(--surface-page)'}}>
      <div className="wrap message-grid">
        <div>
          <h2 style={{fontFamily:'var(--font-display)',fontSize:'var(--fs-h2)',color:'#58595B',marginBottom:'var(--sp-32)',maxWidth:600}}>You Have a Message Worth <span className="nu-gradient-text" style={{fontFamily:'var(--font-accent)',fontSize:'1.44em'}}>Amplifying.</span></h2>
          <div style={{display:'flex',flexDirection:'column',gap:'var(--sp-24)',maxWidth:'var(--text-measure)'}}>
            <p style={{fontSize:'var(--fs-body-lg)',color:'#58595B'}}>Every person who has walked through real challenges, built meaningful expertise, or discovered a better way carries something valuable. Your story, your frameworks, and your hard-earned perspective can help someone else see what is possible.</p>
            <p style={{fontSize:'var(--fs-body)',color:'#58595B'}}>But too many brilliant people stay hidden, not because they lack value, but because they have not yet clarified the message, built the platform, or created the business model that allows their work to reach the people it was meant to serve.</p>
            <p style={{fontFamily:'var(--font-display)',fontStyle:'normal',fontWeight:300,fontSize:'var(--fs-h4)',color:'#58595B'}}>That is where we begin.</p>
            <p style={{fontSize:'var(--fs-body)',color:'#58595B'}}>I help you take the message that is already inside you and turn it into a clear position, a credible platform, and a profitable path forward. Books, stages, podcasts, content, offers, and funnels are not random tactics. They are vehicles I use to help the right people discover you, trust you, and take the next step with you.</p>
            <p style={{fontSize:'var(--fs-body)',color:'#58595B'}}>This is about more than visibility. It is about doing work you love, getting paid to impact lives, and building something that creates greater freedom for you, your family, and the people you are called to serve.</p>
          </div>
          <div style={{marginTop:'var(--sp-40)'}}><Button variant="primary" style={{borderRadius:0}}>Explore Working With Me</Button></div>
        </div>
        <div style={{position:'sticky',top:'var(--sp-120)'}}>
          <img src="assets/nick-stage-wide.png" alt="Nick Unsworth addressing an audience from the stage" style={{width:'100%',borderRadius:'var(--radius-image)',display:'block',boxShadow:'var(--shadow-medium)'}} />
        </div>
      </div>
    </div>
  );
}

function MethodSection(){
  const steps = [
    {n:'01',t:'CLARIFY YOUR MESSAGE',accent:'Message',d:"Find the through-line in your experience, expertise, story, and point of view—then shape it into a message your audience immediately understands."},
    {n:'02',t:'POSITION YOUR AUTHORITY',accent:'Authority',d:'Turn your message into an unmistakable point of difference, a personal brand, and a body of proof that makes the right people pay attention.'},
    {n:'03',t:'AMPLIFY YOUR REACH',accent:'Reach',d:'Use books, stages, media, podcasts, content, and strategic visibility to move your message beyond the people who already know you.'},
    {n:'04',t:'MONETIZE YOUR IMPACT',accent:'Impact',d:'Connect your authority to offers, a client journey, and a business model that allows you to be rewarded for the value you create.'},
    {n:'05',t:'LEAD THE MOVEMENT',accent:'Movement',d:'Build the confidence, community, and momentum to keep serving at a greater level—without losing the heart of why you started.'},
  ];
  return (
    <div className="section" style={{background:'var(--grad-ember-dark)',position:'relative',overflow:'hidden'}}>
      <div style={{position:'absolute',width:700,height:700,borderRadius:'50%',background:'var(--glow-ember)',top:-200,right:-200}}></div>
      <div className="wrap section-in" style={{position:'relative'}}>
        <div style={{marginBottom:'var(--sp-64)',maxWidth:640}}>
          <h2 style={{fontFamily:'var(--font-display)',fontSize:'var(--fs-h2)',color:'var(--nu-white)',whiteSpace:'nowrap'}}>The Message-to-<span className="nu-gradient-text">Movement</span> <span className="nu-gradient-text" style={{fontFamily:'var(--font-accent)',fontSize:'1.35em'}}>Method</span></h2>
        </div>
        <div className="method-list">
          {steps.map((s,i)=>(
            <div key={i} className="method-row">
              <div style={{fontFamily:'var(--font-display)',fontSize:'3.25rem',fontWeight:300,color:'rgba(255,255,255,.22)',lineHeight:1}}>{s.n}</div>
              <div>
                <div style={{fontFamily:'var(--font-title)',fontWeight:700,fontSize:'var(--fs-h4)',letterSpacing:'.08em',color:'var(--nu-white)',marginBottom:'var(--sp-12)'}}>{s.t.split(' ').slice(0,-1).join(' ')+' '}{s.accent?<span className="nu-gradient-text" style={{fontFamily:'var(--font-accent)',fontWeight:400,letterSpacing:0,textTransform:'none',fontSize:'1.7em'}}>{s.accent}</span>:s.t.split(' ').slice(-1)}</div>
                <p style={{color:'rgba(255,255,255,.78)',fontSize:'var(--fs-body)',maxWidth:680}}>{s.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

Object.assign(window.NUKit, { MessageSection, MethodSection });
