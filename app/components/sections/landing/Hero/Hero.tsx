import { HeroStyles } from '@components';
import Image from 'next/image';

export default function Hero() {
    return (
        <section
            id='hero'
            className={HeroStyles.Hero}
        >
            <div className={HeroStyles.HeroImagery}>
                <Image
                    src={'/images/landing/hero.jpg'}
                    alt='Hero Image'
                    width={1500}
                    height={1000}
                />
            </div>
            <div className={HeroStyles.HeroTextuals}>
                <h1>Guardy</h1>
                <h2>Unleashing the Power of Next.js</h2>
                <p>
                    Experience a dynamic, scalable, and well-structured
                    exploration of Next.js, built to showcase its full potential
                    in real-world applications.
                </p>
            </div>
        </section>
    );
}
