const path = require('path')
const fs = require('fs')

module.exports = {
  packagerConfig: {
    name: 'Ideamesh',
    icon: './icons/ideamesh_big_sur.icns',
    buildVersion: 84,
    protocols: [
      {
        "protocol": "ideamesh",
        "name": "ideamesh",
        "schemes": "ideamesh"
      }
    ],
    osxSign: {
      identity: 'Developer ID Application: Tiansheng Qin',
      'hardened-runtime': true,
      entitlements: 'entitlements.plist',
      'entitlements-inherit': 'entitlements.plist',
      'signature-flags': 'library'
    },
    osxNotarize: {
      tool: 'notarytool',
      appleId: process.env['APPLE_ID'],
      appleIdPassword: process.env['APPLE_ID_PASSWORD'],
      teamId: process.env['APPLE_TEAM_ID']
    },
  },
  makers: [
    {
      'name': '@electron-forge/maker-squirrel',
      'config': {
        'name': 'Ideamesh',
        'setupIcon': './icons/ideamesh.ico',
        'loadingGif': './icons/installing.gif',
        'certificateFile': process.env.CODE_SIGN_CERTIFICATE_FILE,
        'certificatePassword': process.env.CODE_SIGN_CERTIFICATE_PASSWORD,
        "rfc3161TimeStampServer": "http://timestamp.digicert.com"
      }
    },
    {
      'name': '@electron-forge/maker-wix',
      'config': {
        name: 'Ideamesh',
        icon: path.join(__dirname, './icons/ideamesh.ico'),
        language: 1033,
        manufacturer: 'Ideamesh',
        appUserModelId: 'com.ideamesh.ideamesh',
        upgradeCode: "3778eb84-a0ce-4109-9120-5d4315e0d7de",
        ui: {
          enabled: false,
          chooseDirectory: true,
          images: {
            banner: path.join(__dirname, './windows/banner.jpg'),
            background: path.join(__dirname, './windows/background.jpg')
          },
        },
        // Standard WiX template appends the unsightly "(Machine - WSI)" to the name, so use our own template
        beforeCreate: (msiCreator) => {
          return new Promise((resolve, reject) => {
            fs.readFile(path.join(__dirname,"./windows/wix.xml"), "utf8" , (err, content) => {
                if (err) {
                    reject (err);
                }
                msiCreator.wixTemplate = content;
                resolve();
            });
          });
        }
      }
    },
    {
      name: '@electron-forge/maker-dmg',
      config: {
        format: 'ULFO',
        icon: './icons/ideamesh_big_sur.icns',
        name: 'Ideamesh'
      }
    },
    {
      name: '@electron-forge/maker-zip',
      platforms: ['darwin', 'linux', 'win32'],
    },

    {
      name: 'electron-forge-maker-appimage',
      platforms: ['linux'],
      config: {
        mimeType: ["x-scheme-handler/ideamesh"]
      }
    }
  ],

  publishers: [
    {
      name: '@electron-forge/publisher-github',
      config: {
        repository: {
          owner: 'ideamesh',
          name: 'ideamesh'
        },
        prerelease: true
      }
    }
  ]
}
