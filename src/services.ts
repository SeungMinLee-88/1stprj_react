import axios from 'axios';
import { Dispatch, SetStateAction } from 'react';
import { ENDPOINTS } from './endpoints';
import { HTTP_METHOD } from './constants';
import { Todo } from './index';

export const jsonPlaceholderRequest = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
    withCredentials: false,
    timeout: 3000,
  });


export const getTodoList = async (
    setTodos: Dispatch<SetStateAction<readonly Todo[]>>
  ) => {
    try {
      const response = await jsonPlaceholderRequest({
        url: ENDPOINTS.GET_TODO_LIST,
        method: HTTP_METHOD.GET,
      });
  
      setTodos(response.data);
    } catch (error) {
      console.error(error);
    }
  };