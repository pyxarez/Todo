import {
  ADD_TASK,
  CHECK_DONE,
  GET_TASKS,
  SAVE_TASK_CHANGES,
} from '../constants/TaskList';
import {
  CHANGE_TASK_LOCATION,
} from '../constants/Category';

const initialState = [];

const tasks = (state = initialState, action) => {
  switch (action.type) {
    case GET_TASKS:
      // Мапим, так как прилетает настоящий массив, а не JSON,
      // а значит пытаемся избежать мутации этого массива
      // до прилёта в reducer(сложно, непонятно. проблема эму
      // ляции работы с сервером)
      return action.payload.tasks
        .map((task) => {
          return { ...task };
        });
    case ADD_TASK:
      return [
        {
          id: action.payload.taskId,
          title: action.payload.title,
          isDone: false,
          description: ''
        },
        ...state
      ];
    case CHECK_DONE:
      return state.map(task => {
        return task.id === action.payload.taskId
        ? { ...task, isDone: !task.isDone}
        : task;
      });
    case CHANGE_TASK_LOCATION:
      return state.filter(task => {
        return task.id !== action.payload.taskId;
      });
    case SAVE_TASK_CHANGES:
      const newTaskProps = action.payload;

      return state.map(task => {
        return task.id === newTaskProps.id
        ? { ...newTaskProps }
        : task;
      });
    default:
      return state;
  }
}

export default tasks;