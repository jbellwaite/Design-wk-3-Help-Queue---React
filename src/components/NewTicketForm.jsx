import React from 'react';
import reallyAdorablePuppy from '../assets/images/cutestpuppy.jpg';

function NewTicketForm(){
  return (
    <div>
      <form>
        <input
          type='text'
          id='names'
          placeholder='Pair Names'/>
        <input
          type='text'
          id='location'
          placeholder='Location'/>
        <textarea
          id='issue'
          placeholder='Describe your issue.'/>
        <button type='submit'>Help!</button>
      </form>
      <img src={reallyAdorablePuppy}/>
    </div>
  );
}

export default NewTicketForm;
