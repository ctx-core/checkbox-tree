import type { WritableAtom_ } from '@ctx-core/nanostores'
import type { checkbox_tree__event_T } from '../_types/index.js'
export declare function checkbox__onchange_<
	Evt = checkbox_tree__event_T
>(
	atom_:WritableAtom_<Record<string, boolean>>
):(event:Evt, item:string)=>any
export {
	checkbox__onchange_ as onchange_checkbox_,
	checkbox__onchange_ as _onchange_checkbox,
}
