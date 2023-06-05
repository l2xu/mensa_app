import React, { useState } from "react";
// Allergene: enthält Gluten: Weizen (a1), Roggen (a2), Gerste (a3), Hafer (a4), Dinkel (a5), Kamut (a6), enthält Krebstiere (b), enthält Ei (c), enthält Fisch (d), enthält Erdnüsse (e), enthält Soja (f), enthält Milch/Milchzucker (g), enthält Schalenfrüchte/Nüsse: Mandeln (h1), Haselnüsse (h2), Walnüsse (h3), Cashewnüsse (h4), Pecannüsse (h5), Paranüsse (h6), enthält Sellerie (i), enthält Senf (j), enthält Sesam (k), enthält Sulfit/Schwefeldioxid (l), enthält Lupine (m), Weichtiere (n)
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TouchableNativeFeedback,
  TouchableHighlight,
  TouchableWithoutFeedback,
} from "react-native";

const Card = ({ meal }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <TouchableWithoutFeedback onPress={() => setShowDetails(!showDetails)}>
      <View style={styles.box}>
        {/* check if meal && and then render all */}

        {meal && (
          <View>
            <View style={styles.diaryContainer}>
              {meal.diary.map((diary) => (
                <View key={diary}>
                  <Text style={styles.diary}>{diary}</Text>
                </View>
              ))}
            </View>
            <View style={styles.two_col}>
              <Text style={styles.left}>{meal.name}</Text>
              <View style={styles.right}>
                <Text>{meal.price}</Text>
              </View>
            </View>
            <View style={styles.two_col}>
              <View style={styles.left}>
                {meal.allergene &&
                  meal.allergene.map((allergen) => (
                    <Text style={styles.extra_text} key={allergen}>
                      ({allergen})
                    </Text>
                  ))}
                {meal.zusatzstoffe &&
                  meal.zusatzstoffe.map((zst) => (
                    <Text style={styles.extra_text} key={zst}>
                      ({zst})
                    </Text>
                  ))}
              </View>
              <View style={styles.right}>
                <TouchableOpacity onPress={() => setShowDetails(!showDetails)}>
                  <Text style={styles.toggle}>{showDetails ? "▲" : "▼"}</Text>
                </TouchableOpacity>
              </View>
            </View>
            {showDetails && (
              <View>
                {meal.allergene &&
                  meal.allergene.map((allergen) => {
                    switch (allergen) {
                      case "a1":
                        return (
                          <Text style={styles.extra_text} key={allergen}>
                            ({allergen}) enthält Gluten: Weizen
                          </Text>
                        );
                      case "a2":
                        return (
                          <Text style={styles.extra_text} key={allergen}>
                            ({allergen}) enthält Gluten: Roggen
                          </Text>
                        );
                      case "a3":
                        return (
                          <Text style={styles.extra_text} key={allergen}>
                            ({allergen}) enthält Gluten: Gerste
                          </Text>
                        );
                      case "a4":
                        return (
                          <Text style={styles.extra_text} key={allergen}>
                            ({allergen}) enthält Gluten: Hafer
                          </Text>
                        );
                      case "a5":
                        return (
                          <Text style={styles.extra_text} key={allergen}>
                            ({allergen}) enthält Gluten: Dinkel
                          </Text>
                        );
                      case "a6":
                        return (
                          <Text style={styles.extra_text} key={allergen}>
                            ({allergen}) enthält Gluten: Kamut
                          </Text>
                        );
                      case "b":
                        return (
                          <Text style={styles.extra_text} key={allergen}>
                            ({allergen}) enthält Krebstiere
                          </Text>
                        );
                      case "c":
                        return (
                          <Text style={styles.extra_text} key={allergen}>
                            ({allergen}) enthält Ei
                          </Text>
                        );
                      case "d":
                        return (
                          <Text style={styles.extra_text} key={allergen}>
                            ({allergen}) enthält Fisch
                          </Text>
                        );
                      case "e":
                        return (
                          <Text style={styles.extra_text} key={allergen}>
                            ({allergen}) enthält Erdnüsse
                          </Text>
                        );
                      case "f":
                        return (
                          <Text style={styles.extra_text} key={allergen}>
                            ({allergen}) enthält Soja
                          </Text>
                        );
                      case "g":
                        return (
                          <Text style={styles.extra_text} key={allergen}>
                            ({allergen}) enthält Milch/Milchzucker
                          </Text>
                        );
                      case "h1":
                        return (
                          <Text style={styles.extra_text} key={allergen}>
                            ({allergen}) enthält Schalenfrüchte/Nüsse: Mandeln
                          </Text>
                        );

                      case "h2":
                        return (
                          <Text style={styles.extra_text} key={allergen}>
                            ({allergen}) enthält Schalenfrüchte/Nüsse:
                            Haselnüsse
                          </Text>
                        );
                      case "h3":
                        return (
                          <Text style={styles.extra_text} key={allergen}>
                            ({allergen}) enthält Schalenfrüchte/Nüsse: Walnüsse
                          </Text>
                        );
                      case "h4":
                        return (
                          <Text style={styles.extra_text} key={allergen}>
                            ({allergen}) enthält Schalenfrüchte/Nüsse:
                            Cashewnüsse
                          </Text>
                        );
                      case "h5":
                        return (
                          <Text style={styles.extra_text} key={allergen}>
                            ({allergen}) enthält Schalenfrüchte/Nüsse:
                            Pecannüsse
                          </Text>
                        );
                      case "h6":
                        return (
                          <Text style={styles.extra_text} key={allergen}>
                            ({allergen}) enthält Schalenfrüchte/Nüsse: Paranüsse
                          </Text>
                        );
                      case "i":
                        return (
                          <Text style={styles.extra_text} key={allergen}>
                            ({allergen}) enthält Sellerie
                          </Text>
                        );
                      case "j":
                        return (
                          <Text style={styles.extra_text} key={allergen}>
                            ({allergen}) enthält Senf
                          </Text>
                        );
                      case "k":
                        return (
                          <Text style={styles.extra_text} key={allergen}>
                            ({allergen}) enthält Sesam
                          </Text>
                        );
                      case "l":
                        return (
                          <Text style={styles.extra_text} key={allergen}>
                            ({allergen}) enthält Sulfit/Schwefeldioxid
                          </Text>
                        );
                      case "m":
                        return (
                          <Text style={styles.extra_text} key={allergen}>
                            ({allergen}) enthält Lupine
                          </Text>
                        );
                      case "n":
                        return (
                          <Text style={styles.extra_text} key={allergen}>
                            ({allergen}) Weichtiere
                          </Text>
                        );
                    }
                  })}

                {meal.zusatzstoffe &&
                  meal.zusatzstoffe.map((zst) => {
                    switch (zst) {
                      case "1":
                        return (
                          <Text style={styles.extra_text} key={zst}>
                            ({zst}) mit Farbstoff
                          </Text>
                        );
                      case "2":
                        return (
                          <Text style={styles.extra_text} key={zst}>
                            ({zst}) mit Konservierungsstoff
                          </Text>
                        );
                      case "3":
                        return (
                          <Text style={styles.extra_text} key={zst}>
                            ({zst}) mit Antioxidationsmittel
                          </Text>
                        );
                      case "4":
                        return (
                          <Text style={styles.extra_text} key={zst}>
                            ({zst}) mit Geschmacksverstärker
                          </Text>
                        );
                      case "5":
                        return (
                          <Text style={styles.extra_text} key={zst}>
                            ({zst}) geschwefelt
                          </Text>
                        );
                      case "6":
                        return (
                          <Text style={styles.extra_text} key={zst}>
                            ({zst}) geschwärzt
                          </Text>
                        );
                      case "7":
                        return (
                          <Text style={styles.extra_text} key={zst}>
                            ({zst}) gewachst
                          </Text>
                        );
                      case "8":
                        return (
                          <Text style={styles.extra_text} key={zst}>
                            ({zst}) mit Phosphat
                          </Text>
                        );
                      case "9":
                        return (
                          <Text style={styles.extra_text} key={zst}>
                            ({zst}) mit Süßungsmittel
                          </Text>
                        );
                      case "10":
                        return (
                          <Text key={zst}>
                            ({zst}) enthält eine Phenylalaninquelle
                          </Text>
                        );
                    }
                  })}
              </View>
            )}
          </View>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Card;

const styles = StyleSheet.create({
  box: {
    backgroundColor: "#F5F5F5",
    padding: 10,
    borderRadius: 10,
    //create a shodow
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,

    marginBottom: 10,
  },

  two_col: {
    flexDirection: "row",
    marginTop: 10,
  },

  left: {
    width: "70%",
    display: "flex",
    flexDirection: "row",
    gap: 5,
  },

  right: {
    width: "30%",
    alignItems: "flex-end",
  },

  diaryContainer: {
    flexDirection: "row",
    gap: 15,
    display: "flex",
  },

  diary: {
    backgroundColor: "white",
    padding: 5,
    borderRadius: 10,
    alignSelf: "flex-start",
    fontSize: 12,
  },
  extra: {
    marginTop: 10,
    display: "flex",
    flexDirection: "row",
    gap: 5,
  },
  extra_text: {
    fontSize: 12,
  },
  toggle: {
    fontSize: 20,
    marginTop: -5,
  },
});
