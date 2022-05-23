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

  const handleConfirm = (date) => {
    console.warn(date);
    setDate(date);
    hideDatePicker();
  };



  const currentDate = new Date();


  const idadeMinimaAno = new Date().getFullYear() - 12;
  const idadeMinimaMes = new Date().getMonth();
  const idadeMinimaDia = new Date().getDay();

  const idadeMaximaAno = new Date().getFullYear() - 90;

  const [date, setDate] = useState(new Date);
  const [show, setShow] = useState(false);


  return (
    <View>
      
      

       <TouchableOpacity style={styles.btnData} onPress={showDatePicker}>

<Text style={{color: '#b3b3b3', paddingLeft: 10,}}>Data De Nascimento</Text>
<Text style={{color: '#b3b3b3', paddingLeft: 10,}}>{date.toLocaleDateString()}</Text>


      <DateTimePickerModal

        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        display="spinner"
        textColor="black"
        locale="pt-BR"
        neutralButtonLabel="clear" 
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