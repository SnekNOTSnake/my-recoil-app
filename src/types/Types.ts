import React from 'react'

export interface Todo {
	id: number
	title: string
	completed: boolean
}

export type InputChange = React.ChangeEvent<HTMLInputElement>
export type SelectChange = React.ChangeEvent<HTMLSelectElement>
export type FormSubmit = React.FormEvent<HTMLFormElement>
