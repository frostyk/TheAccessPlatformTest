import React, {useState, useEffect} from 'react';
import {Animated, Text, View} from 'react-native';

const FadeInView = props => {
  const [fadeAdmin] = useState(new Animated.Value(0)); // Initial value for opacity: 0

  useEffect(() => {
    Animated.timing(fadeAdmin, {
      toValue: 1,
      duration: 500,
    }).start();
  }, [fadeAdmin]);

  return (
    <Animated.View // Special animatable View
      style={{
        ...props.style,
        opacity: fadeAdmin, // Bind opacity to animated value
      }}>
      {props.children}
    </Animated.View>
  );
};

export default FadeInView;
