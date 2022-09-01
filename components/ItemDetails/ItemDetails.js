import { Text, View, StyleSheet, Button } from 'react-native';
import Title from  './Title';
import TotalPrice from './TotalPrice';
import OrderList from './OrderList';

export default function ItemDetails() {
  return (
    <View style={styles.itemDetails}>
    <Title/>
    <TotalPrice/>
    <OrderList/>
    <View style={styles.btn}>
 <Button  title="Go Home" color = '#E63946'>
    </Button>
    </View>
    </View>
  )
}


const styles = StyleSheet.create({
 btn : {
   marginLeft : 15,
   marginRight : 15,
   marginTop : 10
 },
 
 

 
});
