import React from 'react';

const ImageLinkForm = () => {
    return (
        <div>
            <p className='f3'>
                {'This Magic Brain will detect facess in your pictures. Git it'}
            </p>
            <div>
                <input classNmae='f4 pa2 w-70 center' type='tex' />
                <button className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'>Detect</button>   
           </div>
        </div> 
    )
}

export default ImageLinkForm;