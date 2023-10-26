import { StyleSheet, Text, View } from 'react-native';
import { Amplify } from 'aws-amplify';
import config from "./src/aws-exports";
import { withAuthenticator, useAuthenticator } from '@aws-amplify/ui-react-native';
import Nav from './Navbar';

Amplify.configure(config);

function App() {
  return (
    Nav()
  );
}

const styles = StyleSheet.create({

});
export default withAuthenticator(App);

