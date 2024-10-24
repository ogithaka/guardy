import {
    Button,
    Footer,
    Header,
    LoginSection,
    Main,
    NavigationItem,
    RegisterSection,
} from '@components';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Guardy',
};

export default function Register() {
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
                />
                <NavigationItem
                    url=''
                    name='Register'
                    active
                />
                <Button
                    name='Reset'
                    url=''
                />
            </Header>
            <Main>
                <RegisterSection />
            </Main>
            <Footer />
        </>
    );
}
