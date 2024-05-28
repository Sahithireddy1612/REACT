import React from 'react'

import UseEffect1 from '../../16may24/useeffect/useeffect2'
import CustomNavbar from '../../stylingcomponents/navbar/navbar'

function HomeScreen() {
  return (
    <div>
        <CustomNavbar/>
        <h2>Wellcome to HomeScreen</h2>
        <UseEffect1/>
    </div>
  )
}

export default HomeScreen