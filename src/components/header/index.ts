import { FunctionalComponent } from 'preact'
import { html } from 'htm/preact'

const style = {
    "header":"header",
    "active":"active"
}
const Header: FunctionalComponent = () => {
    return html `
        <header class=${style.header}>
            <h1>Preact App</h1>
            <nav>
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