import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <>
    <StatusBar style="auto" />
    <View style={styles.header}>
      <View></View>
      <Text style={styles.title}>Produtos</Text>
    </View>
      <View style={styles.container}>
        <Text>Hello World!😁😉</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: '#473E66',
    alignItems: 'center',
    borderBottomStartRadius: 60,
    borderBottomEndRadius: 60,
    paddingBottom: 29
  },
  title: {
    fontSize: 32,
    fontWeight:'900',
    color: '#fff',
    marginTop: 70
  }
});
