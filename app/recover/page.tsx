import { Footer, Header, Main } from '@layoutsComponents';
import { RecoverComponent } from '@recover';
import { RegisterComponent } from '@register';
import { Button, NavigationItem } from '@sharedComponents';

export default function Login() {
    return (
        <>
            <Header>
                <NavigationItem
                    url=''
                    name='Login'
                />
                <NavigationItem
                    url=''
                    name='Recover'
                    active
                />
                <Button
                    url=''
                    name='Register'
                />
            </Header>
            <Main>
                <RecoverComponent />
            </Main>
            <Footer />
        </>
    );
}
