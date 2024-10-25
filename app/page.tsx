import { Footer, Header, Main } from '@layoutsComponents';
import { Button, NavigationItem } from '@sharedComponents';

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
                    url=''
                    name='Account'
                />
            </Header>
            <Main />
            <Footer />
        </>
    );
}
