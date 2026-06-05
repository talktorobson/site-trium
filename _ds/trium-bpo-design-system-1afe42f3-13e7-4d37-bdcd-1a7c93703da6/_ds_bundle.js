/* @ds-bundle: {"format":3,"namespace":"TRIUMBPODesignSystem_1afe42","components":[{"name":"Button","sourcePath":"components/buttons/Button.jsx"},{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"StatItem","sourcePath":"components/data/StatItem.jsx"},{"name":"FaqItem","sourcePath":"components/feedback/FaqItem.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"}],"sourceHashes":{"components/buttons/Button.jsx":"a0769170197a","components/core/Avatar.jsx":"4f3a43bf6af2","components/core/Badge.jsx":"5eb8882cefc5","components/core/Card.jsx":"a77c24957121","components/core/Tag.jsx":"f8a1322e9964","components/data/StatItem.jsx":"866dcb1d2270","components/feedback/FaqItem.jsx":"b60acdebb9fe","components/forms/Checkbox.jsx":"8238cac46b15","components/forms/Input.jsx":"fd1a3df5701b","components/forms/Select.jsx":"1170a6bc64da","ui_kits/website/icons.jsx":"1d13585f22d8","ui_kits/website/sectionsBottom.jsx":"23c8deb2a2a9","ui_kits/website/sectionsMid.jsx":"3374cb439525","ui_kits/website/sectionsTop.jsx":"bd1048659a0d"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.TRIUMBPODesignSystem_1afe42 = window.TRIUMBPODesignSystem_1afe42 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/buttons/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* TRIUM BPO — Button
   The brand's primary action. Teal-on-navy primary lifts 2px on hover;
   ghost is for dark surfaces; navy is the on-light solid; whatsapp is the
   green contact CTA. All use the Sora display font, semibold. */

const RADIUS = {
  sm: 'var(--radius-sm)',
  md: 'var(--radius-md)'
};
const SIZES = {
  sm: {
    padding: '.6rem 1.2rem',
    fontSize: '.88rem'
  },
  md: {
    padding: '.85rem 1.6rem',
    fontSize: '.95rem'
  },
  lg: {
    padding: '.95rem 1.9rem',
    fontSize: '1.02rem'
  }
};
const VARIANTS = {
  primary: {
    background: 'var(--teal)',
    color: 'var(--navy)',
    border: '1.5px solid transparent'
  },
  navy: {
    background: 'var(--navy)',
    color: '#fff',
    border: '1.5px solid transparent'
  },
  ghost: {
    background: 'transparent',
    color: '#fff',
    border: '1.5px solid rgba(255,255,255,.35)'
  },
  outline: {
    background: 'transparent',
    color: 'var(--navy)',
    border: '1.5px solid var(--border-strong)'
  },
  whatsapp: {
    background: 'var(--whatsapp)',
    color: '#fff',
    border: '1.5px solid transparent'
  }
};
function Button({
  children,
  variant = 'primary',
  size = 'md',
  iconLeft = null,
  iconRight = null,
  fullWidth = false,
  disabled = false,
  as = 'button',
  href,
  onClick,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const base = VARIANTS[variant] || VARIANTS.primary;
  const sz = SIZES[size] || SIZES.md;
  const hoverStyle = !disabled && hover ? hoverFor(variant) : null;
  const style = {
    display: fullWidth ? 'flex' : 'inline-flex',
    width: fullWidth ? '100%' : undefined,
    alignItems: 'center',
    justifyContent: 'center',
    gap: '.55rem',
    fontFamily: 'var(--font-display)',
    fontWeight: 'var(--fw-semibold)',
    lineHeight: 1,
    borderRadius: RADIUS.md,
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    transition: 'background .2s ease, color .2s ease, transform .2s ease, border-color .2s ease',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    ...sz,
    ...base,
    ...hoverStyle
  };
  const Tag = href ? 'a' : as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    onClick: disabled ? undefined : onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: style,
    "aria-disabled": disabled || undefined
  }, rest), iconLeft, children, iconRight);
}
function hoverFor(variant) {
  switch (variant) {
    case 'primary':
      return {
        background: 'var(--teal-dark)',
        color: '#fff',
        transform: 'translateY(-2px)'
      };
    case 'navy':
      return {
        background: 'var(--navy-2)',
        transform: 'translateY(-2px)'
      };
    case 'ghost':
      return {
        borderColor: 'var(--teal)',
        color: 'var(--teal)'
      };
    case 'outline':
      return {
        borderColor: 'var(--teal)',
        color: 'var(--teal-dark)'
      };
    case 'whatsapp':
      return {
        background: 'var(--whatsapp-dk)',
        transform: 'translateY(-2px)'
      };
    default:
      return null;
  }
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* TRIUM BPO — Avatar
   Initial-in-circle for team members. Navy gradient fill, teal (or amber)
   ring. Falls back to initials when no image is given. */

const SIZES = {
  sm: 48,
  md: 64,
  lg: 84
};
function Avatar({
  name = '',
  src,
  size = 'md',
  ring = 'teal',
  ...rest
}) {
  const px = SIZES[size] || SIZES.md;
  const ringColor = ring === 'amber' ? 'var(--amber)' : 'var(--teal)';
  const initials = name.split(/\s+/).filter(Boolean).slice(0, 2).map(w => w[0]).join('').toUpperCase();
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      width: px,
      height: px,
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: src ? `center/cover url(${src})` : 'linear-gradient(140deg, var(--navy), var(--navy-3))',
      border: `3px solid ${ringColor}`,
      color: '#fff',
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-extrabold)',
      fontSize: px * 0.4,
      flexShrink: 0,
      overflow: 'hidden'
    }
  }, rest), !src && initials);
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* TRIUM BPO — Badge (pill)
   Small status pill: solid-tint capsule. Used for "Fechada", "Gratuito",
   step time labels ("Até 30 dias"), and inline status markers. */

const TONES = {
  teal: {
    color: 'var(--teal-dark)',
    background: 'var(--teal-tint-14)'
  },
  amber: {
    color: 'var(--amber-dark)',
    background: 'var(--amber-tint)'
  },
  navy: {
    color: '#fff',
    background: 'var(--navy)'
  },
  neutral: {
    color: 'var(--grey)',
    background: 'var(--line)'
  }
};
function Badge({
  children,
  tone = 'teal',
  ...rest
}) {
  const t = TONES[tone] || TONES.teal;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '.35rem',
      fontFamily: 'var(--font-text)',
      fontSize: '.72rem',
      fontWeight: 'var(--fw-semibold)',
      padding: '.25rem .7rem',
      borderRadius: 'var(--radius-pill)',
      color: t.color,
      background: t.background,
      whiteSpace: 'nowrap'
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* TRIUM BPO — Card
   The brand's surface primitive. White, 18px radius, hairline border.
   On hover (when `hover`) it lifts 5px and gains the signature soft shadow.
   `tone="navy"` flips to the dark service-card style with subtle glass fill. */

function Card({
  children,
  tone = 'light',
  hover = false,
  padding,
  iconWell = null,
  style = {},
  ...rest
}) {
  const [isHover, setIsHover] = React.useState(false);
  const navy = tone === 'navy';
  const base = navy ? {
    background: isHover && hover ? 'rgba(255,255,255,.07)' : 'rgba(255,255,255,.045)',
    border: `1px solid ${isHover && hover ? 'rgba(0,200,150,.5)' : 'rgba(255,255,255,.10)'}`
  } : {
    background: 'var(--surface)',
    border: '1px solid var(--line)',
    boxShadow: isHover && hover ? 'var(--shadow)' : 'none',
    transform: isHover && hover ? 'translateY(-5px)' : 'none'
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => setIsHover(true),
    onMouseLeave: () => setIsHover(false),
    style: {
      borderRadius: 'var(--radius)',
      padding: padding || 'var(--pad-card)',
      transition: 'transform .25s, box-shadow .25s, border-color .25s, background .25s',
      ...base,
      ...style
    }
  }, rest), iconWell && /*#__PURE__*/React.createElement("div", {
    style: {
      width: '50px',
      height: '50px',
      borderRadius: '13px',
      background: 'var(--teal-tint-14)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '1.2rem'
    }
  }, iconWell), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* TRIUM BPO — Tag (eyebrow)
   The recurring uppercase tracked label that sits above section headings.
   Teal by default; amber tone for the "how it works" rhythm. */

const TONES = {
  teal: {
    color: 'var(--teal-dark)',
    background: 'var(--teal-tint-10)',
    borderColor: 'var(--teal-tint-25)'
  },
  amber: {
    color: 'var(--amber-dark)',
    background: 'var(--amber-tint)',
    borderColor: 'rgba(242,180,65,.3)'
  }
};
function Tag({
  children,
  tone = 'teal',
  ...rest
}) {
  const t = TONES[tone] || TONES.teal;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-block',
      fontFamily: 'var(--font-text)',
      fontSize: '.78rem',
      fontWeight: 'var(--fw-semibold)',
      letterSpacing: '.12em',
      textTransform: 'uppercase',
      padding: '.35rem .9rem',
      borderRadius: 'var(--radius-pill)',
      border: `1px solid ${t.borderColor}`,
      color: t.color,
      background: t.background
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/data/StatItem.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* TRIUM BPO — StatItem
   The teal big-number + caption used in the navy numbers strip and stat rows.
   Big number in Sora 800 teal, small caption below in muted on-dark grey. */

function StatItem({
  value,
  children,
  align = 'center',
  onDark = true,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      textAlign: align,
      lineHeight: 1.4
    }
  }, rest), /*#__PURE__*/React.createElement("b", {
    style: {
      display: 'block',
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-extrabold)',
      fontSize: '1.5rem',
      color: 'var(--teal)',
      marginBottom: '.15rem'
    }
  }, value), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-text)',
      fontSize: '.85rem',
      color: onDark ? 'var(--on-dark-soft)' : 'var(--grey)'
    }
  }, children));
}
Object.assign(__ds_scope, { StatItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/StatItem.jsx", error: String((e && e.message) || e) }); }

// components/feedback/FaqItem.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* TRIUM BPO — FaqItem
   Accordion row. White card, Sora question, a plus icon that rotates to an
   ×-cross when open. Answer slides open with a max-height transition. */

function FaqItem({
  question,
  children,
  defaultOpen = false,
  ...rest
}) {
  const [open, setOpen] = React.useState(defaultOpen);
  const bodyRef = React.useRef(null);
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: 'var(--surface)',
      border: '1px solid var(--line)',
      borderRadius: 'var(--radius-lg)',
      marginBottom: '14px',
      overflow: 'hidden'
    }
  }, rest), /*#__PURE__*/React.createElement("button", {
    onClick: () => setOpen(o => !o),
    "aria-expanded": open,
    style: {
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: '1rem',
      padding: '1.2rem 1.5rem',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      textAlign: 'left',
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-semibold)',
      fontSize: '1rem',
      color: 'var(--navy)'
    }
  }, /*#__PURE__*/React.createElement("span", null, question), /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--teal-dark)",
    strokeWidth: "2.6",
    strokeLinecap: "round",
    style: {
      flexShrink: 0,
      transition: 'transform .3s',
      transform: open ? 'rotate(45deg)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("line", {
    x1: "12",
    y1: "5",
    x2: "12",
    y2: "19"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "5",
    y1: "12",
    x2: "19",
    y2: "12"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxHeight: open ? bodyRef.current ? bodyRef.current.scrollHeight + 40 : 400 : 0,
      overflow: 'hidden',
      transition: 'max-height .35s ease'
    }
  }, /*#__PURE__*/React.createElement("p", {
    ref: bodyRef,
    style: {
      padding: '0 1.5rem 1.3rem',
      color: 'var(--grey)',
      fontSize: '.95rem',
      lineHeight: 1.6,
      margin: 0
    }
  }, children)));
}
Object.assign(__ds_scope, { FaqItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/FaqItem.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* TRIUM BPO — Checkbox
   Small square check with teal fill when on. Used for the LGPD consent line. */

function Checkbox({
  label,
  checked,
  defaultChecked,
  onChange,
  id,
  ...rest
}) {
  const cbId = id || (typeof label === 'string' ? label.toLowerCase().replace(/\s+/g, '-').slice(0, 24) : undefined);
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: cbId,
    style: {
      display: 'flex',
      gap: '.6rem',
      alignItems: 'flex-start',
      fontFamily: 'var(--font-text)',
      fontSize: '.82rem',
      color: 'var(--grey)',
      cursor: 'pointer',
      lineHeight: 1.5
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: cbId,
    type: "checkbox",
    checked: checked,
    defaultChecked: defaultChecked,
    onChange: onChange,
    style: {
      width: '16px',
      height: '16px',
      marginTop: '2px',
      accentColor: 'var(--teal-dark)',
      flexShrink: 0,
      cursor: 'pointer'
    }
  }, rest)), /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* TRIUM BPO — Input
   Labeled text field. Cool inset surface, 1.5px hairline border that turns
   teal on focus. Pairs with Select and Checkbox in the lead form. */

function Input({
  label,
  id,
  type = 'text',
  placeholder,
  value,
  defaultValue,
  onChange,
  required = false,
  hint,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: '1.1rem'
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      display: 'block',
      fontFamily: 'var(--font-text)',
      fontSize: '.82rem',
      fontWeight: 'var(--fw-semibold)',
      color: 'var(--navy)',
      marginBottom: '.4rem'
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--teal-dark)'
    }
  }, " *")), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    type: type,
    placeholder: placeholder,
    value: value,
    defaultValue: defaultValue,
    onChange: onChange,
    required: required,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: '100%',
      padding: '.78rem .95rem',
      border: `1.5px solid ${focus ? 'var(--teal)' : 'var(--line)'}`,
      borderRadius: 'var(--radius-sm)',
      fontFamily: 'var(--font-text)',
      fontSize: '.93rem',
      color: 'var(--ink)',
      background: 'var(--surface-alt)',
      outline: 'none',
      transition: 'border-color .2s'
    }
  }, rest)), hint && /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '.72rem',
      color: 'var(--grey)',
      marginTop: '.35rem'
    }
  }, hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* TRIUM BPO — Select
   Native select styled to match Input. Chevron drawn with a CSS background. */

function Select({
  label,
  id,
  options = [],
  value,
  defaultValue,
  onChange,
  required = false,
  placeholder = 'Selecione',
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const selId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: '1.1rem'
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: selId,
    style: {
      display: 'block',
      fontFamily: 'var(--font-text)',
      fontSize: '.82rem',
      fontWeight: 'var(--fw-semibold)',
      color: 'var(--navy)',
      marginBottom: '.4rem'
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--teal-dark)'
    }
  }, " *")), /*#__PURE__*/React.createElement("select", _extends({
    id: selId,
    value: value,
    defaultValue: defaultValue,
    onChange: onChange,
    required: required,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: '100%',
      padding: '.78rem .95rem',
      paddingRight: '2.4rem',
      border: `1.5px solid ${focus ? 'var(--teal)' : 'var(--line)'}`,
      borderRadius: 'var(--radius-sm)',
      fontFamily: 'var(--font-text)',
      fontSize: '.93rem',
      color: 'var(--ink)',
      background: 'var(--surface-alt)',
      outline: 'none',
      transition: 'border-color .2s',
      appearance: 'none',
      WebkitAppearance: 'none',
      backgroundImage: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='%235C6F82' stroke-width='2.2' stroke-linecap='round' stroke-linejoin='round'><polyline points='6 9 12 15 18 9'/></svg>\")",
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'right .85rem center',
      cursor: 'pointer'
    }
  }, rest), placeholder && /*#__PURE__*/React.createElement("option", {
    value: ""
  }, placeholder), options.map(opt => {
    const o = typeof opt === 'string' ? {
      value: opt,
      label: opt
    } : opt;
    return /*#__PURE__*/React.createElement("option", {
      key: o.value,
      value: o.value
    }, o.label);
  })));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/icons.jsx
try { (() => {
/* TRIUM BPO — icon set used across the website kit.
   Lucide-family line icons (stroke 2, round caps) lifted from the production
   site, plus the solid WhatsApp glyph. Exposed on window.TriumIcons. */
const I = (paths, opts = {}) => props => /*#__PURE__*/React.createElement("svg", {
  width: props.size || 22,
  height: props.size || 22,
  viewBox: "0 0 24 24",
  fill: opts.fill || 'none',
  stroke: opts.fill ? 'none' : props.color || 'currentColor',
  strokeWidth: props.sw || opts.sw || 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  style: props.style
}, paths);
const TriumIcons = {
  check: I(/*#__PURE__*/React.createElement("polyline", {
    points: "20 6 9 17 4 12"
  }), {
    sw: 3
  }),
  alert: I(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "12",
    y1: "9",
    x2: "12",
    y2: "13"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "12",
    y1: "17",
    x2: "12.01",
    y2: "17"
  }))),
  clock: I(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "12 6 12 12 16 14"
  }))),
  monitor: I(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "4",
    width: "20",
    height: "16",
    rx: "2"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "2",
    y1: "10",
    x2: "22",
    y2: "10"
  }))),
  fileText: I(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "3",
    width: "20",
    height: "18",
    rx: "2"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "7",
    y1: "8",
    x2: "17",
    y2: "8"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "7",
    y1: "12",
    x2: "17",
    y2: "12"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "7",
    y1: "16",
    x2: "12",
    y2: "16"
  }))),
  users: I(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "9",
    cy: "7",
    r: "4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M23 21v-2a4 4 0 0 0-3-3.87"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 3.13a4 4 0 0 1 0 7.75"
  }))),
  shield: I(/*#__PURE__*/React.createElement("path", {
    d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
  })),
  smartphone: I(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    x: "5",
    y: "2",
    width: "14",
    height: "20",
    rx: "2"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "12",
    y1: "18",
    x2: "12.01",
    y2: "18"
  }))),
  user: I(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "7",
    r: "4"
  }))),
  store: I(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "3",
    y1: "6",
    x2: "21",
    y2: "6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 10a4 4 0 0 1-8 0"
  }))),
  briefcase: I(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "7",
    width: "20",
    height: "14",
    rx: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"
  }))),
  activity: I(/*#__PURE__*/React.createElement("path", {
    d: "M22 12h-4l-3 9L9 3l-3 9H2"
  })),
  utensils: I(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7 2v20"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3zm0 0v7"
  }))),
  factory: I(/*#__PURE__*/React.createElement("path", {
    d: "M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z"
  })),
  truck: I(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    x: "1",
    y: "3",
    width: "15",
    height: "13",
    rx: "1"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 8h4l3 3v5h-7V8z"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "5.5",
    cy: "18.5",
    r: "2.5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "18.5",
    cy: "18.5",
    r: "2.5"
  }))),
  message: I(/*#__PURE__*/React.createElement("path", {
    d: "M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8z"
  })),
  checkCircle: I(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "8 12.5 11 15.5 16 9.5"
  }))),
  whatsapp: I(/*#__PURE__*/React.createElement("path", {
    d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.297-.497.1-.198.05-.371-.025-.52-.074-.149-.668-1.612-.916-2.207-.242-.579-.487-.5-.668-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.064 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"
  }), {
    fill: true
  }),
  plus: I(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("line", {
    x1: "12",
    y1: "5",
    x2: "12",
    y2: "19"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "5",
    y1: "12",
    x2: "19",
    y2: "12"
  })), {
    sw: 2.6
  })
};
const TriumLogo = ({
  size = 38
}) => /*#__PURE__*/React.createElement("svg", {
  width: size,
  height: size,
  viewBox: "0 0 48 48",
  fill: "none",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("rect", {
  x: "5",
  y: "9",
  width: "9",
  height: "30",
  rx: "3",
  fill: "#FFFFFF"
}), /*#__PURE__*/React.createElement("rect", {
  x: "19.5",
  y: "9",
  width: "9",
  height: "30",
  rx: "3",
  fill: "#00C896"
}), /*#__PURE__*/React.createElement("rect", {
  x: "34",
  y: "9",
  width: "9",
  height: "30",
  rx: "3",
  fill: "#F2B441"
}));
window.TriumIcons = TriumIcons;
window.TriumLogo = TriumLogo;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/icons.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/sectionsBottom.jsx
try { (() => {
/* TRIUM BPO website — bottom sections: Team, Faq, Contact, Footer */
const {
  useState: useStateB
} = React;
function Team() {
  const I = window.TriumIcons;
  return /*#__PURE__*/React.createElement("section", {
    className: "sec team",
    id: "equipe"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sec-head center"
  }, /*#__PURE__*/React.createElement("span", {
    className: "tag"
  }, "Quem cuida da sua folha"), /*#__PURE__*/React.createElement("h2", null, "S\xF3cias \xE0 frente, especialistas dedicados na opera\xE7\xE3o"), /*#__PURE__*/React.createElement("p", null, "A TRIUM combina a lideran\xE7a direta das s\xF3cias com uma c\xE9lula de analistas de folha dedicados. Voc\xEA sempre sabe quem opera a sua carteira e fala direto com essa pessoa.")), /*#__PURE__*/React.createElement("div", {
    className: "team-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "member"
  }, /*#__PURE__*/React.createElement("div", {
    className: "avatar"
  }, "R"), /*#__PURE__*/React.createElement("h3", null, "Roberta"), /*#__PURE__*/React.createElement("span", {
    className: "role"
  }, "S\xF3cia \xB7 Opera\xE7\xE3o de DP"), /*#__PURE__*/React.createElement("p", null, "Especialista em departamento pessoal. Lidera a c\xE9lula de analistas, define o padr\xE3o de qualidade e supervisiona cada fechamento antes de chegar a voc\xEA.")), /*#__PURE__*/React.createElement("div", {
    className: "member alt"
  }, /*#__PURE__*/React.createElement("div", {
    className: "avatar"
  }, "L"), /*#__PURE__*/React.createElement("h3", null, "Larissa"), /*#__PURE__*/React.createElement("span", {
    className: "role"
  }, "S\xF3cia \xB7 Jur\xEDdico e compliance trabalhista"), /*#__PURE__*/React.createElement("p", null, "Advogada. Respons\xE1vel pelo compliance trabalhista, pelos contratos e pela leitura jur\xEDdica de conven\xE7\xF5es coletivas e mudan\xE7as na lei que afetam a sua folha.")), /*#__PURE__*/React.createElement("div", {
    className: "member creed"
  }, /*#__PURE__*/React.createElement("div", {
    className: "avatar"
  }, /*#__PURE__*/React.createElement(I.users, {
    size: 32,
    color: "#00C896",
    sw: 1.8
  })), /*#__PURE__*/React.createElement("h3", null, "C\xE9lula de analistas de folha"), /*#__PURE__*/React.createElement("p", null, "Analistas plenos e juniores dedicados por carteira de clientes, sob supervis\xE3o direta da Roberta. Modelo boutique: poucos clientes por analista, pr\xE9via todo m\xEAs e resposta em at\xE9 um dia \xFAtil.")))));
}
function Faq() {
  const I = window.TriumIcons;
  const qa = [['Preciso trocar de contador para contratar a TRIUM?', 'Não. A TRIUM assume apenas a folha e o departamento pessoal. Seu contador continua cuidando da contabilidade e do fiscal, e nós entregamos a ele todos os relatórios e integrações que precisar. Na prática, o trabalho dele fica mais fácil.'], ['Minha empresa é pequena. Vale a pena terceirizar?', 'Nosso foco são empresas de 10 a 99 colaboradores, justamente as que não têm RH interno. É nesse porte que a terceirização traz mais retorno, porque o custo de um erro de folha ou de uma multa é proporcionalmente muito maior.'], ['Como funciona o preço?', 'O valor é por colaborador ativo por mês, com o portal digital já incluído, sem cobranças surpresa. Cada proposta é montada sob medida após o diagnóstico gratuito, de acordo com o porte e a complexidade da sua operação.'], ['O que é o Portal do Cliente?', 'É o ambiente digital onde você acompanha sua folha: prévia para aprovação, relatórios de custo, documentos, solicitações e calendário de obrigações. Seu colaborador também acessa holerites e informes pelo celular. O acesso é liberado na implantação do contrato.'], ['Meus dados e os dos colaboradores ficam seguros?', 'Sim. Dados de folha são dados sensíveis pela LGPD e tratamos como tal. Operamos com acordo de tratamento de dados em todos os contratos, acesso segregado por cliente e processos desenhados para a lei brasileira de proteção de dados.'], ['E se eu já tiver um sistema de folha?', 'Sem problema. No diagnóstico avaliamos o que você já usa e definimos juntos o melhor caminho. Podemos operar a folha no nosso ambiente ou avaliar a operação sobre a sua ferramenta atual.']];
  const [open, setOpen] = useStateB(0);
  return /*#__PURE__*/React.createElement("section", {
    className: "sec",
    id: "faq"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sec-head center"
  }, /*#__PURE__*/React.createElement("span", {
    className: "tag"
  }, "Perguntas frequentes"), /*#__PURE__*/React.createElement("h2", null, "O que todo mundo pergunta antes de contratar")), /*#__PURE__*/React.createElement("div", {
    className: "faq-list"
  }, qa.map(([q, a], i) => /*#__PURE__*/React.createElement("div", {
    className: 'faq-item' + (open === i ? ' open' : ''),
    key: q
  }, /*#__PURE__*/React.createElement("button", {
    className: "faq-q",
    onClick: () => setOpen(open === i ? -1 : i)
  }, q, /*#__PURE__*/React.createElement(I.plus, {
    size: 18,
    color: "#00A87E"
  })), /*#__PURE__*/React.createElement("div", {
    className: "faq-a",
    style: {
      maxHeight: open === i ? 240 : 0
    }
  }, /*#__PURE__*/React.createElement("p", null, a)))))));
}
function Contact({
  onWa
}) {
  const I = window.TriumIcons;
  const [sent, setSent] = useStateB(false);
  const points = ['Resposta em até 1 dia útil', 'Relatório de diagnóstico é seu, feche ou não com a gente', 'Conversa direto com quem vai operar a sua folha'];
  return /*#__PURE__*/React.createElement("section", {
    className: "sec contact",
    id: "contato"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap contact-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "tag"
  }, "Vamos conversar"), /*#__PURE__*/React.createElement("h2", null, "Pe\xE7a seu diagn\xF3stico gratuito de folha"), /*#__PURE__*/React.createElement("p", {
    className: "sub"
  }, "Em uma conversa de 30 minutos, entendemos sua opera\xE7\xE3o e devolvemos um relat\xF3rio com riscos, custos e o que d\xE1 para melhorar. Sem compromisso."), /*#__PURE__*/React.createElement("ul", {
    className: "contact-points"
  }, points.map(p => /*#__PURE__*/React.createElement("li", {
    key: p
  }, /*#__PURE__*/React.createElement(I.check, {
    size: 18,
    color: "#00C896"
  }), p))), /*#__PURE__*/React.createElement("button", {
    className: "wa-direct",
    onClick: onWa
  }, /*#__PURE__*/React.createElement(I.whatsapp, {
    size: 20
  }), "Chamar no WhatsApp agora")), /*#__PURE__*/React.createElement("div", {
    className: "lead-form"
  }, !sent ? /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    }
  }, /*#__PURE__*/React.createElement("h3", null, "Ou deixe seus dados que a gente chama voc\xEA"), /*#__PURE__*/React.createElement("div", {
    className: "two-col"
  }, /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", null, "Nome"), /*#__PURE__*/React.createElement("input", {
    required: true,
    placeholder: "Seu nome"
  })), /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", null, "Empresa"), /*#__PURE__*/React.createElement("input", {
    required: true,
    placeholder: "Nome da empresa"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "two-col"
  }, /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", null, "WhatsApp"), /*#__PURE__*/React.createElement("input", {
    required: true,
    type: "tel",
    placeholder: "(15) 99999 9999"
  })), /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", null, "Email"), /*#__PURE__*/React.createElement("input", {
    type: "email",
    placeholder: "voce@empresa.com.br"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", null, "Quantos colaboradores CLT?"), /*#__PURE__*/React.createElement("select", {
    required: true,
    defaultValue: ""
  }, /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, "Selecione"), /*#__PURE__*/React.createElement("option", null, "Menos de 10"), /*#__PURE__*/React.createElement("option", null, "10 a 30"), /*#__PURE__*/React.createElement("option", null, "31 a 60"), /*#__PURE__*/React.createElement("option", null, "61 a 99"), /*#__PURE__*/React.createElement("option", null, "100 ou mais"))), /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", null, "Conte rapidamente como \xE9 sua folha hoje"), /*#__PURE__*/React.createElement("textarea", {
    rows: "3",
    placeholder: "Ex: contador cuida da folha, 45 funcion\xE1rios, sem portal"
  })), /*#__PURE__*/React.createElement("label", {
    className: "consent"
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    required: true
  }), /*#__PURE__*/React.createElement("span", null, "Autorizo o uso dos meus dados apenas para este contato, conforme a LGPD.")), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "btn btn-navy"
  }, "Quero meu diagn\xF3stico gratuito"), /*#__PURE__*/React.createElement("p", {
    className: "form-note"
  }, "Voc\xEA tamb\xE9m pode enviar os mesmos dados direto pelo WhatsApp.")) : /*#__PURE__*/React.createElement("div", {
    className: "form-ok"
  }, /*#__PURE__*/React.createElement(I.checkCircle, {
    size: 52,
    color: "#00A87E"
  }), /*#__PURE__*/React.createElement("h3", null, "Recebemos seu pedido"), /*#__PURE__*/React.createElement("p", null, "Vamos chamar voc\xEA em at\xE9 1 dia \xFAtil. Se preferir adiantar, \xE9 s\xF3 clicar no bot\xE3o do WhatsApp.")))));
}
function Footer({
  onWa,
  onPortal
}) {
  return /*#__PURE__*/React.createElement("footer", {
    className: "ft"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "foot-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "logo",
    style: {
      marginBottom: '1rem'
    }
  }, /*#__PURE__*/React.createElement(window.TriumLogo, {
    size: 32
  }), /*#__PURE__*/React.createElement("span", {
    className: "word",
    style: {
      fontSize: '1.05rem'
    }
  }, "TRIUM", /*#__PURE__*/React.createElement("small", null, "B P O"))), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: 300
    }
  }, "Terceiriza\xE7\xE3o de folha de pagamento e departamento pessoal para empresas que n\xE3o t\xEAm RH interno. Tecnologia premium inclu\xEDda.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", null, "Servi\xE7os"), /*#__PURE__*/React.createElement("a", {
    href: "#servicos"
  }, "FOPA Folha de pagamento"), /*#__PURE__*/React.createElement("a", {
    href: "#servicos"
  }, "Departamento pessoal"), /*#__PURE__*/React.createElement("a", {
    href: "#servicos"
  }, "eSocial e obriga\xE7\xF5es"), /*#__PURE__*/React.createElement("a", {
    href: "#servicos"
  }, "Portal digital")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", null, "A TRIUM"), /*#__PURE__*/React.createElement("a", {
    href: "#equipe"
  }, "Equipe"), /*#__PURE__*/React.createElement("a", {
    href: "#segmentos"
  }, "Segmentos atendidos"), /*#__PURE__*/React.createElement("a", {
    href: "#faq"
  }, "Perguntas frequentes"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onPortal();
    }
  }, "Portal do Cliente")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", null, "Contato"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onWa();
    }
  }, "WhatsApp"), /*#__PURE__*/React.createElement("a", {
    href: "mailto:contato@triumbpo.com.br"
  }, "contato@triumbpo.com.br"), /*#__PURE__*/React.createElement("a", {
    href: "#contato"
  }, "Diagn\xF3stico gratuito"))), /*#__PURE__*/React.createElement("div", {
    className: "foot-bottom"
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 TRIUM BPO. Todos os direitos reservados."), /*#__PURE__*/React.createElement("span", null, "triumbpo.com.br \xB7 fopa.com.br \xB7 Comprometidos com a LGPD"))));
}
Object.assign(window, {
  Team,
  Faq,
  Contact,
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/sectionsBottom.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/sectionsMid.jsx
try { (() => {
/* TRIUM BPO website — mid sections: Services (FOPA), Steps, Compare, Segments */

function Services() {
  const I = window.TriumIcons;
  const servs = [[/*#__PURE__*/React.createElement(I.fileText, {
    color: "#00C896",
    size: 26
  }), 'Folha de pagamento', 'Cálculo mensal completo, com prévia para sua aprovação antes do fechamento.', ['Salários, horas extras, adicionais e descontos', 'Décimo terceiro, férias e médias', 'INSS, FGTS, IRRF e demais encargos', 'Relatório gerencial de custo de pessoal']], [/*#__PURE__*/React.createElement(I.users, {
    color: "#00C896",
    size: 26
  }), 'Departamento pessoal', 'Toda a rotina do colaborador, da admissão ao desligamento, sem parar na sua mesa.', ['Admissão digital com documentos pelo celular', 'Férias, afastamentos e controle de prazos', 'Rescisões, homologações e cálculos finais', 'Gestão de benefícios como VT, VR e plano de saúde']], [/*#__PURE__*/React.createElement(I.shield, {
    color: "#00C896",
    size: 26
  }), 'eSocial e obrigações', 'Compliance trabalhista monitorado todos os dias, não só no fechamento.', ['Envio de todos os eventos do eSocial no prazo', 'FGTS Digital e DCTFWeb sob controle', 'Acompanhamento de convenções coletivas', 'Alertas de mudança na legislação que afeta sua folha']], [/*#__PURE__*/React.createElement(I.smartphone, {
    color: "#00C896",
    size: 26
  }), 'Portal digital incluído', 'Tecnologia premium sem custo à parte. Seu colaborador resolve sozinho pelo celular.', ['Holerite e informe de rendimentos no celular', 'Solicitações de férias e documentos online', 'Comunicação direta pelo WhatsApp', 'Painel do gestor com custos e indicadores']]];
  return /*#__PURE__*/React.createElement("section", {
    className: "sec fopa",
    id: "servicos"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sec-head center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fopa-badge"
  }, /*#__PURE__*/React.createElement("b", null, "FOPA"), /*#__PURE__*/React.createElement("span", null, "o servi\xE7o de folha da TRIUM")), /*#__PURE__*/React.createElement("h2", null, "Folha e departamento pessoal completos, de ponta a ponta"), /*#__PURE__*/React.createElement("p", null, "FOPA \xE9 a primeira linha de servi\xE7os da TRIUM. Tudo que envolve o ciclo do colaborador na sua empresa, operado por especialistas com tecnologia premium inclu\xEDda no contrato.")), /*#__PURE__*/React.createElement("div", {
    className: "serv-grid"
  }, servs.map(([ic, h, p, items]) => /*#__PURE__*/React.createElement("div", {
    className: "serv",
    key: h
  }, /*#__PURE__*/React.createElement("div", {
    className: "ico"
  }, ic), /*#__PURE__*/React.createElement("h3", null, h), /*#__PURE__*/React.createElement("p", null, p), /*#__PURE__*/React.createElement("ul", null, items.map(it => /*#__PURE__*/React.createElement("li", {
    key: it
  }, it))))))));
}
function Steps() {
  const steps = [['Gratuito', '01', 'Diagnóstico da sua folha', 'Analisamos sua folha atual e apontamos riscos de compliance, erros de cálculo e oportunidades de economia. Você recebe o relatório mesmo se não fechar com a gente.'], ['Até 30 dias', '02', 'Implantação assistida', 'Migramos cadastros, históricos e rodamos uma folha em paralelo com a atual para validar tudo. Sem interrupção, sem retrabalho para o seu time.'], ['Mês a mês', '03', 'Operação contínua', 'Calendário mensal definido, prévia para aprovação, fechamento no prazo e canal direto no WhatsApp com quem realmente opera a sua folha.']];
  return /*#__PURE__*/React.createElement("section", {
    className: "sec",
    id: "como-funciona"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sec-head center"
  }, /*#__PURE__*/React.createElement("span", {
    className: "tag"
  }, "Como funciona"), /*#__PURE__*/React.createElement("h2", null, "Da primeira conversa \xE0 folha rodando em tr\xEAs passos"), /*#__PURE__*/React.createElement("p", null, "Migrar de fornecedor de folha parece arriscado. Nosso processo foi desenhado para a transi\xE7\xE3o acontecer sem nenhum colaborador perceber.")), /*#__PURE__*/React.createElement("div", {
    className: "steps"
  }, steps.map(([badge, num, h, p]) => /*#__PURE__*/React.createElement("div", {
    className: "step",
    key: num
  }, /*#__PURE__*/React.createElement("span", {
    className: "badge-time"
  }, badge), /*#__PURE__*/React.createElement("div", {
    className: "num"
  }, num), /*#__PURE__*/React.createElement("h3", null, h), /*#__PURE__*/React.createElement("p", null, p))))));
}
function Compare() {
  const rows = [['Prévia da folha antes do fechamento', 'Sempre, todo mês', 'Raramente'], ['Portal e holerite digital para o colaborador', 'Incluído no contrato', 'Não oferece ou cobra à parte'], ['Monitoramento de prazos e legislação', 'Diário e proativo', 'Reativo, no fechamento'], ['Acompanhamento de convenção coletiva', 'Por sindicato e categoria', 'Quando o cliente avisa'], ['Canal de atendimento', 'WhatsApp direto com o especialista', 'Email com fila de espera'], ['Relatório gerencial de custo de pessoal', 'Todo mês', 'Sob demanda']];
  return /*#__PURE__*/React.createElement("section", {
    className: "sec",
    id: "porque",
    style: {
      paddingTop: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sec-head center"
  }, /*#__PURE__*/React.createElement("span", {
    className: "tag"
  }, "Por que a TRIUM"), /*#__PURE__*/React.createElement("h2", null, "O que muda quando a folha sai do contador e vai para um especialista"), /*#__PURE__*/React.createElement("p", null, "Respeitamos o seu contador e trabalhamos junto com ele. Mas folha de pagamento \xE9 uma disciplina pr\xF3pria, e tratar como servi\xE7o agregado custa caro.")), /*#__PURE__*/React.createElement("div", {
    className: "compare"
  }, /*#__PURE__*/React.createElement("table", null, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "O que voc\xEA recebe"), /*#__PURE__*/React.createElement("th", null, "TRIUM BPO"), /*#__PURE__*/React.createElement("th", null, "Folha no escrit\xF3rio cont\xE1bil"))), /*#__PURE__*/React.createElement("tbody", null, rows.map(([a, b, c]) => /*#__PURE__*/React.createElement("tr", {
    key: a
  }, /*#__PURE__*/React.createElement("td", null, a), /*#__PURE__*/React.createElement("td", {
    className: "yes"
  }, b), /*#__PURE__*/React.createElement("td", {
    className: "no"
  }, c))))))));
}
function Segments() {
  const I = window.TriumIcons;
  const segs = [[/*#__PURE__*/React.createElement(I.store, {
    color: "#00A87E"
  }), 'Comércio e varejo', 'Escalas, domingos e feriados, comissões e alta rotatividade sob controle.'], [/*#__PURE__*/React.createElement(I.briefcase, {
    color: "#00A87E"
  }), 'Serviços e escritórios', 'Da agência à prestadora técnica, com benefícios e jornadas bem definidos.'], [/*#__PURE__*/React.createElement(I.activity, {
    color: "#00A87E"
  }), 'Clínicas e saúde', 'Plantões, adicionais noturnos e categorias profissionais com piso próprio.'], [/*#__PURE__*/React.createElement(I.utensils, {
    color: "#00A87E"
  }), 'Restaurantes e food service', 'Escala 6x1, gorjetas, turnos quebrados e a convenção do setor em dia.'], [/*#__PURE__*/React.createElement(I.factory, {
    color: "#00A87E"
  }), 'Indústria leve', 'Turnos, insalubridade, periculosidade e adicionais calculados sem erro.'], [/*#__PURE__*/React.createElement(I.truck, {
    color: "#00A87E"
  }), 'Transporte e logística', 'Jornadas especiais, diárias e horas de espera tratadas conforme a lei.']];
  return /*#__PURE__*/React.createElement("section", {
    className: "sec",
    id: "segmentos",
    style: {
      paddingTop: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sec-head center"
  }, /*#__PURE__*/React.createElement("span", {
    className: "tag"
  }, "Para quem trabalhamos"), /*#__PURE__*/React.createElement("h2", null, "Segmentos que conhecemos de perto"), /*#__PURE__*/React.createElement("p", null, "Cada setor tem sindicato, conven\xE7\xE3o coletiva e rotina pr\xF3prios. Operamos a folha com as particularidades de cada um, sem tratamento gen\xE9rico.")), /*#__PURE__*/React.createElement("div", {
    className: "seg-grid"
  }, segs.map(([ic, h, p]) => /*#__PURE__*/React.createElement("div", {
    className: "seg",
    key: h
  }, /*#__PURE__*/React.createElement("div", {
    className: "ico"
  }, ic), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", null, h), /*#__PURE__*/React.createElement("p", null, p)))))));
}
Object.assign(window, {
  Services,
  Steps,
  Compare,
  Segments
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/sectionsMid.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/sectionsTop.jsx
try { (() => {
/* TRIUM BPO website — top sections: Header, Hero, NumbersStrip, Pain */

function Header({
  onWa,
  onPortal,
  onMenu
}) {
  const I = window.TriumIcons;
  const links = [['Serviços', '#servicos'], ['Como funciona', '#como-funciona'], ['Segmentos', '#segmentos'], ['Equipe', '#equipe'], ['Perguntas', '#faq']];
  return /*#__PURE__*/React.createElement("header", {
    className: "hdr"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap nav"
  }, /*#__PURE__*/React.createElement("a", {
    className: "logo",
    href: "#topo"
  }, /*#__PURE__*/React.createElement(window.TriumLogo, {
    size: 38
  }), /*#__PURE__*/React.createElement("span", {
    className: "word"
  }, "TRIUM", /*#__PURE__*/React.createElement("small", null, "B P O"))), /*#__PURE__*/React.createElement("nav", {
    className: "nav-links"
  }, links.map(([t, h]) => /*#__PURE__*/React.createElement("a", {
    key: t,
    href: h
  }, t)), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-portal",
    onClick: onPortal
  }, /*#__PURE__*/React.createElement(I.user, {
    size: 15,
    sw: 2.2
  }), "Portal do Cliente"), /*#__PURE__*/React.createElement("a", {
    href: "#contato",
    className: "btn btn-primary"
  }, "Diagn\xF3stico gratuito")), /*#__PURE__*/React.createElement("button", {
    className: "burger",
    onClick: onMenu,
    "aria-label": "Menu"
  }, /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null))));
}
function Hero({
  onWa
}) {
  const I = window.TriumIcons;
  const points = ['Implantação em até 30 dias', 'Portal do colaborador incluído', '100% aderente ao eSocial'];
  return /*#__PURE__*/React.createElement("section", {
    className: "hero",
    id: "topo"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap hero-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "tag"
  }, "BPO de folha de pagamento e departamento pessoal"), /*#__PURE__*/React.createElement("h1", null, "Sua folha sem erro, sem multa e ", /*#__PURE__*/React.createElement("em", null, "sem ocupar o seu dia")), /*#__PURE__*/React.createElement("p", {
    className: "lead"
  }, "A TRIUM assume a folha de pagamento e o departamento pessoal da sua empresa com compliance garantido, eSocial nativo e portal digital inclu\xEDdo. Voc\xEA cuida do neg\xF3cio. A burocracia fica com a gente."), /*#__PURE__*/React.createElement("div", {
    className: "hero-ctas"
  }, /*#__PURE__*/React.createElement("a", {
    className: "btn btn-primary",
    href: "#contato"
  }, "Pedir diagn\xF3stico gratuito"), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-ghost",
    onClick: onWa
  }, "Falar no WhatsApp")), /*#__PURE__*/React.createElement("div", {
    className: "hero-points"
  }, points.map(p => /*#__PURE__*/React.createElement("div", {
    key: p
  }, /*#__PURE__*/React.createElement(I.check, {
    size: 16,
    color: "#00C896"
  }), p)))), /*#__PURE__*/React.createElement("div", {
    className: "mock"
  }, /*#__PURE__*/React.createElement("div", {
    className: "float f1"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dotok"
  }, /*#__PURE__*/React.createElement(I.check, {
    size: 18,
    color: "#00A87E"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", null, "eSocial enviado"), /*#__PURE__*/React.createElement("br", null), "Todos os eventos no prazo")), /*#__PURE__*/React.createElement("div", {
    className: "holerite"
  }, /*#__PURE__*/React.createElement("div", {
    className: "htitle"
  }, "Folha de junho ", /*#__PURE__*/React.createElement("span", {
    className: "pill"
  }, "Fechada")), /*#__PURE__*/React.createElement("div", {
    className: "hrow"
  }, /*#__PURE__*/React.createElement("span", null, "Colaboradores ativos"), /*#__PURE__*/React.createElement("b", null, "47")), /*#__PURE__*/React.createElement("div", {
    className: "hrow"
  }, /*#__PURE__*/React.createElement("span", null, "Admiss\xF5es no m\xEAs"), /*#__PURE__*/React.createElement("b", null, "3")), /*#__PURE__*/React.createElement("div", {
    className: "hrow"
  }, /*#__PURE__*/React.createElement("span", null, "F\xE9rias programadas"), /*#__PURE__*/React.createElement("b", null, "2")), /*#__PURE__*/React.createElement("div", {
    className: "hrow"
  }, /*#__PURE__*/React.createElement("span", null, "Encargos calculados"), /*#__PURE__*/React.createElement("b", null, "INSS FGTS IRRF")), /*#__PURE__*/React.createElement("div", {
    className: "hrow"
  }, /*#__PURE__*/React.createElement("span", null, "Holerites no portal"), /*#__PURE__*/React.createElement("b", {
    style: {
      color: '#00A87E'
    }
  }, "Dispon\xEDveis"))), /*#__PURE__*/React.createElement("div", {
    className: "float f2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dotok"
  }, /*#__PURE__*/React.createElement(I.message, {
    size: 18,
    color: "#00A87E",
    sw: 2.4
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", null, "Holerite no WhatsApp"), /*#__PURE__*/React.createElement("br", null), "Colaborador recebe no celular")))));
}
function NumbersStrip() {
  const items = [['30 dias', 'para implantar sem parar sua operação'], ['100%', 'dos eventos do eSocial no prazo'], ['10 a 99', 'colaboradores: nosso foco total'], ['1 dia útil', 'para responder qualquer demanda']];
  return /*#__PURE__*/React.createElement("div", {
    className: "strip"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, items.map(([n, t]) => /*#__PURE__*/React.createElement("div", {
    className: "item",
    key: n
  }, /*#__PURE__*/React.createElement("b", null, n), t))));
}
function Pain() {
  const I = window.TriumIcons;
  const cards = [[/*#__PURE__*/React.createElement(I.alert, {
    color: "#D98E1B"
  }), 'Risco de multa silencioso', 'Prazos de eSocial, FGTS Digital e obrigações mensais mudam o tempo todo. Quando o erro aparece, a multa já é retroativa e o problema virou seu.'], [/*#__PURE__*/React.createElement(I.clock, {
    color: "#D98E1B"
  }), 'Seu tempo escorrendo pelo ralo', 'Admissão, férias, atestado, rescisão, benefício. Sem um DP estruturado, tudo isso para na mesa do dono ou de um administrativo sobrecarregado.'], [/*#__PURE__*/React.createElement(I.monitor, {
    color: "#D98E1B"
  }), 'Zero visibilidade', 'Você recebe a folha pronta, sem prévia para conferir e sem relatório de custo. O colaborador pede holerite por mensagem e espera dias pela resposta.']];
  return /*#__PURE__*/React.createElement("section", {
    className: "sec",
    id: "dores"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sec-head center"
  }, /*#__PURE__*/React.createElement("span", {
    className: "tag"
  }, "O problema"), /*#__PURE__*/React.createElement("h2", null, "A folha da sua empresa merece mais que um anexo de planilha"), /*#__PURE__*/React.createElement("p", null, "Na maioria das empresas do nosso porte, a folha \xE9 um servi\xE7o agregado do escrit\xF3rio cont\xE1bil. Feita no prazo apertado, sem pr\xE9via, sem portal e sem ningu\xE9m monitorando o que muda na lei.")), /*#__PURE__*/React.createElement("div", {
    className: "pain-grid"
  }, cards.map(([ic, h, p]) => /*#__PURE__*/React.createElement("div", {
    className: "pain",
    key: h
  }, /*#__PURE__*/React.createElement("div", {
    className: "ico"
  }, ic), /*#__PURE__*/React.createElement("h3", null, h), /*#__PURE__*/React.createElement("p", null, p))))));
}
Object.assign(window, {
  Header,
  Hero,
  NumbersStrip,
  Pain
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/sectionsTop.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.StatItem = __ds_scope.StatItem;

__ds_ns.FaqItem = __ds_scope.FaqItem;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

})();
