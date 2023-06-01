import { View, Text } from 'react-native'
import React from 'react';
import VideoPlayers from 'react-native-video-player';

export default function VideoPlayer() {
  return (
    <View>
    <VideoPlayers 
    source = {{uri:"http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"}}
   
    resizeMode="contain"
    // video={require('../assets/video/Minions - A Toy, Papoy.mp4')}
     />
      <Text style={{color:'black'}}>Videodfflayer</Text>
    </View>
  )
}