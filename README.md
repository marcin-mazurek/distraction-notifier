# Distracton Notifier

Distraction Notifier is a simple script, showing alert on page load and periodically at defined time intervals.
It can be run on chosen websites using browser extensions, ie. [Custom JavaScript for websites](https://chrome.google.com/webstore/detail/custom-javascript-for-web/poakhlngfciodnhlhhgnaaelnpjljija)

Ultimately this script will be a browser extension.

Example usage:

```
var notifier = new DistractionNotifier();
notifier.init('STOP! This page is wasting your time.\n\n' +
    'Button "OK" will close this page. Click "cancel", if you'd like to stay here.\n\n' +
    'This message will show up again in 5 minutes.', 5 * 60);
```
