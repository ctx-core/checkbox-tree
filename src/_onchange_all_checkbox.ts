import { get, Writable } from '@ctx-core/store'
import { clone } from '@ctx-core/object'
export function _onchange_all_checkbox<I extends object>(store: Writable<I>, fn) {
	return function onchange_all_checkbox(event) {
		const { currentTarget } = event.detail || event
		const { checked } = currentTarget
		const item_h_selected = clone(get(store)) as I
		fn(item_h_selected, checked)
		store.set(item_h_selected)
	}
}
