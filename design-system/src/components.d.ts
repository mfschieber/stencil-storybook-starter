/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface GmailButton {
        "size"?: 'large' | 'medium' | 'small' | 'xsmall';
        "type"?: 'reload' | 'search' | 'leftarrow' | 'rightarrow' | 'gearwheel' | 'menu';
    }
    interface GmailImage {
        "alt": string;
        "online"?: boolean;
        "shape"?: 'round' | 'smooth' | 'squared';
        "size"?: 'large' | 'medium' | 'small' | 'xsmall';
        "src": string;
    }
    interface GmailSearch {
    }
    interface MyComponent {
        "first"?: string;
        "last"?: string;
    }
}
declare global {
    interface HTMLGmailButtonElement extends Components.GmailButton, HTMLStencilElement {
    }
    var HTMLGmailButtonElement: {
        prototype: HTMLGmailButtonElement;
        new (): HTMLGmailButtonElement;
    };
    interface HTMLGmailImageElement extends Components.GmailImage, HTMLStencilElement {
    }
    var HTMLGmailImageElement: {
        prototype: HTMLGmailImageElement;
        new (): HTMLGmailImageElement;
    };
    interface HTMLGmailSearchElement extends Components.GmailSearch, HTMLStencilElement {
    }
    var HTMLGmailSearchElement: {
        prototype: HTMLGmailSearchElement;
        new (): HTMLGmailSearchElement;
    };
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLElementTagNameMap {
        "gmail-button": HTMLGmailButtonElement;
        "gmail-image": HTMLGmailImageElement;
        "gmail-search": HTMLGmailSearchElement;
        "my-component": HTMLMyComponentElement;
    }
}
declare namespace LocalJSX {
    interface GmailButton {
        "size"?: 'large' | 'medium' | 'small' | 'xsmall';
        "type"?: 'reload' | 'search' | 'leftarrow' | 'rightarrow' | 'gearwheel' | 'menu';
    }
    interface GmailImage {
        "alt": string;
        "online"?: boolean;
        "shape"?: 'round' | 'smooth' | 'squared';
        "size"?: 'large' | 'medium' | 'small' | 'xsmall';
        "src": string;
    }
    interface GmailSearch {
    }
    interface MyComponent {
        "first"?: string;
        "last"?: string;
    }
    interface IntrinsicElements {
        "gmail-button": GmailButton;
        "gmail-image": GmailImage;
        "gmail-search": GmailSearch;
        "my-component": MyComponent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "gmail-button": LocalJSX.GmailButton & JSXBase.HTMLAttributes<HTMLGmailButtonElement>;
            "gmail-image": LocalJSX.GmailImage & JSXBase.HTMLAttributes<HTMLGmailImageElement>;
            "gmail-search": LocalJSX.GmailSearch & JSXBase.HTMLAttributes<HTMLGmailSearchElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
        }
    }
}
