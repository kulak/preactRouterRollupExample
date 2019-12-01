import { FunctionalComponent } from "preact"
import { html } from 'htm/preact'

const style = {
    home: "home"
}

interface Props {}
const Home: FunctionalComponent<Props> = props => {
    return html `
        <div class=${style.home}>
            <h1>Home</h1>
            <p>This is the Home component.</p>
        </div>
    `
}

export default Home
