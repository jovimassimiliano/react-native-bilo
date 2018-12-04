/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

#import "AppDelegate.h"
#import <React/RCTBundleURLProvider.h>

#import "RCCManager.h"

#import <React/RCTRootView.h>
#import <FBSDKCoreKit/FBSDKCoreKit.h>
#import <RNGoogleSignin/RNGoogleSignin.h>
#import <React/RCTLinkingManager.h>


@implementation AppDelegate

//- (BOOL)application:(UIApplication *)application openURL:(nonnull NSURL *)url options:(nonnull NSDictionary<NSString *,id> *)options {
//  return [RNGoogleSignin application:application
//                             openURL:url
//                   sourceApplication:options[UIApplicationOpenURLOptionsSourceApplicationKey]
//                          annotation:options[UIApplicationOpenURLOptionsAnnotationKey]];
//}
- (void)applicationDidBecomeActive:(UIApplication *)application {
  [FBSDKAppEvents activateApp];
}

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  
  
  NSURL *jsCodeLocation;
  #ifdef DEBUG
    jsCodeLocation = [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index" fallbackResource:nil];
  #else
    jsCodeLocation = [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];
  #endif
  
  self.window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];
  self.window.backgroundColor = [UIColor whiteColor];
  
  [[RCCManager sharedInstance] initBridgeWithBundleURL:jsCodeLocation launchOptions:launchOptions];

  return YES;
}

- (BOOL)application:(UIApplication *)application openURL:(NSURL *)url options:(NSDictionary<UIApplicationOpenURLOptionsKey,id> *)options
{
  return [[FBSDKApplicationDelegate sharedInstance] application:application openURL:url sourceApplication:options[UIApplicationOpenURLOptionsSourceApplicationKey] annotation:options[UIApplicationOpenURLOptionsAnnotationKey]]
  || [RNGoogleSignin application:application openURL:url sourceApplication:options[UIApplicationOpenURLOptionsSourceApplicationKey] annotation:options[UIApplicationOpenURLOptionsAnnotationKey]];
}

//- (BOOL)application:(UIApplication *)application openURL:(nonnull NSURL *)url options:(nonnull NSDictionary<NSString *,id> *)options {
//  return [RNGoogleSignin application:application
//                             openURL:url
//                   sourceApplication:options[UIApplicationOpenURLOptionsSourceApplicationKey]
//                          annotation:options[UIApplicationOpenURLOptionsAnnotationKey]];
//}

//- (BOOL)application:(UIApplication *)application openURL:(NSURL *)url
//  sourceApplication:(NSString *)sourceApplication annotation:(id)annotation
//{
//  return [RCTLinkingManager application:application openURL:url
//                      sourceApplication:sourceApplication annotation:annotation];
//}



//- (BOOL)application:(UIApplication *)application openURL:(NSURL *)url
//  sourceApplication:(NSString *)sourceApplication annotation:(id)annotation {
//
//  BOOL handledFB = [[FBSDKApplicationDelegate sharedInstance] application:application
//                                                                  openURL:url
//                                                        sourceApplication:sourceApplication
//                                                               annotation:annotation
//                    ];
//
//  BOOL handledRCT = [RCTLinkingManager application:application openURL:url sourceApplication:sourceApplication annotation:annotation];
//
//  return handledFB || handledRCT;
//}

@end
