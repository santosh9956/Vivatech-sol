import React, { useState } from 'react';

function AddTaskModal({ isOpen, onClose, onAddTask }) {
    const [taskName, setTaskName] = useState('');

    const handleAddTask = () => {
        if (taskName.trim() !== '') {
        onAddTask(taskName);
        setTaskName('');
        onClose();
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleAddTask();
        }
    }

    return (
        <div className={`modal ${isOpen ? 'modal_add_open' : ''}`}>
            <div className="modal_content">
                <h2>Add Task</h2>
                <div className='input_title_container'>
                    <p className="title_text">Task name:</p>
                    <input
                    autoFocus
                    className='input_text'
                    type="text"
                    placeholder="Enter task name"
                    value={taskName}
                    onKeyDown={handleKeyDown}
                    onChange={(e) => setTaskName(e.target.value)}
                    />
                </div>
                <div>
                    <button className='delete_button' onClick={onClose}>Cancel</button>
                    <button className='add_button' onClick={handleAddTask}>Add</button>
                </div>
            </div>
        </div>
    );
}

export default AddTaskModal;
