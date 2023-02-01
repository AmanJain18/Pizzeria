import css from '../styles/Hero.module.css';
import Image from 'next/image';
import Cherry from '../assets/Cherry.png';
import HeroImage from '../assets/HeroImage.png';
import Pizza1 from '../assets/p1.jpg';
import { UilPhone } from '@iconscout/react-unicons'

export default function Hero () {
    return (
        <div className={css.container}>
            {/* leftside */}
            <div className={css.leftSide}>
                <div className={css.cherryDiv}>
                    <span>More than Faster</span>
                    <Image src={Cherry} alt="" width={40} height={25} />
                </div>

                <div className={css.heroText}>
                    <span>Be The Fastest</span>
                    <span>In Delivering</span>
                    <span>Your <span style={{ color: "var(--themeRed)" }}>Pizza</span></span>
                </div>
                <span className={css.miniText}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque doloremque optio laborum sit animi possimus?
                </span>

                <button className={`btn ${css.btn}`}>
                    Get Started
                </button>
            </div>
            {/* rightside */}
            <div className={css.rightSide}>
                <div className={css.imageContainer}>
                    <Image src={HeroImage} alt="" layout="intrinsic" />
                </div>
                <div className={css.contactUS}>
                    <span>Contact Us</span>
                    <div>
                        <UilPhone color="white" />
                    </div>
                </div>

                <div className={css.pizza}>
                    <div>
                        <Image src={Pizza1} alt="" objectFit='cover' layout='intrinsic'/>
                    </div>
                    <div className={css.details}>
                        <span>Italian Pizza</span>
                        <span>
                            <span style={{ color: "var(--themeRed)" }}>₹ </span>300
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
};