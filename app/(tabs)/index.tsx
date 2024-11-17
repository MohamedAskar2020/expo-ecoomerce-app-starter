import {
  ActivityIndicator,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { CategoryType, ProductType } from "@/types/type";
import { products } from "@/data/products";
import { categories } from "@/data/categories";
import { saleProducts } from "@/data/saleProducts";
import { Stack } from "expo-router";
import Header from "../components/Header";

import ProductList from "../components/ProductList";
import Categories from "../components/Categories";
import FlashSale from "../components/FlashSale";

type Props = {};

const HomeScreen = (props: Props) => {
  const [productList, setProductList] = useState<ProductType[]>(products);
  const [CategoryList, setCategoryList] = useState<CategoryType[]>(categories);
  const [saleProductList, setSaleProductList] =
    useState<ProductType[]>(saleProducts);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    getProducts();
    getCategories();
    getSaleProducts();
  }, []);

  const getProducts = async () => {
    try {
      // console.log(products);
      setProductList(products);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  const getCategories = async () => {
    try {
      // console.log(products);
      setCategoryList(categories);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  const getSaleProducts = async () => {
    try {
      // console.log(products);
      setSaleProductList(saleProducts);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  // useEffect(() => {
  //   const data = require("../../data/db.json");
  //   console.log(data);
  //   setProducts(data);
  //   setIsLoading(false);
  // }, []);

  // const getProducts = async () => {
  //   try {
  //     // const response = await fetch("http://localhost:8000/products");

  //     const response = await fetch(products);
  //     const data = await response.json();
  //     console.log(data);
  //     setProducts(data);
  //     setIsLoading(false);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  return (
    <>
      <Stack.Screen
        options={{
          headerShown: true,
          header: () => <Header />,
        }}
      />
      <ScrollView>
        <Categories Categories={CategoryList} />
        <FlashSale products={saleProductList} />
        <View style={styles.bannerImageContainer}>
          <Image
            source={require("@/assets/images/sale-banner.jpg")}
            style={styles.bannerImage}
          />
        </View>
        <ProductList products={productList} flatList={false} />
      </ScrollView>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  bannerImageContainer: {
    marginHorizontal: 20,
    marginBottom: 10,
  },
  bannerImage: {
    width: "100%",
    height: 150,
    borderRadius: 15,
  },
});
