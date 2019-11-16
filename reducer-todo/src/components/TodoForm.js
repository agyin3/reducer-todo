import React from 'react';
import { Button, Form } from 'semantic-ui-react';

const TodoForm = ({ handleChange, handleSubmit, value }) => {
    return(
        <Form size='large' onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Input placeholder='Enter Task Here' onChange={handleChange} value={value} />
                <Button type='submit'>Submit</Button>
            </Form.Group>
        </Form>
    )
}

export default TodoForm