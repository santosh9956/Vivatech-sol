import React, { useState, useEffect } from 'react';

function UpdateTaskModal({ isOpen, onClose, onUpdateTask, task, setTaskLists,taskLists }) {
  const [updatedTaskName, setUpdatedTaskName] = useState('');
  const [selectedOption, setSelectedOption] = useState(1);
  const [initialValue, setInitialValue] = useState({});

    useEffect(() => {
        setUpdatedTaskName(task.task);
        setSelectedOption(task.id);
        setInitialValue({id: task.id, name: task.task});
    }, [task]);

    const handleUpdateTask = () => {
        if (updatedTaskName.trim() !== '') {
            const updatedValue = {
                name : updatedTaskName, 
                id: Number(selectedOption),
            }
            onUpdateTask(updatedValue);
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
                <h2>Update Task</h2>
                <div className='input_title_container'>
                    <p className="title_text">Task name:</p>
                    <input
                    autoFocus
                    className='input_text'
                    type="text"
                    placeholder="Enter task name"
                    value={updatedTaskName}
                    onKeyDown={handleKeyDown}
                    onChange={e => setUpdatedTaskName(e.target.value)}
                    />
                </div>
                <div className="input_select_container">
                <p className="title_text">Move name:</p>
                <select className='selector_status' value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)} >
                    <option value={1}>To-do</option>
                    <option value={2}>In Progress</option>
                    <option value={3}>Done</option>
                </select>
                </div>
                <div>
                    <button className='delete_button' onClick={onClose}>Cancel</button>
                    <button className='add_button' onClick={handleUpdateTask}>Add</button>
                </div>
            </div>
        </div>
  );
}

export default UpdateTaskModal;
