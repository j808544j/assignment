import { Text, View, StyleSheet } from 'react-native';
import OrderListSvg from './OrderListSvg';
import OrderListSvg2 from './OrderListSvg2';
import StatusSvg from '../OrderDetails/StatusSvg';
import OrderListSvg3 from './OrderListSvg3';

export default function OrderList() {
  return(


<View>
<View style={styles.listItem}>
 <OrderListSvg3 />
 <View style={styles.namePrice}>
 <Text style={styles.name}>
 Mutton Biryani
 </Text>
 <Text style={styles.price}>
 ₹210
 </Text>
 </View>
 <View style = {styles.qt}>
 <StatusSvg />
<Text style={styles.qty}>
Qty : 2
</Text>
 </View>
</View>
<View style={styles.listItem2}>
 <OrderListSvg2 />
 <View style={styles.namePrice}>
 <Text style={styles.name}>
 Mutton Biryani
 </Text>
 <Text style={styles.price}>
 ₹210
 </Text>
 </View>
 <View style = {styles.qt}>
 <Text style={styles.unav}> Item unavailable </Text>
<View style={styles.qty}>
<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.2399 7.90625L27.3332 15.9996L19.2399 24.0929" stroke="#D90429" stroke-width="2.06824" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4.66667 16H27.1067" stroke="#D90429" stroke-width="2.06824" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</View>
 </View>
</View>
<View style={styles.listItem}>
 <OrderListSvg3 />
 <View style={styles.namePrice}>
 <Text style={styles.name}>
 Mutton Biryani
 </Text>
 <Text style={styles.price}>
 ₹210
 </Text>
 </View>
 <View style = {styles.qt}>
 <StatusSvg />
<Text style={styles.qty}>
Qty : 2
</Text>
 </View>
</View>
 </View>
  );
}



const styles = StyleSheet.create({
 listItem : {
   borderWidth : 2,
   borderColor : 'rgba(249, 202, 65, 0.25)',
   flexDirection : 'row',
   justifyContent : 'space-around',
   alignItems : 'center',
   padding : 5,
   borderRadius : 6,
   margin : 5
 },
 name : {
   fontFamily : 'DM Sans',
   fontStyle : 'bold',
   fontSize : 16,
   color : '#0F191A',
   fontWeight : 600,
   marginTop : 5
 },
 price : {
   color : 'rgba(15, 25, 26, 0.5)',
   marginTop : 10
 },
 qty : {
   color : '#E63946',
   marginTop : 10,
   fontSize : 16,
   fontWeight : 600
 },
 qt : {
   alignItems : 'flex-end'
 },

 listItem2 : {
    borderWidth : 2,
   borderColor : 'red',
   flexDirection : 'row',
   justifyContent : 'space-around',
   alignItems : 'center',
   padding : 5,
   borderRadius : 6,
   margin : 5
 },
 unav : {
   backgroundColor : 'rgba(255,0,0,0.1)',
   color : '#D90429',
   borderRadius : 18
 }
 
});
