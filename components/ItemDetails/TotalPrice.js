import { Text, View, StyleSheet } from 'react-native';

export default function TotalPrice() {
  return (
    <View style={styles.totalPrice}>
    <View style={styles.keys}>
    <Text style={styles.key}>
    Total items
    </Text>
     <Text style={styles.key}>
    Total amount
    </Text>
     <Text style={styles.key}>
    Discount
    </Text>
      <View style={styles.total}>
     <Text style = {styles.redTotal}>
     GRAND TOTAL
     </Text>
    </View>
    </View>
    <View style= {styles.values}>
   <Text style={styles.value}>
    4
    </Text>
     <Text style={styles.value}>
    ₹550
    </Text>
     <Text style={styles.value}>
     <Text style={styles.greenText}>-₹50 </Text>
    </Text>
     <View style={styles.total}>
     <Text style = {styles.purpleTotal}>
     ₹500
     </Text>
    </View>
    </View>
    </View>
   
  )
}


const styles = StyleSheet.create({
 totalPrice : {
 flexDirection : 'row',
 justifyContent : 'space-between',
 padding :10,
 margin : 5,
 shadowColor : 'rgba(25, 57, 72, 0.101)',
 backgroundColor : '#FFFFFF',
shadowOffset: {width: 4, height: 4},
borderRadius : 5

 
 },
 key: {
   fontSize : 20,
   lineHeight : 25,
   letterSpacing : -0.3,
   color : 'rgba(15, 25, 26, 0.5)',
   fontFamily : 'DM Sans',
   fontStyle : 'normal',
   marginTop : 10
 },
 value : {
   color : '#0F191A',
    fontSize : 20,
   lineHeight : 25,
   letterSpacing : -0.3,
   fontFamily : 'DM Sans',
   fontStyle : 'normal',
   marginTop : 10,
   
 },
 greenText : {
   color : '#2FBF71',
 },
 redTotal : {
   color : '#E63946',
   marginTop : 20,
   fontWeight : 500,
   fontSize : 20,
   lineHeight : 25,
    letterSpacing : -0.3,
   fontFamily : 'DM Sans',
   fontStyle : 'normal',
 },
 purpleTotal : {
   color : '#4361EE',
    marginTop : 20,
   fontWeight : 500,
   fontSize : 20,
   lineHeight : 25,
    letterSpacing : -0.3,
   fontFamily : 'DM Sans',
   fontStyle : 'normal',

 },
 values : {
   alignItems : 'flex-end'
 }
 
});
