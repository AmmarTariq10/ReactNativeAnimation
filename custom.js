import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { CubeNavigationHorizontal } from 'react-native-3dcube-navigation';
export default (Custom = () => {
	return (

        <View style={styles.container}>
			<CubeNavigationHorizontal>
				<View style={[styles.container, { backgroundColor: '#CBF941' }]}>
					<Text style={styles.text}>Horizontal Page 1</Text>
				</View>
				<View style={[styles.container, { backgroundColor: '#CBF941' }]}>
					<Text style={styles.text}>Horizontal Page 2</Text>
				</View>
				<View style={[styles.container, { backgroundColor: '#CBF941' }]}>
					<Text style={styles.text}>Horizontal Page 3</Text>
				</View>
				<View style={[styles.container, { backgroundColor: '#CBF941' }]}>
					<Text style={styles.text}>Horizontal Page 4</Text>
				</View>
				<View style={[styles.container, { backgroundColor: '#CBF941' }]}>
					<Text style={styles.text}>Horizontal Page 5</Text>
				</View>
			</CubeNavigationHorizontal>
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
