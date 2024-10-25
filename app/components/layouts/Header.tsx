import { HeaderStyles } from '@layoutsStyles';
import { Brand } from '@sharedComponents';

export default function Header({ children }: HeaderProps) {
    return (
        <header className={HeaderStyles.Header}>
            <Brand />
            {children}
        </header>
    );
}
