import { LogoStyles } from '@components';
import Image from 'next/image';

export default function Logo() {
    return (
        <div className={LogoStyles.Logo}>
            <Image
                src='/logo.svg'
                alt='Logo'
                width={32}
                height={32}
            />
            <p>Guardy</p>
        </div>
    );
}
