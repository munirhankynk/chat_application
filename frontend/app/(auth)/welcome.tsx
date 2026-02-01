import Button from '@/components/Button';
import ScreenWrapper from '@/components/ScreenWrapper';
import Typo from '@/components/Typo';
import { colors, spacingX, spacingY } from '@/constants/theme';
import { verticalScale } from '@/utils/styling';
import { StyleSheet } from 'react-native';
import Animated, { FadeIn } from 'react-native-reanimated';
import { View } from 'react-native-reanimated/lib/typescript/Animated';

const Welcome = () => {
    return (
        <ScreenWrapper showPattern={true}>
            <View style={styles.container}>
                <View style={{alignItems: 'center'}}>
                    <Typo color={colors.white} size={43} fontWeight={"900"}>
                        LeBron
                    </Typo>

                </View>
                <Animated.Image
                    entering={FadeIn.duration(700).springify()}
                    source={require("../../assets/images/welcomeImage.png")}
                    style={styles.welcomeImage}
                    resizeMode={"contain"}
                />

                <View>
                    <Typo color={colors.white} size={33} fontWeight={"800"}>
                        Stay Connected
                    </Typo>
                    <Typo color={colors.white} size={33} fontWeight={"800"}>
                        with your friends
                    </Typo>
                    <Typo color={colors.white} size={33} fontWeight={"800"}>
                        and family.
                    </Typo>
                </View>
                <Button/>
            </View>
        </ScreenWrapper>
    );
};

export default Welcome;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-around",
        paddingHorizontal: spacingX._20,
        marginVertical: spacingY._10,
    },
    background: {
        flex: 1,
        backgroundColor: colors.neutral900,
    },
    welcomeImage: {
        height: verticalScale(300),
        aspectRatio: 1,
        alignSelf: "center",
    },
});
    