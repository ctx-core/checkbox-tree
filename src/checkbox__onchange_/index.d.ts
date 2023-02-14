import { type WritableAtom_ } from '@ctx-core/nanostores'
import { checkbox_tree_default_Event_T } from '../_types'
export declare function checkbox__onchange_<
	Evt = checkbox_tree_default_Event_T
>(
	store$:WritableAtom_<Record<string, boolean>>
):(event:Evt, item:string)=>void;
export {
	checkbox__onchange_ as onchange_checkbox_,
	checkbox__onchange_ as _onchange_checkbox, 
}
