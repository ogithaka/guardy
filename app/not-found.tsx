import { Header, Main, Footer } from '@layoutsComponents';
import { NotFoundComponent } from '@others';
import { NavigationItem } from '@sharedComponents';

export default function NotFound() {
    return (
        <>
            <Header>
                <NavigationItem
                    url=''
                    name='Help?'
                />
            </Header>
            <Main>
                <NotFoundComponent />
            </Main>
            <Footer />
        </>
    );
}
