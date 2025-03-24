import { useEffect, useState } from 'react';
//import styled from '@emotion/styled'
import axios from 'axios';

/* interface Photo {
  readonly albumId: number;
  readonly id: number;
  readonly title: string;
  readonly url: string;
  readonly thumbnailUrl: string;
} */

  
async function fetchPhotos() {
  const response = await fetch('http://date.jsontest.com');
  if(!response.ok){
    throw new Error('Error occurs');
  }
  const persedData = await response.json();
  const transformedPhotod = persedData.slice(0, 4);
  
  return transformedPhotod;
}

export const jsonPlaceholderRequest = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/todos',
  withCredentials: false,
  timeout: 3000,
});

function StatusBar({photos, chPhotos, text}) {
  const [Photolist, setPhotolist] = useState(null);
  const [todos, setTodos] = useState(null);
  
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then((response) => response.json())
    .then((data) => setPhotolist(data.slice(0, 4)))
  .catch((error) => console.error(error));
  //console.log("Photolist : " + JSON.stringify(Photolist));
  if(Photolist){
  Photolist.map((photo) => {
    console.log(photo.title);
  });
}
  }, [text]);
  
  useEffect(() => {
    console.log("call fetchTodos");
    const fetchTodos = async () => {
      try{
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/todos"
        );
        const response2 = await jsonPlaceholderRequest({

          method: "GET"
        });
        setTodos(response2.data);
        if(todos){
          todos.map((todo) => {
            console.log("todo : " + todo.title);
          });
        }
      }catch(error){
        console.log(error);
      }
    };
    void fetchTodos();
  }, [text]);

  
  return (
    <>
  <ol>
  {Photolist && Photolist.map(photo => (
    //console.log(photo.title);
    <li key={photo.title}>{photo.title}</li>
  ))}
    </ol>
  <ol>
  <div>--------------------------------------------------</div>
  {todos && todos.map(todo => (
    //console.log(photo.title);
    <li key={todo.title}>{todo.title}</li>
  ))}
  </ol>
  </>
  );

}
  

export default function App() {
  const [text, setText] = useState('');
  const [Photos, setPhotos] = useState(null);
  return (
    <>
    <input value={text} onChange={e => setText(e.target.value)} />
      <StatusBar Photos={Photos} chPhotos={setPhotos} text={text}/>
    </>
  );
}
