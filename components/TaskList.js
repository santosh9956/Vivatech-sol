import React from 'react';
import TaskCard from './TaskCard';

function TaskList({ taskList, taskLists, setTaskLists, setAddModalOpen,setCurrentModalInfo, setSelectedTask, setUpdateModalOpen }) {
  const addTask = () => {
    setCurrentModalInfo(taskList);
    setAddModalOpen(true);
  };

  return (
    <div className="task-list">
      <h2 className='task_list_title'>{taskList.title}</h2>
      <button className='add_button' onClick={addTask}>Add Task</button>
      <div className="task-cards">
        {taskList.tasks.map((task, index) => (
          <TaskCard setUpdateModalOpen={setUpdateModalOpen} setSelectedTask={setSelectedTask} key={index} task={task} taskList={taskList} taskLists={taskLists} setTaskLists={setTaskLists} />
        ))}
      </div>
    </div>
  );
}

export default TaskList;
