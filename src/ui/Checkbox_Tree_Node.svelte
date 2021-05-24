<script lang="ts">
import { createEventDispatcher } from 'svelte'
import { each } from '@ctx-core/array'
import { clone } from '@ctx-core/object'
import Checkbox_Tree_Knob from './Checkbox_Tree_Knob.svelte'
import Checkbox_Tree_Input from './Checkbox_Tree_Input.svelte'
const dispatch = createEventDispatcher()
export let id = ''
export let title = ''
export let checked = null
export let children = null
export let expanded = null
export let indeterminate = null
export let child_key_a1 = null
$: {
	if (children) {
		let has_true
		let has_false
		each(child_key_a1, child_key => {
			const child = children[child_key]
			has_true = has_true || !!child
			has_false = has_false || !child
		})
		checked = has_true && !has_false
		indeterminate = has_true && has_false
	}
}
function onclick_knob(event:MouseEvent) {
	event.preventDefault()
	expanded = !expanded
}
function onchange_input(event:MouseEvent) {
	const { target } = event
	const { checked } = target
	const i_children = clone(children)
	if (checked) {
		expanded = true
	}
	if (i_children && child_key_a1) {
		each(
			child_key_a1,
			child_key =>
				i_children[child_key] = checked)
		indeterminate = false
	}
	dispatch('change', event)
}
</script>

{#if children}
	<Checkbox_Tree_Knob
		{expanded}
		on:click="{onclick_knob}"
	></Checkbox_Tree_Knob>
{/if}
<Checkbox_Tree_Input
	{id}
	{title}
	bind:indeterminate
	bind:checked
	on:change={onchange_input}
></Checkbox_Tree_Input>
{#if expanded}
	<slot></slot>
{/if}
