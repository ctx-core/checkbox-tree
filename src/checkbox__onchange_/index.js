import { clone } from '@ctx-core/object'
/** @type {typeof import('./index.d.ts').checkbox__onchange_} */
export const checkbox__onchange_ = store$=>
	(event, item)=>{
		const currentTarget = (event.detail || event).currentTarget
		const { checked } = currentTarget
		const item_r_selected = clone(store$.$)
		if (!!checked != !!item_r_selected[item]) {
			item_r_selected[item] = checked
			store$.set(item_r_selected)
		}
	}
export {
	checkbox__onchange_ as onchange_checkbox_,
	checkbox__onchange_ as _onchange_checkbox,
}
