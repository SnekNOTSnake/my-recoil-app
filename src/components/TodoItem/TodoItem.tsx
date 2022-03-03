import React from 'react'
import { useRecoilState } from 'recoil'

import { todoListState } from '../../recoil-states/todoList'
import { InputChange, Todo } from '../../types/Types'

const replaceItemAtIndex = <T,>(arr: T[], index: number, newItem: T): T[] => {
	const newArr = [...arr]
	newArr.splice(index, 1, newItem)
	return newArr
}

const deleteItemAtIndex = <T,>(arr: T[], index: number): T[] => {
	const newArr = [...arr]
	newArr.splice(index, 1)
	return newArr
}

const TodoItem: React.FC<{ item: Todo }> = ({ item }) => {
	const [todoList, setTodoList] = useRecoilState(todoListState)
	const index = todoList.findIndex((el) => el.id === item.id)

	const onTitleChange = (e: InputChange) => {
		const newTodoList = replaceItemAtIndex(todoList, index, {
			...item,
			title: e.target.value,
		})

		setTodoList(newTodoList)
	}

	const onCompleteChange = (e: InputChange) => {
		const newTodoList = replaceItemAtIndex(todoList, index, {
			...item,
			completed: !item.completed,
		})

		setTodoList(newTodoList)
	}

	const onDeleteTodo = () => {
		const newTodoList = deleteItemAtIndex(todoList, index)
		setTodoList(newTodoList)
	}

	return (
		<div className="TodoItem">
			<input type="text" value={item.title} onChange={onTitleChange} />
			<input
				type="checkbox"
				checked={item.completed}
				onChange={onCompleteChange}
			/>
			<button type="button" onClick={onDeleteTodo}>
				Delete
			</button>
		</div>
	)
}

export default TodoItem
