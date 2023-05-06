import '../../config';
import HomePage from '../pages/HomePage';
import NewDevicePage from '../pages/NewDevicePage';

fixture('Create Device').page(process.env.TESTCAFE_UI_BASE_URL);

const newDevice = {
  deviceName: `MAC-${Date.now()}`,
  deviceType: 'MAC',
  deviceCapacity: '500',
  hasEditButton: true,
  hasRemoveButton: true,
};

/*
 * Verify that devices can be created properly using the UI.
 * Verify the new device is now visible.
 * Check name, type and capacity are visible and correctly displayed to the user.
 */
test('Create new device', async (t) => {
  await HomePage.clickOnAddDeviceButton();
  await NewDevicePage.addNewDevice(newDevice);
  const actualDevice = await HomePage.getDeviceInfo(newDevice.deviceName);
  await t.expect(actualDevice).eql(newDevice);
});
