import React, { useState } from 'react';
import { View, Text, TouchableHighlight, Alert, ToastAndroid, TouchableOpacity, StyleSheet, Modal, TouchableWithoutFeedback } from 'react-native';
import { Avatar } from 'react-native-paper';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

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
    } else if (response.assets && response.assets[0].fileSize > 2097152) {
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
      <View style={styles.centerContent}>
        <TouchableOpacity onPress={openModal} underlayColor='rgba(0,0,0,0)'>
          <Avatar.Image size={150}
            source={{ uri: 'data:image/png;base64,' + pic }}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.btnContainer}>
        {/* <TouchableOpacity style={styles.btnStyle} onPress={handleImageResponse}>
          <Text style={styles.btnText}>Upload Image</Text>
        </TouchableOpacity> */}
        <TouchableOpacity style={styles.btnStyle} onPress={removeImage}>
          <Text style={styles.btnText}>Remove Image</Text>
        </TouchableOpacity>
      </View>

      <Modal visible={modalVisible} animationType='slide' transparent>
        <TouchableWithoutFeedback onPress={closeModal}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <TouchableOpacity onPress={takePhoto}>
                <Text style={styles.modalOption}>Take a Photo</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={chooseFromGallery}>
                <Text style={styles.modalOption}>Choose from Gallery</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={closeModal}>
                <Text style={styles.modalOption}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  btnText: {
    color: 'white',
    fontWeight: '800',
    alignSelf: 'center',
    top: 7,
  },
  btnStyle: {
    backgroundColor: 'gray',
    height: 35,
    width: '30%',
    borderRadius: 5,
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 40,
  },
  centerContent: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10
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
});
