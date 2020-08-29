import React from 'react'
import ReactDOM from 'react-dom'
import { Sidebar, Friend } from './components/common'
import Home from './containers/Home'
import './index.css'

ReactDOM.render(
	<React.StrictMode>
		<Sidebar />
		<Home />
		<Friend />
	</React.StrictMode>,
	document.getElementById('root')
)
