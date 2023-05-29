import { StyleSheet } from "react-native";

export default ProfileImageStyle = StyleSheet.create({
    btnText: {
        color: 'white',
        fontWeight: '800',
        alignSelf: 'center',
        top: 7
      },
      btnStyle: {
        backgroundColor: 'gray',
        height: 35,
        width: '30%',
        borderRadius: 5
      },
      btnContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 40
      },
      centerContent:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:80
      },
      modalContainer: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
      },
      modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        width: '80%',
      },
      modalOption: {
        fontSize: 18,
        marginBottom: 15,
      },
})
