<div class="Checkbox_Tree">
	<slot></slot>
</div>

<style lang="scss">
:global(.Checkbox_Tree) {
	:global(h3) {
		margin-bottom: 0;
	}
	:global(ul) {
		margin: 0;
		padding: 0;
		list-style: none;
		:global(input) {
			height: auto;
		}
		:global(li) {
			position: relative;
			padding: 0 0 0 1rem;
			:global(a.Checkbox_Tree_Knob) {
				display: block;
				position: absolute;
				top: 0;
				left: 0;
				font-size: 0.6rem;
				text-decoration: none;
				&:hover {
					text-decoration: none;
				}
				&.expanded {
					transform: rotate(45deg);
				}
			}
		}
	}
}
</style>
