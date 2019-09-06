import React, {Fragment} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Avatar, Button, Card, Divider} from 'react-native-elements';
import Colors from 'react-native/Libraries/NewAppScreen/components/Colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Input} from 'react-native-elements';

const UserProfile = props => {
  return (
    <Fragment>
      <Card>
        <View style={styles.header}>
          <Avatar
            rounded
            size={'xlarge'}
            source={{
              uri: props.avatar.original,
            }}
          />
          <Text style={{padding: 10, fontSize: 20, fontWeight: '600'}}>
            {props.name}
          </Text>
          <Text style={{paddingBottom: 10, fontSize: 14, fontWeight: '600'}}>
            {props.region}
          </Text>
          <Divider
            style={{
              backgroundColor: '#FF9800',
              height: 1,
              margin: 15,
              width: 200,
            }}
          />
          <Button
            style={{height: 35}}
            titleStyle={{fontSize: 14}}
            title={props.user_tags.subject[0].name}
            type="outline"
          />
          <Text style={{padding: 10, paddingTop: 20, fontSize: 14, textAlign: 'center'}}>
            {props.description}
          </Text>
          <Input
            placeholder="Send message.."
            containerStyle={{marginTop: 15}}
            inputStyle={{fontSize: 14}}
            rightIcon={<Icon name="send" size={18} color={'#FF9800'} />}
          />
        </View>
      </Card>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});

export default UserProfile;
