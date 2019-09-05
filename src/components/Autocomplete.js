import React, {Component, Fragment} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text} from 'react-native';
import {ListItem, SearchBar} from 'react-native-elements';
import Colors from 'react-native/Libraries/NewAppScreen/components/Colors';

const Autocomplete = props => (
  <Fragment>
    <SearchBar
      placeholder={props.placeholder}
      onChangeText={props.updateSearch}
      value={props.value}
      lightTheme={true}
      round={true}
    />
    {props.data.length > 0 && (
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}>
        {props.data.map(place => {
          return (
            <ListItem
              key={place.id}
              title={place.country}
              subtitle={place.region}
              leftIcon={{name: props.itemIcon}}
              bottomDivider={true}
              onPress={() => props.onItemClick(place)}
            />
          );
        })}
      </ScrollView>
    )}
  </Fragment>
);

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.white,
  },
});

export default Autocomplete;
