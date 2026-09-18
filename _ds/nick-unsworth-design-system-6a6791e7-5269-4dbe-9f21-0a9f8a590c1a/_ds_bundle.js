/* @ds-bundle: {"format":4,"namespace":"NickUnsworthDesignSystem_6a6791","components":[{"name":"Card","sourcePath":"components/cards/Card.jsx"},{"name":"TestimonialCard","sourcePath":"components/cards/TestimonialCard.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Divider","sourcePath":"components/core/Divider.jsx"},{"name":"SectionHeading","sourcePath":"components/core/SectionHeading.jsx"},{"name":"Accordion","sourcePath":"components/forms/Accordion.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"LogoStrip","sourcePath":"components/navigation/LogoStrip.jsx"}],"sourceHashes":{"components/cards/Card.jsx":"dc40dede9115","components/cards/TestimonialCard.jsx":"b5f5face875d","components/core/Badge.jsx":"09aca0297adc","components/core/Button.jsx":"6c5e23639ed8","components/core/Divider.jsx":"ed63835e1fc6","components/core/SectionHeading.jsx":"8c6517065658","components/forms/Accordion.jsx":"1ca3f6275ba5","components/forms/Input.jsx":"7e75073084c2","components/navigation/LogoStrip.jsx":"1dbcf2b96187","ui_kits/website/Footer.jsx":"67688243875a","ui_kits/website/Hero.jsx":"262a303cf528","ui_kits/website/Nav.jsx":"c20da2d19ec2","ui_kits/website/Sections.jsx":"43d63abbe4bb"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.NickUnsworthDesignSystem_6a6791 = window.NickUnsworthDesignSystem_6a6791 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/cards/Card.jsx
try { (() => {
function Card({
  children,
  variant = 'light',
  style
}) {
  const variants = {
    light: {
      background: '#fff',
      border: '1px solid var(--border-default)',
      boxShadow: 'var(--shadow-subtle)',
      color: 'var(--nu-black)'
    },
    dark: {
      background: 'var(--surface-card-dark)',
      border: '1px solid rgba(255,255,255,.1)',
      color: '#fff'
    },
    feature: {
      background: 'var(--grad-ember-dark)',
      color: '#fff',
      border: 'none',
      boxShadow: 'var(--shadow-medium)'
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 'var(--radius-lg)',
      padding: '28px',
      fontFamily: 'var(--font-body)',
      ...variants[variant],
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/Card.jsx", error: String((e && e.message) || e) }); }

// components/cards/TestimonialCard.jsx
try { (() => {
function TestimonialCard({
  quote,
  name,
  role,
  size = 'default'
}) {
  const big = size === 'large';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-lg)',
      padding: big ? '40px' : '26px',
      fontFamily: 'var(--font-body)',
      boxShadow: 'var(--shadow-subtle)',
      maxWidth: big ? '640px' : '340px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '40px',
      color: 'var(--nu-flame-orange)',
      lineHeight: 1,
      marginBottom: '8px'
    }
  }, "\""), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-subheadline)',
      fontStyle: 'italic',
      fontSize: big ? '24px' : '16px',
      fontWeight: big ? 700 : 500,
      color: 'var(--nu-black)',
      lineHeight: 1.5,
      margin: 0
    }
  }, quote), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '20px',
      fontWeight: 700,
      fontSize: '14px',
      color: 'var(--nu-black)'
    }
  }, name), role && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '13px',
      color: 'var(--text-secondary)'
    }
  }, role));
}
Object.assign(__ds_scope, { TestimonialCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/TestimonialCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function Badge({
  children,
  tone = 'eyebrow'
}) {
  const styles = {
    eyebrow: {
      color: 'var(--nu-flame-orange)',
      background: 'transparent',
      padding: 0,
      fontFamily: 'var(--font-title)',
      fontWeight: 300
    },
    solid: {
      color: '#fff',
      background: 'var(--grad-energy)',
      padding: '6px 14px',
      borderRadius: 'var(--radius-pill)'
    },
    outline: {
      color: 'var(--nu-charcoal)',
      background: 'transparent',
      border: '1.5px solid var(--nu-gray-soft)',
      padding: '5px 13px',
      borderRadius: 'var(--radius-pill)'
    }
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-title)',
      fontSize: '13px',
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '.1em',
      display: 'inline-block',
      ...styles[tone]
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const base = {
  fontFamily: 'var(--font-body)',
  fontWeight: 700,
  fontSize: '15px',
  border: 'none',
  cursor: 'pointer',
  borderRadius: 'var(--radius-cta)',
  padding: '17px 28px',
  transition: 'transform 200ms ease, box-shadow 200ms ease, filter 200ms ease',
  display: 'inline-flex',
  alignItems: 'center',
  gap: '8px',
  textTransform: 'uppercase',
  letterSpacing: '.04em'
};
const variants = {
  primary: {
    background: 'var(--grad-energy)',
    color: '#fff',
    boxShadow: 'var(--shadow-cta)'
  },
  secondary: {
    background: 'transparent',
    color: 'var(--nu-charcoal)',
    border: '1.5px solid var(--nu-charcoal)'
  },
  secondaryDark: {
    background: 'transparent',
    color: '#fff',
    border: '1.5px solid #fff'
  },
  text: {
    background: 'transparent',
    color: 'var(--nu-charcoal)',
    padding: 0,
    textTransform: 'none',
    letterSpacing: 'normal',
    fontWeight: 700
  }
};
function Button({
  children,
  variant = 'primary',
  disabled = false,
  onClick,
  style,
  ...rest
}) {
  const v = variants[variant] || variants.primary;
  const [hover, setHover] = React.useState(false);
  const hoverStyle = !disabled && hover ? variant === 'primary' ? {
    transform: 'translateY(-2px)',
    boxShadow: 'var(--shadow-cta-hover)',
    filter: 'brightness(1.05)'
  } : variant === 'secondary' ? {
    background: 'var(--nu-charcoal)',
    color: '#fff'
  } : variant === 'secondaryDark' ? {
    background: '#fff',
    color: 'var(--nu-charcoal)'
  } : {
    color: 'var(--nu-flame-orange)'
  } : {};
  return /*#__PURE__*/React.createElement("button", _extends({
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      ...base,
      ...v,
      ...(disabled ? {
        opacity: 0.45,
        cursor: 'not-allowed',
        boxShadow: 'none'
      } : {}),
      ...hoverStyle,
      ...style
    }
  }, rest), children, variant === 'text' && ' →');
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Divider.jsx
try { (() => {
function Divider({
  variant = 'thin'
}) {
  const styles = {
    thin: {
      height: '1px',
      background: 'var(--nu-charcoal)',
      opacity: 0.15,
      width: '100%'
    },
    warm: {
      height: '1px',
      background: 'var(--nu-gray-soft)',
      width: '100%'
    },
    gradient: {
      height: '3px',
      background: 'var(--grad-energy)',
      width: '100%',
      borderRadius: '2px'
    },
    accent: {
      height: '5px',
      width: '64px',
      background: 'var(--grad-energy)',
      borderRadius: '2px'
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    style: styles[variant] || styles.thin
  });
}
Object.assign(__ds_scope, { Divider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Divider.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionHeading.jsx
try { (() => {
function SectionHeading({
  eyebrow,
  title,
  accentWord,
  subtitle,
  align = 'left',
  dark = false
}) {
  const color = dark ? '#fff' : 'var(--nu-black)';
  const sub = dark ? 'var(--text-on-dark-secondary)' : 'var(--text-secondary)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: align,
      maxWidth: align === 'center' ? '720px' : 'none',
      margin: align === 'center' ? '0 auto' : 0
    }
  }, eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-title)',
      fontSize: '15px',
      fontWeight: 300,
      textTransform: 'uppercase',
      letterSpacing: '.1em',
      color: 'var(--nu-flame-orange)',
      marginBottom: '14px'
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-h2)',
      fontWeight: 700,
      lineHeight: 'var(--lh-heading)',
      color,
      margin: 0
    }
  }, title, accentWord && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-accent)',
      color: 'var(--nu-flame-orange)',
      fontWeight: 400,
      marginLeft: '10px'
    }
  }, accentWord)), subtitle && /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-subheadline)',
      fontStyle: 'italic',
      fontWeight: 500,
      fontSize: 'var(--fs-body-lg)',
      color: sub,
      marginTop: '18px',
      lineHeight: 1.6
    }
  }, subtitle));
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/forms/Accordion.jsx
try { (() => {
function Accordion({
  items
}) {
  const [open, setOpen] = React.useState(0);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      display: 'flex',
      flexDirection: 'column'
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      borderBottom: '1px solid var(--border-default)'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setOpen(open === i ? -1 : i),
    style: {
      width: '100%',
      textAlign: 'left',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: '20px 0',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      fontSize: '17px',
      fontWeight: 700,
      color: 'var(--nu-black)',
      fontFamily: 'var(--font-display)'
    }
  }, it.q, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--nu-flame-orange)',
      fontSize: '20px',
      transform: open === i ? 'rotate(45deg)' : 'none',
      transition: 'transform 200ms ease'
    }
  }, "+")), open === i && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 20px',
      fontSize: '15px',
      color: 'var(--text-secondary)',
      lineHeight: 1.6
    }
  }, it.a))));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function Input({
  label,
  placeholder,
  type = 'text',
  textarea = false
}) {
  const [focus, setFocus] = React.useState(false);
  const field = {
    width: '100%',
    height: textarea ? 'auto' : '54px',
    minHeight: textarea ? '110px' : undefined,
    padding: '16px',
    fontFamily: 'var(--font-body)',
    fontSize: '16px',
    border: `1.5px solid ${focus ? 'var(--nu-flame-orange)' : 'var(--border-input)'}`,
    borderRadius: 'var(--radius-md)',
    outline: 'none',
    background: '#fff',
    color: 'var(--nu-black)',
    transition: 'border-color 180ms ease'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px'
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '14px',
      fontWeight: 600,
      color: 'var(--nu-charcoal)'
    }
  }, label), textarea ? /*#__PURE__*/React.createElement("textarea", {
    placeholder: placeholder,
    style: field,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    rows: 4
  }) : /*#__PURE__*/React.createElement("input", {
    type: type,
    placeholder: placeholder,
    style: field,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false)
  }));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/navigation/LogoStrip.jsx
try { (() => {
function LogoStrip({
  logos,
  dark = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '48px',
      alignItems: 'center',
      flexWrap: 'wrap',
      justifyContent: 'center'
    }
  }, logos.map((l, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: '18px',
      color: dark ? '#fff' : 'var(--nu-charcoal)',
      opacity: dark ? 0.75 : 0.6
    }
  }, l)));
}
Object.assign(__ds_scope, { LogoStrip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/LogoStrip.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Footer.jsx
try { (() => {
window.NUKit = window.NUKit || {};
function Footer() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--nu-black)',
      color: '#8a8a8a',
      padding: '56px 40px',
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: '0 auto',
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: '#fff',
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 16
    }
  }, "NICK UNSWORTH"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: '#8a8a8a'
    }
  }, "Terms"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: '#8a8a8a'
    }
  }, "Privacy"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: '#8a8a8a'
    }
  }, "Contact"))));
}
window.NUKit.Footer = Footer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Hero.jsx
try { (() => {
window.NUKit = window.NUKit || {};
function Hero() {
  const {
    Button,
    Badge
  } = window.NickUnsworthDesignSystem_6a6791;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--nu-black)',
      color: '#fff',
      padding: '96px 40px',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--glow-ember)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1.1fr .9fr',
      gap: 56,
      alignItems: 'center',
      position: 'relative',
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Badge, {
    tone: "eyebrow"
  }, "Entrepreneur \xB7 Speaker \xB7 Coach"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'clamp(40px,6vw,78px)',
      fontWeight: 700,
      lineHeight: 0.98,
      margin: '18px 0 0'
    }
  }, "Unlock Your", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-accent)',
      color: 'var(--nu-gold)',
      fontWeight: 400
    }
  }, "Unstoppable"), " Potential"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-subheadline)',
      fontStyle: 'italic',
      fontWeight: 500,
      fontSize: 20,
      color: '#B9B9B9',
      maxWidth: 520,
      marginTop: 24,
      lineHeight: 1.6
    }
  }, "Join 50,000+ entrepreneurs who've turned momentum into a movement \u2014 clarity, strategy, and the coaching to build a business (and life) worth being proud of."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      marginTop: 36
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary"
  }, "Work With Nick"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondaryDark"
  }, "Watch Nick Speak"))), /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '4/5',
      borderRadius: 'var(--radius-image)',
      background: 'var(--grad-ember-dark)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#8a8a8a',
      fontSize: 14,
      textAlign: 'center',
      border: '1px solid rgba(255,255,255,.08)'
    }
  }, "Nick portrait placeholder", /*#__PURE__*/React.createElement("br", null), "(awaiting mark-free photography)")));
}
window.NUKit.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Nav.jsx
try { (() => {
window.NUKit = window.NUKit || {};
function Nav() {
  const {
    Button
  } = window.NickUnsworthDesignSystem_6a6791;
  const [open, setOpen] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--nu-black)',
      color: '#fff',
      textAlign: 'center',
      fontSize: 13,
      fontWeight: 500,
      fontFamily: 'var(--font-body)',
      padding: '9px 0',
      letterSpacing: '.03em'
    }
  }, "Ready to unlock your unstoppable momentum? ", /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: 'var(--nu-gold)',
      fontWeight: 700,
      marginLeft: 6
    }
  }, "Join the free challenge \u2192")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      maxWidth: 1280,
      margin: '0 auto',
      padding: '20px 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-title)',
      fontWeight: 300,
      fontSize: 22,
      letterSpacing: '.02em'
    }
  }, "NICK UNSWORTH"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 32,
      fontSize: 15,
      fontWeight: 600,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "About"), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Speaking"), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Coaching"), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Success Stories"), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Blog"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    style: {
      padding: '12px 22px',
      fontSize: 13
    }
  }, "Work With Nick"))));
}
window.NUKit.Nav = Nav;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Nav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Sections.jsx
try { (() => {
window.NUKit = window.NUKit || {};
function Sections() {
  const NS = window.NickUnsworthDesignSystem_6a6791;
  const {
    SectionHeading,
    Card,
    TestimonialCard,
    LogoStrip,
    Divider,
    Accordion,
    Input,
    Button
  } = NS;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '56px 40px',
      borderBottom: '1px solid var(--border-default)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(LogoStrip, {
    logos: ['Entrepreneur', 'Forbes', 'HuffPost', 'Goalcast']
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '120px 40px',
      background: 'var(--surface-warm)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Work With Nick",
    title: "Programs built for",
    accentWord: "Momentum",
    align: "center",
    subtitle: "From a free 7-day challenge to a private annual mastermind \u2014 pick the level of support that matches where you are."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 24,
      marginTop: 56
    }
  }, /*#__PURE__*/React.createElement(Card, {
    variant: "light"
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 22,
      margin: '0 0 10px'
    }
  }, "The Challenge"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-secondary)',
      fontSize: 15,
      lineHeight: 1.6,
      margin: 0
    }
  }, "A free 7-day sprint to clarify your vision and launch into action.")), /*#__PURE__*/React.createElement(Card, {
    variant: "dark"
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 22,
      margin: '0 0 10px'
    }
  }, "Accelerate"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: '#B9B9B9',
      fontSize: 15,
      lineHeight: 1.6,
      margin: 0
    }
  }, "6 months of 1:1 strategy to scale past your current ceiling.")), /*#__PURE__*/React.createElement(Card, {
    variant: "feature"
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 22,
      margin: '0 0 10px'
    }
  }, "Mastermind"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: '#eee',
      fontSize: 15,
      lineHeight: 1.6,
      margin: 0
    }
  }, "An annual inner circle for entrepreneurs ready to lead at the top."))))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '120px 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Success Stories",
    title: "Real results, real",
    accentWord: "Impact",
    align: "center"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 20,
      marginTop: 56,
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(TestimonialCard, {
    quote: "We went from slow and steady growth to a quantum leap.",
    name: "Cathy M.",
    role: "Coaching Client"
  }), /*#__PURE__*/React.createElement(TestimonialCard, {
    quote: "Within 6 months I launched a new business with an abundance of clients.",
    name: "Justin B.",
    role: "Mastermind Member"
  }), /*#__PURE__*/React.createElement(TestimonialCard, {
    quote: "Now I earn more than double and I'm on fire.",
    name: "Wendi F.",
    role: "Accelerate Client"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '110px 40px',
      background: 'var(--nu-black)',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '.8fr 1.2fr',
      gap: 56,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '1/1',
      borderRadius: 'var(--radius-image)',
      background: 'var(--grad-ember-dark)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#8a8a8a',
      fontSize: 14,
      textAlign: 'center'
    }
  }, "Nick coaching placeholder"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeading, {
    dark: true,
    eyebrow: "About Nick",
    title: "Built for the",
    accentWord: "Unstoppable",
    subtitle: "Nick sold his marketing agency before turning 30 and has since personally coached over 2,000 entrepreneurs \u2014 helping tens of thousands more build businesses they're proud of."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 28
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondaryDark"
  }, "Read Nick's Story"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '110px 40px',
      background: 'var(--surface-warm)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 760,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "FAQ",
    title: "Common Questions",
    align: "center"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40
    }
  }, /*#__PURE__*/React.createElement(Accordion, {
    items: [{
      q: 'How does coaching work?',
      a: 'Weekly strategy sessions plus async support inside a private community.'
    }, {
      q: 'What is the investment?',
      a: 'Programs range from a free challenge to a private annual mastermind.'
    }]
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '100px 40px',
      background: 'var(--grad-energy)',
      color: '#fff',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 640,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 900,
      fontSize: 44,
      margin: 0
    }
  }, "Join the Movement"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      marginTop: 14,
      opacity: .95
    }
  }, "Get free weekly strategy to set your business \u2014 and your life \u2014 on fire."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      marginTop: 28,
      justifyContent: 'center',
      maxWidth: 480,
      margin: '28px auto 0'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "Email address"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "secondaryDark",
    style: {
      whiteSpace: 'nowrap'
    }
  }, "Get Started")))));
}
window.NUKit.Sections = Sections;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Sections.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Card = __ds_scope.Card;

__ds_ns.TestimonialCard = __ds_scope.TestimonialCard;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Divider = __ds_scope.Divider;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.LogoStrip = __ds_scope.LogoStrip;

})();
