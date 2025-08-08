import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'app-button',
  styleUrl: 'app-button.css',
  shadow: true,
})
export class AppButton {
  @Prop() label: string;
  @Prop() variant: 'primary' | 'secondary' = 'primary';
  render() {
    return (
      <button
        class={{
          'app-button': true,
          'app-button--primary': this.variant === 'primary',
          'app-button--secondary': this.variant === 'secondary',
        }}
      >
        {this.label || 'Click'}
      </button>
    );
  }
}
