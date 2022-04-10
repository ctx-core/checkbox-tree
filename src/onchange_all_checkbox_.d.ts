import type { WritableAtom$ } from '@ctx-core/nanostores'
import type { checkbox_tree_default_Event_T } from './_types'
export declare function onchange_all_checkbox_<Evt = checkbox_tree_default_Event_T>(
	store$:WritableAtom$<Record<string, boolean>>, fn:(item_h_selected:Record<string, boolean>, checked:boolean)=>void
):(event:Evt)=>void;
export { onchange_all_checkbox_ as _onchange_all_checkbox, }
