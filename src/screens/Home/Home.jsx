import React, {useContext, useEffect, useState} from 'react';

import {getUserActivities} from '../../../api/client';

import ActivityRectangle from '../../components/ActivityRectangle/ActivityRectangle';
import {UserContext} from '../../contexts/UserContext';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';

import styles from './Home.module.scss';

const Home = () => {
  const user = useContext(UserContext);

  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getUserActivities(user.id);

      if (response && response.status == 200) {
        setActivities(response.data);
      }
    };

    fetchData();
  }, [user.id]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scrollView}>
        <View style={styles.headerContainer}>
          <Text style={styles.header}>{`Your Vibelist Today`}</Text>
          <Text style={styles.vibe}>{`CHILL`}</Text>
        </View>
        <View style={styles.activitiesContainer}>
          {activities.map((activity) => (
            <View key={activity._id} style={styles.activity}>
              <ActivityRectangle
                activityName={activity.activityName}
                activityType={activity.activityType}
                pings={activity.pings}
              />
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
