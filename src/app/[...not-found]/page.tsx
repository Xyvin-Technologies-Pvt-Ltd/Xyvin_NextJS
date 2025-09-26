'use client'


import React from 'react'; 
import Wrapper from '@/layouts/Wrapper'; 
import Error from '@/components/error';

// export const metadata = {
//   title: "404 error || Xyvin - Digital  Creative Agency Next js Template",
// };


const index = () => {
  return (
    <Wrapper> 
      <Error /> 
    </Wrapper>
  );
};

export default index;