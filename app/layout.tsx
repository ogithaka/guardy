import './globals.css';
import { AlbertSans } from '@fonts';

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body className={AlbertSans.className}>{children}</body>
        </html>
    );
}
