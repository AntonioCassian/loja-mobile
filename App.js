import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <>
    <StatusBar style="light" />
    <View style={styles.header}>
      <View></View>
      <Text style={styles.title}>Produtos</Text>
    </View>

      <View style={styles.container}>
    <View style={styles.card}>
      <View style={styles.icone}></View>
      <View style={styles.imag}></View>
      <Text style={styles.name}>Nike Air Max 200</Text>
      <Text style={styles.valor}>R$ 26,00</Text>
    </View>
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
  },
  card: {
    //height: '50%',
    backgroundColor: '#FFF3F3',
    //width: '40%',
    paddingVertical: 27,
    paddingHorizontal: 27,
    borderRadius: 10
  },
  imag:{
    backgroundColor: 'blue',
    height: 120,
  },
  name: {
    fontSize: 16,
    fontWeight: '900',
    marginVertical: 14
  },
  valor: {
    fontWeight: 12,
    fontWeight: 'bold'
  }
});
