import {TranslocoGlobalConfig} from '@jsverse/transloco-utils';
    
const config: TranslocoGlobalConfig = {
  rootTranslationsPath: 'src/assets/i18n/',
  langs: [
    '(en', 'es',  'pt',
    'fr',  'de',  'it',
    'ga',  'ja',  'zh',
    'ru',  'ar)'
  ],
  keysManager: {}
};
    
export default config;