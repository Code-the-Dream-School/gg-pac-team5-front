import { useParams } from 'react-router-dom';

export default function Pages() {
    const { pageName } = useParams();
    return (
        <>
            <div>
                <h1>{pageName}</h1>
            </div>
        </>
    )
}