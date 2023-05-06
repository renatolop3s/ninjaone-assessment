import { Selector, t } from 'testcafe';

class NewDevicePage {
  constructor() {
    this.systemNameInput = Selector('#system_name');
    this.typeDropdown = Selector('#type');
    this.typeOptions = this.typeDropdown.find('option');
    this.hddCapacityGbInput = Selector('#hdd_capacity');
    this.saveButton = Selector('.submitButton');
  }

  async addNewDevice(device) {
    const { deviceName, deviceType, deviceCapacity } = device;
    await t
      .typeText(this.systemNameInput, deviceName)
      .click(this.typeDropdown)
      .click(this.typeOptions.withText(deviceType))
      .typeText(this.hddCapacityGbInput, deviceCapacity)
      .click(this.saveButton);
  }
}

export default new NewDevicePage();
