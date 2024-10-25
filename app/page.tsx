import { Footer, Header, Main } from '@layoutsComponents';
import { NavigationItem } from '@sharedComponents';

export default function Landing() {
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
            </Header>
            <Main />
            <Footer />
        </>
    );
}
