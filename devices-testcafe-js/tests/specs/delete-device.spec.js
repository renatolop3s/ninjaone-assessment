import '../../config';
import DeviceApi from '../api/DeviceApi';
import HomePage from '../pages/HomePage';
import { pageReload } from '../helpers/utils';

fixture('Delete Device').page(process.env.TESTCAFE_UI_BASE_URL);

/*
 * Make an API call that deletes the last element of the list.
 * Reload the page and verify the element is no longer visible and
 * it doesn’t exist in the DOM.
 */
test('Delete last device', async (t) => {
  const lastDevice = await DeviceApi.getLast();

  const response = await DeviceApi.delete(lastDevice.id);
  await t.expect(response.status).eql(200);

  await pageReload();
  const actualDevice = HomePage.getDeviceElement(lastDevice.system_name);
  await t.expect(actualDevice.exists).notOk();
});
