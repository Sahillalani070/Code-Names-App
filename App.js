import { StyleSheet, Text, View } from 'react-native';
import { Amplify } from '@aws-amplify/core';
import config from "./src/aws-exports";
import { withAuthenticator } from "@aws-amplify/ui-react-native"
import Nav from './Helpers/Navbar';

Amplify.configure(config);

function App() {
  return (
    Nav()
  );
}

const styles = StyleSheet.create({

});
export default withAuthenticator(App);

