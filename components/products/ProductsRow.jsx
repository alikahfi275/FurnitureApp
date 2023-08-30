import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SIZES } from "../../constants";
import ProductsCardView from "./ProductsCardView";

const ProductsRow = () => {
  const products = [1, 2, 3, 4];
  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductsCardView item={item} />}
        horizontal
        contentContainerStyle={{ columnGap: SIZES.medium }}
      />
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
