import { Footer, Header, Main } from '@layoutsComponents';
import { LoginComponent } from '@login';
import { Button, NavigationItem } from '@sharedComponents';

export default function Login() {
    return (
        <>
            <Header>
                <NavigationItem
                    url=''
                    name='Login'
                    active
                />
                <NavigationItem
                    url=''
                    name='Recover'
                />
                <Button
                    url=''
                    name='Register'
                />
            </Header>
            <Main>
                <LoginComponent />
            </Main>
            <Footer />
        </>
    );
}
