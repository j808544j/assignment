import { Text, View, StyleSheet } from 'react-native';
import OrderSvg from './OrderSvg';
import StatusSvg from './StatusSvg';

export default function Order(){
  return (
   <View style={styles.order}>
   <View style={styles.leftHalf}>
   <OrderSvg/>
   <View style={styles.price}>
    <Text style={styles.number} >
   Order 1
   </Text>
    <Text style={styles.orderNo}>
    Total : <Text style={styles.rate}> ₹500</Text> 
   </Text>
   </View>
   </View>

   <View style={styles.details}>
     <Text style={styles.detailsId}>
     ID
   <Text style={styles.id}>
  : 1234567890
   </Text>
   </Text>
   <StatusSvg />
   </View>
 
   </View>
  )
}

const styles = StyleSheet.create({
  order : {
    flexDirection : 'row',
    justifyContent : 'space-between',
    marginLeft: 16,
    marginRight : 16,
    borderWidth :1,
    borderColor : '#E63946',
    marginTop : 25,
    padding :10,
    borderRadius : 10,
  },
  id : {
    color : '#E63946',
      fontSize : 16,
  letterSpacing : -0.3,
  lineHeight : 20,
  fontFamily : 'DM Sans',
  fontStyle : 'normal',
  },
  orderNo : {
    color : '#4361EE',
    marginTop : 10
  },
  rate : {
    fontWeight : 700,
  },
  number : {
    fontWeight : 700
  },
  detailsId : {
    fontWeight : 700
  },
  leftHalf : {
    flexDirection : 'row'
  },
  price : {
    marginLeft : 10
  }
 
});