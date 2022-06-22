import React from 'react';
import Visits from './visits';
import Staff from './users';

const content = () => {
  return (

    <div className="row mx-4 gx-4 pb-5 analytics">

      <div className='col-md-12 my-2 text-start'>
        <h2>Analytics</h2>
      </div>

      {/* to hold the left navigation menu */}
      <div className='col-md-3 rounded-3 mt-2 bg-white menu'>
        <div class="p-3">
          <Visits />
        </div>
      </div>

      {/* to hold main contents of the dashboard page */}
      <div className="col-md-9 mt-2">
        <div class="px-3">
          <Staff />
        </div>
      </div>
    </div>
  )
}

export default content