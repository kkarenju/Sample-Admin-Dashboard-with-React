import React from 'react';

const content = () => {
  return (

    <div className="row mx-4 gx-4 pb-5">

      <div className='col-md-12 my-2 text-start'>
        <h2>Analytics</h2>
      </div>

      {/* to hold the left navigation menu */}
      <div className='col-md-3 rounded-3 mt-2 bg-white'>
        <div class="p-3">
        </div>
      </div>

      {/* to hold main contents of the dashboard page */}
      <div className="col-md-9 mt-2">
        <div class="px-3 bg-white">content
        </div>
      </div>
    </div>
  )
}

export default content