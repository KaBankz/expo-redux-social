import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Post from './components/Post';

export default function App() {
  const data = Array.from({ length: 10 });

  return (
    <SafeAreaView>
      <View style={styles.body}>
        <Text style={styles.title}>Feed</Text>
        <FlatList
          data={data}
          renderItem={({ item }) => <Post />}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  body: {
    height: '100%',
    backgroundColor: '#333',
    padding: 10,
  },
  title: {
    color: '#fff',
    fontSize: 48,
    fontWeight: 'bold',
  },
});
