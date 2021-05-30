import { clone } from '@ctx-core/object'
import { get, Writable } from '@ctx-core/store'
export function onchange_checkbox_(
	store:Writable<Record<string, boolean>>
) {
	return function onchange_checkbox(
		event:CustomEvent<{ currentTarget:EventTarget }>|InputEvent,
		item:string
	) {
		const currentTarget = (
			(event.detail as CustomEvent<{ currentTarget:EventTarget }>)
			|| event
		).currentTarget! as HTMLInputElement
		const { checked } = currentTarget
		const item_h_selected:Record<string, boolean> = clone(get(store))
		if (!!(checked) != !!(item_h_selected[item])) {
			item_h_selected[item] = checked
			store.set(item_h_selected)
		}
	}
}
export {
	onchange_checkbox_ as _onchange_checkbox,
}
