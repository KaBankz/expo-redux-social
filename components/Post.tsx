import { StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../state/store';

export default function Post(props: { id: number }) {
  const post = useSelector((state: RootState) =>
    state.posts.data.find((c) => c.id === props.id)
  );

  return (
    <View style={styles.container}>
      <Text style={styles.postTitle}>{post.title}</Text>
      <Text>{post.body}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
  },
  postTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
