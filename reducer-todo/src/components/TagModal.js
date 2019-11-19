import React, { useContext } from 'react';
import TodoContext from '../contexts/TodoContext.js';
import { Modal, Button, Input} from 'semantic-ui-react';

const TagModal = ({ todo }) => {

    const { tag, handleTag, addTag } = useContext(TodoContext);
    return (
        <Modal className='modal' size='mini' centered={false} trigger={<Button size='mini'>Add Tag</Button>}>
            <Modal.Header>Add Tag</Modal.Header>
            <Modal.Content>
            <Input
                icon='tags'
                iconPosition='left'
                size='small'
                label={{ tag: true, content: 'Add Tag' }}
                labelPosition='right'
                placeholder='Enter tags'
                value={tag}
                onChange={e =>handleTag(e.target.value)}
            />
            <Button type='submit' onClick={() => addTag(todo.id)} fluid>Add</Button>
            </Modal.Content>
        </Modal>
    )
}

export default TagModal