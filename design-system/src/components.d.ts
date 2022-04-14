/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { Identifier } from "./components/shared/identifier";
export namespace Components {
    interface GmailButton {
        "content"?: string;
        "font"?: 'normal' | 'bold' | 'italic';
        "identifier"?: Identifier;
        "isDisabled"?: boolean;
        "size"?: 'large' | 'medium' | 'small' | 'xsmall';
        "type"?: | 'reload'
    | 'search'
    | 'leftarrow'
    | 'rightarrow'
    | 'gearwheel'
    | 'menu'
    | 'dropdown'
    | 'archive'
    | 'delete'
    | 'markunread'
    | 'snooze'
    | 'calendar'
    | 'check'
    | 'pen'
    | 'file'
    | 'send'
    | 'inbox'
    | 'star'
    | 'notification';
    }
    interface GmailCheckbox {
        "identifier"?: Identifier;
        "size"?: 'large' | 'medium' | 'small' | 'xsmall' | 'xxsmall';
    }
    interface GmailDetails {
        "content": string;
        "identifier"?: Identifier;
        "size"?: 'large' | 'medium' | 'small' | 'xsmall';
        "summary": string;
        "toggle": () => Promise<void>;
        "type"?: 'normal' | 'bold' | 'italic';
    }
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
        "content"?: string;
        "font"?: 'normal' | 'bold' | 'italic';
        "identifier"?: Identifier;
        "size"?: 'large' | 'medium' | 'small' | 'xsmall';
        "type"?: | 'reload'
    | 'search'
    | 'leftarrow'
    | 'rightarrow'
    | 'gearwheel'
    | 'menu'
    | 'dropdown'
    | 'archive'
    | 'delete'
    | 'markunread'
    | 'snooze'
    | 'calendar'
    | 'check'
    | 'pen'
    | 'notification';
    }
    interface GmailMaildisplay {
        "expediteur"?: string;
        "identifier"?: Identifier;
        "isRead"?: boolean;
        "isSelected": boolean;
        "mailContent"?: string;
        "mailTitle"?: string;
        "size"?: 'large' | 'medium' | 'small' | 'xsmall';
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
    interface GmailStarbox {
        "identifier"?: Identifier;
        "size"?: 'large' | 'medium' | 'small' | 'xsmall' | 'xxsmall';
    }
    interface GmailStartbanner {
        "identifier"?: Identifier;
        "size"?: 'large' | 'medium' | 'small' | 'xsmall';
    }
    interface GmailTitle {
        "content": string;
        "couleur"?: 'noir' | 'gris';
        "size"?: 'large' | 'medium' | 'small' | 'xsmall' | 'xxsmall' | 'xxxsmall';
        "type"?: 'normal' | 'bold' | 'italic';
    }
}
declare global {
    interface HTMLGmailButtonElement extends Components.GmailButton, HTMLStencilElement {
    }
    var HTMLGmailButtonElement: {
        prototype: HTMLGmailButtonElement;
        new (): HTMLGmailButtonElement;
    };
    interface HTMLGmailCheckboxElement extends Components.GmailCheckbox, HTMLStencilElement {
    }
    var HTMLGmailCheckboxElement: {
        prototype: HTMLGmailCheckboxElement;
        new (): HTMLGmailCheckboxElement;
    };
    interface HTMLGmailDetailsElement extends Components.GmailDetails, HTMLStencilElement {
    }
    var HTMLGmailDetailsElement: {
        prototype: HTMLGmailDetailsElement;
        new (): HTMLGmailDetailsElement;
    };
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
    interface HTMLGmailMaildisplayElement extends Components.GmailMaildisplay, HTMLStencilElement {
    }
    var HTMLGmailMaildisplayElement: {
        prototype: HTMLGmailMaildisplayElement;
        new (): HTMLGmailMaildisplayElement;
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
    interface HTMLGmailStarboxElement extends Components.GmailStarbox, HTMLStencilElement {
    }
    var HTMLGmailStarboxElement: {
        prototype: HTMLGmailStarboxElement;
        new (): HTMLGmailStarboxElement;
    };
    interface HTMLGmailStartbannerElement extends Components.GmailStartbanner, HTMLStencilElement {
    }
    var HTMLGmailStartbannerElement: {
        prototype: HTMLGmailStartbannerElement;
        new (): HTMLGmailStartbannerElement;
    };
    interface HTMLGmailTitleElement extends Components.GmailTitle, HTMLStencilElement {
    }
    var HTMLGmailTitleElement: {
        prototype: HTMLGmailTitleElement;
        new (): HTMLGmailTitleElement;
    };
    interface HTMLElementTagNameMap {
        "gmail-button": HTMLGmailButtonElement;
        "gmail-checkbox": HTMLGmailCheckboxElement;
        "gmail-details": HTMLGmailDetailsElement;
        "gmail-dropdownbutton": HTMLGmailDropdownbuttonElement;
        "gmail-image": HTMLGmailImageElement;
        "gmail-logobutton": HTMLGmailLogobuttonElement;
        "gmail-maildisplay": HTMLGmailMaildisplayElement;
        "gmail-notification": HTMLGmailNotificationElement;
        "gmail-search": HTMLGmailSearchElement;
        "gmail-searchbar": HTMLGmailSearchbarElement;
        "gmail-starbox": HTMLGmailStarboxElement;
        "gmail-startbanner": HTMLGmailStartbannerElement;
        "gmail-title": HTMLGmailTitleElement;
    }
}
declare namespace LocalJSX {
    interface GmailButton {
        "content"?: string;
        "font"?: 'normal' | 'bold' | 'italic';
        "identifier"?: Identifier;
        "isDisabled"?: boolean;
        "onLogobuttonClicked"?: (event: CustomEvent<Identifier>) => void;
        "size"?: 'large' | 'medium' | 'small' | 'xsmall';
        "type"?: | 'reload'
    | 'search'
    | 'leftarrow'
    | 'rightarrow'
    | 'gearwheel'
    | 'menu'
    | 'dropdown'
    | 'archive'
    | 'delete'
    | 'markunread'
    | 'snooze'
    | 'calendar'
    | 'check'
    | 'pen'
    | 'file'
    | 'send'
    | 'inbox'
    | 'star'
    | 'notification';
    }
    interface GmailCheckbox {
        "identifier"?: Identifier;
        "onCheckboxclicked"?: (event: CustomEvent<Identifier>) => void;
        "size"?: 'large' | 'medium' | 'small' | 'xsmall' | 'xxsmall';
    }
    interface GmailDetails {
        "content": string;
        "identifier"?: Identifier;
        "size"?: 'large' | 'medium' | 'small' | 'xsmall';
        "summary": string;
        "type"?: 'normal' | 'bold' | 'italic';
    }
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
        "content"?: string;
        "font"?: 'normal' | 'bold' | 'italic';
        "identifier"?: Identifier;
        "size"?: 'large' | 'medium' | 'small' | 'xsmall';
        "type"?: | 'reload'
    | 'search'
    | 'leftarrow'
    | 'rightarrow'
    | 'gearwheel'
    | 'menu'
    | 'dropdown'
    | 'archive'
    | 'delete'
    | 'markunread'
    | 'snooze'
    | 'calendar'
    | 'check'
    | 'pen'
    | 'notification';
    }
    interface GmailMaildisplay {
        "expediteur"?: string;
        "identifier"?: Identifier;
        "isRead"?: boolean;
        "isSelected"?: boolean;
        "mailContent"?: string;
        "mailTitle"?: string;
        "size"?: 'large' | 'medium' | 'small' | 'xsmall';
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
    interface GmailStarbox {
        "identifier"?: Identifier;
        "onStarboxclicked"?: (event: CustomEvent<Identifier>) => void;
        "size"?: 'large' | 'medium' | 'small' | 'xsmall' | 'xxsmall';
    }
    interface GmailStartbanner {
        "identifier"?: Identifier;
        "size"?: 'large' | 'medium' | 'small' | 'xsmall';
    }
    interface GmailTitle {
        "content": string;
        "couleur"?: 'noir' | 'gris';
        "size"?: 'large' | 'medium' | 'small' | 'xsmall' | 'xxsmall' | 'xxxsmall';
        "type"?: 'normal' | 'bold' | 'italic';
    }
    interface IntrinsicElements {
        "gmail-button": GmailButton;
        "gmail-checkbox": GmailCheckbox;
        "gmail-details": GmailDetails;
        "gmail-dropdownbutton": GmailDropdownbutton;
        "gmail-image": GmailImage;
        "gmail-logobutton": GmailLogobutton;
        "gmail-maildisplay": GmailMaildisplay;
        "gmail-notification": GmailNotification;
        "gmail-search": GmailSearch;
        "gmail-searchbar": GmailSearchbar;
        "gmail-starbox": GmailStarbox;
        "gmail-startbanner": GmailStartbanner;
        "gmail-title": GmailTitle;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "gmail-button": LocalJSX.GmailButton & JSXBase.HTMLAttributes<HTMLGmailButtonElement>;
            "gmail-checkbox": LocalJSX.GmailCheckbox & JSXBase.HTMLAttributes<HTMLGmailCheckboxElement>;
            "gmail-details": LocalJSX.GmailDetails & JSXBase.HTMLAttributes<HTMLGmailDetailsElement>;
            "gmail-dropdownbutton": LocalJSX.GmailDropdownbutton & JSXBase.HTMLAttributes<HTMLGmailDropdownbuttonElement>;
            "gmail-image": LocalJSX.GmailImage & JSXBase.HTMLAttributes<HTMLGmailImageElement>;
            "gmail-logobutton": LocalJSX.GmailLogobutton & JSXBase.HTMLAttributes<HTMLGmailLogobuttonElement>;
            "gmail-maildisplay": LocalJSX.GmailMaildisplay & JSXBase.HTMLAttributes<HTMLGmailMaildisplayElement>;
            "gmail-notification": LocalJSX.GmailNotification & JSXBase.HTMLAttributes<HTMLGmailNotificationElement>;
            "gmail-search": LocalJSX.GmailSearch & JSXBase.HTMLAttributes<HTMLGmailSearchElement>;
            "gmail-searchbar": LocalJSX.GmailSearchbar & JSXBase.HTMLAttributes<HTMLGmailSearchbarElement>;
            "gmail-starbox": LocalJSX.GmailStarbox & JSXBase.HTMLAttributes<HTMLGmailStarboxElement>;
            "gmail-startbanner": LocalJSX.GmailStartbanner & JSXBase.HTMLAttributes<HTMLGmailStartbannerElement>;
            "gmail-title": LocalJSX.GmailTitle & JSXBase.HTMLAttributes<HTMLGmailTitleElement>;
        }
    }
}
