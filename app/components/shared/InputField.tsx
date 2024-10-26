import { albertSans } from '@fonts';
import { InputFieldStyles } from '@sharedStyles';

export default function InputField({
    id,
    label,
    type,
    value,
    placeholder,
}: InputFieldProps) {
    return (
        <div className={InputFieldStyles.InputField}>
            <label htmlFor={id}>{label}</label>
            <input
                className={albertSans.className}
                type={type}
                id={id}
                value={value}
                placeholder={placeholder}
            />
        </div>
    );
}
