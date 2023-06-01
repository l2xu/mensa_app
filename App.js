import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View, Image } from "react-native";
import { useState, useEffect } from "react";
import Card from "./components/Card";

export default function App() {
  const [mensaData, setMensaData] = useState();

  fetchData();

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
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text>WR </Text>
          <View>
            <Image
              source={require("./assets/hs_harz_logo.png")}
              style={styles.img}
            />
            <Text>Unofficial Mensa App</Text>
          </View>

          <Text>INFO</Text>
        </View>
        <View style={styles.content}>
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
            })}{" "}
          : <Text>Loading...</Text>
          <Card />
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
    justifyContent: "space-between",
  },

  img: {
    width: "100%",
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
