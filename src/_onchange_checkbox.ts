import { get, Writable } from '@ctx-core/store'
import { clone } from '@ctx-core/object'
export function _onchange_checkbox<I extends object>(store: Writable<I>) {
	return function onchange_checkbox(event, item) {
		const { currentTarget } = event.detail || event
		const { checked } = currentTarget
		const item_h_selected = clone(get(store)) as I
		if (!!(checked) != !!(item_h_selected[item])) {
			item_h_selected[item] = checked
			store.set(item_h_selected)
		}
	}
}
