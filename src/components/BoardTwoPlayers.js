import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Alert,
} from "react-native";
import colors from "../contains/colors";
import values from "../contains/values";

export default function App() {
  const [cells, setCells] = useState(
    Array.from({ length: values.DEFAULT_ROWS }, () => Array(values.DEFAULT_COLS).fill(-1))
  );
  const [turn, setTurn] = useState(0);
  const [map, setMap] = useState();

  // const position = [1, 1];

  useEffect(() => {}, []);
  // console.log("Map: ", map);

  const convertPositionToString = (x, y) => {
    return `${x}:${y}`;
  }

  const play = (x, y) => {
    console.log(`X: ${x} - Y: ${y}`);
    const cellsTmp = [...cells];
    let currentTurn = turn;
    const currentValue = cellsTmp[x][y];
    if (currentValue == -1) {
      cellsTmp[x][y] = currentTurn;
      setCells(cellsTmp);

      const mapTmp = new Map(checkWinner(currentTurn));
      if (mapTmp.size > 0) {
        Alert.alert("Winner " + drawXY(currentTurn));
        setMap(mapTmp);
        console.log("Map inside: ", mapTmp, map);
      }

      if (currentTurn == 0) {
        currentTurn = 1;
      } else if (currentTurn == 1) {
        currentTurn = 0;
      }

      setTurn(currentTurn);
    }
  };

  const checkWinner = (value) => {
    let map = new Map();

    // row
    for (let i = 0; i < values.DEFAULT_ROWS; i++) {
      let result = 0;
      for (let j = 0; j < values.DEFAULT_COLS; j++) {
        if (cells[i][j] === value) {
          result++;
        } else {
          result = 0;
        }
        if (result === 5) {
          for (let y = j - 4; y <= j; y++) {
            map.set(convertPositionToString(i, y), true);
          }
          return map;
        }
      }
    }

    // column
    for (let i = 0; i < values.DEFAULT_COLS; i++) {
      let result = 0;
      for (let j = 0; j < values.DEFAULT_ROWS; j++) {
        if (cells[j][i] === value) {
          result++;
        } else {
          result = 0;
        }
        if (result === 5) {
          for (let x = j - 4; x <= j; x++) {
            map.set(convertPositionToString(x, i), true);
          }
          return map;
        }
      }
    }

    // main diagonal
    let cellsTmp = Array.from({ length: values.DEFAULT_ROWS }, () =>
      Array(values.DEFAULT_COLS).fill(0)
    );
    for (let i = 0; i < values.DEFAULT_ROWS; i++) {
      for (let j = 0; j < values.DEFAULT_COLS; j++) {
        if (cells[i][j] === value) {
          if (i - 1 >= 0 && j - 1 >= 0) {
            cellsTmp[i][j] = cellsTmp[i - 1][j - 1] + 1;
          } else {
            cellsTmp[i][j] = 1;
          }
          if (cellsTmp[i][j] === 5) {
            for (let x = i - 4, y = j - 4; x <= i; x++, y++) {
              map.set(convertPositionToString(x, y), true);
            }
            return map;
          }
        }
      }
    }

    // auxiliary diagonal
    cellsTmp = Array.from({ length: values.DEFAULT_ROWS }, () =>
      Array(values.DEFAULT_COLS).fill(0)
    );
    for (let i = 0; i < values.DEFAULT_ROWS; i++) {
      for (let j = 0; j < values.DEFAULT_COLS; j++) {
        if (cells[i][j] === value) {
          if (i - 1 >= 0 && j + 1 < values.DEFAULT_COLS) {
            cellsTmp[i][j] = cellsTmp[i - 1][j + 1] + 1;
          } else {
            cellsTmp[i][j] = 1;
          }
          if (cellsTmp[i][j] === 5) {
            for (let x = i - 4, y = j + 4; x <= i; x++, y--) {
              map.set(convertPositionToString(x, y), true);
            }
            return map;
          }
        }
      }
    }

    return null;
  };

  const drawXY = (value) => {
    if (value == 0) {
      return "O";
    } else if (value == 1) {
      return "X";
    } else {
      return "";
    }
  };

  const checkMap = (x, y) => {
    const str = convertPositionToString(x, y);
    return map && map.has(str);
  };

  const drawCell = (x, y) => {
    const top = x * values.DEFAULT_CELL_SIZE;
    const left = y * values.DEFAULT_CELL_SIZE;
    return (
      <TouchableOpacity
        key={`${x}${y}`}
        style={{
          position: "absolute",
          width: values.DEFAULT_CELL_SIZE,
          height: values.DEFAULT_CELL_SIZE,
          left: left,
          top: top,
          borderWidth: 0.2,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: checkMap(x, y)
            ? drawXY(cells[x][y]) === "X"
              ? colors.winX
              : colors.winO
            : "pink",
        }}
        onPress={() => {
          play(x, y);
        }}
      >
        <Text
          style={{
            fontSize: 24,
            color: drawXY(cells[x][y]) === "X" ? "red" : "blue",
          }}
        >
          {drawXY(cells[x][y])}
        </Text>
      </TouchableOpacity>
    );
  };

  const drawBoard = () => {
    const board = [];
    for (let i = 0; i < values.DEFAULT_ROWS; i++) {
      for (let j = 0; j < values.DEFAULT_COLS; j++) {
        const cell = drawCell(i, j);
        board.push(cell);
      }
    }
    return board;
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: "green" }]}>
      <ScrollView
        contentContainerStyle={{
          justifyContent: "center",
          alignItems: "center",
          width: values.DEFAULT_WIDTH,
          height: values.DEFAULT_HEIGHT,
        }}
        style={styles.scrollView}
      >
        {drawBoard()}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    backgroundColor: "pink",
    paddingHorizontal: 5,
    padding: 10,
  },
  text: {
    fontSize: 42,
  },
});
