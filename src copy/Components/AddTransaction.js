import React from 'react';
import { useState } from 'react';

function AddTransaction(records) {
  return (
    <div className='Transaction'>
        <form>
            <input type="date" />
            <input type="text" placeholder='Description'/>
            <input type="text" placeholder='Category'/>
            <input type="text" placeholder='Amount'/>
        </form>
        <button>Add Transaction</button>
    </div>
  );
}

export default AddTransaction