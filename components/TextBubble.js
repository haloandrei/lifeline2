import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Assuming a simple linear mapping function for demonstration
// This function should be adjusted based on your timeline's start and end dates, and its total width
function calculatePositionFromDate(date, timelineStart, timelineEnd, timelineWidth) {
  const dateValue = new Date(date).getTime();
  const startPosition = new Date(timelineStart).getTime();
  const endPosition = new Date(timelineEnd).getTime();
  const positionRatio = (dateValue - startPosition) / (endPosition - startPosition);
  return timelineWidth * positionRatio;
}

const TextBubble = ({ date, text, timelineStart, timelineEnd, timelineWidth }) => {
  const positionX = calculatePositionFromDate(date, timelineStart, timelineEnd, timelineWidth);

  return (
    <View style={[styles.textBubble, { left: positionX }]}>
      <Text>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textBubble: {
    position: 'absolute',
    top: 150,
    padding: 5,
    backgroundColor: '#ddd',
    borderRadius: 10,
  },
});

export default TextBubble;