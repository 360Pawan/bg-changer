/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

function App(): JSX.Element {
  const [randomColor, setRandomColor] = useState('rgb(32, 32, 32)');

  const randomNumberGenerator = () => Math.floor(Math.random() * 256);

  const generateColor = () => {
    const newColor = `rgb(${randomNumberGenerator()},${randomNumberGenerator()},${randomNumberGenerator()})`;

    setRandomColor(newColor);
  };

  const resetColor = () => {
    setRandomColor('rgb(32,32,32)');
  };

  return (
    <>
      <StatusBar backgroundColor={randomColor} />
      <View style={[styles.container, {backgroundColor: randomColor}]}>
        <TouchableOpacity onPress={generateColor}>
          <Text style={styles.text}>Tap me</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={resetColor}>
          <Text style={styles.resetButton}>Reset</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },

  text: {
    color: '#fff',
    paddingVertical: 15,
    paddingHorizontal: 40,
    backgroundColor: '#000',
    borderRadius: 10,
  },

  resetButton: {
    color: '#000',
    paddingVertical: 15,
    paddingHorizontal: 40,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
});
