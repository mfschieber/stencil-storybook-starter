import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';

import { GmailButton } from './gmail-button';

describe('ATOMS/gmail-logobutton', () => {
  let page;

  it('should render', async () => {
    page = await newSpecPage({
      components: [GmailButton],
      template: () => <gmail-logobutton></gmail-logobutton>,
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should fire a click event', async () => {
    page = await newSpecPage({
      components: [GmailButton],
      html: `<gmail-logobutton></gmail-logobutton>`,
    });

    const onClick = jest.fn();
    page.root.addEventListener('click', onClick);
    await page.waitForChanges();
    page.root.click();
    expect(onClick).toHaveBeenCalled();
  });
});
