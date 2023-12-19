/// <reference types="../types/index.d.ts" />
/// <reference types="./index.d.ts" />
/** @typedef {import('@ctx-core/nanostores').WritableAtom_} */
/**
 * @param {WritableAtom_<Record<string, boolean>>}atom_
 * @param {all__checkbox__onchange___fn_T}fn
 * @returns {(event:checkbox_tree__event_T)=>any}
 * @private
 */
export function all__checkbox__onchange_(
	atom_,
	fn
) {
	return event=>{
		const currentTarget = (event.detail || event).currentTarget
		const { checked } = currentTarget
		const item_R_selected = { ...atom_.$ }
		fn(item_R_selected, checked)
		atom_.$ = item_R_selected
	}
}
export {
	all__checkbox__onchange_ as onchange_all_checkbox_,
	all__checkbox__onchange_ as _onchange_all_checkbox,
}
