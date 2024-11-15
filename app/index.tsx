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
import { Ionicons } from "@expo/vector-icons";
import Google from "@/assets/images/google-logo.svg";
import Animated, { FadeInDown, FadeInRight } from "react-native-reanimated";

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
              <View style={styles.socialLoginWrapper}>
                <Animated.View entering={FadeInDown.delay(300).duration(500)}>
                  <Link href={"/signup"} asChild>
                    <TouchableOpacity style={styles.button}>
                      <Ionicons
                        name="mail-outline"
                        size={22}
                        color={Colors.black}
                      />
                      <Text style={styles.buttonText}>Continue with Email</Text>
                    </TouchableOpacity>
                  </Link>
                </Animated.View>
                <Animated.View entering={FadeInDown.delay(700).duration(500)}>
                  {/* <Link href={"/signup"} asChild> */}
                  <TouchableOpacity style={styles.button}>
                    <Google width={20} height={20} />
                    <Text style={styles.buttonText}>Continue with Google</Text>
                  </TouchableOpacity>
                  {/* </Link> */}
                </Animated.View>
                <Animated.View entering={FadeInDown.delay(1100).duration(500)}>
                  {/* <Link href={"/signup"} asChild> */}
                  <TouchableOpacity style={styles.button}>
                    <Ionicons
                      name="logo-apple"
                      size={22}
                      color={Colors.black}
                    />
                    <Text style={styles.buttonText}>Continue with Apple</Text>
                  </TouchableOpacity>
                  {/* </Link> */}
                </Animated.View>
              </View>
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
  socialLoginWrapper: {
    alignSelf: "stretch",
    // flexDirection: "row",
    // justifyContent: "center",
    // alignItems: "center",
    // marginBottom: 20,
  },
  button: {
    flexDirection: "row",
    padding: 10,
    borderColor: Colors.gray,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
    marginBottom: 15,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "600",
    color: Colors.black,
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
