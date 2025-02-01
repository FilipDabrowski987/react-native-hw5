import { useRouter } from "expo-router";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function HomeScreen() {
  const [id, setId] = useState("")
  const [error, setError] = useState("")
  const router = useRouter()

  const handleSetId = () => {

  const idNumber = Number(id);

    if (!/^\d+$/.test(id)) {
      setError("Proszę wpisać liczbę całkowitą")
    } else if (idNumber < 1 || idNumber > 1000) {
    setError("ID musi być liczbą z zakresu od 1 do 1000.");
    } else {
      setError("")
      router.push(`/details/${id}`)
      setId("")
    }
  };

  const handleClearId = () => {
    setId("")
    setError("")
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Wprowadź ID</Text>
      <Button
        title={'Idź do about'}
        onPress={() => router.push('/about')} />
      <TextInput
              style={styles.input}
              onChangeText={setId}
                value={id}
                placeholder="Wpisz ID"
                keyboardType="numeric"
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <Button
        title="Wyczyść"
        onPress={handleClearId}
      />
      <Button
        title="Przejdź"
        onPress={handleSetId} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgray',
    padding: 20,
    gap: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 700,
  },
  input: {
    height: 40,
    width: '80%',
    borderWidth: 1,
    borderColor: "red",
    borderRadius: 20,
    padding: 10,
    backgroundColor: "white",
  },
  error: {
    color: "red",
    marginBottom: 10,
  }
});
