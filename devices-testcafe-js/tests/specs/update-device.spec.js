import '../../config';
import DeviceApi from '../api/DeviceApi';
import HomePage from '../pages/HomePage';
import { pageReload } from '../helpers/utils';

fixture('Update Device').page(process.env.TESTCAFE_UI_BASE_URL);

/*
 * Make an API call that renames the first device of the list to “Renamed Device”.
 * Reload the page and verify the modified device has the new name.
 */
test('Update device name', async (t) => {
  const deviceList = await DeviceApi.getAll();

  const firstDevice = deviceList[0];
  firstDevice.system_name = 'Renamed Device';

  const response = await DeviceApi.update(firstDevice.id, firstDevice);
  await t.expect(response.status).eql(200);

  await pageReload();
  const actualDevice = await HomePage.getDeviceInfo(firstDevice.system_name);
  await t.expect(actualDevice.deviceName).eql(firstDevice.system_name);
});
