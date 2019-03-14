import React from 'react';
import { 
	AsyncStorage,
	StyleSheet, 
	Text,
	TouchableOpacity,
	View 
} from 'react-native';

import Swiper from './Swiper'

export default class Intro extends React.Component {

	state = {
		passedIntro: true
	}

	getIntro = () => AsyncStorage.getItem('passedIntro').then((value) => console.log(value))

	setIntro = () => {
		try {
			introDone = this.state.passedIntro
			console.log(introDone)
			AsyncStorage.setItem('passedIntro', JSON.stringify(!introDone));
			this.setState({passedIntro: !introDone},
				() => {
					this.getIntro()
				}
			)
		} catch (err){
			console.log(err)
		}
	}

	render() {
		return (
			<View>
				<Text>
					{'\n\n\n\n\n'}
					Hello from intro
				</Text>
				<TouchableOpacity
					onPress={this.setIntro}
				>
					<Text>
						Set {this.state.passedIntro ? 'not done':'done'}
					</Text>
				</TouchableOpacity>
				<Swiper screen={'hello'} name={'rodrigo'}>
					<View>
						<Text>
							TESTE AQUI
						</Text>
					</View>
				</Swiper>
			</View>
		);
	}
}


const styles = StyleSheet.create({
  wrapper: {
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  }
})