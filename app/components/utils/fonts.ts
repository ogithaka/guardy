import localFont from 'next/font/local';

export const AlbertSans = localFont({
    src: [
        {
            path: '../../../public/fonts/AlbertSans.ttf',
            style: 'normal',
        },
        {
            path: '../../../public/fonts/AlbertSansItalic.ttf',
            style: 'italic',
        },
    ],
});
