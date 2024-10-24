import { InputFieldStyles } from '@components';
import { AlbertSans } from '@fonts';

export default function InputField({
    id,
    label,
    type,
    placeholder,
    value,
    disabled,
}: InputFieldProps) {
    return (
        <div className={InputFieldStyles.InputField}>
            <label htmlFor={id}>{label}</label>
            <input
                type={type}
                id={id}
                placeholder={placeholder}
                value={value}
                className={AlbertSans.className}
                disabled={disabled}
            />
        </div>
    );
}
