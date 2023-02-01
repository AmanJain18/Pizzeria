import css from '../styles/Services.module.css';
import Image from 'next/image';
import S1 from '../assets/s1.png';
import S2 from '../assets/s2.png';
import S3 from '../assets/s3.png';

export default function Services () {
    return (
        <>
            <div className={css.heading}>
                <span>WHAT WE SERVE</span>
                <span>Your favourite Food</span>
                <span>Delivery Partner</span>
            </div>

            {/* features */}
            <div className={css.services}>
                <div className={css.feature}>
                    <div className={css.imageWrapper}>
                        <Image src={S1} alt="" objectFit='cover' layout='intrinsic' />
                    </div>
                    <span>
                        Easy to Order
                    </span>
                    <span>
                        You Only need a few steps in food ordering.
                    </span>
                </div>
                <div className={css.feature}><div className={css.imageWrapper}>
                    <Image src={S2} alt="" objectFit='cover' layout='intrinsic' />
                </div>
                    <span>
                        Easy to Order
                    </span>
                    <span>
                       Delivery that is always on time even faster.
                    </span></div>
                <div className={css.feature}><div className={css.imageWrapper}>
                    <Image src={S3} alt="" objectFit='cover' layout='intrinsic' />
                </div>
                    <span>
                        Easy to Order
                    </span>
                    <span>
                        Not only fast for us, quality is also top priority.
                    </span></div>
            </div>
        </>
    )
}