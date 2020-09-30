import { get, Writable } from '@ctx-core/store'
import { clone } from '@ctx-core/object'
export function _change__checkbox__all<I extends object>(store: Writable<I>, fn) {
	return function __change__checkbox__all(event) {
		const { currentTarget } = event.detail || event
		const { checked } = currentTarget
		const selected__by__item = clone(get(store)) as I
		fn(selected__by__item, checked)
		store.set(selected__by__item)
	}
}
export function _change__checkbox<I extends object>(store: Writable<I>) {
	return function __change__checkbox(event, item) {
		const { currentTarget } = event.detail || event
		const { checked } = currentTarget
		const selected__by__item = clone(get(store)) as I
		if (!!(checked) != !!(selected__by__item[item])) {
			selected__by__item[item] = checked
			store.set(selected__by__item)
		}
	}
}
