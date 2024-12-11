import { CapacitorConfig } from '@capacitor/cli'
import fs from 'fs'

const version = fs.readFileSync('static/package.json', 'utf8').match(/"version": "(.*?)"/)?.at(1) ?? '0.0.0'

const config: CapacitorConfig = {
  appId: 'com.ideamesh.app',
  appName: 'Ideamesh',
  bundledWebRuntime: false,
  webDir: 'public',
  loggingBehavior: 'debug',
  server: {
    // https://capacitorjs.com/docs/updating/5-0#update-androidscheme
    androidScheme: 'http',
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 500,
      launchAutoHide: false,
      androidScaleType: 'CENTER_CROP',
      splashImmersive: false,
      backgroundColor: '#002b36'
    },

    Keyboard: {
      resize: 'none'
    }
  },
  android: {
    appendUserAgent: `Ideamesh/${version} (Android)`
  },
  ios: {
    scheme: 'Ideamesh',
    appendUserAgent: `Ideamesh/${version} (iOS)`
  },
  cordova: {
    staticPlugins: [
      '@ideamesh/capacitor-file-sync', // AgeEncryption requires static link
    ]
  }
}

if (process.env.IDEAMESH_APP_SERVER_URL) {
  Object.assign(config, {
    server: {
      url: process.env.IDEAMESH_APP_SERVER_URL,
      cleartext: true
    }
  })
}

export = config;
