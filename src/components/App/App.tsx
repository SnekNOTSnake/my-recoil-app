import React from 'react'
import { useRecoilValue } from 'recoil'

import { myFilteredList } from '../../recoil-states/todoList'
import AddTodo from '../AddTodo'
import TodoItem from '../TodoItem'
import TodoListFilter from '../TodoListFilter'
import TodoListStats from '../TodoListStats'

const App: React.FC = () => {
	const todoList = useRecoilValue(myFilteredList)

	return (
		<div className="App">
			<TodoListStats />
			<TodoListFilter />
			<AddTodo />

			{todoList.map((todo) => (
				<TodoItem key={todo.id} item={todo} />
			))}
		</div>
	)
}

export default App
