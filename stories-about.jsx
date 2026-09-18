window.NUKit = window.NUKit || {};
function StoriesSection(){
  const stories = [
    {quote:'We went from slow and steady growth to a quantum leap in our business. The world is waiting for you.',name:'Cathy Morenzie',img:'assets/cathy-morenzie.png'},
    {quote:'Within six months, I started a podcast, launched a new business, and created an abundance of clients.',name:'Justin Bell',img:'assets/justin-bell.png'},
    {quote:'I chose courage over fear. Nick helped me find the gold that I did not see, reinvent myself, and relaunch.',name:'Wendi Freeman',img:'assets/wendi-freeman.png'},
  ];
  return (
    <div className="section" style={{background:'var(--grad-sunset)'}}>
      <div className="wrap section-in">
        <div style={{marginBottom:'var(--sp-48)',maxWidth:600,marginLeft:'auto',marginRight:'auto',textAlign:'center'}}>
          <h2 style={{fontFamily:'var(--font-display)',fontSize:'var(--fs-h2)',color:'var(--nu-white)'}}>Success Stories</h2>
        </div>
        <div className="story-grid">
          {stories.map((s,i)=>(
            <div key={i} style={{background:'var(--nu-white)',borderRadius:'var(--radius-lg)',boxShadow:'var(--shadow-medium)',overflow:'hidden',display:'flex',flexDirection:'column'}}>
              <img src={s.img} alt={'Headshot of '+s.name} style={{width:'100%',height:220,objectFit:'cover',display:'block'}} />
              <div style={{padding:'var(--sp-24)'}}>
                <p style={{fontFamily:'var(--font-display)',fontWeight:300,fontSize:'var(--fs-h4)',color:'#58595B',marginBottom:'var(--sp-16)',lineHeight:'var(--lh-heading)'}}>&ldquo;{s.quote}&rdquo;</p>
                <div style={{fontFamily:'var(--font-accent)',fontSize:'1.75rem',color:'var(--nu-flame-orange)'}}>{s.name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function AboutSection(){
  const { Button } = window.NickUnsworthDesignSystem_6a6791;
  return (
    <div className="section" style={{background:'var(--surface-page)'}}>
      <div className="wrap about-grid">
        <img src="assets/nick-about-photo.png" alt="Nick Unsworth speaking on stage" style={{width:'100%',display:'block'}} />
        <div>
          <h2 style={{fontFamily:'var(--font-display)',fontSize:'var(--fs-h2)',color:'#58595B',marginBottom:'var(--sp-24)'}}>Hi, I'm Nick Unsworth.</h2>
          <div style={{display:'flex',flexDirection:'column',gap:'var(--sp-24)',maxWidth:'var(--text-measure)'}}>
            <p style={{fontSize:'var(--fs-body-lg)',color:'#58595B'}}>I have spent my career helping people take what is inside them, their story, their experience, their expertise, and their calling and turn it into something the world can see, trust, and act on.</p>
            <p style={{fontSize:'var(--fs-body)',color:'#58595B'}}>I believe you can get paid to impact lives. I believe the work you are here to do can create more freedom, more influence, and more meaningful service. And I believe the right strategy can help you get there faster.</p>
          </div>
          <div style={{marginTop:'var(--sp-32)'}}><Button variant="primary">Read My Story</Button></div>
        </div>
      </div>
    </div>
  );
}

Object.assign(window.NUKit, { StoriesSection, AboutSection });
