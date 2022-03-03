import React from 'react'
import { useRecoilValue } from 'recoil'
import { myListStatsState } from '../../recoil-states/todoList'

const TodoListStats: React.FC = () => {
	const { all, completed, uncompleted, percentCompleted } =
		useRecoilValue(myListStatsState)

	return (
		<div className="TodoListStats">
			<ul>
				<li>Total: {all}</li>
				<li>Completed: {completed}</li>
				<li>Uncompleted: {uncompleted}</li>
				<li>Percentage: {Math.round(percentCompleted * 100)}%</li>
			</ul>
		</div>
	)
}

export default TodoListStats
