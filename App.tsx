import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Provider, useSelector } from 'react-redux';
import Post from './components/Post';
import { RootState, store } from './state/store';

export default function Wrapper() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

function App() {
  const posts = useSelector((state: RootState) => state.posts);

  return (
    <SafeAreaView>
      <View style={styles.body}>
        <Text style={styles.title}>Feed</Text>
        <FlatList
          data={posts}
          renderItem={({ item }) => <Post id={item.id} />}
          keyExtractor={(item) => item.id.toString()}
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
