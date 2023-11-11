import type { WritableAtom_ } from '@ctx-core/nanostores'
import type { checkbox_tree__event_T } from '../_types/index.js'
export declare function all__checkbox__onchange_<
	Evt = checkbox_tree__event_T
>(
	atom_:WritableAtom_<Record<string, boolean>>,
	fn:all__checkbox__onchange___fn_T
):(event:Evt)=>any
export {
	all__checkbox__onchange_ as onchange_all_checkbox_,
	all__checkbox__onchange_ as _onchange_all_checkbox,
}
export type all__checkbox__onchange___fn_T = (
	item_R_selected:Record<string, boolean>,
	checked:boolean
)=>void
