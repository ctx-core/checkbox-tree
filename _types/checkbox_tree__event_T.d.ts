export type checkbox_tree__event_T =
	CustomEvent<{ currentTarget:EventTarget }>
	|(Event&{ currentTarget:EventTarget })
export type checkbox_tree_default_Event_T = checkbox_tree__event_T
