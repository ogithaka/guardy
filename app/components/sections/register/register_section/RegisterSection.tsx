import { Form, InputField, Logo, RegisterSectionStyles } from '@components';

export default function RegisterSection() {
    return (
        <section
            id='register'
            className={RegisterSectionStyles.RegisterSection}
        >
            <div className={RegisterSectionStyles.RegisterTextual}>
                <h1>Hi, There! 👋</h1>
                <p>
                    Welcome to <strong>Guardy</strong>! To continue, create an
                    account by submitting credentials to continue.
                </p>
            </div>
            <Form>
                <InputField
                    label='Email'
                    type='email'
                    placeholder='e.g guardy@gmail.com'
                    id='email'
                />
                <InputField
                    label='Password'
                    type='password'
                    placeholder='e.g dR87435'
                    id='password'
                />
                <InputField
                    type='submit'
                    value='Register'
                />
            </Form>
        </section>
    );
}
