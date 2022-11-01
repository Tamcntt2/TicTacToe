import {
  StyleSheet,
  View,
} from "react-native";
import colors from "../contains/colors";
import BoardTwoPlayers from "../components/BoardTwoPlayers";
import UserHeader from "../components/UserHeader";

export default function GameScreenTwoPlayers() {
  return (
    <View style={styles.container}>
      <View style={styles.itemUserTop}>
        <UserHeader name="User 1" value="X" />
      </View>
      <View style={styles.boardCenter}>
        <BoardTwoPlayers />
      </View>
      <View style={styles.itemUserBottom}>
        <UserHeader name="User 2" value="O" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  itemUserTop: {
    backgroundColor: colors.textButtonHome,
    flex: 1,
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "flex-end",
    flexDirection: "row",
    paddingBottom: 15,
  },
  itemUserBottom: {
    backgroundColor: colors.textButtonHome,
    flex: 1,
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexDirection: "row",
    paddingTop: 15,
  },
  boardCenter: {
    flex: 6,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
