import { clone } from '@ctx-core/object'
/** @type {typeof import('./index.d.ts').all__checkbox__onchange_} */
export const all__checkbox__onchange_ = (store$, fn)=>event=>{
	const currentTarget = (event.detail || event).currentTarget
	const { checked } = currentTarget
	const item_h_selected = clone(store$.$)
	fn(item_h_selected, checked)
	store$.$ = item_h_selected
}
export {
	all__checkbox__onchange_ as onchange_all_checkbox_,
	all__checkbox__onchange_ as _onchange_all_checkbox,
}
