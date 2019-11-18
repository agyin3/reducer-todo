import React, { useContext } from 'react';
import TodoContext from '../contexts/TodoContext.js';
import TagModal from '../components/TagModal.js';
import { Card } from 'semantic-ui-react';

const TodoList = () => {

    const { state, toggleComplete } = useContext(TodoContext);

    return(
        <div className='div-container'>
            <Card.Group>
                {state.map(todo => {
                    return(
                        <Card key={todo.id} color={todo.completed ? 'pink' : 'grey'}>
                            <Card.Content onClick={()=>toggleComplete(todo)}>
                                <Card.Header>{todo.item}</Card.Header>
                                <Card.Meta>{todo.tag}</Card.Meta>
                            </Card.Content>
                            <Card.Content extra>
                                <TagModal todo={todo}/>
                            </Card.Content>
                        </Card>
                    )
                })}
            </Card.Group>
        </div>
    )
}

export default TodoList