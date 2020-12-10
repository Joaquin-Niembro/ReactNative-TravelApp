import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
function ListCard({onPress}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        paddingHorizontal: 36,
        alignSelf: 'center',
        marginTop: 20,
        backgroundColor: '#FFF',
        height: 182,
        elevation: 1,
        width: 270,
        borderRadius: 15,
      }}>
      <View
        style={{
          flexDirection: 'row',
          paddingTop: 20,
          alignSelf: 'center',
        }}>
        <Text
          style={{
            fontSize: 20,
            color: '#4b3ca7',
            fontWeight: 'bold',
          }}>
          NYC
        </Text>
        <Text
          style={{
            fontSize: 20,
            color: '#a2a2db',
            paddingHorizontal: 12,
          }}>
          - - - - - - - - - - -
        </Text>
        <Text
          style={{
            fontSize: 20,
            color: '#4b3ca7',
            fontWeight: 'bold',
          }}>
          CA
        </Text>
      </View>
      <View style={styles.container}>
        <Text
          style={{
            color: '#a2a2db',
            fontSize: 11,
          }}>
          New York
        </Text>
        <Text
          style={{
            color: '#a2a2db',
            fontSize: 11,
            paddingLeft: 112,
          }}>
          California
        </Text>
      </View>
      <View style={styles.wrapper}>
        <Text
          style={{
            color: '#522289',
            fontSize: 16,
          }}>
          09:00 AM
        </Text>
        <Text
          style={{
            color: '#522289',
            fontSize: 16,
            paddingLeft: 70,
          }}>
          21:00 PM
        </Text>
      </View>
      <Text
        style={{
          color: '#522289',
          fontSize: 12,
        }}>
        20 June, 2021
      </Text>
      <Text style={{
        fontSize:17,
        marginRight:-5,
        marginVertical:8,
        color:'#a2a2db'
      }}>
        - - - - - - - - - - - - - - - - - - - - - - - 
      </Text>
      <View style={styles.view}>
      <Text style={{
          color:'#4b3ca7',
          paddingLeft:25,
          fontSize:16,
          fontWeight: 'bold'
        }}>
          Price
        </Text>
        <Text style={{
          color:'#4b3ca7',
          paddingLeft:75,
          fontSize:16,
          fontWeight: 'bold'
        }}>
          $400
        </Text>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 5,
    alignItems: 'center',
  },
  wrapper: {
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
  },
  view:{
    flexDirection:'row',
    marginTop:-8,
    alignItems:'center'
  }
});
export default ListCard;
