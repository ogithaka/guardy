import { Form, InputField, LoginSectionStyles } from '@components';

export default function LoginSection() {
    return (
        <section
            id='login'
            className={LoginSectionStyles.LoginSection}
        >
            <h1>Welcome back! Log in.</h1>
            <Form>
                <InputField
                    label='Email'
                    type='email'
                    placeholder='e.g guardy@gmail.com'
                />
                <InputField
                    label='Password'
                    type='password'
                    placeholder='e.g dR87435'
                />
                <InputField
                    type='submit'
                    value='Login'
                />
            </Form>
        </section>
    );
}
