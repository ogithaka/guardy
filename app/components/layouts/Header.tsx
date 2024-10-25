import { HeaderStyles } from '@layoutsStyles';
import { Brand, Navigation } from '@sharedComponents';

export default function Header({ children }: HeaderProps) {
    return (
        <header className={HeaderStyles.Header}>
            <Brand />
            <Navigation>{children}</Navigation>
        </header>
    );
}
