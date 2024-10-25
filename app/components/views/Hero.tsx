import { HeroStyles } from '@landingViewsStyles';
import { Button } from '@sharedComponents';
import Image from 'next/image';

export default function Hero() {
    return (
        <section
            id='hero'
            className={HeroStyles.Hero}
        >
            <div className={HeroStyles.HeroImagery}>
                <Image
                    src={'/images/hero.jpg'}
                    alt='Hero Image'
                    width={1000}
                    height={560}
                />
            </div>
            <div className={HeroStyles.HeroTextual}>
                <h1>Guardy</h1>
                <h2>Unleashing the Power of Next.js</h2>
                <p>
                    Experience a dynamic, scalable, and well-structured
                    exploration of Next.js, built to showcase its full potential
                    in real-world applications.
                </p>
                <Button
                    url=''
                    name='GitHub'
                    style={HeroStyles.HeroButton}
                />
            </div>
        </section>
    );
}
