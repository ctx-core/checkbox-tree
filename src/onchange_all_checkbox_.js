import { clone } from '@ctx-core/object'
/** @type {import('./onchange_all_checkbox_.d.ts').onchange_all_checkbox_} */
export const onchange_all_checkbox_ = (store$, fn)=>event=>{
	const currentTarget = (event.detail || event).currentTarget
	const { checked } = currentTarget
	const item_h_selected = clone(store$.$)
	fn(item_h_selected, checked)
	store$.$ = item_h_selected
}
export { onchange_all_checkbox_ as _onchange_all_checkbox, }
