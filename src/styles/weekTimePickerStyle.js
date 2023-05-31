import { StyleSheet } from "react-native";


export default WeekTimePickerStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#00BFFF',
    },
    list: {
        marginTop: 30,
       flexDirection:'row',
        justifyContent: 'space-around',
        
    },
    btnStyle:{
        backgroundColor: 'white' ,
        height: 40,
        width: 40,
        elevation: 6,
    
      },
      btnStyleSelected:{
        backgroundColor: 'green',
        height: 40,
        width: 40,
        borderRadius: 20,
        elevation: 6,
      },
      btnText:
      {
        color:  'black'  ,
        fontWeight: '800',
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 8,
      },
      btnSelectedText:
      {
        color:  'white'  ,
        fontWeight: '800',
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 8,
      },
      btnTypeStyle:{
        backgroundColor:'green',
        marginTop:20,
        height:40,
        width:150,
        borderRadius:100,
    
      },
      btnTypeText:{
        color:'white',
        fontWeight:'bold',
        alignSelf:'center',
        marginTop:8

      },
      btnTypeContainer:{
    flexDirection:'row',
        justifyContent:'space-around',
    
    
      },
      
})