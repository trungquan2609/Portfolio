import { useEffect } from 'react';

function Home() {
    useEffect(() => {
        document.title = 'Portfolio';
    }, []);
    return <h1>Home page</h1>;
}

export default Home;
