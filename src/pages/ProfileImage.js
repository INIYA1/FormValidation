import React, { useState } from 'react';
import { View, Text, TouchableHighlight, Alert, ToastAndroid, TouchableOpacity, StyleSheet, Modal, TouchableWithoutFeedback } from 'react-native';
import { Avatar } from 'react-native-paper';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import ProfileImageStyle from '../styles/ProfileImageStyle';

export default function ProfileImage() {
  const [pic, setPic] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const setNotifyMsg = () => {
    // ToastAndroid.showWithGravity('Action completed', ToastAndroid.SHORT, ToastAndroid.CENTER);
  };

  const takePhoto = () => {
    let options = {
      mediaType: 'photo',
      quality: 1,
      includeBase64: true,
    };

    launchCamera(options, response => {
      imageResponse(response);
    });
  };

  const chooseFromGallery = () => {
    let options = {
      mediaType: 'photo',
      quality: 1,
      includeBase64: true,
    };

    launchImageLibrary(options, response => {
      imageResponse(response);
    });
  };

  const imageResponse = (response) => {
    if (response.didCancel) {
      setNotifyMsg('Cancelled image selection');
    } else if (response.errorCode === 'permission') {
      setNotifyMsg('Permission is not satisfied');
    } else if (response.errorCode === 'others') {
      setNotifyMsg(response.errorMessage);
    } else if (response.assets && response.assets[0].fileSize > 3097152) {
      Alert.alert(
        'Maximum image size exceeded',
        'Please choose an image under 2 MB',
        [{ text: 'OK' }]
      );
    } else if (response.assets && response.assets.length > 0) {
      setPic(response.assets[0].base64);
    }
  };

  const removeImage = () => {
    setPic('');
  };

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <View>
      <View style={ProfileImageStyle.centerContent}>
        <TouchableOpacity onPress={openModal} underlayColor='rgba(0,0,0,0)'>
          <Avatar.Image size={150}
            source={{ uri: 'data:image/png;base64,' + pic }}
          />
        </TouchableOpacity>
      </View>
      <View style={ProfileImageStyle.btnContainer}>
        {/* <TouchableOpacity style={styles.btnStyle} onPress={handleImageResponse}>
          <Text style={styles.btnText}>Upload Image</Text>
        </TouchableOpacity> */}
        <TouchableOpacity style={ProfileImageStyle.btnStyle} onPress={removeImage}>
          <Text style={ProfileImageStyle.btnText}>Remove Image</Text>
        </TouchableOpacity>
      </View>

      <Modal visible={modalVisible} animationType='slide' transparent>
        <TouchableWithoutFeedback onPress={closeModal}>
          <View style={ProfileImageStyle.modalContainer}>
            <View style={ProfileImageStyle.modalContent}>
              <TouchableOpacity onPress={takePhoto}>
                <Text style={ProfileImageStyle.modalOption}>Take a Photo</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={chooseFromGallery}>
                <Text style={ProfileImageStyle.modalOption}>Choose from Gallery</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={closeModal}>
                <Text style={ProfileImageStyle.modalOption}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
}

