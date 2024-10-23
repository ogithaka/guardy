import './globals.css';
import localFont from 'next/font/local';

const AlbertSans = localFont({
    src: [
        {
            path: '../public/fonts/AlbertSans.ttf',
            style: 'normal',
        },
        {
            path: '../public/fonts/AlbertSansItalic.ttf',
            style: 'italic',
        },
    ],
});

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
