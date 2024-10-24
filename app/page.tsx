import { Footer, Header, Main, NavigationItem } from '@components';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Landing',
};

export default function Landing() {
    return (
        <>
            <Header>
                <NavigationItem
                    url=''
                    name='Landing'
                    active
                />
                <NavigationItem
                    url=''
                    name='Docs'
                />
            </Header>
            <Main />
            <Footer />
        </>
    );
}
