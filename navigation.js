import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileImage from './src/pages/ProfileImage';
import PersonalDetails from './src/pages/PersonalDetails';
import WeekTimePicker from './src/pages/WeekTimePicker';


const Stack = createNativeStackNavigator();

const Navigation = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ header: () => null }}>
            <Stack.Screen name='DateAndTimePicker' component={WeekTimePicker} />
                <Stack.Screen name='PersonalDetails' component={PersonalDetails} />
                <Stack.Screen name='ProfileImg' component={ProfileImage} />
            </Stack.Navigator>
        </NavigationContainer>

    )

}

export default Navigation;