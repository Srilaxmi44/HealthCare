// import {StyleSheet} from 'react-native';

// const Styles = StyleSheet.create({
//   container: {
//     marginBottom: 20,
//   },
//   title: {
//     color: '#05375a',
//     fontSize: 18,
//   },
//   dateContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     borderWidth: 1,
//     borderColor: 'black', // Set border color to black
//     borderRadius: 5,
//     paddingHorizontal: 10,
//     paddingVertical: -10,
//   },
//   dateText: {
//     flex: 1,
//     fontSize: 16,
//   },
// });

// export default Styles;

import {StyleSheet} from 'react-native';

const Styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  title: {
    color: '#05375a',
    fontSize: 18,
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black', // Set border color to black
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: -8,
    height: 40, // Adjust this value to control vertical padding
  },
  dateText: {
    flex: 1,
    fontSize: 16,
  },
});

export default Styles;
