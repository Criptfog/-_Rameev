import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'ru.rameevcollege.dnevnik',
  appName: 'Дневник Rameev',
  webDir: 'dist',
  backgroundColor: '#000000',
  server: {
    androidScheme: 'https',
    allowNavigation: ['app.rameevcollege.ru'],
  },
  android: { allowMixedContent: false },
  plugins: {
    CapacitorHttp: { enabled: true },
    CapacitorCookies: { enabled: true },
  },
};

export default config;
