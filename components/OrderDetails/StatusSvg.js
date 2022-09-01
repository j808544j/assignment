import { Text, View, StyleSheet } from 'react-native';
import Svg, {Path} from 'react-native-svg';


export default function StatusSvg() {
  return(
     <View style={styles.status}>
  <Text style={styles.statusText}>
  Being prepared
 
  </Text>
<View style={styles.statusSvg}>
     <Svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<Path d="M10.6233 6.39898C10.6233 8.73158 8.73016 10.6247 6.39757 10.6247C4.06497 10.6247 2.17184 8.73158 2.17184 6.39898C2.17184 4.06638 4.06497 2.17326 6.39757 2.17326C8.73016 2.17326 10.6233 4.06638 10.6233 6.39898Z" stroke="#4361EE" stroke-width="0.724409" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.39761 3.86372V6.27842" stroke="#4361EE" stroke-width="0.724409" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4.94879 0.966087H7.84643" stroke="#4361EE" stroke-width="0.724409" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</Svg>

</View>
  </View>
  );
}


const styles = StyleSheet.create({
  status : {
    backgroundColor : ' rgba(67, 97, 258, 0.2)',
    borderRadius : 20,
    padding : 1,
    flexDirection : 'row',
    justifyContent : 'space-around',
    alignContent : 'center',
    marginTop : 10
  },
  statusText : {
    fontSize : 12,
    color : '#4361EE',
    paddingLeft :5
  },
  statusSvg : {
    padding : 2
  }
 
});