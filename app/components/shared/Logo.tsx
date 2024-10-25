import Image from 'next/image';

export default function Logo({ width, height }: LogoProps) {
    return (
        <Image
            src={'/logo.svg'}
            alt='Logo'
            width={width}
            height={height}
        />
    );
}
