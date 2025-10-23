import React, { useState } from 'react';
import Header from './components/Header';
import offersText from './offers.txt';
import './styles.css';

const products = [
  { id: 1, src: '/assets/product1.jpg', name_en: 'Kids Hoodie', name_ar: 'هودي أطفال', price: '350 EGP' },
  { id: 2, src: '/assets/product2.jpg', name_en: 'Winter Set', name_ar: 'طقم شتوي', price: '420 EGP' }
];

export default function App(){
  const [lang, setLang] = useState('ar'); // default Arabic
  const toggle = ()=> setLang(prev => prev === 'ar' ? 'en' : 'ar');
  const dirClass = lang === 'ar' ? 'rtl' : 'ltr';
  const offersLines = offersText.split('\\n');

  return (
    <div className={dirClass}>
      <Header lang={lang} toggle={toggle} logo={'/assets/logo.jpg'} />
      <div className="container">
        <main className="hero">
          <h1 style={{color:'var(--yellow)',fontSize:32,margin:8}}>{lang==='ar' ? 'مرحبًا بكم في متجر عمّار' : 'Welcome to Ammar Shop'}</h1>
          <p style={{color:'#ccc',maxWidth:800,margin:'6px auto'}}>{lang==='ar' ? 'ملابس عالية الجودة بتصميم مريح وأنيق' : 'Quality clothes designed with comfort and style'}</p>
        </main>

        <section>
          <h2 style={{color:'var(--red)'}}>{lang==='ar' ? 'المنتجات الجديدة' : 'New Arrivals'}</h2>
          <div className="products" style={{marginTop:12}}>
            {products.map(p=> (
              <div className="card" key={p.id}>
                <img src={p.src} alt={lang==='ar' ? p.name_ar : p.name_en} />
                <div style={{marginTop:8}}>
                  <div style={{color:'var(--yellow)',fontWeight:700}}>{lang==='ar' ? p.name_ar : p.name_en}</div>
                  <div style={{color:'#ccc',marginTop:6}}>{lang==='ar' ? 'السعر' : 'Price'}: {p.price}</div>
                  <div style={{display:'flex',gap:8,marginTop:10}}>
                    <button className="btn btn-order" disabled>{lang==='ar' ? 'اطلب الآن' : 'Order Now'}</button>
                    <button className="btn btn-whatsapp" disabled title="Add WhatsApp number later">{lang==='ar' ? 'واتساب' : 'WhatsApp'}</button>
                  </div>
                  <div style={{marginTop:8,color:'#999',fontSize:13}}>Cash on delivery</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="offers">
          <h3 style={{color:'var(--yellow)'}}>{lang==='ar' ? 'العروض' : 'Offers'}</h3>
          <div style={{marginTop:8,color:'#ddd'}}>
            {offersLines.map((l,i)=> <div key={i}>{lang==='ar' ? l : (i===1 ? l : l)}</div>)}
          </div>
        </section>

        <section className="contact">
          <h3 style={{color:'var(--red)'}}>{lang==='ar' ? 'اتصل بنا' : 'Contact'}</h3>
          <form onSubmit={e=>e.preventDefault()} style={{display:'flex',flexDirection:'column',gap:8,marginTop:8}}>
            <input placeholder={lang==='ar' ? 'الاسم' : 'Your name'} style={{padding:10,borderRadius:8,border:'1px solid #333',background:'#000',color:'#fff'}} />
            <input placeholder={lang==='ar' ? 'البريد الإلكتروني' : 'Your email'} style={{padding:10,borderRadius:8,border:'1px solid #333',background:'#000',color:'#fff'}} />
            <textarea placeholder={lang==='ar' ? 'الرسالة' : 'Message'} rows={4} style={{padding:10,borderRadius:8,border:'1px solid #333',background:'#000',color:'#fff'}} />
            <button style={{padding:12,borderRadius:8,background:'var(--yellow)',color:'#000',fontWeight:700}}>{lang==='ar' ? 'إرسال' : 'Send Message'}</button>
          </form>
          <div style={{marginTop:12,color:'#ccc'}}>
            <div>{lang==='ar' ? 'موقعنا' : 'Location'}: Tanta, Egypt</div>
            <div>Email: info@ammarshop.com</div>
          </div>
          <div style={{marginTop:12}}>
            <iframe title='map' src='https://www.google.com/maps?q=Tanta,+Egypt&output=embed' style={{width:'100%',height:220,border:0,borderRadius:8}}></iframe>
          </div>
        </section>
      </div>

      <footer style={{padding:18,textAlign:'center',color:'#777'}}>© 2025 Ammar Shop</footer>
    </div>
  );
}
