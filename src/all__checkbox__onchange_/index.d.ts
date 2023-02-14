import { type WritableAtom_ } from '@ctx-core/nanostores'
import type { checkbox_tree_default_Event_T } from '../_types'
export declare function all__checkbox__onchange_<Evt = checkbox_tree_default_Event_T>(
	store$:WritableAtom_<Record<string, boolean>>,
	fn:(item_h_selected:Record<string, boolean>, checked:boolean)=>void
):(event:Evt)=>void;
export {
	all__checkbox__onchange_ as onchange_all_checkbox_,
	all__checkbox__onchange_ as _onchange_all_checkbox, 
}
