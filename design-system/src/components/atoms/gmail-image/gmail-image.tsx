import { Component, ComponentInterface, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'gmail-image',
  styleUrl: 'gmail-image.scss',
  shadow: true,
})
export class GmailImage implements ComponentInterface {
  @Prop() src!: string;
  @Prop() alt!: string;
  @Prop() size?: 'large' | 'medium' | 'small' | 'xsmall' = 'medium';
  @Prop() shape?: 'round' | 'smooth' | 'squared' = 'round';
  @Prop() online?: 'online' | 'offline' | 'busy';
  render() {
    return (
      <Host>
        <img src={this.src} alt={this.alt} class={`img ${this.size} ${this.shape} ${this.online} `} />
        <div class={`notification ${this.size}  ${this.online} `}></div>
      </Host>
    );
  }
}
