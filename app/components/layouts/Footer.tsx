import { FooterStyles } from '@layoutsStyles';

export default function Footer() {
    return (
        <footer className={FooterStyles.Footer}>
            <p>© {new Date().getFullYear()} Guardy. All rights reserved.</p>
        </footer>
    );
}
