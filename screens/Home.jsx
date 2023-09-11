import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Fontisto, Ionicons } from "@expo/vector-icons";
import { COLORS, SIZES } from "../constants";
import { ScrollView } from "react-native-gesture-handler";
import Welcome from "../components/home/Welcome";
import Carousel from "../components/home/Carousel";
import Headings from "../components/home/Headings";
import ProductsRow from "../components/products/ProductsRow";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Home = () => {
  const [userData, setUserData] = useState(null);
  const [userLogin, setUserLogin] = useState(false);

  useEffect(() => {
    checkExistingUser();
  }, []);

  const checkExistingUser = async () => {
    const id = await AsyncStorage.getItem("id");
    const useId = `user${JSON.parse(id)}`;

    try {
      const currentUser = await AsyncStorage.getItem(useId);

      if (currentUser !== null) {
        const parsedData = JSON.parse(currentUser);
        setUserData(parsedData);
        setUserLogin(true);
      }
    } catch (error) {
      console.log("Error retrieving the data");
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.appBarWraper}>
        <View style={styles.appBar}>
          <Ionicons name="location-outline" size={24} />
          <Text style={styles.location}>
            {userData ? userData.location : "Sedang Mencari Lokasi ..."}
          </Text>
          <View style={{ alignItems: "flex-end" }}>
            <View style={styles.cartCount}>
              <Text style={styles.cartNumber}>8</Text>
            </View>
            <TouchableOpacity>
              <Fontisto name="shopping-bag" size={24} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <ScrollView>
        <Welcome />
        <Carousel />
        <Headings />
        <ProductsRow />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  appBarWraper: {
    fontFamily: "bold",
    fontSize: 40,
    marginHorizontal: 12,
  },
  appBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  location: {
    fontFamily: "semibold",
    fontSize: SIZES.medium,
    color: COLORS.gray,
  },
  cartCount: {
    position: "absolute",
    bottom: 16,
    width: 16,
    height: 16,
    borderRadius: 8,
    alignItems: "center",
    backgroundColor: "green",
    justifyContent: "center",
    zIndex: 999,
  },
  cartNumber: {
    fontFamily: "reguler",
    fontWeight: "600",
    fontSize: 10,
    color: COLORS.lightWhite,
  },
});
