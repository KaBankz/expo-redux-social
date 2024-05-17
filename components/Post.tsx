import { StyleSheet, Text, View } from 'react-native';

export default function Post() {
  return (
    <View style={styles.container}>
      <Text style={styles.postTitle}>Post Title</Text>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
        reprehenderit!
      </Text>
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
