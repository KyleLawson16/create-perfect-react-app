import React, { Component } from 'react'
import { Layout } from 'antd'

//components
import { Header, Footer } from './components/navigation'

//containers
import { Home } from './containers/pages'

//styles
import './App.scss'

const { Content } = Layout

class App extends Component {
	render() {
		return (
			<Layout className="app-container">
				<Header />
				<Content style={{ padding: '0 50px' }}>
					<Home />
				</Content>
				<Footer />
			</Layout>
		)
	}
}

export default App
