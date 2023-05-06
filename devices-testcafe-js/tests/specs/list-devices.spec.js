import '../../config';
import DeviceApi from '../api/DeviceApi';
import HomePage from '../pages/HomePage';

fixture('List Devices').page(process.env.TESTCAFE_UI_BASE_URL);

/*
 * Make an API call to retrieve the list of devices.
 * Use the list of devices to check the elements are visible in the DOM.
 * Check the name, type and capacity of each element of
 * the list using the class names and make sure they are correctly displayed.
 * Verify that all devices contain the edit and delete buttons.
 */
test('List all devices', async (t) => {
  const devicesListFromApi = await DeviceApi.getAll();

  const checkDevices = devicesListFromApi.map(async (expectedDevice) => {
    const actualDevice = await HomePage.getDeviceInfo(expectedDevice.system_name);

    await t
      .expect(actualDevice.deviceName)
      .eql(expectedDevice.system_name)
      .expect(actualDevice.deviceType)
      .eql(expectedDevice.type)
      .expect(actualDevice.deviceCapacity)
      .eql(expectedDevice.hdd_capacity)
      .expect(actualDevice.hasEditButton)
      .ok()
      .expect(actualDevice.hasRemoveButton)
      .ok();
  });

  await Promise.all(checkDevices);
});
