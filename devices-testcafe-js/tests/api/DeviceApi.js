/* eslint-disable class-methods-use-this */
import { t } from 'testcafe';
import '../../config';

class DeviceApi {
  static API_BASE_URL = process.env.TESTCAFE_API_BASE_URL;

  async getAll() {
    const response = await t.request(`${DeviceApi.API_BASE_URL}/devices`);
    await t.expect(response.status).eql(200);
    return response.body;
  }

  async getLast() {
    return (await this.getAll()).slice(-1)[0];
  }

  async update(id, payload) {
    return t.request({
      url: `${DeviceApi.API_BASE_URL}/devices/${id}`,
      method: 'PUT',
      body: payload,
    });
  }

  async delete(id) {
    return t.request({
      url: `${DeviceApi.API_BASE_URL}/devices/${id}`,
      method: 'DELETE',
    });
  }
}

export default new DeviceApi();
