import { produce } from 'immer';
import { createAction, handleActions } from 'redux-actions';

const CHANGE_INPUT = 'todos/CHANGE_INPUT'; // 인풋 값 변경
const INSERT = 'todos/INSERT'; // 새로운 todo 등록
const TOGGLE = 'todos/TOGGLE'; // todo를 체크/체크 해제 진행
const REMOVE = 'todos/REMOVE'; // todo 제거

export const changeInput = createAction(CHANGE_INPUT, (input) => input);

let id = 3; // insert가 호출될 시 1씩 더해짐
export const insert = createAction(INSERT, (text) => ({
  id: id++,
  text,
  done: false,
}));

export const toggle = createAction(TOGGLE, (id) => id);

export const remove = createAction(REMOVE, (id) => id);

const initialState = {
  input: '',
  todos: [
    {
      id: 1,
      text: '리덕스 기초 배우기',
      done: true,
    },
    {
      id: 2,
      text: '리액트와 리덕스 사용하기',
      done: false,
    },
  ],
};

const todos = handleActions(
  {
    [CHANGE_INPUT]: (state, { payload: input }) =>
      produce(state, (draft) => {
        draft.input = input;
      }),
    [INSERT]: (state, { payload: todo }) =>
      produce(state, (draft) => {
        draft.todos.push(todo);
      }),
    [TOGGLE]: (state, { payload: id }) =>
      produce(state, (draft) => {
        const todo = draft.todos.find((todo) => todo.id === id);
        todo.done = !todo.done;
      }),
    [REMOVE]: (state, { payload: id }) =>
      produce(state, (draft) => {
        const index = draft.todos.findIndex((todo) => todo.id === id);
        draft.todos.splice(index, 1);
      }),
  },
  initialState, // <== 추후 안되면 주석 설정해제해 볼 것
);

// const initialState = {
//   input: '',
//   todos: [
//     {
//       id: 1,
//       text: '리덕스 기초 연습',
//       done: true,
//     },
//     {
//       id: 2,
//       text: '리액트와 리덕스 이용',
//       done: false,
//     },
//   ],
// };

// function todos(state = initialState, action) {
//   switch (action.type) {
//     case CHANGE_INPUT:
//       return {
//         ...state,
//         input: action.input,
//       };
//     case INSERT:
//       return {
//         ...state,
//         todos: state.todos.map((todo) =>
//           todo.id === action.id ? { ...todo, done: !todo.done } : todo,
//         ),
//       };
//     case REMOVE:
//       return {
//         ...state,
//         todos: state.todos.filter((todo) => todo.id !== action.id),
//       };
//     default:
//       return state;
//   }
// }

export default todos;
