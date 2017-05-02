// Import React
import React from 'react';

// Import Spectacle Core tags
import {
	BlockQuote,
	Cite,
	Deck,
	Heading,
	ListItem,
	List,
	Quote,
	Slide,
	Text,
	Image,
	Table,
	TableBody,
	TableRow,
	TableItem,
	Code,
	CodePane
} from 'spectacle';

// Import image preloader util
import preloader from 'spectacle/lib/utils/preloader';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');
require('spectacle/lib/themes/default/index.css');

const images = {
	react_native: require('../assets/react-native-logo.png'),
	android_ios: require('../assets/android-ios.jpg'),
	js: require('../assets/js.png'),
	dev_user: require('../assets/dev-user.png'),
	say_what: require('../assets/say-what.png'),
	yeah_awesome: require('../assets/yeah-awesome.jpg'),
	not_bad: require('../assets/not-bad.png'),
	why: require('../assets/why.jpg')
};

preloader(images);

const theme = createTheme(
	{
		primary: 'white',
		secondary: '#1F2022',
		tertiary: '#03A9FC',
		quartenary: '#CECECE'
	},
	{
		primary: 'Montserrat',
		secondary: 'Helvetica'
	}
);

export default class Presentation extends React.Component {
	render() {
		return (
			<Deck
				transition={['zoom', 'slide']}
				transitionDuration={500}
				theme={theme}
			>
				<Slide transition={['zoom']} bgColor="primary">
					<Image
						width={65}
						height={60}
						src={images.react_native}
						bgColor={'rgba(0,0,0,0.8)'}
						padding={5}
					/>
					<Heading size={1} fit caps lineHeight={1} textColor="secondary">
						React Native
					</Heading>
					<Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
						building cross platform native apps with (almost) no native code
					</Text>
					<Text
						margin="100px 0 0"
						textAlign="left"
						textSize={25}
						textColor="secondary"
					>
						Francisco Sales
					</Text>
					<Text
						margin="10px 0 0"
						textAlign="left"
						textSize={20}
						textColor="quartenary"
					>
						https://github.com/franciscofsales
					</Text>
				</Slide>
				<Slide transition={['fade']} bgColor="tertiary">
					<Heading size={5} fit textColor="primary">Why React Native?</Heading>
				</Slide>
				<Slide transition={['zoom']} bgColor="primary" textColor="secondary">
					<Heading size={5} textColor="tertiary" caps>The big 3</Heading>
					<Heading size={10} textColor="secondary" caps>
						Effort, Feature disparity, Cost
					</Heading>
					<List>
						<ListItem>Web Apps (javascript)</ListItem>
						<ListItem>Android (java)</ListItem>
						<ListItem>iOS (objective c, swift)</ListItem>
					</List>
				</Slide>
				<Slide transition={['slide']} bgColor="primary" textColor="secondary">
					<Heading size={5} textColor="tertiary" caps>React Native</Heading>
					<Table>
						<TableBody>
							<TableRow>
								<TableItem>
									<Image
										width={400}
										height={281}
										src={images.android_ios}
										padding={5}
									/>
								</TableItem>
								<TableItem>
									<Image width={400} height={281} src={images.js} padding={5} />
								</TableItem>
							</TableRow>
							<TableRow>
								<TableItem>
									<Text textSize={18} textColor="secondary" caps>
										Native UI platform
									</Text>
								</TableItem>
								<TableItem>
									<Text textSize={18} textColor="secondary" caps>
										JavaSript Core VM
									</Text>
								</TableItem>
							</TableRow>
						</TableBody>
					</Table>
					<Text margin="30px 0 0" textSize={23} textColor="secondary" caps fit>
						Share codebase between Android, iOS, and
						to some extent with the Web
					</Text>
				</Slide>
				<Slide transition={['fade']} bgColor="primary" textColor="secondary">
					<Heading size={6} fit textColor="tertiary" caps>
						Why is React Native better?
					</Heading>
					<Image margin="20px 0 0" fill src={images.dev_user} padding={5} />
				</Slide>
				<Slide transition={['slide']} bgColor="primary" textColor="secondary">
					<Heading size={6} fit textColor="tertiary" caps>
						Live Reload on Mobile?
					</Heading>
					<Image margin="20px 0 0" fill src={images.say_what} padding={5} />
				</Slide>
				<Slide transition={['fade']} bgColor="primary" textColor="secondary">
					<Heading fill>
						<video
							autoPlay
							loop
							src={require('file-loader!../assets/live_reload.mp4')}
							style={{ maxWidth: '90%', maxHeight: '90%', width: '90%' }}
						/>
					</Heading>
				</Slide>
				<Slide transition={['fade']} bgColor="primary" textColor="secondary">
					<Heading size={4} textColor="tertiary">Code Push</Heading>
					<Heading size={15} textColor="quartenary">
						https://microsoft.github.io/code-push/
					</Heading>
					<Text margin="20px 0 0" size={18}>
						OTA, hot fixes, experimentation, CD
					</Text>
				</Slide>
				<Slide transition={['slide']} bgColor="primary" textColor="secondary">
					<Heading size={6} fit textColor="tertiary" caps />
					<Image margin="20px 0 0" fill src={images.not_bad} padding={5} />
				</Slide>
				<Slide transition={['fade']} bgColor="tertiary">
					<Heading size={5} fit textColor="primary">
						Why NOT React Native?
					</Heading>
				</Slide>
				<Slide transition={['slide']} bgColor="primary" textColor="secondary">
					<Heading size={4} textColor="tertiary">Type Safety</Heading>
					<Text margin="20px 0 0" fontSize={18}>JS is not typed!</Text>
					<Text margin="20px 0 0" fontSize={14}>
						There will be no compiler errors
					</Text>
				</Slide>
				<Slide transition={['slide']} bgColor="primary" textColor="secondary">
					<Heading size={4} textColor="tertiary">
						What about Performance?
					</Heading>
					<Text margin="20px 0 0" fontSize={18}>Not web-based</Text>
					<Text margin="20px 0 0" fontSize={18}>JS code is not native</Text>
				</Slide>
				<Slide transition={['slide']} bgColor="primary" textColor="secondary">
					<Heading size={4} textColor="tertiary">Confusing?</Heading>
					<Image margin="20px 0 0" fill src={images.why} padding={5} />
				</Slide>
				<Slide transition={['slide']} bgColor="primary" textColor="secondary">
					<Heading size={4} textColor="tertiary">FAQ?</Heading>
					<Text margin="20px 0 0" fontSize={18}>
						Does JS compile to native? NO
					</Text>
					<Text margin="20px 0 0" fontSize={18}>
						Does JS run in a web view? NO
					</Text>
					<Text margin="20px 0 0" fontSize={18}>
						To use latest native API, do I have to wait for the RN team? NO
					</Text>
				</Slide>
				<Slide transition={['fade']} bgColor="tertiary">
					<Heading size={2} textColor="primary">
						React
					</Heading>
					<Text margin="20px 0 0" textColor="primary" fontSize={18}>
						UI = f(state)
					</Text>
				</Slide>
				<Slide transition={['slide']} bgColor="tertiary">
					<Heading size={5} textColor="primary" > React Hello World</Heading>
					<CodePane margin="20px 0 0" source={require('raw-loader!./react-hello-world.example')}/>
				</Slide>
				<Slide transition={['slide']} bgColor="tertiary">
					<Heading size={5} textColor="primary" > React Native Hello World</Heading>
					<CodePane margin="20px 0 0" source={require('raw-loader!./react-native-hello-world.example')}/>
				</Slide>

				<Slide transition={['slide']} bgColor="tertiary">
					<Heading size={5} textColor="primary" > Questions?</Heading>
				</Slide>
			</Deck>
		);
	}
}
