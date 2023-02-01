import css from '../styles/Footer.module.css'; 
import { UilFacebook, UilInstagram, UilTwitter } from '@iconscout/react-unicons'  
import Image from 'next/image';
import Logo from '../assets/Logo.png'; 

export default function Footer () {
    return (
        <div className={css.container}>
            <span>All Right Reserved</span>
            <div className={css.social}>
                <UilFacebook size={35}/>
                <UilInstagram size={35} />
                <UilTwitter size={35} />
            </div>
            <div className={css.logo}>
                <Image src={Logo} alt="" width={50} height={50} />
                <span>Pizzeria</span>
            </div>
            
        </div>
    )
};