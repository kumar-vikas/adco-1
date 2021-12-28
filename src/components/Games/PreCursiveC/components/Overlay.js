import { useState } from 'react/cjs/react.development';
import './Overlay.css';

const Overley = function(props){    
    return (
        <div className='overlay'>
            <div className='overlay-body'>
                <div className='overlay-text-wrap'>
                    <h3>Start Again?</h3>
                </div>
                <div className='overley-button-wrap'>
                    <button onClick={props.reset}>OK</button>
                    <button onClick={props.hide}>Cancel</button>
                </div>
            </div>
        </div>
    )

}
export default Overley;