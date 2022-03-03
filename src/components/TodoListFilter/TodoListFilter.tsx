import React from 'react'
import { useRecoilState } from 'recoil'
import { myListFilterState } from '../../recoil-states/todoList'
import { SelectChange } from '../../types/Types'

const TodoListFilter: React.FC = () => {
	const [filter, setFilter] = useRecoilState(myListFilterState)

	const onFilterChange = (e: SelectChange) => setFilter(e.target.value as any)

	return (
		<div className="TodoListFilter">
			<select value={filter} onChange={onFilterChange}>
				<option value="Show All">All</option>
				<option value="Show Completed">Completed</option>
				<option value="Show Uncompleted">Uncompleted</option>
			</select>
		</div>
	)
}

export default TodoListFilter
