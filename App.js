import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Alert,
  TouchableOpacity,
  ImageBackground,
  Button,
  Image,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Input} from 'react-native-elements';

export default class login extends Component {
  render() {
    return (
      <ScrollView style={{height: 2000}}>
        <View style={{backgroundColor: '#dee3dd'}}>
          <ImageBackground
            source={require('./motif.png')}
            style={{width: '100%', height: '100%'}}>
            <View
              style={{
                margin: 15,
                position: 'absolute',
                marginLeft: 330,
                marginTop: 40,
              }}>
              <View
                style={{
                  height: 3.5,
                  width: 25,
                  backgroundColor: 'black',
                  margin: 5,
                  borderRadius: 30,
                }}></View>
              <View
                style={{
                  height: 3.5,
                  width: 40,
                  backgroundColor: 'black',
                  margin: 5,
                  borderRadius: 30,
                }}></View>
              <View
                style={{
                  height: 3.5,
                  width: 25,
                  backgroundColor: 'black',
                  margin: 5,
                  marginLeft: 20,
                  borderRadius: 30,
                }}></View>
            </View>
            <Image
              style={{
                width: 35,
                height: 35,
                position: 'absolute',
                marginLeft: 280,
                marginTop: 40,
              }}
              source={require('./loupe.png')}
            />
            <View>
              <Text
                style={{
                  fontSize: 40,
                  fontWeight: 'bold',
                  marginTop: 30,
                  marginLeft: 20,
                  color: '#2e5041',
                }}>
                Crèches
              </Text>
              <Text
                style={{
                  fontSize: 25,
                  fontWeight: 'light',
                  marginLeft: 23,
                  color: '#2e5041',
                }}>
                disponibles
              </Text>
            </View>
            <View style={styles.creche1}>
              <View
                style={{
                  borderRadius: 30,
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.25,
                  shadowRadius: 3.84,

                  elevation: 5,
                }}>
                <Image
                  style={{
                    borderRadius: 30,
                    width: 150,
                    height: 220,
                    position: 'absolute',
                    marginLeft: 30,
                    marginTop: 30,
                  }}
                  source={require('./charles-e1Q-ZCzDuUQ-unsplash.jpg')}
                />
              </View>
              <View style={styles.bandeau}>
                <Image
                  style={{
                    width: 20,
                    height: 20,
                    position: 'absolute',
                    marginLeft: 225,
                    marginTop: 8,
                  }}
                  source={require('./etoile.png')}
                />
                <Image
                  style={{
                    width: 20,
                    height: 25,
                    position: 'absolute',
                    marginLeft: 15,
                    marginTop: 39,
                  }}
                  source={require('./gmaps.png')}
                />
                <Image
                  style={{
                    width: 20,
                    height: 65,
                    position: 'absolute',
                    marginLeft: -20,
                    marginTop: 50,
                  }}
                  source={require('./boucle.png')}
                />
                <Text
                  style={{
                    position: 'absolute',
                    marginLeft: 15,
                    marginTop: 5,
                    color: '#2e5041',
                    fontSize: 20,
                  }}>
                  Les lucioles
                </Text>
                <Text
                  style={{
                    position: 'absolute',
                    marginLeft: 185,
                    marginTop: 5,
                    color: '#2e5041',
                    fontSize: 20,
                  }}>
                  4,5
                </Text>
                <Text
                  style={{
                    position: 'absolute',
                    marginLeft: 40,
                    marginTop: 35,
                    color: '#2e5041',
                    fontSize: 20,
                  }}>
                  5
                </Text>
                <Text
                  style={{
                    position: 'absolute',
                    marginLeft: 55,
                    marginTop: 38,
                    color: '#2e5041',
                    fontSize: 10,
                  }}>
                  km
                </Text>
                <Text
                  style={{
                    position: 'absolute',
                    marginLeft: 110,
                    marginTop: 45,
                    color: 'black',
                    fontSize: 15,
                  }}>
                  Crèche d'entreprise
                </Text>
                <View
                  style={{
                    borderRadius: 30,
                    backgroundColor: '#abb9b3',
                    height: 44,
                    width: 250,
                    marginLeft: -20,
                    position: 'absolute',
                    marginTop: 72,
                  }}>
                  <Text
                    style={{
                      marginTop: 6,
                      marginLeft: -30,
                      textAlign: 'center',
                      color: 'white',
                      fontSize: 20,
                    }}>
                    INFORMATIONS
                  </Text>
                </View>
                <Image
                  style={{
                    position: 'absolute',
                    height: 10,
                    width: 40,
                    marginLeft: 175,
                    marginTop: 89,
                  }}
                  source={require('./fleche.png')}
                />
              </View>
            </View>
            <View style={styles.creche2}>
              <View
                style={{
                  borderRadius: 30,
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.25,
                  shadowRadius: 3.84,

                  elevation: 5,
                }}>
                <Image
                  style={{
                    borderRadius: 30,
                    width: 150,
                    height: 220,
                    position: 'absolute',
                    marginLeft: 30,
                    marginTop: 30,
                  }}
                  source={require('./charles-e1Q-ZCzDuUQ-unsplash.jpg')}
                />
              </View>
              <View style={styles.bandeau}>
                <Image
                  style={{
                    width: 20,
                    height: 20,
                    position: 'absolute',
                    marginLeft: 225,
                    marginTop: 8,
                  }}
                  source={require('./etoile.png')}
                />
                <Image
                  style={{
                    width: 20,
                    height: 25,
                    position: 'absolute',
                    marginLeft: 15,
                    marginTop: 39,
                  }}
                  source={require('./gmaps.png')}
                />
                <Image
                  style={{
                    width: 20,
                    height: 65,
                    position: 'absolute',
                    marginLeft: -20,
                    marginTop: 50,
                  }}
                  source={require('./boucle.png')}
                />
                <Text
                  style={{
                    position: 'absolute',
                    marginLeft: 15,
                    marginTop: 5,
                    color: '#2e5041',
                    fontSize: 20,
                  }}>
                  Les lucioles
                </Text>
                <Text
                  style={{
                    position: 'absolute',
                    marginLeft: 185,
                    marginTop: 5,
                    color: '#2e5041',
                    fontSize: 20,
                  }}>
                  4,5
                </Text>
                <Text
                  style={{
                    position: 'absolute',
                    marginLeft: 40,
                    marginTop: 35,
                    color: '#2e5041',
                    fontSize: 20,
                  }}>
                  5
                </Text>
                <Text
                  style={{
                    position: 'absolute',
                    marginLeft: 55,
                    marginTop: 38,
                    color: '#2e5041',
                    fontSize: 10,
                  }}>
                  km
                </Text>
                <Text
                  style={{
                    position: 'absolute',
                    marginLeft: 110,
                    marginTop: 45,
                    color: 'black',
                    fontSize: 15,
                  }}>
                  Crèche d'entreprise
                </Text>
                <View
                  style={{
                    borderRadius: 30,
                    backgroundColor: '#abb9b3',
                    height: 44,
                    width: 250,
                    marginLeft: -20,
                    position: 'absolute',
                    marginTop: 72,
                  }}>
                  <Text
                    style={{
                      marginTop: 6,
                      marginLeft: -30,
                      textAlign: 'center',
                      color: 'white',
                      fontSize: 20,
                    }}>
                    INFORMATIONS
                  </Text>
                </View>
                <Image
                  style={{
                    position: 'absolute',
                    height: 10,
                    width: 40,
                    marginLeft: 175,
                    marginTop: 89,
                  }}
                  source={require('./fleche.png')}
                />
              </View>
            </View>
            <View style={styles.creche3}>
              <View
                style={{
                  borderRadius: 30,
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.25,
                  shadowRadius: 3.84,

                  elevation: 5,
                }}>
                <Image
                  style={{
                    borderRadius: 30,
                    width: 150,
                    height: 220,
                    position: 'absolute',
                    marginLeft: 30,
                    marginTop: 30,
                  }}
                  source={require('./charles-e1Q-ZCzDuUQ-unsplash.jpg')}
                />
              </View>
              <View style={styles.bandeau}>
                <Image
                  style={{
                    width: 20,
                    height: 20,
                    position: 'absolute',
                    marginLeft: 225,
                    marginTop: 8,
                  }}
                  source={require('./etoile.png')}
                />
                <Image
                  style={{
                    width: 20,
                    height: 25,
                    position: 'absolute',
                    marginLeft: 15,
                    marginTop: 39,
                  }}
                  source={require('./gmaps.png')}
                />
                <Image
                  style={{
                    width: 20,
                    height: 65,
                    position: 'absolute',
                    marginLeft: -20,
                    marginTop: 50,
                  }}
                  source={require('./boucle.png')}
                />
                <Text
                  style={{
                    position: 'absolute',
                    marginLeft: 15,
                    marginTop: 5,
                    color: '#2e5041',
                    fontSize: 20,
                  }}>
                  Les lucioles
                </Text>
                <Text
                  style={{
                    position: 'absolute',
                    marginLeft: 185,
                    marginTop: 5,
                    color: '#2e5041',
                    fontSize: 20,
                  }}>
                  4,5
                </Text>
                <Text
                  style={{
                    position: 'absolute',
                    marginLeft: 40,
                    marginTop: 35,
                    color: '#2e5041',
                    fontSize: 20,
                  }}>
                  5
                </Text>
                <Text
                  style={{
                    position: 'absolute',
                    marginLeft: 55,
                    marginTop: 38,
                    color: '#2e5041',
                    fontSize: 10,
                  }}>
                  km
                </Text>
                <Text
                  style={{
                    position: 'absolute',
                    marginLeft: 110,
                    marginTop: 45,
                    color: 'black',
                    fontSize: 15,
                  }}>
                  Crèche d'entreprise
                </Text>
                <View
                  style={{
                    borderRadius: 30,
                    backgroundColor: '#abb9b3',
                    height: 44,
                    width: 250,
                    marginLeft: -20,
                    position: 'absolute',
                    marginTop: 72,
                  }}>
                  <Text
                    style={{
                      marginTop: 6,
                      marginLeft: -30,
                      textAlign: 'center',
                      color: 'white',
                      fontSize: 20,
                    }}>
                    INFORMATIONS
                  </Text>
                </View>
                <Image
                  style={{
                    position: 'absolute',
                    height: 10,
                    width: 40,
                    marginLeft: 175,
                    marginTop: 89,
                  }}
                  source={require('./fleche.png')}
                />
              </View>
            </View>
          </ImageBackground>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  bandeau: {
    marginLeft: 150,
    marginTop: 110,
    height: 120,
    width: 300,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },

  creche2: {
    marginTop: 30,
  },

  creche3: {
    marginTop: 60,
  },
});
