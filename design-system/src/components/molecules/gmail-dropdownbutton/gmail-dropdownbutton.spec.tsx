import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';

import { GmailDropdownbutton } from './gmail-dropdownbutton';

describe('ATOMS/gmail-dropdownbutton', () => {
  let page;

  it('should render', async () => {
    page = await newSpecPage({
      components: [GmailDropdownbutton],
      template: () => <gmail-dropdownbutton></gmail-dropdownbutton>,
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should fire a click event', async () => {
    page = await newSpecPage({
      components: [GmailDropdownbutton],
      html: `<gmail-dropdownbutton></gmail-dropdownbutton>`,
    });

    const onClick = jest.fn();
    page.root.addEventListener('click', onClick);
    await page.waitForChanges();
    expect(page.root).toMatchSnapshot();
    page.root.click();
    expect(onClick).toHaveBeenCalled();
    expect(page.root).toMatchSnapshot();
  });
});
