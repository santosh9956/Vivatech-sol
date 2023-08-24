import React from 'react';

function TaskCard({ task, taskList, taskLists, setTaskLists, setSelectedTask, setUpdateModalOpen }) {
    
    const deleteTask = () => {
        const newTaskLists = taskLists.map(list => {
        if (list.id === taskList.id) {
            return { ...list, tasks: list.tasks.filter(t => t !== task) };
        }
        return list;
        });
        setTaskLists(newTaskLists);
    };

    const updateTask = (task, id) => {
        setUpdateModalOpen(true);
        setSelectedTask({task: task, id: id});
    };


    return (
        <div className="task-card">
        <p>{task}</p>
        <button className='delete_button' onClick={deleteTask}>Delete</button>
        <button  className='update_button' onClick={() => updateTask(task, taskList.id)}>Update</button>
        </div>
    );
}

export default TaskCard;
