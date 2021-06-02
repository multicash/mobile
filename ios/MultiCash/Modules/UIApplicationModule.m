//
//  UIApplicationModule.m
//  MultiCash
//
//  Created by Swen van Zanten on 02/06/2021.
//

#import "UIApplicationModule.h"

@implementation UIApplicationModule

RCT_EXPORT_MODULE(UIApplicationModule);

RCT_EXPORT_METHOD(setAlternateIconName: (nullable NSString *)appIconName) {
  [[UIApplication sharedApplication] setAlternateIconName:appIconName completionHandler:^(NSError * _Nullable error) {
    NSLog(@"Icon error: %@", error.localizedDescription);
  }];
}

+(BOOL)requiresMainQueueSetup {
  return YES;
}

- (dispatch_queue_t)methodQueue
{
  return dispatch_get_main_queue();
}

@end
