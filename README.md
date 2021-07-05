[![Unit-test](https://github.com/multicash/mobile/actions/workflows/tests.yml/badge.svg)](https://github.com/multicash/mobile/actions/workflows/tests.yml)
[![Android CI](https://github.com/multicash/mobile/actions/workflows/android.yml/badge.svg)](https://github.com/multicash/mobile/actions/workflows/android.yml)
[![iOS CI](https://github.com/multicash/mobile/actions/workflows/ios.yml/badge.svg)](https://github.com/multicash/mobile/actions/workflows/ios.yml)

# MultiCash Mobile

The MultiCash Mobile app provides all that MultiCash has to over on both Android and iOS. Create multiple accounts with base currency MCX, BTC, ETH or potentially other currencies. The app enables users to top up their accounts or invest their MCX to earn additional MCX. MCX users are enabled to send each other MCX to their own account tags. In short... an all in crypto currency application created for non-crypto users!

## Features:

* Sending and receiving MCX, BTC, ETH
* Store addresses and MCX account tags in an address book
* Ask others to pay you via MultiCash Pay links
* Private keys are yours and stored inside the app
* Multiple accounts
* Top Up accounts
* Invest MCX to earn MCX
* Touch ID, Face ID and Android biometrics support

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

## Release

A release is created by tagging a commit with a new version. To ensure the releases are excepted by the app stores we also need to increase the build versions. A shell script which does this for us has been added to the source and can be executed like this:

```shell
./update_version.sh {major}.{minor}.{patch}

# So...
./update_version.sh 1.2.3
```

This updates the version names of the project, increases the version code, commits the files and tags the commit with the given version. All you need to do is push the commit and tag to GitHub.
