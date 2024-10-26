import { RegisterStyles } from '@registerStyles';
import { Form, InputField } from '@sharedComponents';
import Image from 'next/image';

export default function Register() {
    return (
        <section
            id='register'
            className={RegisterStyles.Register}
        >
            <div className={RegisterStyles.RegisterImagery}>
                <Image
                    src={'/images/login.jpg'}
                    alt='Register Image'
                    width={1000}
                    height={667}
                />
            </div>
            <div className={RegisterStyles.RegisterForm}>
                <Form>
                    <h1>Register</h1>
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
                        type='password'
                        id='password'
                        label='Confirm Password'
                        placeholder='e.g d3A97Dm&!Et'
                    />
                    <InputField
                        type='submit'
                        value='Register'
                    />
                </Form>
            </div>
        </section>
    );
}
