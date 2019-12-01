import { render, FunctionalComponent } from 'preact'
import { html } from 'htm/preact'
import { Route, Router, RouterOnChangeArgs } from 'preact-router'

import Header from './header'
import Home from '../routes/home'

const App: FunctionalComponent = () => {
    let currentUrl: string

	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	const handleRoute = (e: RouterOnChangeArgs) => {
        currentUrl = e.url
	}

    return html `
        <div id="app">
            <${Header} />
            <${Router} onChange=${handleRoute}>
                <${Route} path="/" component=${Home} />
            </${Router}>
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
