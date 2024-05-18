import { useEffect } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchComments } from '../state/comments/commentSlice';
import { AppDispatch, RootState } from '../state/store';
import Comment from './Comment';

export default function Post(props: { id: number }) {
  const post = useSelector((state: RootState) =>
    state.posts.data.find((c) => c.id === props.id)
  );

  const dispatch = useDispatch<AppDispatch>();
  const { data, error, loading } = useSelector(
    (state: RootState) => state.comments
  );

  const comments = data.filter((c) => c.postId === props.id);

  useEffect(() => {
    dispatch(fetchComments());
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <Text style={styles.postTitle}>{post.title}</Text>
      <Text>{post.body}</Text>
      <Text style={styles.commentTitle}>Comments:</Text>
      {loading && <ActivityIndicator size='small' />}
      {error && <Text style={{ color: 'red' }}>{error}</Text>}
      {!loading &&
        !error &&
        comments.map((comment) => <Comment id={comment.id} />)}
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
  commentTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
});
