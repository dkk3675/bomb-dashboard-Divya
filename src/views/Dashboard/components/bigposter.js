import React from 'react';

import Bomb from '../assets/bomb.png';
import BBond from '../assets/bbond.png';
import BShares from '../assets/bshares.png';
import BombBitcoin from '../assets/bomb-bitcoin.png';

const BigPoster = () => {
    return(
        <div className="flex flex-wrap flex-col w-full mt-5 mb-14">
            <div className="flex flex-wrap h-15 border-b-2 border-white">
                <img src={ BombBitcoin } alt="" className='h-5 w-5' />
                <h3>BOMB-BTCB</h3>
                <p className='flex flex-wrap justify-center rounded-lg ml-5 w-36 h-6  bg-[#00E8A2]'>Recommended</p>
                <p className='flex flex-wrap w-full items-center justify-end'>TVL: $1,008,430</p>
            </div>
            <div className="flex flex-wrap flex-row h-40 border-b-2 border-white">
                <div className="flex flex-wrap w-1/6 justify-center items-center">
                    <span>
                        <p>Daily Returns:</p>
                        <h1>2%</h1>
                    </span>
                </div>
                <div className="flex flex-wrap w-1/6 justify-center items-center">
                    <span>
                        <p>Your Stake:</p>
                        <div className="inline-flex">
                            <div>
                                <img src={ BombBitcoin } alt="" className='h-6 w-6'/>
                            </div>
                            <div>
                                <p>124.21</p>
                            </div>
                        </div>
                        <p>	&asymp; $1171.62</p>
                    </span>
                </div>
                <div className="flex flex-wrap w-1/6 justify-center items-center">
                    <span>
                        <p>Earned:</p>
                        <div className="inline-flex">
                            <div>
                                <img src={ BShares } alt="" className='h-6 w-6'/>
                            </div>
                            <div>
                                <p>6.4413</p>
                            </div>
                        </div>
                        <p>	&asymp; $298.88</p>
                    </span>
                </div>
                <div className="flex flex-wrap w-3/6 justify-center items-end mb-5">
                    <button className='border-2 border-white rounded-full h-10 w-36 pt-1 pb-1'>Deposit</button>
                    <button className='border-2 border-white rounded-full h-10 w-36 pt-1 pb-1 ml-1'>Withdraw</button>
                    <button className='border-2 border-white rounded-full h-10 w-36 pt-1 pb-1 ml-1'><span className='inline-flex'>Claim Rewards&nbsp;<img src={ BShares } alt="" className='h-6 w-6 p-1 bg-gray-700 rounded-full' /></span></button>
                </div>
            </div>
        </div>
    );
}

export default BigPoster;