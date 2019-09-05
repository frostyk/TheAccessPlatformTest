import React, {Fragment} from 'react';
import {StyleSheet} from 'react-native';
import {Card, ListItem} from 'react-native-elements';
import TouchableScale from 'react-native-touchable-scale'; // https://github.com/kohver/react-native-touchable-scale
import LinearGradient from 'react-native-linear-gradient';
import FadeInView from './FadeInView'; // Only if no expo

const UsersList = props => (
  <Fragment>
    {props.data.length > 0 && (
      <FadeInView>
        <Card
          title={`Ambassadors (${props.location.country.name}, ${
            props.location.region
          })`} titleStyle={{fontSize: 16}}>
          {props.data.map(user => (
            <ListItem
              key={user.id}
              Component={TouchableScale}
              friction={90} //
              tension={100} // These props are passed to the parent component (here TouchableScale)
              activeScale={0.95} //
              linearGradientProps={{
                colors: ['#FF9800', '#F44336'],
                start: {x: 1, y: 0},
                end: {x: 0.2, y: 0},
              }}
              ViewComponent={LinearGradient} // Only if no expo
              leftAvatar={{rounded: true, source: {uri: user.avatar.original}}}
              title={user.name}
              titleStyle={{color: 'white', fontWeight: 'bold'}}
              subtitleStyle={{color: 'white'}}
              containerStyle={{marginBottom: 15, borderRadius: 10}}
              subtitle={user.university.name}
              onPress={() => props.onPress(user)}
              chevronColor="white"
              chevron
            />
          ))}
        </Card>
      </FadeInView>
    )}
  </Fragment>
);

const styles = StyleSheet.create({
  listContainer: {
    padding: 20,
  },
});

export default UsersList;
