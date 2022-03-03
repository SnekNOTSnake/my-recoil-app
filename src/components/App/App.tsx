import React from 'react'
import { useRecoilValue } from 'recoil'

import todoAtom from '../../atoms/todo'
import AddTodo from '../AddTodo'
import TodoItem from '../TodoItem'

import './App.css'

const App: React.FC = () => {
	const todoList = useRecoilValue(todoAtom)

	return (
		<div className="App">
			<AddTodo />

			{todoList.map((todo) => (
				<TodoItem key={todo.id} item={todo} />
			))}
		</div>
	)
}

export default App
