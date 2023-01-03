import React from 'react';

import Label from '../../../components/Label';

const Details = ({ returns,stakeInNum,stakeInDollar,earnedInNum,earnedInDollar,stakeIcon,earnedIcon }) => {
    return(
            <>
                <div className="flex flex-wrap w-1/6 justify-center items-center">
                    <span>
                        <p>Daily Returns:</p>
                        <h2>{returns}%</h2>
                    </span>
                </div>
                <div className="flex flex-wrap w-1/6 justify-center items-center">
                    <span>
                        <p>Your Stake:</p>
                        <div className="inline-flex">
                            <div>
                                <img src={ stakeIcon } alt="" className='h-6 w-6'/>
                            </div>
                            <div>
                                <p>{stakeInNum}</p>
                            </div>
                        </div>
                        <p><Label text={`≈ $${stakeInDollar}`} variant="yellow" /></p>
                    </span>
                </div>
                <div className="flex flex-wrap w-1/6 justify-center items-center">
                    <span>
                        <p>Earned:</p>
                        <div className="inline-flex">
                            <div>
                                <img src={ earnedIcon } alt="" className='h-6 w-6'/>
                            </div>
                            <div>
                                <p>{earnedInNum}</p>
                            </div>
                        </div>
                        <p><Label text={`≈ $${earnedInDollar}`} variant="yellow" /></p>
                    </span>
                </div>
            </>
    );
}

export default Details;