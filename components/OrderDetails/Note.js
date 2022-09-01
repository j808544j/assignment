import { Text, View, StyleSheet } from 'react-native';

export default function Note(){
  return (
    <Text style={styles.text} >
  <Text style={styles.note}> 
  Note :
  </Text>  Your orders for past 24 hours
    </Text>
  )
}


const styles = StyleSheet.create({
text : {
  borderWidth :2,
  borderStyle : 'dashed',
  borderColor : '#4361EE',
  backgroundColor : 'rgba(67, 97, 238, 0.1)',
  marginLeft : 16,
  marginRight : 16,
  marginTop : 20,
  borderRadius : 3,
  padding : 10,
  textAlign : 'center'
},
note : {
  color : '#4361EE',
  fontSize : 16,
  letterSpacing : -0.3,
  lineHeight : 20,
  fontFamily : 'DM Sans',
  fontStyle : 'normal',
  fontWeight : 700,
  
}
 
});