import { Component, ComponentInterface, h, Host, Prop, State } from '@stencil/core';

@Component({
  tag: 'gmail-button',
  styleUrl: 'gmail-button.scss',
  shadow: true,
})
export class GmailButton implements ComponentInterface {
  @State() srcIcon = '';
  @Prop() size?: 'large' | 'medium' | 'small' | 'xsmall' = 'medium';
  @Prop() type?: 'reload' | 'search' | 'leftarrow' | 'rightarrow' | 'gearwheel' | 'menu';

  icone(type) {
    if (type == 'reload') {
      this.srcIcon = 'https://cdn.iconscout.com/icon/free/png-256/reload-1439726-1214298.png';
    } else if (type == 'search') {
      this.srcIcon = 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Search_Icon.svg/500px-Search_Icon.svg.png';
    } else if (type == 'leftarrow') {
      this.srcIcon =
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAOVBMVEX///8AAAB8fHzz8/NFRUU6Ojp+fn729vZ6enr4+PhCQkLe3t77+/vZ2dlAQEA8PDxLS0sICAhhYWHzprSbAAADVUlEQVR4nO2cgXKbQBBDfSWpS+I4Sf//YxuHuB2bBe6YZkBvpS84zWpPWhY4HHaL49vz1kf4XnQPpbxsfYjvRP9USnkHUzy9lk9ghdqdS0FTvPTgFUihXiWKrWL/WAqaYvdU7gAT6vHhniDMNE6PI4IsoR5fI4Igit1Yoqxe7M9TBCEU+wmJYoQ6tglYFQObYFE8zUoUINRj6IMgitM2ARFqv3DJyFOMoxpIqF3FJSNNsbYHZYV6molqCIrzUQ1AcSmqhfi59akbsBzVAvzY+tQtaLCJv/i19aEbUBfV7qAk0Vab+ISSROujmmgFa8Yl6Qp2zUYvVkF8D+Iler98qYKURNfcokoVdFSL4Ki2I6yyCaUKropqSj24ZqKXIoiPanibwEc124R6BfkT/RqJKlWwbfkiWEF8VGtfvhQtia6KalISpd+i+KjmiT6CkkQd1dQriB+X8BM9vgf5UQ1vE/Tnoo5qERzVdgT8RO/lizpBfFTD2wR+mrBNyFeQTtDLlwj4HpSKaviJHi9R+nNRvE14oo+gJFF8VOMvX/BRjT7R43uQv3xxVBOvoKNaBEe1HQFvE/jlC/7JtqOaegXxEvV7MuoVxEc1/EQ/9YfYWUj1oJcv4hU8/F5B8Lz1oZvAryG/DxPcpQn8MEGmSZBLE8wWCebDBDN+guc0KYSKf16aohfxe4sDf/fkAMegiN/jJ3gXI4VpZAhw/Kkf/25iil50gIvhALcz4L+3SBHg8N89pVjb4L8/TBHgMpgGn2KCAJfgaXiGXuRP/fj/03htMwWtAJfANDz1xxDrRf51k+G9G0/9BIr8AJdg0vDahlBFB7gYDnA7g9c2BIoOcDG0rhuvbWJoCdUBjlDFBAEuwTCVIcDxp36vbQgUEwS4BKbhqT+GWC/yr5sMaxu+LyaYNBIEuARCdYAjUHSAi+EAtzN4bRPiZetDt6F9bSNGsN005Ai2rm2etz7uGrSsbSQJtgQ4QYkOqO1FWYK1AU5UogNqhilpgjUBTliiA5YCnDzBpQAnLtEBc59LAyp4wbRpQAhO/+UWIdEBcYADEQxN4x0j0QFj04ARHK9tUBIdcBvggARvTQMn0QH/1jbICl5wFSqW4NfUT7OJW1x6EU3ww/rf/otE/wAKJDqGVPS6ZQAAAABJRU5ErkJggg==';
    } else if (type == 'rightarrow') {
      this.srcIcon = 'https://cdn-icons-png.flaticon.com/512/60/60758.png';
    } else if (type == 'gearwheel') {
      this.srcIcon = 'https://cdn-icons-png.flaticon.com/512/2099/2099058.png';
    } else if (type == 'menu') {
      this.srcIcon = 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png';
    }
    return this.srcIcon;
  }

  render() {
    return (
      <Host>
        <button class="button ${this.isSelected}">
          <img src={this.icone(this.type)} class={`img ${this.size}`} />
        </button>
      </Host>
    );
  }
}
