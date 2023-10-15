import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../../assets/logo.svg';
import sent from '../../assets/sent.svg';
import { footerBeforeList, footerAfterList, footerSocial } from '@/data/CommonData';
import { Montserrat,DM_Sans } from 'next/font/google';
const montserrat = Montserrat({ subsets: ['latin']});
const dmSans = DM_Sans({ subsets: ['latin']});
const Footer = () => {
  return (
    <>
    <div className="footer">
      <div className='container'>
        <div className="row">
          <div className="col-lg-3">
            <div className='footer-short-info'>
              <Link href='#'>
                <Image src={Logo} loading='lazy' alt='logo'/>
              </Link>
              <div className='short-info-text'>
              <p className={montserrat.className}>There are many variations of passages of available, but the majority have suffered.</p>
            </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className='footer-list footer-before-list'>
             <h4 className={montserrat.className}>Services</h4>
             <div className="list-items">
                <ul>
                  {
                    footerBeforeList.map((item,i)=>(<li><Link href={item.link} key={i} className={dmSans.className}>{item.title}</Link></li>))
                  }
                </ul>
             </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className='footer-list footer-after-list'>
             <h4 className={montserrat.className}>Resources</h4>
             <div className="list-items">
                <ul>
                  {
                    footerAfterList.map((item,i)=>(<li><Link href={item.link} key={i} className={dmSans.className}>{item.title}</Link></li>))
                  }
                </ul>
             </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className='footer-newsletter'>
             <h4 className={montserrat.className}>Newsletter</h4>
             <div className="newsletter-body">
                <p className={montserrat.className}>Subscribe for our upcoming latest address and resources</p>
                <div className="newsletter-form">
                  <input type="email" placeholder='email' className={dmSans.className}/>
                  <button><Image src={sent} loading='lazy' alt='send-button'/></button>
                </div>
                <div className="footer-social">
                  
                  {
                    footerSocial.map((item,i)=>(
                      <div className="icon-bg">
                        <item.name key={i}/>
                      </div>
                    ))
                  }
                  
                </div>
             </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Footer;