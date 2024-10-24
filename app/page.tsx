import {
    Button,
    Footer,
    Header,
    Hero,
    Main,
    NavigationItem,
} from '@components';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Guardy',
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
                <Button
                    name='Account'
                    url=''
                />
            </Header>
            <Main>
                <Hero />
            </Main>
            <Footer />
        </>
    );
}
