import { LoginStyles } from '@loginStyles';
import { Form, InputField } from '@sharedComponents';
import Image from 'next/image';

export default function Login() {
    return (
        <section
            id='login'
            className={LoginStyles.Login}
        >
            <div className={LoginStyles.LoginImagery}>
                <Image
                    src={'/images/login.jpg'}
                    alt='Login Image'
                    width={1000}
                    height={667}
                />
            </div>
            <div className={LoginStyles.LoginForm}>
                <Form>
                    <h1>Welcome back!</h1>
                    <InputField
                        type='email'
                        id='email'
                        label='Email'
                        placeholder='e.g john@gmail.com'
                    />
                    <InputField
                        type='password'
                        id='password'
                        label='Password'
                        placeholder='e.g d3A97Dm&!Et'
                    />
                    <InputField
                        type='submit'
                        value='Login'
                    />
                </Form>
            </div>
        </section>
    );
}
