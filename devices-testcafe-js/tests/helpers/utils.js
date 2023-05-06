/* eslint-disable no-restricted-globals */
/* eslint-disable import/prefer-default-export */
import { t } from 'testcafe';

export async function pageReload() {
  await t.eval(() => location.reload(true));
}
