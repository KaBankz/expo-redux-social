import { StyleSheet, Text, View } from 'react-native';

export default function Comment() {
  return (
    <View style={styles.container}>
      <Text style={styles.username}>User</Text>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
        reprehenderit!
      </Text>
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
