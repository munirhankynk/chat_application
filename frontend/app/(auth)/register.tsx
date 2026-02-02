import ScreenWrapper from "@/components/ScreenWrapper";
import Typo from "@/components/Typo";
import { colors, spacingX, spacingY } from "@/constants/theme";
import React from "react";
import { StyleSheet } from "react-native";

const Register = () => {
  return (
    <ScreenWrapper>
      <Typo color={colors.white}>Register Screen</Typo>
    </ScreenWrapper>
  );
}

export default Register;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",
    },
    header: {
        alignItems: "center",
        paddingHorizontal: spacingX._20,
        paddingTop: spacingY._15,
        paddingBottom: spacingY._25,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    content: {
        flex: 1,
        backgroundColor: colors.white,
        borderTopLeftRadius: radius._50,
        borderTopRightRadius: radius._50,
        paddingHorizontal: spacingX._20,
        paddingTop: spacingY._20,
        borderCurve: 'continuous',
    },
    form: {
        gap: spacingY._15,
        marginTop: spacingY._20,
    },
    footer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 5,
    },
});