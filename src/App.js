import { useEffect, useState } from 'react';
//import styled from '@emotion/styled'
import axios from 'axios';
import StatusBar from './StatusBar'

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


  

export default function App() {
  const [text, setText] = useState('');
  const [boardList, setboardList] = useState(null);
/*   useEffect(() => {
    fetch('http://localhost:8090/board/')
    .then((response) => response.json())
    .then((data) => setboardList(data.slice(0, 4)))
  .catch((error) => console.error(error));
  //console.log("Photolist : " + JSON.stringify(Photolist));
  if(boardList){
    boardList.map((board) => {
    console.log(board.boardTitle);
  });
}
  }, [text]); */
  
  useEffect(() => {
    console.log("call fetchTodos");
    const fetchTodos = async () => {
      try{
        /* const response = await axios.get(
          "http://localhost:8090/board/"
        ); */
        /* const response2 = await jsonPlaceholderRequest({

          method: "GET"
        }); */
        const response = await axios.create({
          baseURL: 'http://localhost:8090/board/paging',
          withCredentials: false,
          timeout: 3000,
          method: "GET"
        });
        setboardList(response.data);
        if(boardList){
          boardList.map((board) => {
            console.log("board : " + board.boardTitle);
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
    <input value={text} onChange={e => setText(e.target.value)} />
      <StatusBar boardList={boardList} />
    </>
  );
}
