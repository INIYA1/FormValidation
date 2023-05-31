import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import weekTimePickerStyle from '../styles/weekTimePickerStyle';

const btnType = (btnName, onPress) => {
  return (
    <TouchableOpacity style={weekTimePickerStyle.btnTypeStyle} onPress={onPress}>
      <Text style={weekTimePickerStyle.btnTypeText}>{btnName}</Text>
    </TouchableOpacity>
  );
};

export default function DateAndTimePicker() {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  const [selectedButton, setSelectedButton] = useState(null);
  const [showNewCard, setShowNewCard] = useState(false);
  const [cardCount, setCardCount] = useState(0); // Track the number of cards

  const handleButtonPress = (day) => {
    setSelectedButton(day);
    setShowNewCard(false);
  };

  const handleAddButtonPress = () => {
    setShowNewCard(true);
    setCardCount((prevCount) => prevCount + 1); // Increase the card count by 1
  };

  const renderCard = () => {
    if (!selectedButton) return null;

    return (
      <View>
        <Text>{selectedButton}</Text>
        <View style={weekTimePickerStyle.btnTypeContainer}>
          {btnType('ADD', handleAddButtonPress)}
          {btnType('SUBMIT')}
        </View>
      </View>
    );
  };

  const renderNewCard = () => {
    return (
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 35 }}>
        <View>
          <Text>StartTime</Text>
          <Text style={{ backgroundColor: 'white', color: 'black', marginTop: 20, height: 30, width: 90, borderRadius: 5 }}>12.00</Text>
        </View>
        <View>
          <Text>StartTime</Text>
          <Text style={{ backgroundColor: 'white', color: 'black', marginTop: 20, height: 30, width: 90, borderRadius: 5 }}>12.00</Text>
        </View>
        <TouchableOpacity>
          <Text style={{ marginTop: 40, fontSize: 18, backgroundColor: 'white', borderRadius: 100, borderWidth: 1, color: 'red', borderColor: 'red', fontWeight: 'bold' }}>  X  </Text>
        </TouchableOpacity>
      </View>
    );
  };

  const renderNewCards = () => {
    const newCards = [];

    for (let i = 0; i < cardCount; i++) {
      newCards.push(renderNewCard());
    }

    return newCards;
  };

  return (
    <View style={weekTimePickerStyle.container}>
      <View style={weekTimePickerStyle.list}>
        {days.map((day, index) => (
          <TouchableOpacity
            key={index}
            style={[
              weekTimePickerStyle.btnStyle,
              selectedButton === day && weekTimePickerStyle.btnStyleSelected,
            ]}
            onPress={() => handleButtonPress(day)}
          >
            <Text
              style={[
                weekTimePickerStyle.btnText,
                selectedButton === day && weekTimePickerStyle.btnSelectedText,
              ]}
            >
              {day}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      {renderCard()}
      {showNewCard && renderNewCards()}
    </View>
  );
}




// _____________________________________________________________________________________________________________________________________________________________________________________
// // import React, { useState } from 'react';
// // import { View, Text, TouchableOpacity } from 'react-native';
// // import weekTimePickerStyle from '../styles/weekTimePickerStyle';


// // const btnType = (btnName) => {
//   return (
//     <TouchableOpacity style={weekTimePickerStyle.btnTypeStyle}>
//       <Text style={weekTimePickerStyle.btnTypeText}>{btnName}</Text>
//     </TouchableOpacity>
//   )
// }

// export default function DateAndTimePicker() {
//   const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

//   const [selectedButton, setSelectedButton] = useState(null);

//   const renderDaysContent = () => {
//     return selectedButton ? (
//       <View  style={{marginTop:10}}>
//         <Text>{selectedButton}</Text>
//         <View style={weekTimePickerStyle.btnTypeContainer}>
//           {btnType("ADD")}
//           {btnType("SUMIT")}
//         </View>
//       </View>
//     ) : null
//   };

//   return (
//     <View style={weekTimePickerStyle.container}>
//       <View style={weekTimePickerStyle.list}>
//         {days.map((day, index) => (
//           <TouchableOpacity key={index} style={[weekTimePickerStyle.btnStyle, selectedButton === day && weekTimePickerStyle.btnStyleSelected,]} onPress={() => setSelectedButton(day)}>
//             <Text style={[weekTimePickerStyle.btnText, selectedButton === day && weekTimePickerStyle.btnSelectedText,]}>{day}</Text>
//           </TouchableOpacity>
//         ))}
//       </View>
//       {renderDaysContent()}
//     </View>
//   );
// }