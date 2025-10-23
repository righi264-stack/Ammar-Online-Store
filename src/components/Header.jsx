import React from 'react';

export default function Header({lang,toggle,logo}){
  return (
    <header className="header">
      <img src={logo} className="logo" alt="Ammar Shop" />
      <div style={{display:'flex',gap:12}}>
        <button className="lang-btn" onClick={toggle}>{lang === 'ar' ? 'English' : 'العربية'}</button>
      </div>
    </header>
  );
}
