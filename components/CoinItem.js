import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

const CoinItem = ({ coin }) => {
  return (
    <View style={styles.containerItem}>
      <View style={styles.coinNames}>
        <Image style={styles.image} source={{ uri: coin.image }} />
        <Text style={styles.text}>{coin.name}</Text>
        <Text>{coin.symbol}</Text>
      </View>
      <Text style={styles.price}>{coin.current_price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  containerItem: {
    backgroundColor: "#121212",
    paddingTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  coinNames: {
    flexDirection: 'row'
  },
  image: {
    width: 30,
    height: 30,
  },
  text: {
    color: "#ffffff",
  },
  price: {
    color: "#ffffff",
  },
});

export default CoinItem;
