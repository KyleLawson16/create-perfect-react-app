import React, { Component } from 'react'
import { Layout } from 'antd'

import styles from './styles/footer.module.scss'

const FooterComponent = Layout.Footer

class Footer extends Component {
	render() {
		return (
			<FooterComponent className={styles.footer}>
				create-perfect-react-app | Created by Kyle Lawson
			</FooterComponent>
		)
	}
}

export { Footer }
