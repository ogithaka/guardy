import { Form, InputField, LoginSectionStyles } from '@components';

export default function LoginSection() {
    return (
        <section
            id='login'
            className={LoginSectionStyles.LoginSection}
        >
            <div className={LoginSectionStyles.LoginTextual}>
                <h1>Welcome back!</h1>
                <p>Login to your account to continue.</p>
            </div>
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
