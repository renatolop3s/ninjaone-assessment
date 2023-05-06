import { Selector, t } from 'testcafe';

class HomePage {
  constructor() {
    this.addDeviceButton = Selector('.submitButton');
    this.deviceList = Selector('.device-main-box').with({ visibilityCheck: true });
    this.deviceNameSelector = '.device-info .device-name';
    this.deviceTypeSelector = '.device-info .device-type';
    this.deviceCapacitySelector = '.device-info .device-capacity';
    this.deviceEditButtonSelector = '.device-options .device-edit';
    this.deviceRemoveButtonSelector = '.device-options .device-remove';
  }

  async clickOnAddDeviceButton() {
    await t.click(this.addDeviceButton);
  }

  async getDeviceElement(deviceName) {
    return this.deviceList.withText(deviceName);
  }

  async getDeviceInfo(deviceName) {
    const deviceElement = await this.getDeviceElement(deviceName);
    const device = {
      deviceName: await deviceElement.find(this.deviceNameSelector).innerText,
      deviceType: await deviceElement.find(this.deviceTypeSelector).innerText,
      deviceCapacity: (await deviceElement.find(this.deviceCapacitySelector).innerText).split(' ')[0],
      hasEditButton: await deviceElement.find(this.deviceEditButtonSelector).exists,
      hasRemoveButton: await deviceElement.find(this.deviceRemoveButtonSelector).exists,
    };
    return device;
  }
}

export default new HomePage();
