import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SliderBox } from "react-native-image-slider-box";
import { COLORS } from "../../constants";

const Carousel = () => {
  const slides = [
    "https://img.freepik.com/free-photo/mid-century-modern-living-room-interior-design-with-monstera-tree_53876-129803.jpg?w=1800&t=st=1693284253~exp=1693284853~hmac=21c143321df22df825e8556dcad35c127a5a96119354f4814af2b6934076c13e",
    "https://img.freepik.com/free-photo/gray-sofa-brown-living-room-with-copy-space_43614-954.jpg?w=1800&t=st=1693284302~exp=1693284902~hmac=c85ede2f065fa478f0b814d2639d1e414d442f35bee5b69505037803ad70f846",
    "https://img.freepik.com/free-photo/gray-sofa-brown-living-room-with-copy-space_43614-954.jpg?w=1800&t=st=1693284302~exp=1693284902~hmac=c85ede2f065fa478f0b814d2639d1e414d442f35bee5b69505037803ad70f846",
  ];
  return (
    <View style={styles.carouselContainer}>
      <SliderBox
        images={slides}
        dotColor={COLORS.primary}
        inactiveDotColor={COLORS.secondary}
        ImageComponentStyle={{
          borderRadius: 15,
          width: "92%",
          marginTop: 10,
        }}
        autoplay
        circleLoop
      />
    </View>
  );
};

export default Carousel;

const styles = StyleSheet.create({
  carouselContainer: {
    flex: 1,
    alignItems: "center",
  },
});
