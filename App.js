import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import GameScreenTwoPlayers from './src/screens/GameScreenTwoPlayers';

export default function App() {
  return (
    <GameScreenTwoPlayers/>
  );
}

const styles = StyleSheet.create({
  
});
