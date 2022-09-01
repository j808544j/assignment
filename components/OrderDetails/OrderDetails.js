import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import BackBtnSvg from './BackBtnSvg';
import Note from "./Note";
import Order from './Order';



export default function OrderDetails() {
  return (
    <View >
     <View style = {styles.nav}>
          <BackBtnSvg/>
     <Text style={styles.navText}> OrderDetails </Text>
     </View>
     <Note/>
     <Order/>
     <Order/>
     <Order/>

    </View>
  );
}

const styles = StyleSheet.create({
 nav : {
   flexDirection : 'row',
  alignItems : 'center'
 },
 navText : {
   fontFamily : 'DM Sans',
   fontStyle : 'normal',
   fontWeight : 700,
   fontSize : 24.4,
   letterSpacing : -0.3,
   lineHeight : 32,
   marginLeft : '10%'

 }
 
});
