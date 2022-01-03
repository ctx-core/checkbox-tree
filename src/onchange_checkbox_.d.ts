import type { WritableAtom$ } from '@ctx-core/nanostores'
export declare function onchange_checkbox_(store$:WritableAtom$<Record<string, boolean>>):(event:CustomEvent<{
	currentTarget:EventTarget;
}>|InputEvent, item:string)=>void;
export { onchange_checkbox_ as _onchange_checkbox, }
