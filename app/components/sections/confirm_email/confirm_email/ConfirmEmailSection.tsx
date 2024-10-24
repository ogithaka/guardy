import { Form, InputField, Logo, ConfirmEmailSectionStyles } from '@components';

export default function ConfirmEmailSection() {
    return (
        <section
            id='confirm_password'
            className={ConfirmEmailSectionStyles.ConfirmEmailSection}
        >
            <div className={ConfirmEmailSectionStyles.ConfirmEmailTextual}>
                <h1>Verify Email</h1>
                <p>
                    A token has been sent to your email. Enter the token to
                    verify your account.
                </p>
            </div>
            <Form>
                <InputField
                    label='Email'
                    type='email'
                    id='email'
                    value='john@gmail.com'
                    disabled
                />
                <InputField
                    label='Token'
                    type='text'
                    placeholder='e.g 898hJkHfTYtuo'
                    id='token'
                />
                <InputField
                    type='submit'
                    value='Confirm'
                />
            </Form>
        </section>
    );
}
