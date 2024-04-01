/// <reference types="ctx-core" />
/// <reference types="../types/index.d.ts" />
/**
 * @param {sig_T<Record<string, boolean>>}sig
 * @returns {(event:checkbox_tree__event_T, item:string)=>any}
 * @private
 */
export function checkbox__onchange_(sig) {
	return (event, item)=>{
		const currentTarget = (event.detail || event).currentTarget
		const { checked } = currentTarget
		const item_R_selected = { ...sig() }
		if (!!checked != !!item_R_selected[item]) {
			item_R_selected[item] = checked
			sig.set(item_R_selected)
		}
	}
}
export {
	checkbox__onchange_ as onchange_checkbox_,
	checkbox__onchange_ as _onchange_checkbox,
}
