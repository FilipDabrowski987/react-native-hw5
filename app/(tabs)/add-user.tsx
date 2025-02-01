import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import axios from "axios";

export default function AddUserScreen() {
  const [id, setId] = useState("")
  const [error, setError] = useState("")
  const [users, setUsers] = useState([])
  const router = useRouter()

//   useEffect(() => {
//     axios.get('https://jsonplaceholder.typicode.com/users')
//       .then(response => setUsers(response.data))
//       .catch(error => console.error(error))
//   }, [])

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
          <Text style={styles.title}>Dodaj użytkownika</Text>
          <View>
              <Text>Imię: <TextInput
              style={styles.input}
              onChangeText={setId}
                value={id}
                placeholder="Podaj imię"
                keyboardType="default"
              /></Text>
          </View>
          <View>
              <Text>Nazwisko: <TextInput
              style={styles.input}
              onChangeText={setId}
                value={id}
                placeholder="Podaj nazwisko"
                keyboardType="default"
              /></Text>
          </View>
          <View>
              <Text>Email: <TextInput
              style={styles.input}
              onChangeText={setId}
                value={id}
                placeholder="Podaj email"
                keyboardType="email-address"
              /></Text>
          </View>
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <Button
        title="Zapisz"
        onPress={handleSetId} />
        <Button
        title="Wyczyść"
        onPress={handleClearId}
      />
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
