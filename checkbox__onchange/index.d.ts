import type { sig_T } from 'ctx-core/rmemo'
import type { checkbox_tree__event_T } from '../_types/index.js'
export declare function checkbox__onchange_<
	Evt = checkbox_tree__event_T
>(
	sig:sig_T<Record<string, boolean>>
):(event:Evt, item:string)=>unknown
export {
	checkbox__onchange_ as onchange_checkbox_,
	checkbox__onchange_ as _onchange_checkbox,
}
