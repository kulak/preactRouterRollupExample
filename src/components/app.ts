import { render, FunctionalComponent, VNode } from 'preact'
import { html } from 'htm/preact'
import { useLocation } from "wouter-preact";

import Header from './header'
import Home from '../routes/home'


const App: FunctionalComponent = () => {
    let currentUrl: string

	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	// const handleRoute = (e: RouterOnChangeArgs) => {
    //     currentUrl = e.url
	// }

    const [location, setLocation] = useLocation();
    let page: VNode = html`<h2>Default Location</h2>`
    switch (location) {
        case "/":
            page = html`<h2>Root Location</h2>`
            break;
        default:
            break;
    }

    return html `
        <div id="app">
            <${Header} />
            ${page}
        </div>
    `
}
export default App

const root = document.getElementById('root')
if (root) {
    render(html `<${App} />`, root)
} else {
    console.error('Failed to find element with root id.')
}
