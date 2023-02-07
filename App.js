import { StatusBar } from "expo-status-bar";
import { useRef, useState } from "react";
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from '@expo/vector-icons'; 


export default function App() {
  const [text, setText] = useState("");
  const [data, setData] = useState([]);

  const clearInput=useRef()

  const addChips = () => {
    console.log("TextInputValue ================> " + text);
    let tempData = data;
    tempData.push(text);
    let temp = [];
    tempData.map((item) => {
      temp.push(item);
    });
    setData(temp);
    clearInput.current.clear()
    console.log("tempData ================> " + temp);
  };

  const deleteChips = index =>{
    let tempData = data;
    let temp = tempData.filter((item,ind) => {
      return index != ind
    });
    setData(temp);
    console.log("deleteChips ================> " + temp);
  }

  return (
    <View style={styles.container}>
      <TextInput
        placeholder='Type Here'
        style={styles.textInputStyle}
        value={text}
        ref={clearInput}
        onChangeText={(getValue) => setText(getValue)}
        onSubmitEditing={() => addChips()}
      />
      <View
        style={{ width: "100%", marginTop: 50,alignItems:'center'}}
      >
        <FlatList
          data={data}
          numColumns={2}
          renderItem={({item, index}) => {
            return (
              <View style={styles.chipsStyle}>
                <Text style={styles.textStyle}>{item}</Text>
                <TouchableOpacity style={{marginLeft:20,marginRight:10}}
                onPress={()=> deleteChips(index)}
                >
                <MaterialIcons name="cancel" size={20} color="black" />
                </TouchableOpacity>
              </View>
            );
          }}
        />
      </View>
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textInputStyle: {
    width: "90%",
    height: 50,
    alignSelf: "center",
    borderWidth: 1,
    marginTop: 50,
    borderRadius: 20,
    paddingLeft: 20,
  },
  chipsStyle:{
    borderWidth: 1,
    borderRadius:30,
    borderColor: 'blue',
    padding:10,
    flexDirection:'row',
    alignItems:'center',
    margin:10,
  },
  textStyle:{
    marginLeft:10,
    fontSize:18,
    fontWeight:'700',
  },
});
