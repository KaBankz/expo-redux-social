import { useEffect } from 'react';
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Provider, useDispatch, useSelector } from 'react-redux';
import Post from './components/Post';
import { fetchPosts } from './state/posts/postSlice';
import { AppDispatch, RootState, store } from './state/store';

export default function Wrapper() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

function App() {
  const dispatch = useDispatch<AppDispatch>();
  const { data, error, loading } = useSelector(
    (state: RootState) => state.posts
  );

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <SafeAreaView>
      <View style={styles.body}>
        <Text style={styles.title}>Feed</Text>
        {loading && <ActivityIndicator size='large' />}
        {error && <Text style={{ color: 'red' }}>{error}</Text>}
        {!loading && !error && (
          <FlatList
            onRefresh={() => dispatch(fetchPosts())}
            refreshing={loading}
            data={data}
            renderItem={({ item }) => <Post id={item.id} />}
            keyExtractor={(item) => item.id.toString()}
          />
        )}
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
