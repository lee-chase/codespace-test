import React from 'react';
import {
  Settings20,
  Help20,
  Notification20,
  UserAvatar20,
} from '@carbon/icons-react';

export const sidePanels = [
  {
    id: 'settingsPanel',
    key: 'settingsPanel',
    label: 'Settings',
    toggleLabel: ['Open settings', 'Close settings'],
    icon: Settings20,
    content: <h3>Settings</h3>,
  },
  {
    id: 'helpPanel',
    key: 'helpPanel',
    label: 'Help',
    toggleLabel: ['Open help', 'Close help'],
    icon: Help20,
    content: <h3>Help</h3>,
  },
  {
    id: 'notificationsPanel',
    key: 'notificationsPanel',
    label: 'Notifications',
    toggleLabel: ['Open notifications', 'Close notifications'],
    icon: Notification20,
    content: <h3>Notifications</h3>,
  },
  {
    id: 'userAvatarPanel',
    key: 'userAvatarPanel',
    label: 'UserAvatar',
    toggleLabel: ['Open userAvatar', 'Close userAvatar'],
    icon: UserAvatar20,
    content: <h3>User Avatar</h3>,
  },
];
