import { Component, ComponentInterface, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'avatar-image',
  styleUrl: 'avatar-image.scss',
  shadow: true,
})
export class Avatar implements ComponentInterface {
  @Prop() src!: string;
  @Prop() alt!: string;
  @Prop() size?: 'large' | 'medium' | 'small' | 'xsmall' = 'medium';
  @Prop() shape?: 'round' | 'smooth' | 'squared' = 'round';
  @Prop() online?: boolean;

  render() {
    return (
      <Host>
        <img src={this.src} alt={this.alt} class={`img ${this.size} ${this.shape} ${this.online} `}>
          {' '}
        </img>
        <notification></notification>
      </Host>
    );
  }
}
