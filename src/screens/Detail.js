import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Alert,
  TouchableHighlight,
  TouchableOpacity,
  Modal,
  Image,
  ImageBackground,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ModalCard from './ModalCard';
import ListCard from './ListCrad';
import {ScrollView} from 'react-native-gesture-handler';
function Detail({navigation: {navigate}}) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <ImageBackground
      source={require('../images/back2.png')}
      style={{width: '100%', height: '100%'}}>
      <View style={styles.topContainer}>
        <Icon
          name="menu"
          size={30}
          color="#a2a2db"
          style={{width: 20}}
          onPress={() => navigate('Home')}
        />
        <Icon
          name="account-circle"
          size={33}
          color="#a2a2db"
          style={{marginLeft: 280}}
        />
      </View>
      <View style={styles.midContainer}>
        <View
          style={{
            width: 80,
            height: 80,
            borderRadius: 50,
            backgroundColor: '#5facdb',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={require('../images/p.png')}
            style={{height: 26, width: 26}}
          />
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 40,
        }}>
        <Text
          style={{
            fontSize: 24,
            color: '#FFF',
            fontWeight: 'bold',
          }}>
          NYC
        </Text>
        <Text
          style={{
            fontSize: 30,
            color: '#a2a2db',
            paddingHorizontal: 15,
            fontWeight: '200',
          }}>
          - - - - - - - - - - - - - -
        </Text>
        <Text
          style={{
            fontSize: 24,
            color: '#FFF',
            fontWeight: 'bold',
          }}>
          CA
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          paddingHorizontal: 40,
        }}>
        <Text
          style={{
            color: '#a2a2db',
            fontWeight: 'bold',
          }}>
          New York
        </Text>
        <Text
          style={{
            color: '#a2a2db',
            fontWeight: 'bold',
            paddingLeft: 210,
          }}>
          California
        </Text>
      </View>
      <Text style={{color: '#a2a2db', paddingHorizontal: 40}}>
        20 June, 2021
      </Text>
      <View style={styles.lowContainer}>
        <Image
          source={require('../images/dots.png')}
          style={{width: 18, height: 16}}
        />
        <Image
          source={require('../images/filter.png')}
          style={{width: 18, height: 16, marginLeft: 270}}
        />
      </View>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        style={{marginVertical: 5}}>
        <ListCard onPress={() => setModalVisible(true)} />
        <ListCard onPress={() => setModalVisible(true)} />
        <ListCard onPress={() => setModalVisible(true)} />
        <View>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert('Modal is closed');
            }}>
            <ModalCard onPress={() => setModalVisible(!modalVisible)} />
          </Modal>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  topContainer: {
    flexDirection: 'row',
    marginTop: 40,
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  midContainer: {
    width: '100%',
    marginTop: 50,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 50,
    marginTop: 60,
  },
});
export default Detail;
