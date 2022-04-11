import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';

import { GmailTextbutton } from './gmail-textbutton';

describe('ATOMS/gmail-textbutton', () => {
  let page;

  it('should render', async () => {
    page = await newSpecPage({
      components: [GmailTextbutton],
      template: () => <gmail-textbutton>Test</gmail-textbutton>,
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should fire a click event', async () => {
    page = await newSpecPage({
      components: [GmailTextbutton],
      html: `<gmail-textbutton></gmail-textbutton>`,
    });

    const onClick = jest.fn();
    page.root.addEventListener('click', onClick);
    await page.waitForChanges();
    page.root.click();
    expect(onClick).toHaveBeenCalled();
  });
});
