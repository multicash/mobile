[![Unit-test](https://github.com/multicash/mobile/actions/workflows/tests.yml/badge.svg)](https://github.com/multicash/mobile/actions/workflows/tests.yml)
[![Android CI](https://github.com/multicash/mobile/actions/workflows/android.yml/badge.svg)](https://github.com/multicash/mobile/actions/workflows/android.yml)
[![iOS CI](https://github.com/multicash/mobile/actions/workflows/ios.yml/badge.svg)](https://github.com/multicash/mobile/actions/workflows/ios.yml)

# Mobile
MultiCash Android and iOS application

## Local Development

If you want to help us out on development you can use this guide:

1. Fork the project, and clone it to your local machine.

2. Install the npm dependencies.
``` bash
yarn
```

3. Install pod dependencies (on macOS)
```bash
sudo gem install cocoapods
yarn ios:install
```

3. Run the development server.
```bash
yarn start
```

4. Run a simulator.
```bash
# On macOS only for iOS
yarn ios --simulator='iPhone 12 Pro'
# or/and on all systems for android
yarn android
```
