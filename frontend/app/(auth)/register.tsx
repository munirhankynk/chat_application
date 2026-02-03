import BackButton from "@/components/BackButton";
import ScreenWrapper from "@/components/ScreenWrapper";
import Typo from "@/components/Typo";
import { colors, radius, spacingX, spacingY } from "@/constants/theme";
import React from "react";
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, View } from "react-native";


const Register = () => {
  return (
    <KeyboardAvoidingView 
    style={{flex: 1}} 
    behavior={Platform.OS=='ios' ? 'padding' : 'height'}
    >
    <ScreenWrapper showPattern={true}>
      <View style={styles.container}>
        <View style={styles.header}>
            <BackButton iconSize={28} />
            <Typo size={17} color={colors.white}>
                Need help?
            </Typo>
        </View>

        <View style={styles.content}>
            <ScrollView 
            contentContainerStyle={styles.form}
            showsVerticalScrollIndicator={false}
            >
                <View style={{gap: spacingY._10, marginBottom: spacingY._15}}>
                    <Typo size={28} fontWeight='600'>
                        Getting Started
                    </Typo>
                    <Typo color={colors.neutral600}>
                        Create an account to continue
                    </Typo>
                </View>

                
            </ScrollView>
        </View>
      </View>
    </ScreenWrapper>
    </KeyboardAvoidingView>
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