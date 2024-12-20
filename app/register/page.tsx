import { Footer, Header, Main } from '@layoutsComponents';
import { RegisterComponent } from '@register';
import { Button, NavigationItem } from '@sharedComponents';

export default function Register() {
    return (
        <>
            <Header>
                <NavigationItem
                    url=''
                    name='Register'
                    active
                />
                <NavigationItem
                    url=''
                    name='Recover'
                />
                <Button
                    url=''
                    name='Login'
                />
            </Header>
            <Main>
                <RegisterComponent />
            </Main>
            <Footer />
        </>
    );
}
