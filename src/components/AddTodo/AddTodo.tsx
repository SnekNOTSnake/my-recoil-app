import React, { useState } from 'react'
import { useSetRecoilState } from 'recoil'
import { todoListState } from '../../recoil-states/todoList'
import { FormSubmit, InputChange } from '../../types/Types'

let id = 1
const getId = () => id++

const AddTodo: React.FC = () => {
	const setMyTodo = useSetRecoilState(todoListState)
	const [title, setTitle] = useState('')

	const onContentChange = (e: InputChange) => setTitle(e.target.value)
	const onFormSubmit = (e: FormSubmit) => {
		e.preventDefault()
		if (!title) return
		setMyTodo((prev) => [...prev, { id: getId(), title, completed: false }])
		setTitle('')
	}

	return (
		<div className="AddTodo">
			<form onSubmit={onFormSubmit}>
				<input type="text" value={title} onChange={onContentChange} />
				<button type="submit">Add</button>
			</form>
		</div>
	)
}

export default AddTodo
