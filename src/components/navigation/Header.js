import React, { Component } from 'react'
import { Layout, Menu } from 'antd'
import styles from './styles/header.module.scss'
const HeaderComponent = Layout.Header

class Header extends Component {
	render() {
		return (
			<HeaderComponent className={styles.navbar}>
				<Menu
					theme="dark"
					mode="horizontal"
					defaultSelectedKeys={['1']}
					className={styles.menu}>
					<Menu.Item key="1">nav 1</Menu.Item>
					<Menu.Item key="2">nav 2</Menu.Item>
					<Menu.Item key="3">nav 3</Menu.Item>
				</Menu>
			</HeaderComponent>
		)
	}
}

export { Header }
