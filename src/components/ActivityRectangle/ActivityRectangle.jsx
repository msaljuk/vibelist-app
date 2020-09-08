import React from 'react';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons';
import {Image, StyleSheet, Text, View} from 'react-native';

import {getActivityIconSrc} from './utils';

import styles from './ActivityRectangle.module.scss';

const PING_ICON_SIZE = 20;

const ActivityRectangle = (props) => {
  const {activityName, activityType, pings} = props;

  return (
    <View style={[styles.container, boxShadow.container]}>
      <View style={styles.iconContainer}>
        <Image
          source={getActivityIconSrc(activityType)}
          style={styles.activityIcon}
        />
      </View>
      <View style={styles.activityDetailsContainer}>
        <Text style={styles.activityType}>{activityType}</Text>
        <Text numberOfLines={1} style={styles.activityName}>
          {activityName}
        </Text>
      </View>
      <View style={styles.pingsContainer}>
        <FontAwesomeIcon
          icon={faStar}
          size={PING_ICON_SIZE}
          style={styles.pingIcon}
        />
        <Text style={styles.pingNumber}>{pings}</Text>
      </View>
    </View>
  );
};

const boxShadow = StyleSheet.create({
  container: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
});

export default ActivityRectangle;
