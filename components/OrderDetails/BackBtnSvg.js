import { Text, View, StyleSheet } from 'react-native';
import Svg, {Path} from 'react-native-svg';


export default function BackBtnSvg() {
  return (
    <View style = {styles.backBtn}>
     <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<Path d="M9.57 5.92993L3.5 11.9999L9.57 18.0699" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20.5 12H3.67004" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</Svg>

     </View>
  
  );
}


const styles = StyleSheet.create({
  backBtn : {
    width : 50,
    height : 50,
    borderWidth : 1.25,
    borderColor : '#E8EBED',
    borderRadius : 12,
    paddingTop : 11,
    paddingLeft : 14,
    marginLeft : '5%'
  }
 
});
