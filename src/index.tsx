import * as React from 'react'
import * as ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom'

import Router from './Router'

ReactDOM.render(
	<BrowserRouter>
		<Router />
	</BrowserRouter>,
	document.getElementById('app')
)
