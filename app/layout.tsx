import type { Metadata } from 'next';
import './styles/global/globals.css';

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
            <body>{children}</body>
        </html>
    );
}
