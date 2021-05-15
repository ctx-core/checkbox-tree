import { Writable } from '@ctx-core/store';
export declare function _onchange_all_checkbox(store: Writable<Record<string, boolean>>, fn: (item_h_selected: Record<string, boolean>, checked: boolean) => void): (event: CustomEvent<{
    currentTarget: EventTarget;
}> | InputEvent) => void;
