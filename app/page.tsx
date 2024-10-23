import { Footer, Header, Main, NavigationItem } from '@components';

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
