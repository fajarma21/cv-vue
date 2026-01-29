import { createApp } from 'vue';
import { OhVueIcon, addIcons } from 'oh-vue-icons';
import {
  CoGlobeAlt,
  CoGmail,
  CoLinkedin,
  CoLocationPin,
  CoPrint,
  PrSpinner,
} from 'oh-vue-icons/icons';

import './style.css';
import App from './App.vue';

addIcons(CoGlobeAlt, CoGmail, CoLocationPin, CoPrint, PrSpinner, CoLinkedin);

const app = createApp(App);
app.component('v-icon', OhVueIcon);
app.mount('#app');
