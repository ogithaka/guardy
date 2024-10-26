import { Footer, Header, Main } from '@layoutsComponents';
import { RegisterComponent } from '@register';
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
                <RegisterComponent />
            </Main>
            <Footer />
        </>
    );
}
