import { StyleSheet } from "react-native";


export default WeekTimePickerStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00BFFF',
  },
  list: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  btnStyle: {
    backgroundColor: 'white',
    height: 40,
    width: 40,
    elevation: 6,

  },
  btnStyleSelected: {
    backgroundColor: '#00FF7D',
    height: 40,
    width: 40,
    borderRadius: 20,
    elevation: 6,
  },
  btnText:
  {
    color: 'black',
    fontWeight: '800',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 8,
  },
  btnSelectedText:
  {
    color: 'black',
    fontWeight: '800',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 8,
  },
  btnTypeStyle: {
    backgroundColor: '#00FF7D',
    marginTop: 20,
    height: 30,
    width: 100,
    borderRadius: 20,
  },
  btnTypeText: {
    color: 'black',
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: 5
  },
  btnTypeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  timeLabel: {
    backgroundColor: 'white',
    color: 'black',
    marginTop: 20,
    height: 30,
    width: 90,
    borderRadius: 5,
    elevation: 6,
  },
  timeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 35
  },
  delText: {
    marginTop: 40,
    fontSize: 18,
    backgroundColor: 'white',
    borderRadius: 100, borderWidth: 1,
    color: 'red',
    borderColor: 'red',
    fontWeight: 'bold'
  },
  timeText: {
    color: 'black',
    fontSize: 16,
    fontWeight: '700'
  },
  dayText:{
    marginTop:25,
    left:20,
    color:'black', 
    fontWeight:'800',
    fontSize:19
  }

})