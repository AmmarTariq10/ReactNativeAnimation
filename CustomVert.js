import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { CubeNavigationHorizontal } from 'react-native-3dcube-navigation';
import { CubeNavigationVertical } from 'react-native-3dcube-navigation';

export default (CustomVert = () => {
	return (

        <View style={styles.container}>
			<CubeNavigationVertical>
				<View style={[styles.container, { backgroundColor: '#CBF941' }]}>
					<Text style={styles.text}>Vertical Page 1</Text>
				</View>
				<View style={[styles.container, { backgroundColor: '#CBF941' }]}>
					<Text style={styles.text}>Vertical Page 2</Text>
				</View>
				<View style={[styles.container, { backgroundColor: '#CBF941' }]}>
					<Text style={styles.text}>Vertical Page 3</Text>
				</View>
				<View style={[styles.container, { backgroundColor: '#CBF941' }]}>
					<Text style={styles.text}>Vertical Page 4</Text>
				</View>
				<View style={[styles.container, { backgroundColor: '#CBF941' }]}>
					<Text style={styles.text}>Vertical Page 5</Text>
				</View>
			</CubeNavigationVertical>
        </View>

	);
});

const styles = StyleSheet.create({
	container: {
		flex: 1	
	},
	text: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	}
});
