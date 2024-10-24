import {
    Button,
    Footer,
    Header,
    Hero,
    LoginSection,
    Main,
    NavigationItem,
} from '@components';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Guardy',
};

export default function Login() {
    return (
        <>
            <Header>
                <NavigationItem
                    url=''
                    name='Landing'
                />
                <NavigationItem
                    url=''
                    name='Docs'
                />
                <NavigationItem
                    url=''
                    name='Login'
                    active
                />
                <NavigationItem
                    url=''
                    name='Register'
                />
                <Button
                    name='Reset'
                    url=''
                />
            </Header>
            <Main>
                <LoginSection />
            </Main>
            <Footer />
        </>
    );
}
