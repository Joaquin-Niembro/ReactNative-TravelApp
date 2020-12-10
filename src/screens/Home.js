import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
function Home({navigation: {navigate}}) {
  return (
    <ImageBackground
      source={require('../images/back.png')}
      style={styles.background}>
      <View style={styles.TopView}>
        <Icon name="menu" size={30} color="#a2a2db" style={{width: 20}} />
        <Icon
          name="account-circle"
          size={33}
          color="#a2a2db"
          style={{marginLeft: 280}}
        />
      </View>
      <View style={styles.MiddleView}>
        <Text style={styles.MiddleText}>Travel Guider</Text>
        <Text style={styles.MiniText}>
          Travel all around the world and control your flights!
        </Text>

        <View style={styles.MidContainer}>
          <Image
            source={require('../images/search.png')}
            style={{height: 16, width: 14}}
          />
          <TextInput
            placeholder="Search for flights!"
            style={{paddingHorizontal: 20, fontSize: 18}}
          />
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{marginRight: -40, marginTop: 30}}>
          <View style={styles.LowContainer}>
            <Image
              source={require('../images/p.png')}
              style={{height: 24, width: 24}}
            />
          </View>
          <View style={styles.LowContainer2}>
            <Icon name="ticket" color="white" size={32} />
          </View>
          <View style={styles.LowContainer3}>
            <Icon name="bus" color="white" size={32} />
          </View>
          <View style={styles.LowContainer5}>
            <Icon name="bed" color="white" size={32} />
          </View>
          <View style={styles.LowContainer6}>
            <Icon name="food" color="white" size={32} />
          </View>
          <View style={styles.LowContainer4}>
            <Icon name="dots-horizontal" color="white" size={32} />
          </View>
        </ScrollView>
        <Text
          style={{
            color: '#FFF',
            marginTop: 50,
            fontSize: 17,
            fontWeight: 'bold',
          }}>
          Recommended
        </Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{marginHorizontal: -40, marginTop: 30}}>
          <TouchableOpacity
            onPress={() => navigate('Detail')}
            style={{
              backgroundColor: '#FEFEFE',
              height: 200,
              width: 190,
              borderRadius: 15,
              padding: 5,
              marginHorizontal: 10,
            }}>
            <Image
              source={require('../images/1.jpg')}
              style={{
                width: 180,
                borderRadius: 10,
                height: 130,
                marginBottom: 5,
              }}
            />

            <View
              style={{
                flexDirection: 'row',
                width: 150,
                alignItems: 'center',
              }}>
              <View style={{paddingHorizontal: 5, paddingVertical: 5}}>
                <Text style={{fontSize: 15, color: '#a2a2db'}}>
                  Malibu, CA.
                </Text>
              </View>
              <Icon name="map-marker" color="#ff5c83" size={25} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: '#FEFEFE',
              height: 200,
              width: 190,
              borderRadius: 15,
              padding: 5,
              marginHorizontal: 10,
            }}>
            <Image
              source={require('../images/2.jpg')}
              style={{
                width: 180,
                borderRadius: 10,
                height: 130,
                marginBottom: 5,
              }}
            />

            <View
              style={{
                flexDirection: 'row',
                width: 150,
                alignItems: 'center',
              }}>
              <View style={{paddingHorizontal: 5, paddingVertical: 5}}>
                <Text style={{fontSize: 15, color: '#a2a2db'}}>
                  Phoenix, Arizona.
                </Text>
              </View>
              <Icon name="map-marker" color="#5facdb" size={25} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: '#FEFEFE',
              height: 200,
              width: 190,
              borderRadius: 15,
              padding: 5,
              marginHorizontal: 10,
            }}>
            <Image
              source={require('../images/3.jpg')}
              style={{
                width: 180,
                borderRadius: 10,
                height: 130,
                marginBottom: 5,
              }}
            />

            <View
              style={{
                flexDirection: 'row',
                width: 150,
                alignItems: 'center',
              }}>
              <View style={{paddingHorizontal: 5, paddingVertical: 5}}>
                <Text style={{fontSize: 15, color: '#a2a2db'}}>
                  Cancún, México.
                </Text>
              </View>
              <Icon name="map-marker" color="#ff5c83" size={25} />
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%',
  },
  TopView: {
    flexDirection: 'row',
    marginTop: 40,
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  MiddleView: {
    paddingHorizontal: 40,
    marginTop: 25,
  },
  MiddleText: {
    fontSize: 40,
    color: '#522289',
    fontWeight: 'bold',
  },
  MiniText: {
    fontSize: 16,
    paddingVertical: 10,
    paddingRight: 80,
    lineHeight: 22,
    color: '#a2a2db',
  },
  MidContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    borderRadius: 40,
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 30,
  },
  LowContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 66,
    width: 66,
    borderRadius: 50,
    backgroundColor: '#5facdb',
    marginLeft: 20,
  },
  LowContainer2: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 66,
    width: 66,
    borderRadius: 50,
    backgroundColor: '#ff598a',
    marginLeft: 20,
  },
  LowContainer3: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 66,
    width: 66,
    borderRadius: 50,
    backgroundColor: '#ffa06c',
    marginLeft: 20,
  },
  LowContainer4: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 66,
    width: 66,
    borderRadius: 50,
    backgroundColor: '#cb4ecc',
    marginLeft: 20,
  },
  LowContainer5: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 66,
    width: 66,
    borderRadius: 50,
    backgroundColor: '#a2f2ab',
    marginLeft: 20,
  },
  LowContainer6: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 66,
    width: 66,
    borderRadius: 50,
    backgroundColor: '#4beddc',
    marginLeft: 20,
  },
});
export default Home;
