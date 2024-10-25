import { Logo } from '@sharedComponents';
import { BrandStyles } from '@sharedStyles';

export default function Brand() {
    return (
        <div className={BrandStyles.Brand}>
            <Logo
                width={35}
                height={35}
            />
            <p>Guardy</p>
        </div>
    );
}
