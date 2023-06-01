import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import weekTimePickerStyle from '../styles/weekTimePickerStyle';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const btnType = (btnName, onPress) => {
  return (
    <TouchableOpacity style={weekTimePickerStyle.btnTypeStyle} onPress={onPress}>
      <Text style={weekTimePickerStyle.btnTypeText}>{btnName}</Text>
    </TouchableOpacity>
  );
};

export default function DateAndTimePicker() {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  const [selectedDay, setSelectedDay] = useState(null);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
  const [showNewCard, setShowNewCard] = useState(false);
  const [cardCounts, setCardCounts] = useState({});
  const [selectedTime,setselectedTime] =useState('')
  

  const handleButtonPress = (day) => {
    setSelectedDay(day);
    setShowNewCard(false);
  };

  const addButtonPress = () => {
    setShowNewCard(true);
    setCardCounts((prevCounts) => ({
      ...prevCounts,
      [selectedDay]: (prevCounts[selectedDay] || 0) + 1,
    }));
  };

  const deletebuttonPress = () => {
    setCardCounts((prevCounts) => ({
      ...prevCounts,
      [selectedDay]: prevCounts[selectedDay] - 1,
    }));
  };

  const renderCard = () => {
    if (!selectedDay) return null;

    return (
      <View>
        <Text style={weekTimePickerStyle.dayText}>{selectedDay} :</Text>
        <View style={weekTimePickerStyle.btnTypeContainer}>
          {btnType('ADD', addButtonPress)}
          {btnType('SUBMIT')}
        </View>
      </View>
    );
  };
//-----------------TIME PICKER-----------------

  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

  const handleConfirm = (time) => {
console.log(time,"TIME")
    setselectedTime(time.toLocaleTimeString());
    hideTimePicker();
  };

  const timeSetting = (selectTime) => {
    return (
      <View>
        <Text style={weekTimePickerStyle.timeText}>{selectTime}</Text>
        <TouchableOpacity style={weekTimePickerStyle.timeLabel} onPress={showTimePicker}>
        <Text>{selectedTime}</Text>
        </TouchableOpacity>
      </View>
    )
  }

  const renderNewCard = () => {
    return (
      <View style={weekTimePickerStyle.timeContainer}>
        {timeSetting('Start Time')}
        {timeSetting('End Time')}
        <DateTimePickerModal
          isVisible={isTimePickerVisible}
          mode="time"
          onConfirm={handleConfirm}
          onCancel={hideTimePicker}
        />
        <TouchableOpacity onPress={deletebuttonPress}>
          <Text style={weekTimePickerStyle.delText}> X </Text>
        </TouchableOpacity>
      </View>
    );
  };

  const renderNewCards = () => {
    if (!selectedDay || !cardCounts[selectedDay]) return null;

    const newCards = [];
    for (let i = 0; i < cardCounts[selectedDay]; i++) {
      newCards.push(renderNewCard(selectedDay));
    }
    return newCards;
  };

  return (
    <View style={weekTimePickerStyle.container}>
      <View style={weekTimePickerStyle.list}>
        {days.map((day, index) => (
          <View>
            <TouchableOpacity
              key={index}
              style={[weekTimePickerStyle.btnStyle, selectedDay === day && weekTimePickerStyle.btnStyleSelected]}
              onPress={() => handleButtonPress(day)}>
              <Text style={[weekTimePickerStyle.btnText, selectedDay === day && weekTimePickerStyle.btnSelectedText]}>{day}</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
      {renderCard()}
      <ScrollView>{showNewCard && renderNewCards()}</ScrollView>
    </View>
  );
}
