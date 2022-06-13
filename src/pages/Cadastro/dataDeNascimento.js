import React, { useState } from "react";
import {View, TouchableOpacity, StyleSheet, Text} from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";


const DataDeNascimento = () => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (userDate) => {
    setDate(userDate.toLocaleDateString());
    hideDatePicker();
    console.warn(userDate.toLocaleDateString());
  };

  const [date, setDate] = useState("Data de Nascimento");
  // const [show, setShow] = useState(false);


  return (
    <View>

      <Text style={{color: 'red', alignContent: 'center', alignSelf: 'center', fontSize: 15}}>Data de Nascimento Inválida!</Text>

      <TouchableOpacity style={styles.btnData} onPress={showDatePicker}>

        <Text style={{color: '#b3b3b3', paddingLeft: 10,}}>{date}</Text>

              <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
                display="spinner"
                textColor="black"
                locale="pt-BR"
                style={{width: '100%'}}
                buttonTextColorIOS="#45C4B0"
                cancelTextIOS="Sair"
                confirmTextIOS="Confirmar"
                isDarkModeEnabled={false}
              />
           
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  btnData:{
      width: 330,
      height: 50,
      backgroundColor: 'white',
      borderRadius: 10,
      justifyContent: 'center',
      marginTop: 25,
      shadowOffset: {
          width: 6,
          height: 6,
          },
shadowOpacity: 0.20,
borderColor: '#C6C6C6',
marginBottom: 15,
borderWidth: 1,

},
})


export default DataDeNascimento;