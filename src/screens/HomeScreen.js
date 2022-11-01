import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  Button,
} from "react-native";
import imageEdit from "../.././assets/icon-edit.png";
import colors from "../contains/colors";

export default function HomeScreen() {
  return (
    // <SafeAreaView>
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.textTitle}>TicTacToe</Text>
        <View style={{ flexDirection: "row", marginTop: 20 }}>
          <Text style={styles.textNameUser}>Nhtaam1612</Text>
          <Image
            style={{
              with: 5,
              height: 10,
              marginLeft: 10,
              backgroundColor: "#fff",
            }}
            source={imageEdit}
          />
        </View>
      </View>

      <View style={styles.bottom}>
        <View style={styles.itemButton}>
          <Button color={colors.textButtonHome} title="Chơi Online"></Button>
        </View>
        <View style={styles.itemButton}>
          <Button color={colors.textButtonHome} title="Chơi với máy"></Button>
        </View>
        <View style={styles.itemButton}>
          <Button color={colors.textButtonHome} title="2 Người chơi"></Button>
        </View>
        <View style={styles.itemButton}>
          <Button color={colors.textButtonHome} title="Luật chơi"></Button>
        </View>
      </View>
    </View>
    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  top: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    // paddingTop: 50,
  },
  bottom: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  itemButton: {
    backgroundColor: colors.bgButtonHome,
    // flex: 1,
    borderWidth: 1,
    marginBottom: 20,
    // borderRadius: 18,
    width: 250,
    borderColor: colors.textButtonHome,
  },
  textNameUser: {
    fontSize: 15,
  },
  textTitle: {
    fontSize: 45,
    paddingTop: 150,
  },
});
