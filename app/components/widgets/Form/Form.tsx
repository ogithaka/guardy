import { FormStyles, Logo } from '@components';

export default function Form({ children }: FormProps) {
    return <form className={FormStyles.Form}>{children}</form>;
}
