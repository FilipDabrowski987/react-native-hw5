import axios from "axios";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { TUser } from "../(tabs)";

export default function DetailsScreen() {
  const { id } = useLocalSearchParams()
  const [user, setUser] = useState<TUser | null>(null)
  
useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(response => setUser(response.data))
      .catch(error => console.error(error))
  }, [])

  const router = useRouter()
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Użytkownik nr {id} </Text>
      {user && <View>
        <Text>{user.name}</Text>
      </View>
      }
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
