import { clone } from '@ctx-core/object'
/** @type {import('./onchange_checkbox_.d.ts').onchange_checkbox_} */
export const onchange_checkbox_ = store$=>
	(event, item)=>{
		const currentTarget = (event.detail || event).currentTarget
		const { checked } = currentTarget
		const item_r_selected = clone(store$.$)
		if (!!checked != !!item_r_selected[item]) {
			item_r_selected[item] = checked
			store$.set(item_r_selected)
		}
	}
export { onchange_checkbox_ as _onchange_checkbox, }
