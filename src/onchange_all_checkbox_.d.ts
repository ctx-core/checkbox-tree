import { Writable } from '@ctx-core/store';
export declare function onchange_all_checkbox_(store: Writable<Record<string, boolean>>, fn: (item_h_selected: Record<string, boolean>, checked: boolean) => void): (event: CustomEvent<{
    currentTarget: EventTarget;
}> | InputEvent) => void;
export { onchange_all_checkbox_ as _onchange_all_checkbox, };
