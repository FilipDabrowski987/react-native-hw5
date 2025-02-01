import { useLocalSearchParams, useRouter } from "expo-router";
import { Button, StyleSheet, Text, View } from "react-native";

export default function DetailsScreen() {
    const { id } = useLocalSearchParams()
  const router = useRouter()
  return (
    <View style={styles.container}>
          <Text style={styles.title}>Ekran Szczegółów nr {id} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgray',
  },
  title: {
    fontSize: 20,
    fontWeight: 700,
    marginBottom: 20,
  }
});
