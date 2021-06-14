import { clone } from '@ctx-core/object';
import { get } from '@ctx-core/store';
export function onchange_checkbox_(store) {
    return function onchange_checkbox(event, item) {
        const currentTarget = (event.detail
            || event).currentTarget;
        const { checked } = currentTarget;
        const item_h_selected = clone(get(store));
        if (!!(checked) != !!(item_h_selected[item])) {
            item_h_selected[item] = checked;
            store.set(item_h_selected);
        }
    };
}
export { onchange_checkbox_ as _onchange_checkbox, };
//# sourceMappingURL=src/onchange_checkbox_.js.map