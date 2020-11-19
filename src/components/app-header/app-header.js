import React from 'react';
import './app-header.css';

const AppHeader = ({toDo, done}) => {
  return (
    <div className="app-header">
      <h1>To Do</h1>
      <h2>{toDo} need to do, {done} done</h2>
    </div>
  );
};

export default AppHeader;
