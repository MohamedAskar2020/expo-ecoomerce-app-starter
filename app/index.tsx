import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { Colors } from "@/constants/Colors";

import Animated, { FadeInRight } from "react-native-reanimated";
import SocialLoginButton from "./components/SocialLoginButton";

type Props = {};

const WelcomeScreen = (props: Props) => {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <ImageBackground
        source={require("@/assets/images/ecommerce-splash.jpg")}
        style={{ flex: 1 }}
        resizeMode="cover"
      >
        <View style={styles.container}>
          <LinearGradient
            colors={[
              "transparent",
              "rgba(255, 255, 255, 0.9)",
              "rgba(255, 255, 255, 1)",
            ]}
            style={styles.background}
          >
            <View style={styles.wrapper}>
              <Animated.Text
                style={styles.title}
                entering={FadeInRight.delay(300).duration(300).springify()}
              >
                Huda Shop
              </Animated.Text>
              <Animated.Text
                style={styles.subTitle}
                entering={FadeInRight.delay(500).duration(300).springify()}
              >
                One Stop Solution For All Your Needs.
              </Animated.Text>
              <SocialLoginButton emailHref="/signup" />
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={styles.lognText}>
                  Already have an account?{" "}
                  <Link href={"/signin"} asChild>
                    <TouchableOpacity>
                      <Text style={styles.loginTxtSpan}>Sign In</Text>
                    </TouchableOpacity>
                  </Link>
                </Text>
              </View>
            </View>
          </LinearGradient>
        </View>
      </ImageBackground>
    </>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  background: {
    flex: 1,
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
    justifyContent: "flex-end",
  },
  wrapper: {
    paddingBottom: 50,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 5,
    color: Colors.primary,
    letterSpacing: 2.4,
  },
  subTitle: {
    fontSize: 16,
    color: Colors.gray,
    marginBottom: 20,
    letterSpacing: 1.2,
    lineHeight: 30,
  },
  lognText: {
    fontSize: 16,
    color: Colors.black,
    marginTop: 30,
    lineHeight: 24,
  },
  loginTxtSpan: {
    color: Colors.primary,
    fontWeight: "600",
    marginTop: 17,
    paddingBottom: 15,
  },
});
