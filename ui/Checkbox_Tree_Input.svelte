<script>
export let checked = false
export let indeterminate = false
export let id = ''
export let title = ''
let input
</script>

<input
	bind:this={input}
	type="checkbox"
	id={id}
	class="Checkbox_Tree_Input"
	{title}
	on:change
	bind:checked
	bind:indeterminate
/>
<label
	for={id}
	class="Checkbox_Tree_Input"
>{title}</label>
