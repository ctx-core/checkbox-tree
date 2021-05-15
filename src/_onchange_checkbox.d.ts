import { Writable } from '@ctx-core/store';
export declare function _onchange_checkbox(store: Writable<Record<string, boolean>>): (event: CustomEvent<{
    currentTarget: EventTarget;
}> | InputEvent, item: string) => void;
