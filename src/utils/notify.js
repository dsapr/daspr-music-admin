import { Notify } from 'quasar';

export const success = message => {
  Notify.create({
    type: 'positive',
    message: message,
    position: 'top'
  });
};

export const error = message => {
  Notify.create({
    type: 'negative',
    message: message,
    position: 'top'
  });
};
