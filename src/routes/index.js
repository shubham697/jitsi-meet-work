import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
	createStackNavigator,
} from '@react-navigation/stack';
import { connect } from 'react-redux';
import RouteNames from './names';
// call
import CallScreen from '../modules/call/CallScreen';
import CallHist from '../modules/call/CallHist';

const GuestStack = createStackNavigator();
const MemberStack = createStackNavigator();

function GuestRoute() {
	return <NavigationContainer />
}

function MemberRoute() {
	return (
		<NavigationContainer>
			<MemberStack.Navigator
				initialRouteName={RouteNames.CallHist}
			>
				<MemberStack.Screen name={RouteNames.CallHist} component={CallHist} />
				<MemberStack.Screen name={RouteNames.CallScreen} component={CallScreen} />
			</MemberStack.Navigator>
		</NavigationContainer>
	);
}

const RootStack = ({ user, isLoggedIn }) => {
	// if (!isLoggedIn) {
	// 	return <GuestRoute />;
	// }
	return <MemberRoute />;
}

const mapStateToProps = ({ app }) => {
	return {
		user: app.user,
		isLoggedIn: app.isLoggedIn,
	};
};

export default connect(mapStateToProps, {})(RootStack);
