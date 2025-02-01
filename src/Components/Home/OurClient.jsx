import React from 'react';
import paint from '../../assets/paint.svg';
const OurClient = () => {
    return (
        <div className='our_client'>
            <div className="client_main">
                <div className="our_client1">
                    <div className="our_client_heading">
                        <p className='hewhead'>End user</p>
                        <p className='recenews'>Our Client</p>
                        <p className="newlinespas newsingk"><span className='nwline nameLine'></span>always our priority</p>
                    </div>
                     <div className='our_brand_flex'>
                         <img src={paint} alt="paint" />
                     </div>
                </div>
            </div>
        </div>
    )
}

export default OurClient
