import Vue from 'vue';
import VueI18n from 'vue-i18n';
import cn from './cn';
import en from './en';

Vue.use(VueI18n);
let localLanguage;

function getLanguage() {
  let language;
  if (navigator.language) {
    language = navigator.language;
  } else {
    language = navigator.browserLanguage;
  }
  return language;
}

const messages = {
  en,
  cn,
};

if (getLanguage() === 'zh-CN') {
  localLanguage = 'cn';
} else {
  localLanguage = 'en';
}

const i18n = new VueI18n({
  locale: localLanguage,
  messages,
});

export default i18n;
