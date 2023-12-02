import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';
import { ReactNativeZoomableView } from '@openspacelabs/react-native-zoomable-view';
import TextBubble from './components/TextBubble';

export default function App() {
    // Define your timeline's start, end, and width
    const timelineStart = '2000-01-01';
    const timelineEnd = '2023-01-01';
    const timelineWidth = 1000; // Adjust based on your design  

  return (
    <View style={styles.container}>
      <Text>Life Line</Text>
      <View style={styles.timelineContainer}>
        <ReactNativeZoomableView
          contentWidth={10000} // Adjust this based on your timeline length
          contentHeight={100} // This can be adjusted based on your design
        >
          <View style={styles.timelineLine} />
          {/* Position your text bubbles along the line here */}
          <TextBubble 
          date="2000-03-11" 
          text="Born" 
          timelineStart={timelineStart}
          timelineEnd={timelineEnd}
          timelineWidth={timelineWidth}
        />
          <TextBubble 
          date="2010-06-15" 
          text="Graduated College" 
          timelineStart={timelineStart}
          timelineEnd={timelineEnd}
          timelineWidth={timelineWidth}
        />
          {/* Repeat for other events */}
        </ReactNativeZoomableView>
      </View>
      
      <StatusBar style='auto'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  timelineContainer: {
    borderWidth: 5,
    flexShrink: 1,
    height: 500,
    width: 310,
  },
  timelineLine: {
    height: 2,
    backgroundColor: 'black',
    width: '600%',
  },
  textBubble: {
    position: 'absolute',
    left: 40, // Adjust based on event date
    top: 1,
    padding: 5,
    backgroundColor: '#ddd',
    borderRadius: 10,
  },
});
