import { useEffect, useState } from 'react';
//import styled from '@emotion/styled'

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
  
function StatusBar({photos, chPhotos, text}) {
  const [Photolist, setPhotolist] = useState(null);
  
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
  

  
  return (
    <>
  <ol>
  {Photolist && Photolist.map(photo => (
    //console.log(photo.title);
    <li>{photo.title}</li>
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
