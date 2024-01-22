import React from 'react'
import { Text, TextInput, View, TouchableOpacity } from 'react-native'
import { styles } from '../StyleSheet/StyleSheet'
import Icon  from 'react-native-vector-icons/FontAwesome5'

const HomeScreen = () => {
  return (
    <>
    <View style={styles.UserQuestion}>
      <Text style={styles.UserQuestionText}> <Icon name='user' size={15} style={{color: 'red'}}/>  hhh</Text>
    </View>

    <View style={styles.UserResponse}>
      <Text style={styles.UserResponseText}>hhh <Icon name='reply' size={15} style={{color: 'green'}}/></Text>
    </View>


    <View style={styles.container}>
      <View style={styles.rowInBu}>
          <TextInput placeholder='csw-chat ...' placeholderTextColor={'black'} style={styles.TextInput}/>
          <TouchableOpacity style={styles.TouchableOpacity}>
              <Text style={styles.TouchableOpacityText}>Send</Text>
          </TouchableOpacity>
      </View>
      
      <View style={styles.endTab}>
        <Text style={styles.endTabText}>Donate   <Icon name='donate' size={15} /></Text>
        <Text style={styles.endTabText}>Blog   <Icon name='blog' size={15} /></Text>
        <Text style={styles.endTabText}>privacy   <Icon name='lock' size={15} /></Text>
      </View>
    </View>
    </>
  )
}

export default HomeScreen