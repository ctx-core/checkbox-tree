import { clone } from '@ctx-core/object';
import { get } from '@ctx-core/store';
export function onchange_all_checkbox_(store, fn) {
    return function onchange_all_checkbox(event) {
        const currentTarget = (event.detail
            || event).currentTarget;
        const { checked } = currentTarget;
        const item_h_selected = clone(get(store));
        fn(item_h_selected, checked);
        store.set(item_h_selected);
    };
}
export { onchange_all_checkbox_ as _onchange_all_checkbox, };
//# sourceMappingURL=src/onchange_all_checkbox_.js.map