import { MainStyles } from '@components';

export default function Main({ children }: MainProps) {
    return <main className={MainStyles.Main}>{children}</main>;
}
