import { NotFoundStyles } from '@othersStyles';

export default function NotFound() {
    return (
        <div className={NotFoundStyles.NotFound}>
            <h1>Page Not Found</h1>
            <h2>Error 404</h2>
            <p>
                The page you are looking for does not exist or has been moved.
            </p>
            <a href='/'>Landing</a>
        </div>
    );
}
