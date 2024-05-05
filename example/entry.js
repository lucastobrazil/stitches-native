import 'expo/build/Expo.fx';
import {  Platform } from 'react-native';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import registerRootComponent from 'expo/build/launch/registerRootComponent';
import { createElement } from 'react';


// TODO: should we have separate `index.web.js`?
// Also is should we use `registerRootComponent`?
// https://docs.expo.dev/workflow/web/

// if (Platform.OS === 'web') {
//   const rootTag = createRoot(
//     document.getElementById('root') ?? document.getElementById('main')
//   );

//   const RootComponent = withExpoRoot(App);

//   rootTag.render(<RootComponent />);
// }

// @see https://github.com/expo/expo/issues/18485
if (Platform.OS === 'web') {
  console.log('WEB');
  
  const rootTag = createRoot(document.getElementById('root') ?? document.getElementById('main'));
  rootTag.render(createElement(App));
} else {
  registerRootComponent(App);
}
