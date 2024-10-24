import {
    Button,
    ConfirmEmailSection,
    Footer,
    Header,
    Main,
    NavigationItem,
} from '@components';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Guardy',
};

export default function ConfirmPassword() {
    return (
        <>
            <Header>
                <NavigationItem
                    url=''
                    name='Confirm'
                    active
                />
                <Button
                    name='Register'
                    url=''
                />
            </Header>
            <Main>
                <ConfirmEmailSection />
            </Main>
            <Footer />
        </>
    );
}
