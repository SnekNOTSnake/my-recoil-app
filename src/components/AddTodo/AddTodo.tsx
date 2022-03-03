import React, { useState } from 'react'
import { useSetRecoilState } from 'recoil'
import todoAtom from '../../atoms/todo'
import { FormSubmit, InputChange } from '../../types/Types'

let id = 1
const getId = () => id++

const AddTodo: React.FC = () => {
	const setMyTodo = useSetRecoilState(todoAtom)
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
