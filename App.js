import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View, Image } from "react-native";
import { useState, useEffect } from "react";
import Card from "./components/Card";

export default function App() {
  const [mensaData, setMensaData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await fetch(
        "https://us-central1-mensaapi-111d5.cloudfunctions.net/api",
        {
          headers: {
            mensatoken: "mensatoken",
          },
        }
      );

      const data = await response.json();

      setMensaData(data);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <View>
            <Image source={require("./assets/logo.png")} style={styles.img} />
            <Text  style={styles.titel}>Unofficial Mensa App</Text>
          </View>
        </View>
        <View style={styles.content}>
          {loading && <Text style={styles.date}>Loading...</Text>}

          {mensaData &&
            mensaData.map((day) => {
              return (
                <View key={day.date}>
                  <Text style={styles.date}>{day.date}</Text>
                  {day.meals.map((meal) => {
                    return <Card key={meal.name} meal={meal} />;
                  })}
                </View>
              );
            })}
        </View>

        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1,
    padding: 20,
  },
  header: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",

  },

  img: {
    width: 300,
    height: 50,
  },

  titel: {
 
    textAlign: "center",
  },
  content: {
    marginTop: 30,
  },

  date: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 10,
    marginTop: 30,
    marginLeft: 10,
  },
});
