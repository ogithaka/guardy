import { RecoverStyles } from '@recoverStyles';
import { Form, InputField } from '@sharedComponents';
import Image from 'next/image';

export default function Recover() {
    return (
        <section
            id='Recover'
            className={RecoverStyles.Recover}
        >
            <div className={RecoverStyles.RecoverImagery}>
                <Image
                    src={'/images/login.jpg'}
                    alt='Recover Image'
                    width={1000}
                    height={667}
                />
            </div>
            <div className={RecoverStyles.RecoverForm}>
                <Form>
                    <h1>Recover</h1>
                    <InputField
                        type='email'
                        id='email'
                        label='Email'
                        placeholder='e.g john@gmail.com'
                    />
                    <InputField
                        type='submit'
                        value='Recover'
                    />
                </Form>
            </div>
        </section>
    );
}
