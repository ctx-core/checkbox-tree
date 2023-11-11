import { assign } from '@ctx-core/object'
/** @typedef {import('@ctx-core/nanostores').WritableAtom_}WritableAtom_ */
/** @typedef {import('../_types/index.d.ts').checkbox_tree__event_T}checkbox_tree__event_T */
/**
 * @param {WritableAtom_<Record<string, boolean>>}atom_
 * @returns {(event:checkbox_tree__event_T, item:string)=>any}
 * @private
 */
export function checkbox__onchange_(atom_) {
	return (event, item)=>{
		const currentTarget = (event.detail || event).currentTarget
		const { checked } = currentTarget
		const item_R_selected = assign({}, atom_.$)
		if (!!checked != !!item_R_selected[item]) {
			item_R_selected[item] = checked
			atom_.set(item_R_selected)
		}
	}
}
export {
	checkbox__onchange_ as onchange_checkbox_,
	checkbox__onchange_ as _onchange_checkbox,
}
