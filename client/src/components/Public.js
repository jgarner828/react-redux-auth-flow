import { Link } from 'react-router-dom';

const Public = () => {

    const content = (
        <section>
            <header>
                <h1>This is the Public Component Header</h1>
            </header>
            <main>
                <p>Main body</p>

            </main>
            <footer>
                <p>footer</p>
                <Link to="/login">Login</Link><br/>
                <Link to="/create">Create Account</Link>
            </footer>
        </section>
    )

    return content;
}

export default Public;