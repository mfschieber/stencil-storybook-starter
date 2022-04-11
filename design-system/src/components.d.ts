/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { Identifier } from "./components/shared/identifier";
export namespace Components {
    interface GmailDropdownbutton {
        "close": () => Promise<void>;
        "identifier"?: Identifier;
        "items"?: string[];
        "open": () => Promise<void>;
        "size"?: 'large' | 'medium' | 'small' | 'xsmall';
        "toggle": () => Promise<void>;
        "type"?: 'normal' | 'bold' | 'italic';
    }
    interface GmailImage {
        "alt": string;
        "online"?: 'online' | 'offline' | 'busy';
        "shape"?: 'round' | 'smooth' | 'squared';
        "size"?: 'large' | 'medium' | 'small' | 'xsmall';
        "src": string;
    }
    interface GmailLogobutton {
        "identifier"?: Identifier;
        "size"?: 'large' | 'medium' | 'small' | 'xsmall';
        "type"?: 'reload' | 'search' | 'leftarrow' | 'rightarrow' | 'gearwheel' | 'menu' | 'dropdown';
    }
    interface GmailNotification {
        "number"?: any;
        "online"?: 'online' | 'offline' | 'busy';
        "size"?: 'large' | 'medium' | 'small' | 'xsmall';
    }
    interface GmailSearch {
    }
    interface GmailSearchbar {
        "size"?: 'large' | 'medium' | 'small' | 'xsmall';
    }
    interface GmailTextbutton {
        "content"?: string;
        "identifier"?: Identifier;
        "isDisabled"?: false;
        "size"?: 'large' | 'medium' | 'small' | 'xsmall';
        "type"?: 'normal' | 'bold' | 'italic';
    }
    interface GmailTitle {
        "content": string;
        "size"?: 'large' | 'medium' | 'small' | 'xsmall' | 'xxsmall' | 'xxxsmall';
        "type"?: 'normal' | 'bold' | 'italic';
    }
}
declare global {
    interface HTMLGmailDropdownbuttonElement extends Components.GmailDropdownbutton, HTMLStencilElement {
    }
    var HTMLGmailDropdownbuttonElement: {
        prototype: HTMLGmailDropdownbuttonElement;
        new (): HTMLGmailDropdownbuttonElement;
    };
    interface HTMLGmailImageElement extends Components.GmailImage, HTMLStencilElement {
    }
    var HTMLGmailImageElement: {
        prototype: HTMLGmailImageElement;
        new (): HTMLGmailImageElement;
    };
    interface HTMLGmailLogobuttonElement extends Components.GmailLogobutton, HTMLStencilElement {
    }
    var HTMLGmailLogobuttonElement: {
        prototype: HTMLGmailLogobuttonElement;
        new (): HTMLGmailLogobuttonElement;
    };
    interface HTMLGmailNotificationElement extends Components.GmailNotification, HTMLStencilElement {
    }
    var HTMLGmailNotificationElement: {
        prototype: HTMLGmailNotificationElement;
        new (): HTMLGmailNotificationElement;
    };
    interface HTMLGmailSearchElement extends Components.GmailSearch, HTMLStencilElement {
    }
    var HTMLGmailSearchElement: {
        prototype: HTMLGmailSearchElement;
        new (): HTMLGmailSearchElement;
    };
    interface HTMLGmailSearchbarElement extends Components.GmailSearchbar, HTMLStencilElement {
    }
    var HTMLGmailSearchbarElement: {
        prototype: HTMLGmailSearchbarElement;
        new (): HTMLGmailSearchbarElement;
    };
    interface HTMLGmailTextbuttonElement extends Components.GmailTextbutton, HTMLStencilElement {
    }
    var HTMLGmailTextbuttonElement: {
        prototype: HTMLGmailTextbuttonElement;
        new (): HTMLGmailTextbuttonElement;
    };
    interface HTMLGmailTitleElement extends Components.GmailTitle, HTMLStencilElement {
    }
    var HTMLGmailTitleElement: {
        prototype: HTMLGmailTitleElement;
        new (): HTMLGmailTitleElement;
    };
    interface HTMLElementTagNameMap {
        "gmail-dropdownbutton": HTMLGmailDropdownbuttonElement;
        "gmail-image": HTMLGmailImageElement;
        "gmail-logobutton": HTMLGmailLogobuttonElement;
        "gmail-notification": HTMLGmailNotificationElement;
        "gmail-search": HTMLGmailSearchElement;
        "gmail-searchbar": HTMLGmailSearchbarElement;
        "gmail-textbutton": HTMLGmailTextbuttonElement;
        "gmail-title": HTMLGmailTitleElement;
    }
}
declare namespace LocalJSX {
    interface GmailDropdownbutton {
        "identifier"?: Identifier;
        "items"?: string[];
        "size"?: 'large' | 'medium' | 'small' | 'xsmall';
        "type"?: 'normal' | 'bold' | 'italic';
    }
    interface GmailImage {
        "alt": string;
        "online"?: 'online' | 'offline' | 'busy';
        "shape"?: 'round' | 'smooth' | 'squared';
        "size"?: 'large' | 'medium' | 'small' | 'xsmall';
        "src": string;
    }
    interface GmailLogobutton {
        "identifier"?: Identifier;
        "onLogobuttonClicked"?: (event: CustomEvent<Identifier>) => void;
        "size"?: 'large' | 'medium' | 'small' | 'xsmall';
        "type"?: 'reload' | 'search' | 'leftarrow' | 'rightarrow' | 'gearwheel' | 'menu' | 'dropdown';
    }
    interface GmailNotification {
        "number"?: any;
        "online"?: 'online' | 'offline' | 'busy';
        "size"?: 'large' | 'medium' | 'small' | 'xsmall';
    }
    interface GmailSearch {
    }
    interface GmailSearchbar {
        "size"?: 'large' | 'medium' | 'small' | 'xsmall';
    }
    interface GmailTextbutton {
        "content"?: string;
        "identifier"?: Identifier;
        "isDisabled"?: false;
        "onTextbuttonClicked"?: (event: CustomEvent<Identifier>) => void;
        "size"?: 'large' | 'medium' | 'small' | 'xsmall';
        "type"?: 'normal' | 'bold' | 'italic';
    }
    interface GmailTitle {
        "content": string;
        "size"?: 'large' | 'medium' | 'small' | 'xsmall' | 'xxsmall' | 'xxxsmall';
        "type"?: 'normal' | 'bold' | 'italic';
    }
    interface IntrinsicElements {
        "gmail-dropdownbutton": GmailDropdownbutton;
        "gmail-image": GmailImage;
        "gmail-logobutton": GmailLogobutton;
        "gmail-notification": GmailNotification;
        "gmail-search": GmailSearch;
        "gmail-searchbar": GmailSearchbar;
        "gmail-textbutton": GmailTextbutton;
        "gmail-title": GmailTitle;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "gmail-dropdownbutton": LocalJSX.GmailDropdownbutton & JSXBase.HTMLAttributes<HTMLGmailDropdownbuttonElement>;
            "gmail-image": LocalJSX.GmailImage & JSXBase.HTMLAttributes<HTMLGmailImageElement>;
            "gmail-logobutton": LocalJSX.GmailLogobutton & JSXBase.HTMLAttributes<HTMLGmailLogobuttonElement>;
            "gmail-notification": LocalJSX.GmailNotification & JSXBase.HTMLAttributes<HTMLGmailNotificationElement>;
            "gmail-search": LocalJSX.GmailSearch & JSXBase.HTMLAttributes<HTMLGmailSearchElement>;
            "gmail-searchbar": LocalJSX.GmailSearchbar & JSXBase.HTMLAttributes<HTMLGmailSearchbarElement>;
            "gmail-textbutton": LocalJSX.GmailTextbutton & JSXBase.HTMLAttributes<HTMLGmailTextbuttonElement>;
            "gmail-title": LocalJSX.GmailTitle & JSXBase.HTMLAttributes<HTMLGmailTitleElement>;
        }
    }
}
