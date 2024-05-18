import { StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../state/store';

export default function Comment(props: { id: number }) {
  const comment = useSelector((state: RootState) =>
    state.comments.data.find((c) => c.id === props.id)
  );

  return (
    <View style={styles.container}>
      <Text style={styles.username}>{comment.email}</Text>
      <Text>{comment.body}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    borderLeftColor: '#333',
    borderLeftWidth: 5,
    marginVertical: 4,
  },
  username: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
