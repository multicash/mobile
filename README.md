# multicash-mobile-wallet
MultiCash Android and iOS application

## Local Development

If you want to help us out on development you can use this guide:

1. Fork the project, and clone it to your local machine.

2. Install the npm dependencies.
``` bash
npm ci
```

3. Install pod dependencies (on macOS)
```bash
sudo gem install cocoapods
cd ios
pod install
cd ..
```

3. Run the development server.
```bash
npm start
```

4. Run a simulator.
```bash
// On macOS only for iOS
npm run ios --simulator='iPhone 12 Pro'
// or/and on all systems for android
npm run android
```
