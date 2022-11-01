import imageUser1 from "../.././assets/user1.jpg";
import {
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";

export default function UserHeader(props) {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Image
        style={styles.imageUser}
        source={imageUser1}
        width={50}
        height={50}
      />
      <View style={{ paddingLeft: 10, flexDirection: "column" }}>
        <Text style={{ color: "white", fontSize: 18 }}>{props.name}</Text>
        <View
          style={{
            backgroundColor: "white",
            width: 20,
            height: 20,
            borderRadius: 10,
            marginTop: 5,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: props.value == "X" ? "red" : "blue",
              fontWeight: "bold",
              fontSize: 15,
            }}
          >
            {props.value}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  imageUser: {
    marginLeft: 15,
    borderRadius: "100%",
  },
});
