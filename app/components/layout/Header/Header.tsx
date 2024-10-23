import { HeaderStyles, Logo, Navigation } from '@components';

export default function Header({ children }: HeaderProps) {
    return (
        <header className={HeaderStyles.Header}>
            <Logo />
            <Navigation>{children}</Navigation>
        </header>
    );
}
