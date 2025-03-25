'use client'
import { useEffect, useState } from 'react';
import axios from 'axios';


  export default function StatusBar({boardList}) {
    return (
      <>
    <ol>
    <div>--------------------------------------------------</div>
    {boardList && boardList.map(board => (
      //console.log(photo.title);
      <li key={board.id}>{board.boardTitle}</li>
    ))}
    </ol>
    </>
    );
  
  }