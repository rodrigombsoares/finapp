import React from 'react';
import { 
	AsyncStorage,
	StyleSheet, 
	Text,
	TouchableOpacity,
	View 
} from 'react-native';

export default class Swiper extends React.Component {
	constructor(props) {
		super(props)
		console.log(this.props)
	}

	render() {
		return(
			<View>
				<Text>
					{this.props.name}
				</Text>
				{this.props.children}
			</View>
		)
	}
}