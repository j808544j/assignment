import BackBtnSvg from '../OrderDetails/BackBtnSvg';
import { Text, View, StyleSheet } from 'react-native';

export default function Title(){
  return(
    <View style={styles.title}>
    <BackBtnSvg/>
    <View style={styles.text}>
    <Text style={styles.textOrder}> Order </Text>
    <Text style={styles.textOrderId}> OrderId: 1234567890  </Text>
     </View>
    </View>
  );
}

const styles = StyleSheet.create({
 title : {
   flexDirection : 'row',
   alignItems : 'center'
 },
 textOrder : {
   fontFamily : 'DM Sans',
   fontStyle : 'normal',
   fontWeight : 700,
   fontSize : 24.4,
   letterSpacing : -0.3,
   lineHeight : 32,
   marginLeft : '10%',
   color : '#0F191A'

 },
 textOrderId : {
   fontFamily : 'DM Sans',
   fontStyle : 'normal',
   lineHeight : 20,
   color : '#4361EE',
   fontSize : 15,
   fontWeight : 500,
   letterSpacing : -0.3,
   
 },
 text : {
   marginLeft : '15%'
 }
 
});