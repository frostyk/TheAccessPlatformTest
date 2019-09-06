import React, {Fragment} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {ListItem, SearchBar} from 'react-native-elements';
import Colors from 'react-native/Libraries/NewAppScreen/components/Colors';
import FadeInView from './FadeInView';
import {SCREEN_WIDTH} from '../util/dimensions';

const Autocomplete = props => (
  <Fragment>
    <View style={{position: 'absolute', top: 50, left: 0, width: SCREEN_WIDTH, zIndex: 100}}>
      <SearchBar
        placeholder={props.placeholder}
        onChangeText={props.updateSearch}
        value={props.value}
        lightTheme={true}
        round={true}
      />
      {props.data.length > 0 && (
        <FadeInView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            {props.data.map(place => {
              return (
                <ListItem
                  key={place.country.id}
                  title={place.country.name}
                  subtitle={place.region}
                  leftIcon={{name: props.itemIcon}}
                  bottomDivider={true}
                  onPress={() => props.onItemClick(place)}
                />
              );
            })}
          </ScrollView>
        </FadeInView>
      )}
    </View>
    <View style={{width: SCREEN_WIDTH, height: 60}} />
  </Fragment>
);

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.white,
  },
});

export default Autocomplete;
