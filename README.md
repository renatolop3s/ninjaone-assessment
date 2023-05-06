# NinjaOne Assessment

This repository contains two projects, `devices-testcafe-js` and `devices-selenium-java`, as part of the NinjaOne assessment. The purpose of these projects is to test the provided server and UI using TestCafé and Selenium WebDriver, respectively.

## devices-testcafe-js

This is a JavaScript project that utilizes TestCafé, a Node.js tool for automating end-to-end web testing.

## devices-selenium-java

This is a Java project that uses Selenium WebDriver, another popular testing tool. Its purpose is to provide an alternative implementation of the same tests that were performed with TestCafé in the `devices-testcafe-js` project.

## Assessment 

**Test 1**
- Make an API call to retrieve the list of devices.
- Use the list of devices to check the elements are visible in the DOM. Check the name, type and capacity of each element of the list using the class names and make sure they are correctly displayed.
- Verify that all devices contain the edit and delete buttons.

**Test 2**
- Verify that devices can be created properly using the UI.
- Verify the new device is now visible. Check name, type and capacity are visible and correctly displayed to the user.

**Test 3**
- Make an API call that renames the first device of the list to “Renamed Device”.
- Reload the page and verify the modified device has the new name.

**Test 4**
- Make an API call that deletes the last element of the list.
- Reload the page and verify the element is no longer visible and it doesn’t exist in the DOM.