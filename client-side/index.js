import React from 'react'
import { render } from 'react-dom'
import Application from './src/Application'
import 'bootstrap/dist/css/bootstrap.min.css'
import "./src/css/style.css"
import "./src/css/fonts.css"

const ContentEntry = document.getElementById('root')

render(
	<Application/>,
	ContentEntry 
)

// Hot module to re-render component without page reload

if (module) {
	module.hot.accept()
}