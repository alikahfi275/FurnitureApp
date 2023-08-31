import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { COLORS, SIZES } from "../../constants";
import ProductsCardView from "./ProductsCardView";
import useFetch from "../../hook/useFetch";

const ProductsRow = () => {
  const { data, isLoading, error } = useFetch();

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size={SIZES.xxLarge} color={COLORS.primary} />
      ) : error ? (
        <Text>Something went wrong</Text>
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => <ProductsCardView item={item} />}
          horizontal
          contentContainerStyle={{ columnGap: SIZES.medium }}
        />
      )}
    </View>
  );
};

export default ProductsRow;

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.medium,
    marginLeft: 12,
  },
});
