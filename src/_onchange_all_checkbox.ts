import { get, Writable } from '@ctx-core/store'
import { clone } from '@ctx-core/object'
export function _onchange_all_checkbox(
	store:Writable<Record<string, boolean>>,
	fn:(item_h_selected:Record<string, boolean>, checked:boolean)=>void
) {
	return function onchange_all_checkbox(
		event:CustomEvent<{ currentTarget:EventTarget }>|InputEvent
	) {
		const currentTarget = (
			(event.detail as CustomEvent<{ currentTarget:EventTarget }>)
			|| event
		).currentTarget! as HTMLInputElement
		const { checked } = currentTarget
		const item_h_selected:Record<string, boolean> = clone(get(store))
		fn(item_h_selected, checked)
		store.set(item_h_selected)
	}
}
