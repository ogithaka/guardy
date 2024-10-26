import { FormStyles } from '@sharedStyles';

export default function Form({ children }: FormProps) {
    return <form className={FormStyles.Form}>{children}</form>;
}
