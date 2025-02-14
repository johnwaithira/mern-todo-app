import { createContext } from "react";
import React from 'react'

const TaskContext = createContext();

const TaskContextProvider = () => {
  return (
    <div>TaskContext</div>
  )
}

export default TaskContextProvider