cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "cordova-plugin-device.device",
    "file": "plugins/cordova-plugin-device/www/device.js",
    "pluginId": "cordova-plugin-device",
    "clobbers": [
      "device"
    ]
  },
  {
    "id": "cordova-plugin-fcm-with-dependecy-updated.FCMPlugin",
    "file": "plugins/cordova-plugin-fcm-with-dependecy-updated/www/FCMPlugin.js",
    "pluginId": "cordova-plugin-fcm-with-dependecy-updated",
    "clobbers": [
      "FCMPlugin"
    ]
  },
  {
    "id": "cordova-plugin-ionic-keyboard.keyboard",
    "file": "plugins/cordova-plugin-ionic-keyboard/www/android/keyboard.js",
    "pluginId": "cordova-plugin-ionic-keyboard",
    "clobbers": [
      "window.Keyboard"
    ]
  },
  {
    "id": "cordova-plugin-ionic-webview.IonicWebView",
    "file": "plugins/cordova-plugin-ionic-webview/src/www/util.js",
    "pluginId": "cordova-plugin-ionic-webview",
    "clobbers": [
      "Ionic.WebView"
    ]
  },
  {
    "id": "cordova-plugin-splashscreen.SplashScreen",
    "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
    "pluginId": "cordova-plugin-splashscreen",
    "clobbers": [
      "navigator.splashscreen"
    ]
  },
  {
    "id": "cordova-plugin-statusbar.statusbar",
    "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
    "pluginId": "cordova-plugin-statusbar",
    "clobbers": [
      "window.StatusBar"
    ]
  },
  {
    "id": "com-sarriaroman-photoviewer.PhotoViewer",
    "file": "plugins/com-sarriaroman-photoviewer/www/PhotoViewer.js",
    "pluginId": "com-sarriaroman-photoviewer",
    "clobbers": [
      "PhotoViewer"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-device": "2.0.2",
  "cordova-plugin-fcm-with-dependecy-updated": "2.4.0",
  "cordova-plugin-ionic-keyboard": "2.1.3",
  "cordova-plugin-ionic-webview": "4.0.1",
  "cordova-plugin-splashscreen": "5.0.2",
  "cordova-plugin-statusbar": "2.4.2",
  "cordova-plugin-whitelist": "1.3.3",
  "com-sarriaroman-photoviewer": "1.2.4"
};
// BOTTOM OF METADATA
});