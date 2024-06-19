#Creating UI MOCkUP 

# Jobizz Login Screen

This is a simple login screen component for the Jobizz app. Users can enter their name and email to log in and access the app.

## Installation

1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Run `npm install` to install the necessary dependencies.

## Usage

1. Import the `LoginScreen` component into your app.
2. Use it within your navigation stack, passing the necessary props (e.g., `navigation`) as shown in the example code.

```javascript
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './path/to/LoginScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        {/* Add other screens here */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
```

## Props

- `navigation`: React Navigation navigation object.

## Styling

You can customize the styles in the `styles.js` file. Adjust colors, fonts, and layout as needed

## Screenshot
![image](https://github.com/addo-bless/-rn-assignment4-11212478/assets/170148514/69ee569b-add2-4299-8f1f-4fe7e2ecdd1c)

![image](https://github.com/addo-bless/-rn-assignment4-11212478/assets/170148514/80f5ec4e-26a3-477b-af7e-e43d6a710120)

Even though it doesn't look exactly the same.

