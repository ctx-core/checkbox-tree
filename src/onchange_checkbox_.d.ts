import type { WritableAtom$ } from '@ctx-core/nanostores'
import { checkbox_tree_default_Event_T } from './_types'
export declare function onchange_checkbox_<Evt = checkbox_tree_default_Event_T>(
	store$:WritableAtom$<Record<string, boolean>>
):(event:Evt, item:string)=>void;
export { onchange_checkbox_ as _onchange_checkbox, }
