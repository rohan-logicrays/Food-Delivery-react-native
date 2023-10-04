import React, {useEffect} from 'react';
import SplashScreen from './screens/SplashScreen';

//navigation
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CategoriesScreen from './screens/CategoriesScreen';
import SingleCategoryScreen from './screens/SingleCategoryScreen';

import {PaperProvider} from 'react-native-paper';
import CartScreen from './screens/CartScreen';
import {Provider} from 'react-redux';
import store from './redux/store';

import FavouriteScreen from './screens/FavouriteScreen';
import persistStore from 'redux-persist/es/persistStore';
import {PersistGate} from 'redux-persist/integration/react';

const Stack = createNativeStackNavigator();

let persistor = persistStore(store);

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <PaperProvider>
          <NavigationContainer>
            <Stack.Navigator initialRouteName="Splash">
              <Stack.Screen
                name="Splash"
                component={SplashScreen}
                options={{
                  title: 'Welcome',
                }}
              />
              <Stack.Screen name="Categories" component={CategoriesScreen} />
              <Stack.Screen
                name="SingleCategory"
                component={SingleCategoryScreen}
                options={{headerShown: false}}
              />
              <Stack.Screen name="Cart" component={CartScreen} />
              <Stack.Screen name="Favourite" component={FavouriteScreen} />
            </Stack.Navigator>
          </NavigationContainer>
        </PaperProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
