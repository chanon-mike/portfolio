const path = require('path');

module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ja'],
  },
  localePath: path.resolve('./public/locales'),
  localeStructure: '{{lng}}/{{ns}}',
  debug: process.env.NODE_ENV === 'development',
  reloadOnPrerender: process.env.NODE_ENV === 'development',
};
