import { FunctionalComponent } from "preact"
import { html } from 'htm/preact'
import { Link } from "preact-router/match"

const style = {
    "header":"header",
    "active":"active"
}
const Header: FunctionalComponent = () => {
    return html `
        <header class=${style.header}>
            <h1>Preact App</h1>
            <nav>
                <${Link} activeClassName=${style.active} href="/">
                    Home
                </${Link}>
            </nav>
        </header>
    `
}

export default Header;

/*
                <${Link} activeClassName=${style.active} href="/">
                    Home
                </${Link}>
                <${Link} activeClassName=${style.active} href="/profile">
                    Me
                </${Link}>
                <${Link} activeClassName=${style.active} href="/profile/john">
                    John
                </${Link}>
*/