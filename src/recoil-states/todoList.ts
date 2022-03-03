import { atom, selector } from 'recoil'
import { Todo } from '../types/Types'

export const todoListState = atom({
	key: 'myList',
	default: [{ id: 0, title: 'Add more todos', completed: false }] as Todo[],
})

export const myListFilterState = atom({
	key: 'myListFilter',
	default: 'Show All' as 'Show All' | 'Show Completed' | 'Show Uncompleted',
})

export const myFilteredList = selector({
	key: 'myFilteredList',
	get: ({ get }) => {
		const filter = get(myListFilterState)
		const list = get(todoListState)

		switch (filter) {
			case 'Show Completed':
				return list.filter((el) => el.completed === true)

			case 'Show Uncompleted':
				return list.filter((el) => el.completed === false)

			default:
				return list
		}
	},
})

export const myListStatsState = selector({
	key: 'myListStats',
	get: ({ get }) => {
		const list = get(todoListState)

		const all = list.length
		const completed = list.filter((el) => el.completed === true).length
		const uncompleted = list.filter((el) => el.completed === false).length
		const percentCompleted = completed / (completed + uncompleted)

		return {
			all,
			completed,
			uncompleted,
			percentCompleted,
		}
	},
})
