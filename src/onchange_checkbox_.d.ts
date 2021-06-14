import { Writable } from '@ctx-core/store';
export declare function onchange_checkbox_(store: Writable<Record<string, boolean>>): (event: CustomEvent<{
    currentTarget: EventTarget;
}> | InputEvent, item: string) => void;
export { onchange_checkbox_ as _onchange_checkbox, };
