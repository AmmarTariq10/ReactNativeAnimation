import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

import { CubeNavigationHorizontal } from 'react-native-3dcube-navigation';
import { CubeNavigationVertical } from 'react-native-3dcube-navigation';

import Custom from './custom';
import CustomVert from './CustomVert';
export default class App extends Component {
	render() {
		return (
			<View style={styles.container}>
				<CubeNavigationHorizontal>
					<View style={[styles.container, { backgroundColor: 'red' }]} />
					<View style={[styles.container, { backgroundColor: 'green' }]} />
					<View style={[styles.container, { backgroundColor: 'red' }]} />
					<View style={[styles.container, { backgroundColor: 'red' }]} />
				</CubeNavigationHorizontal>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
