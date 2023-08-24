import React, { useState } from 'react';
import TaskList from '../components/TaskList';
import ExportButton from '../components/ExportButton';
import AddTaskModal from '../components/AddTaskModal';
import UpdateTaskModal from '../components/UpdateTaskModal';


export default function Home() {
  const [taskLists, setTaskLists] = useState([
    { id: 1, title: 'To-Do', tasks: [] },
    { id: 2, title: 'In Progress', tasks: [] },
    { id: 3, title: 'Done', tasks: [] }
  ]);
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [updateModalOpen, setUpdateModalOpen] = useState(false);
  const [currentModalInfo, setCurrentModalInfo] = useState({});
  const [selectedTask, setSelectedTask] = useState({});


  const handleAddTask = (taskName) => {
    const newTaskLists = taskLists.map(list => {
      if (list.id === currentModalInfo.id) {
        return { ...list, tasks: [...list.tasks, taskName] };
      }
      return list;
    });
    setTaskLists(newTaskLists);
  };

  const handleUpdateTask = (updatedTask) => {
    let newTaskLists;
    console.log(updatedTask, 'updatedTAsk');
    if (selectedTask.id === updatedTask.id) {
      newTaskLists = taskLists.map(list => {
        if (list.id === updatedTask.id) {
          const updatedData = list.tasks.map((data) => {
             if (selectedTask.task === data) {
                return updatedTask.name;
             }
             return data;
          })
          return {...list, tasks: updatedData}
        }
        return list;
      })
      
    }else{
      newTaskLists = taskLists.map(list => {
        if (list.id === updatedTask.id) {
          return { ...list, tasks: [...list.tasks, updatedTask.name] };
        }
        if (updatedTask.id !== selectedTask.id) {
            return {...list, tasks: list.tasks.filter(t => (t !== selectedTask.task))}
        }
      return list;
    });
    }
    setTaskLists(newTaskLists);
  };


  return (
    <div className="app">
      <h1 className='app_title'>Task Management App</h1>
      <div className="task-lists">
        {taskLists.map(taskList => (
          <TaskList setSelectedTask={setSelectedTask} setUpdateModalOpen={setUpdateModalOpen} setCurrentModalInfo={setCurrentModalInfo} setAddModalOpen={setAddModalOpen} key={taskList.id} taskList={taskList} taskLists={taskLists} setTaskLists={setTaskLists} />
        ))}
      </div>
      
      <ExportButton taskLists={taskLists} />

      <AddTaskModal
        isOpen={addModalOpen}
        onClose={() => setAddModalOpen(false)}
        onAddTask={handleAddTask}
      />
      
      <UpdateTaskModal
        isOpen={updateModalOpen}
        onClose={() => setUpdateModalOpen(false)}
        onUpdateTask={handleUpdateTask}
        setTaskLists={setTaskLists}
        taskLists={taskLists}
        task={selectedTask}
      />
    </div>
  );
}
