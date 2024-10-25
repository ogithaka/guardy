import Link from 'next/link';

export default function NavigationItem({ url, name }: NavigationItemProps) {
    return <Link href={url}>{name}</Link>;
}
