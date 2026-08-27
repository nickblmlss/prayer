/* @ds-bundle: {"format":4,"namespace":"BlamelessMinistriesDesignSystem_0fb65e","components":[{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"Field","sourcePath":"components/core/Field.jsx"},{"name":"PillarCard","sourcePath":"components/core/PillarCard.jsx"},{"name":"PrayerRequestForm","sourcePath":"components/core/PrayerRequestForm.jsx"},{"name":"ProcessStep","sourcePath":"components/core/ProcessStep.jsx"},{"name":"ScriptureQuote","sourcePath":"components/core/ScriptureQuote.jsx"},{"name":"SectionHeading","sourcePath":"components/core/SectionHeading.jsx"},{"name":"SiteFooter","sourcePath":"components/core/SiteFooter.jsx"},{"name":"SiteHeader","sourcePath":"components/core/SiteHeader.jsx"},{"name":"Ticker","sourcePath":"components/core/Ticker.jsx"}],"sourceHashes":{"components/core/Button.jsx":"9863126ebc30","components/core/Eyebrow.jsx":"4991f7949c40","components/core/Field.jsx":"10a7b0715696","components/core/PillarCard.jsx":"258dc4b9022a","components/core/PrayerRequestForm.jsx":"9bd82b55526c","components/core/ProcessStep.jsx":"4744e8f9d774","components/core/ScriptureQuote.jsx":"e4453d9b1780","components/core/SectionHeading.jsx":"5e7583306559","components/core/SiteFooter.jsx":"70ac80a1c3c5","components/core/SiteHeader.jsx":"07141904f68a","components/core/Ticker.jsx":"c079fa0af6b6","ui_kits/website/App.jsx":"4be8e7df5b56","ui_kits/website/ContactScreen.jsx":"06276c61b7b9","ui_kits/website/HomeScreen.jsx":"758cd2daab33","ui_kits/website/PrayerScreen.jsx":"3b60d19321b0"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.BlamelessMinistriesDesignSystem_0fb65e = window.BlamelessMinistriesDesignSystem_0fb65e || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const base = {
  fontFamily: 'var(--font-body)',
  fontSize: 'var(--fs-eyebrow)',
  letterSpacing: 'var(--ls-eyebrow)',
  textTransform: 'uppercase',
  border: '1px solid transparent',
  borderRadius: 'var(--radius-md)',
  cursor: 'pointer',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  textDecoration: 'none',
  whiteSpace: 'nowrap',
  textAlign: 'center',
  transition: 'background var(--dur-fast) var(--ease-standard),color var(--dur-fast) var(--ease-standard),border-color var(--dur-fast) var(--ease-standard)'
};
const sizes = {
  sm: {
    padding: '9px 18px'
  },
  md: {
    padding: '14px 28px'
  },
  lg: {
    padding: '18px 40px',
    fontSize: '13px'
  }
};
const variants = {
  primary: {
    background: 'var(--action-primary)',
    color: 'var(--action-primary-text)'
  },
  secondary: {
    background: 'var(--action-secondary)',
    color: 'var(--action-secondary-text)'
  },
  outline: {
    background: 'transparent',
    color: 'var(--ink)',
    borderColor: 'var(--ink)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--ink)',
    borderColor: 'transparent'
  },
  onDark: {
    background: 'var(--cream)',
    color: 'var(--ink)'
  }
};
const hovers = {
  primary: 'var(--action-primary-hover)',
  secondary: 'var(--action-secondary-hover)',
  outline: 'var(--ink-08)',
  ghost: 'var(--ink-08)',
  onDark: '#fff'
};
function Button({
  variant = 'primary',
  size = 'md',
  as = 'button',
  href,
  disabled = false,
  fullWidth = false,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const Tag = as === 'a' ? 'a' : 'button';
  const v = variants[variant] || variants.primary;
  const s = {
    ...base,
    ...sizes[size],
    ...v,
    width: fullWidth ? '100%' : undefined,
    opacity: disabled ? 0.4 : 1,
    pointerEvents: disabled ? 'none' : undefined,
    ...(hover && !disabled ? variant === 'outline' || variant === 'ghost' ? {
      background: hovers[variant]
    } : {
      background: hovers[variant]
    } : null),
    ...style
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: Tag === 'a' ? href : undefined,
    disabled: Tag === 'button' ? disabled : undefined,
    style: s,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Eyebrow({
  children,
  tone = 'muted',
  as = 'div',
  style,
  ...rest
}) {
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-eyebrow)',
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      color: tone === 'muted' ? 'var(--text-eyebrow)' : tone === 'inverse' ? 'var(--cream)' : 'var(--ink)',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/core/Field.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Field({
  label,
  type = 'text',
  name,
  placeholder,
  required = false,
  rows,
  value,
  onChange,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const input = {
    width: '100%',
    fontFamily: 'var(--font-body)',
    fontSize: 'var(--fs-body)',
    lineHeight: 'var(--lh-body)',
    color: 'var(--ink)',
    background: 'var(--white)',
    border: '1px solid ' + (focus ? 'var(--ink)' : 'var(--border-hairline)'),
    borderRadius: 'var(--radius-md)',
    padding: '12px 14px',
    outline: 'none',
    transition: 'border-color var(--dur-fast) var(--ease-standard)'
  };
  const shared = {
    name,
    placeholder,
    required,
    value,
    onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: input
  };
  return /*#__PURE__*/React.createElement("label", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, null, label, required ? ' *' : ''), type === 'textarea' ? /*#__PURE__*/React.createElement("textarea", _extends({
    rows: rows || 4
  }, shared)) : /*#__PURE__*/React.createElement("input", _extends({
    type: type
  }, shared)));
}
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Field.jsx", error: String((e && e.message) || e) }); }

// components/core/PillarCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function PillarCard({
  title,
  illustration,
  ground,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("article", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      background: ground || 'var(--sand)',
      aspectRatio: '1 / 1',
      overflow: 'hidden'
    }
  }, illustration ? /*#__PURE__*/React.createElement("img", {
    src: illustration,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : null), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 'var(--fs-heading-3)',
      lineHeight: 1.3,
      margin: 0
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--fs-body)',
      lineHeight: 'var(--lh-body)',
      color: 'var(--text-muted)',
      maxWidth: '42ch'
    }
  }, children));
}
Object.assign(__ds_scope, { PillarCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/PillarCard.jsx", error: String((e && e.message) || e) }); }

// components/core/PrayerRequestForm.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function PrayerRequestForm({
  onSubmit,
  note = "By signing up for prayer you opt into email follow up",
  submitted = false,
  style,
  ...rest
}) {
  const [done, setDone] = React.useState(submitted);
  if (done) return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--white)',
      borderRadius: 'var(--radius-card)',
      boxShadow: 'var(--shadow-card)',
      padding: 'var(--space-8)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 'var(--fs-heading-2)',
      margin: '0 0 var(--space-4)'
    }
  }, "Thank you \u2014 we\u2019ve received your request."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-muted)',
      margin: 0
    }
  }, "A Prayer Lead will reach out to you soon to talk through where you are and discern the next best step."));
  return /*#__PURE__*/React.createElement("form", _extends({
    style: {
      background: 'var(--white)',
      borderRadius: 'var(--radius-card)',
      boxShadow: 'var(--shadow-card)',
      padding: 'var(--space-8)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)',
      ...style
    },
    onSubmit: e => {
      e.preventDefault();
      setDone(true);
      onSubmit && onSubmit(e);
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Field, {
    label: "First name",
    name: "first",
    required: true
  }), /*#__PURE__*/React.createElement(__ds_scope.Field, {
    label: "Last name",
    name: "last",
    required: true
  })), /*#__PURE__*/React.createElement(__ds_scope.Field, {
    label: "Email",
    type: "email",
    name: "email",
    required: true
  }), /*#__PURE__*/React.createElement(__ds_scope.Field, {
    label: "What are you hoping God will do?",
    type: "textarea",
    name: "request",
    rows: 4
  }), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    type: "submit",
    size: "lg",
    fullWidth: true
  }, "Want prayer?"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--fs-small)',
      fontStyle: 'italic',
      color: 'var(--text-eyebrow)',
      margin: 0,
      textAlign: 'center'
    }
  }, note));
}
Object.assign(__ds_scope, { PrayerRequestForm });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/PrayerRequestForm.jsx", error: String((e && e.message) || e) }); }

// components/core/ProcessStep.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ProcessStep({
  number,
  plate,
  title,
  intro,
  items = [],
  outro,
  reverse = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(180px,1fr) minmax(0,2fr)',
      gap: 'var(--space-8)',
      alignItems: 'start',
      direction: reverse ? 'rtl' : 'ltr',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      direction: 'ltr'
    }
  }, plate ? /*#__PURE__*/React.createElement("img", {
    src: plate,
    alt: 'Step ' + number,
    style: {
      width: '100%'
    }
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--sand)',
      aspectRatio: '1 / 1',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-display)',
      fontSize: '72px'
    }
  }, number)), /*#__PURE__*/React.createElement("div", {
    style: {
      direction: 'ltr'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 'var(--fs-heading-2)',
      margin: '0 0 var(--space-4)'
    }
  }, title), intro ? /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--fs-body)',
      lineHeight: 'var(--lh-body)',
      color: 'var(--text-muted)',
      maxWidth: 'var(--measure)'
    }
  }, intro) : null, items.length ? /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      padding: 0,
      margin: 'var(--space-5) 0 0',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      paddingLeft: 'var(--space-5)',
      borderLeft: '1px solid var(--border-hairline)',
      fontSize: 'var(--fs-body)',
      lineHeight: 'var(--lh-body)',
      maxWidth: 'var(--measure)'
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      fontWeight: 600
    }
  }, it.label), it.text ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)'
    }
  }, ": ", it.text) : null))) : null, outro ? /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--fs-body)',
      lineHeight: 'var(--lh-body)',
      color: 'var(--text-muted)',
      marginTop: 'var(--space-5)',
      maxWidth: 'var(--measure)'
    }
  }, outro) : null));
}
Object.assign(__ds_scope, { ProcessStep });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/ProcessStep.jsx", error: String((e && e.message) || e) }); }

// components/core/ScriptureQuote.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ScriptureQuote({
  citation,
  ground = 'var(--surface-scripture)',
  size = 'lg',
  align = 'left',
  closingQuote = true,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("figure", _extends({
    style: {
      background: ground,
      margin: 0,
      padding: 'clamp(40px,7vw,96px) var(--gutter)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: size === 'lg' ? 'var(--fs-heading-1)' : 'var(--fs-heading-2)',
      lineHeight: 1.28,
      letterSpacing: 'var(--ls-display)',
      maxWidth: '26ch',
      marginLeft: align === 'center' ? 'auto' : undefined,
      marginRight: align === 'center' ? 'auto' : undefined,
      textAlign: align
    }
  }, "\u201C", children, closingQuote ? /*#__PURE__*/React.createElement(React.Fragment, null, "\u201D") : null), citation ? /*#__PURE__*/React.createElement("figcaption", {
    style: {
      marginTop: 'var(--space-6)',
      maxWidth: '26ch',
      marginLeft: align === 'center' ? 'auto' : undefined,
      marginRight: align === 'center' ? 'auto' : undefined,
      textAlign: align
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, {
    tone: "ink"
  }, citation)) : null);
}
Object.assign(__ds_scope, { ScriptureQuote });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/ScriptureQuote.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionHeading.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SectionHeading({
  eyebrow,
  children,
  lead,
  size = 'lg',
  align = 'left',
  style,
  ...rest
}) {
  const fs = size === 'xl' ? 'var(--fs-display-2)' : size === 'lg' ? 'var(--fs-heading-1)' : 'var(--fs-heading-2)';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      textAlign: align,
      maxWidth: align === 'center' ? 'var(--container-narrow)' : undefined,
      marginLeft: align === 'center' ? 'auto' : undefined,
      marginRight: align === 'center' ? 'auto' : undefined,
      ...style
    }
  }, rest), eyebrow ? /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, {
    style: {
      marginBottom: 'var(--space-4)'
    }
  }, eyebrow) : null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: fs,
      lineHeight: 'var(--lh-heading)',
      letterSpacing: 'var(--ls-display)',
      margin: 0,
      textWrap: 'pretty'
    }
  }, children), lead ? /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--fs-lead)',
      lineHeight: 'var(--lh-lead)',
      color: 'var(--text-muted)',
      maxWidth: 'var(--measure)',
      marginTop: 'var(--space-5)',
      marginLeft: align === 'center' ? 'auto' : undefined,
      marginRight: align === 'center' ? 'auto' : undefined
    }
  }, lead) : null);
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/core/SiteFooter.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SiteFooter({
  links = ['Statement of Beliefs', 'Our Board', 'Giving', 'Contact', 'Meet our Team', 'Prayer Team Only'],
  logo = 'assets/logo-cream.webp',
  copyright = '© 2026  BLAMELESS MINISTRIES INC.',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("footer", _extends({
    style: {
      background: 'var(--surface-inverse)',
      color: 'var(--text-on-inverse)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: 'var(--space-9) var(--gutter) var(--space-7)',
      display: 'flex',
      flexWrap: 'wrap',
      gap: 'var(--space-8)',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: logo,
    alt: "Blameless",
    style: {
      height: 34,
      opacity: .95
    }
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-3) var(--space-8)'
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-eyebrow)',
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--cream)',
      border: 'none'
    }
  }, l)))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: '0 var(--gutter) var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid rgba(247,243,237,.25)',
      paddingTop: 'var(--space-5)',
      fontSize: 'var(--fs-eyebrow)',
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      opacity: .8
    }
  }, copyright)));
}
Object.assign(__ds_scope, { SiteFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SiteFooter.jsx", error: String((e && e.message) || e) }); }

// components/core/SiteHeader.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SiteHeader({
  links = [{
    label: 'Giving',
    href: '#'
  }, {
    label: 'Prayer',
    href: '#'
  }, {
    label: 'Contact',
    href: '#'
  }, {
    label: 'Our Board',
    href: '#'
  }],
  logo = 'assets/logo-cream.webp',
  tone = 'cream',
  onNavigate,
  active,
  style,
  ...rest
}) {
  const dark = tone === 'dark';
  return /*#__PURE__*/React.createElement("header", _extends({
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 20,
      background: dark ? 'var(--ink)' : 'var(--cream)',
      borderBottom: '1px solid ' + (dark ? 'rgba(247,243,237,.18)' : 'var(--border-hairline)'),
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: 'var(--space-5) var(--gutter)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNavigate && onNavigate('home');
    },
    style: {
      border: 'none',
      display: 'flex',
      alignItems: 'center'
    }
  }, dark ? /*#__PURE__*/React.createElement("img", {
    src: logo,
    alt: "Blameless",
    style: {
      height: 22
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 20,
      letterSpacing: '.06em',
      color: 'var(--ink)'
    }
  }, "BLMLSS")), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 'var(--space-6)'
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.label,
    href: l.href,
    onClick: e => {
      if (onNavigate) {
        e.preventDefault();
        onNavigate(l.key || l.label.toLowerCase());
      }
    },
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-eyebrow)',
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      color: dark ? 'var(--cream)' : active === (l.key || l.label.toLowerCase()) ? 'var(--ink)' : 'var(--ink-70)',
      borderBottom: '1px solid ' + (active === (l.key || l.label.toLowerCase()) ? 'currentColor' : 'transparent'),
      paddingBottom: 2
    }
  }, l.label)))));
}
Object.assign(__ds_scope, { SiteHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SiteHeader.jsx", error: String((e && e.message) || e) }); }

// components/core/Ticker.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Ticker({
  text = '2,584 hours prayed',
  separator = '◆',
  speed = 26,
  ground = 'var(--surface-inverse)',
  color = 'var(--cream)',
  style,
  ...rest
}) {
  const items = Array.from({
    length: 10
  }, (_, i) => i);
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: ground,
      color,
      overflow: 'hidden',
      padding: 'var(--space-4) 0',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("style", null, '@keyframes blmlss-marquee{from{transform:translateX(0)}to{transform:translateX(-50%)}}@media (prefers-reduced-motion:reduce){.blmlss-marquee{animation:none!important}}'), /*#__PURE__*/React.createElement("div", {
    className: "blmlss-marquee",
    style: {
      display: 'flex',
      whiteSpace: 'nowrap',
      width: 'max-content',
      animation: 'blmlss-marquee ' + speed + 's linear infinite'
    }
  }, items.map(i => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-small)',
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      padding: '0 var(--space-5)'
    }
  }, text, " ", /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: .7
    }
  }, separator)))));
}
Object.assign(__ds_scope, { Ticker });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Ticker.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/App.jsx
try { (() => {
const NS = window.BlamelessMinistriesDesignSystem_0fb65e;
const {
  SiteHeader,
  SiteFooter
} = NS;
const LINKS = [{
  label: 'Giving',
  key: 'giving'
}, {
  label: 'Prayer',
  key: 'prayer'
}, {
  label: 'Contact',
  key: 'contact'
}, {
  label: 'Our Board',
  key: 'board'
}];
function App() {
  const [page, setPage] = React.useState('home');
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);
  const go = k => setPage(k === 'giving' || k === 'board' ? 'home' : k);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SiteHeader, {
    tone: "dark",
    logo: "../../assets/logo-cream.webp",
    links: LINKS,
    active: page,
    onNavigate: go
  }), page === 'home' && /*#__PURE__*/React.createElement(HomeScreen, {
    onNavigate: go
  }), page === 'prayer' && /*#__PURE__*/React.createElement(PrayerScreen, {
    onNavigate: go
  }), page === 'contact' && /*#__PURE__*/React.createElement(ContactScreen, null), /*#__PURE__*/React.createElement(SiteFooter, {
    logo: "../../assets/logo-cream.webp"
  }));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ContactScreen.jsx
try { (() => {
const contactNS = window.BlamelessMinistriesDesignSystem_0fb65e;
function ContactScreen() {
  const {
    SectionHeading,
    PrayerRequestForm,
    ScriptureQuote
  } = contactNS;
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-9)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeading, {
    size: "xl",
    lead: "Share where you are and what you\u2019re hoping God will do. A Prayer Lead will reach out to talk it through and discern the next best step with you."
  }, "Connect with our Team"), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/photo-conversation.webp",
    alt: "Two people in conversation at an outdoor evening event.",
    style: {
      marginTop: 'var(--space-8)',
      width: '100%',
      height: 320,
      objectFit: 'cover'
    }
  })), /*#__PURE__*/React.createElement(PrayerRequestForm, null))), /*#__PURE__*/React.createElement(ScriptureQuote, {
    citation: "1 Thessalonians 5:24",
    ground: "var(--mint)",
    size: "md"
  }, "He who calls you is faithful; he will surely do it."));
}
window.ContactScreen = ContactScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ContactScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomeScreen.jsx
try { (() => {
const homeNS = window.BlamelessMinistriesDesignSystem_0fb65e;
function Section({
  children,
  ground,
  pad = 'var(--section-y)',
  style
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: ground || 'transparent',
      padding: pad + ' var(--gutter)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto'
    }
  }, children));
}
window.Section = Section;
function HomeScreen({
  onNavigate
}) {
  const {
    Button,
    Eyebrow,
    SectionHeading,
    PillarCard,
    ScriptureQuote,
    PrayerRequestForm,
    Ticker
  } = homeNS;
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      minHeight: 620,
      display: 'flex',
      alignItems: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/photo-sky.webp",
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "rise",
    style: {
      position: 'relative',
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: 'var(--space-10) var(--gutter) var(--space-9)',
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 'var(--fs-display-1)',
      lineHeight: 'var(--lh-display)',
      letterSpacing: 'var(--ls-display)',
      margin: 0,
      maxWidth: '17ch',
      color: 'var(--ink)'
    }
  }, "Blameless Church is preparing the Bride of Christ for Jesus\u2019 return."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    as: "a",
    href: "#prayer-form-home",
    size: "lg"
  }, "Want prayer?")))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.05fr 1fr',
      gap: 'var(--space-9)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/photo-orange-coat.webp",
    alt: "Person wearing an orange coat with brown fur cuffs, gesturing with their hands against a plain, beige background.",
    style: {
      width: '100%',
      aspectRatio: '4 / 5',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Our mission",
    size: "lg",
    lead: "Blameless Ministries leads believers into healing and deliverance, which cultivates a life of holiness, awakens spiritual authority, and activates disciples to carry the freedom of Jesus into their communities."
  }, "How we pursue this:"))), /*#__PURE__*/React.createElement(Section, {
    ground: "var(--surface-muted)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement(PillarCard, {
    title: "Discipleship, Equipping & Activation",
    illustration: "../../assets/illus-flame.webp"
  }, /*#__PURE__*/React.createElement("strong", null, "We invite those who have gone through the BLMLSS Prayer Process into a growing community of disciples."), " We help followers of Jesus operate in their spiritual gifts, engage in spiritual warfare, stand in greater authority & power in Jesus, and serve in the ministry by praying for others."), /*#__PURE__*/React.createElement(PillarCard, {
    title: "Freedom & Healing through Prayer",
    illustration: "../../assets/illus-swords.webp"
  }, /*#__PURE__*/React.createElement("strong", null, "We walk followers of Jesus through the BLMLSS Prayer Process"), ", a Spirit-led journey that examines areas out of alignment with the Kingdom of God, breaks demonic strongholds, and enables the believer to maintain victory by the power of Holy Spirit."), /*#__PURE__*/React.createElement(PillarCard, {
    title: "Becoming Catalysts for Freedom & Revival",
    illustration: "../../assets/illus-lily.webp"
  }, /*#__PURE__*/React.createElement("strong", null, "We see believers walk confidently in their God-given purpose and calling."), " This propels disciples to live out the Great Commission and carry the hope, healing & transforming power of Jesus into their communities.")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    onClick: () => onNavigate('prayer')
  }, "See the prayer process"))), /*#__PURE__*/React.createElement(ScriptureQuote, {
    citation: "1 Thessalonians 5:23",
    align: "center",
    closingQuote: false,
    style: {
      height: 600
    }
  }, "Now may the God of peace himself sanctify you completely, and may your whole spirit and soul and body be kept blameless at the coming of our Lord Jesus Christ.\""), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)'
    }
  }, ['photo-sky', 'photo-grey-sky', 'photo-conversation'].map(f => /*#__PURE__*/React.createElement("img", {
    key: f,
    src: '../../assets/' + f + '.webp',
    alt: "",
    style: {
      width: '100%',
      height: 280,
      objectFit: 'cover'
    }
  }))), /*#__PURE__*/React.createElement(Section, {
    id: "prayer-form-home"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-9)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeading, {
    size: "lg",
    lead: "Contact our team to find out more about our prayer process and get started on your journey."
  }, "Want BLMLSS prayer?"), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/photo-prayer.webp",
    alt: "A man with his head bowed and hands extended forward, surrounded by several people with their hands on his shoulders and back.",
    style: {
      marginTop: 'var(--space-7)',
      width: '100%',
      height: 300,
      objectFit: 'cover'
    }
  })), /*#__PURE__*/React.createElement(PrayerRequestForm, null))), /*#__PURE__*/React.createElement(Ticker, {
    text: "2,584 hours prayed"
  }));
}
window.HomeScreen = HomeScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/PrayerScreen.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const prayerNS = window.BlamelessMinistriesDesignSystem_0fb65e;
const STEPS = [{
  number: 1,
  plate: '../../assets/num-1-peach.webp',
  title: 'Connect with our Team',
  intro: 'If God has shown you He has more healing, freedom and breakthrough for you, we invite you to connect with us!',
  items: [{
    label: 'Submit our “Want Prayer” Form',
    text: 'Fill out our short form and our team will contact you'
  }, {
    label: 'Talk with a Prayer Lead',
    text: 'Share motivation for requesting prayer, discuss questions, and discern the next best step based on where you are'
  }]
}, {
  number: 2,
  plate: '../../assets/num-2-lavender.webp',
  title: 'Preparation and Pre-Work',
  intro: 'Before your prayer session, you will:',
  items: [{
    label: 'Complete our Intake Form',
    text: 'Examine your generational and personal history to reveal areas out of alignment with the Kingdom of God.'
  }, {
    label: 'Complete the Deliverance E-Course',
    text: 'Equip yourself with foundational truths about spiritual warfare and freedom.'
  }, {
    label: 'Get connected',
    text: 'with your Prayer Lead.'
  }],
  outro: "This preparation ensures you're ready to receive and maintain the freedom Christ offers."
}, {
  number: 3,
  plate: '../../assets/num-3-teal.webp',
  title: 'Renunciation Prayer Session',
  intro: 'Your Prayer Lead will guide you through Renunciations based on your Intake Form. In this prayer, we’ll walk you through:',
  items: [{
    label: 'Affirming',
    text: 'Declaring Jesus’ Lordship and authority over every area of your life.'
  }, {
    label: 'Repenting',
    text: 'Turning away from personal and generational sins.'
  }, {
    label: 'Renouncing',
    text: 'Breaking agreements with lies and demonic influences.'
  }, {
    label: 'Forgiving',
    text: 'Releasing those who’ve hurt you, following Jesus\' example.'
  }],
  outro: 'This step is about humility, surrender, and aligning your heart with God’s truth.'
}, {
  number: 4,
  plate: '../../assets/num-4-blue.webp',
  title: 'Releasing Prayer Session',
  intro: 'Your session will be led by your Prayer Lead and a team of 3-4 Blameless team members, who will guide the session under Holy Spirit’s direction, intercede, support and provide discernment. During prayer, you can expect:',
  items: [{
    label: 'The Word of God',
    text: 'to be proclaimed over you'
  }, {
    label: 'Deliverance',
    text: 'as demonic strongholds are broken and unclean spirits leave'
  }, {
    label: 'Inner healing',
    text: 'from past wounds and trauma, and emotional, mental and physical healing'
  }, {
    label: 'An encounter with Holy Spirit in tangible ways',
    text: '& an activation of spiritual gifts'
  }],
  outro: 'Sessions are four hours, but the journey doesn’t end there. We commit to walking with you through subsequent sessions as needed, ensuring lasting freedom and growth.'
}, {
  number: 5,
  plate: '../../assets/num-5-green.webp',
  title: 'Post Prayer: Ongoing support and community',
  intro: 'After your sessions, you are welcome (but not required) to explore the following opportunities as you feel led:',
  items: [{
    label: 'Join the BLMLSS Prayer Team',
    text: 'Learn how to engage in spiritual warfare, stand in greater authority and power in Jesus, and practice & activate your spiritual gifts through praying for others.'
  }, {
    label: 'Access Resources',
    text: 'Engage with teachings and tools to strengthen your walk with Christ.'
  }, {
    label: 'Stay Involved',
    text: 'Attend community events, gatherings and opportunities for fellowship'
  }, {
    label: 'Give',
    text: 'Fuel what God is doing by joining and becoming one of The Sowers.'
  }],
  outro: 'Our goal is to see you blameless before the Lord, equipped to fulfill His purpose for your life.'
}];
function PrayerScreen({
  onNavigate
}) {
  const {
    Button,
    Eyebrow,
    SectionHeading,
    ProcessStep
  } = prayerNS;
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Section, {
    pad: "var(--space-9)"
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "\u2014"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 'var(--fs-heading-1)',
      lineHeight: 'var(--lh-heading)',
      margin: 'var(--space-5) 0 0',
      maxWidth: '26ch'
    }
  }, "From connecting with ", /*#__PURE__*/React.createElement("em", null, "our team"), " to living in ", /*#__PURE__*/React.createElement("em", null, "community"), ", learn more about our five step ", /*#__PURE__*/React.createElement("em", null, "prayer"), " process."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => onNavigate('contact')
  }, "Contact us"))), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/photo-team-prayer.webp",
    alt: "",
    style: {
      width: '100%',
      height: 460,
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-heading-2)',
      lineHeight: 1.35,
      maxWidth: '34ch',
      margin: 0
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      fontWeight: 400
    }
  }, "Blameless Ministries"), " leads believers into healing and deliverance, which cultivates a life of holiness, awakens spiritual authority, and activates disciples to carry the freedom of Jesus into their communities.")), /*#__PURE__*/React.createElement(Section, {
    ground: "var(--surface-muted)"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    size: "lg",
    style: {
      marginBottom: 'var(--space-9)'
    }
  }, "Our prayer process:"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-10)'
    }
  }, STEPS.map((s, i) => /*#__PURE__*/React.createElement(ProcessStep, _extends({
    key: s.number
  }, s, {
    reverse: i % 2 === 1
  }))))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-9)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    size: "md",
    lead: "Please reach out! We\u2019d love to point you to biblical answers to common questions to help you walk in freedom, truth, and spiritual authority."
  }, "Still have questions about prayer?"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: () => onNavigate('contact')
  }, "Want prayer?")))));
}
window.PrayerScreen = PrayerScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/PrayerScreen.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.PillarCard = __ds_scope.PillarCard;

__ds_ns.PrayerRequestForm = __ds_scope.PrayerRequestForm;

__ds_ns.ProcessStep = __ds_scope.ProcessStep;

__ds_ns.ScriptureQuote = __ds_scope.ScriptureQuote;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.SiteFooter = __ds_scope.SiteFooter;

__ds_ns.SiteHeader = __ds_scope.SiteHeader;

__ds_ns.Ticker = __ds_scope.Ticker;

})();
