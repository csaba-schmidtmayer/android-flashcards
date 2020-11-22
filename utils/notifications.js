import { AsyncStorage } from 'react-native';
import { scheduleNotificationAsync, setNotificationHandler, cancelScheduledNotificationAsync, getPermissionsAsync, requestPermissionsAsync } from 'expo-notifications';

import { NOTIFICATION } from '../constants/const';

export const scheduleReminder = async () => {
  const hasPermission = await allowsNotifications();
  if (!hasPermission) {
    await requestPermissionsAsync({
      android: {}
    });
  }
  else {
    const reminderId = await AsyncStorage.getItem(NOTIFICATION);
    let parsedReminder = JSON.parse(reminderId);

    if (parsedReminder === undefined || parsedReminder === null) {
      const trigger = new Date(Date.now());
      trigger.setDate(tomorrow.getDate() + 1)
      trigger.setHours(20)
      trigger.setMinutes(0)

      const newReminderId = await scheduleNotificationAsync({
        content: {
          title: 'Test your knowledge!',
          body: 'Taking a quiz daily helps your memory.',
        },
        trigger
      });
      await AsyncStorage.setItem(NOTIFICATION, JSON.stringify(newReminderId));
    }
  }
};

export const setReminderHandler = () => {
  setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: true,
      shouldSetBadge: false
    })
  });
};

const allowsNotifications = async () => {
  const settings = await getPermissionsAsync();
  return (settings.granted);
}
