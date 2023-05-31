import { View, Text } from 'react-native'
import React from 'react'
import PersonalDetailsStyle from '../styles/PersonalDetailsStyle'

export default function PersonalDetails() {
  return (
    <View style={PersonalDetailsStyle.conatiner}>
      <View style={{ flexDirection: 'row', marginHorizontal: 20, marginTop: 30 }}>
        <View style={{ height: 3, width: '60%', backgroundColor: 'black', borderRadius: 25 }}></View>
        <View style={{ height: 3, width: '40%', backgroundColor: 'white', borderRadius: 25 }}></View>
      </View>
      <View>
        <Text style={{color:'black'}}> What are your personal details? </Text>
      </View>
    </View>
  )
}