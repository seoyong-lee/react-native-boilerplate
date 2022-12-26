import { useNavigation } from "@react-navigation/native";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/Ionicons";

import { COLOR } from "@/constants/colors";

const HomeMenu3Screen = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation<any>();

  const goBack = () => {
    navigation.navigate("Menu1");
  };
  return (
    <SafeAreaView style={styles.body}>
      <View style={{ ...styles.header, marginTop: insets.top }}>
        <TouchableOpacity onPress={goBack} style={styles.closeButton}>
          <Icon name="close-outline" size={36} color={COLOR.BLACK} />
        </TouchableOpacity>
      </View>
      <Text style={styles.text}>menu3</Text>
    </SafeAreaView>
  );
};

export default HomeMenu3Screen;

const styles = StyleSheet.create({
  body: { alignItems: "center" },
  header: {
    height: 50,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
  },
  closeButton: { width: "100%" },
  text: { fontSize: 20, textAlign: "center", marginTop: 12 },
});
