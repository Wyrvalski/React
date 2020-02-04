import React, { Component } from 'react'
import PageHeader from '../template/pageheader'
import TodoForm from './todoFrom'
import TodoList from './todoList'

export default class Todo extends Component{
    render(){
        return (
            <div>
                <PageHeader name="Tarefas" small="Cadastros" />
                <TodoForm />
                <TodoList />
            </div>
        )
    }
}