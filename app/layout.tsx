import type { Metadata } from 'next';
import './styles/global/globals.css';
import { albertSans } from '@fonts';

export const metadata: Metadata = {
    title: 'Guardy',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body className={albertSans.className}>{children}</body>
        </html>
    );
}
