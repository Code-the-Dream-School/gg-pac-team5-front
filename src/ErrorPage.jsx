import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page">
            <h1>Error</h1>
            <p>Something unexpected has occurred</p>
            <p>
                <i>{error.message || error.statusText}</i>
            </p>
        </div>
    );
}
