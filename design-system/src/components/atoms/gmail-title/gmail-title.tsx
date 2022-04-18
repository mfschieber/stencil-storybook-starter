import { Component, ComponentInterface, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'gmail-title',
  styleUrl: 'gmail-title.scss',
  shadow: true,
})
export class GmailTitle implements ComponentInterface {
  @Prop() content!: string;
  @Prop() size?: 'large' | 'medium' | 'small' | 'xsmall' | 'xxsmall' | 'xxxsmall' = 'medium';
  @Prop() type?: 'normal' | 'bold' | 'italic';
  @Prop() textColor?: 'noir' | 'gris';
  render() {
    return (
      <Host>
        <p class={`p ${this.size}  ${this.type} ${this.textColor}`}>{this.content}</p>
      </Host>
    );
  }
}
