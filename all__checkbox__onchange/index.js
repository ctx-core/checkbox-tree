/// <reference types="ctx-core" />
/// <reference types="../types/index.d.ts" />
/// <reference types="./index.d.ts" />
/**
 * @param {sig_T<Record<string, boolean>>}sig
 * @param {all__checkbox__onchange___fn_T}fn
 * @returns {(event:checkbox_tree__event_T)=>any}
 * @private
 */
export function all__checkbox__onchange_(
	sig,
	fn
) {
	return event=>{
		const currentTarget = (event.detail || event).currentTarget
		const { checked } = currentTarget
		const item_R_selected = { ...sig() }
		fn(item_R_selected, checked)
		sig._ = item_R_selected
	}
}
export {
	all__checkbox__onchange_ as onchange_all_checkbox_,
	all__checkbox__onchange_ as _onchange_all_checkbox,
}
