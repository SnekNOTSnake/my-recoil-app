import { atom } from 'recoil'
import { Todo } from '../types/Types'

const todoState = atom({
	key: 'myTodo',
	default: [{ id: 0, title: 'Add more todos', completed: false }] as Todo[],
})

export default todoState
