import React from 'react';
import * as ExcelJS from 'exceljs';

function ExportButton({ taskLists }) {
  const exportToExcel = async () => {
    const workbook = new ExcelJS.Workbook();

    taskLists.forEach(taskList => {
      const worksheet = workbook.addWorksheet(taskList.title);
      worksheet.columns = [{ header: 'Task', key: 'task', width: 40 }];

      taskList.tasks.forEach(task => {
        worksheet.addRow({ task });
      });
    });

    const buffer = await workbook.xlsx.writeBuffer();
    const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'task-list.xlsx';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <button className='add_button' onClick={exportToExcel}>Export to Excel</button>
  );
}

export default ExportButton;
