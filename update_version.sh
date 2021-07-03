#!/bin/sh

GRADLE_FILE=./android/app/build.gradle
XPROJECT_FILE=./ios/MultiCash.xcodeproj/project.pbxproj
PACKAGE_FILE=./package.json

if [ $# -ne 1 ]; then
    echo "Missing arguments 'versionCode' 'versionName'"
    exit 1
fi

VERSION_CODE_TMP=$(grep "versionCode " $GRADLE_FILE | awk '{print $2}')
VERSION_CODE=$(echo $VERSION_CODE_TMP | sed -e 's/^"//'  -e 's/"$//')
VERSION_CODE=$(($VERSION_CODE+1))
VERSION_NAME=$1

update_android_gradle()
{
    sed -i '' -e "s/versionCode [0-9]\{1,\}/versionCode $2/g" $1
    sed -i '' -e "s/versionName \".*\"/versionName \"$3\"/g" $1
}

update_ios_xproject()
{
    sed -i '' -e "s/APP_BUILD = [0-9]\{1,\};/APP_BUILD = $200;/g" $1
    sed -i '' -e "s/APP_VERSION = .*;/APP_VERSION = $3;/g" $1
}

update_package_json()
{
    sed -i '' -e "s/\"version\": \".*\",/\"version\": \"$2\",/g" $1
}

update_android_gradle ${GRADLE_FILE} ${VERSION_CODE} ${VERSION_NAME}
echo "Android build.gradle updated"

update_ios_xproject ${XPROJECT_FILE} ${VERSION_CODE} ${VERSION_NAME}
echo "iOS project.pbxproj updated"

update_package_json ${PACKAGE_FILE} ${VERSION_NAME}
echo "Package.json updated"

git add $GRADLE_FILE
git add $XPROJECT_FILE
git add $PACKAGE_FILE
git commit -m "bump version to ${VERSION_NAME}"
git tag -a $VERSION_NAME -m "release version ${VERSION_NAME}"
echo "Created git commit and tag"
