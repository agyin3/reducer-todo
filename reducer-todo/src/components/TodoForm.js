import React, { useContext } from 'react';
import TodoContext from '../contexts/TodoContext.js'
import { Button, Form } from 'semantic-ui-react';

const TodoForm = () => {

    const { handleTask, handleSubmit, task, clearComplete } = useContext(TodoContext)
    return(
        <div className='form-container'>
            <Form size='large' onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Input placeholder='Enter Task Here' onChange={e => handleTask(e.target.value)} value={task} />
                    <Button type='submit'>Add Task</Button>
                    <Button onClick={clearComplete}>Clear</Button>
                </Form.Group>
            </Form>
        </div>
    )
}

export default TodoForm