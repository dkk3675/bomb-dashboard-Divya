import React from 'react';

import Details from './details';

import Bomb from '../assets/bomb.png';
import BBond from '../assets/bbond.png';
import BShares from '../assets/bshares.png';
import BombBitcoin from '../assets/bomb-bitcoin.png';

const BigPoster = ({ type,returns,TVL,stakeInNum,stakeInDollar,earnedInNum,earnedInDollar,stakeIcon,earnedIcon }) => {
    return(
        <div className="flex flex-wrap flex-col w-full mt-5 mb-14">
            <div className="flex flex-wrap h-15 border-b-2 border-white">
                <img src={ stakeIcon } alt="" className='h-5 w-5' />
                <h3>{type}</h3>
                <p className='flex flex-wrap justify-center rounded-lg ml-5 w-36 h-6  bg-[#00E8A2]'>Recommended</p>
                <p className='flex flex-wrap w-full items-center justify-end'>TVL: ${TVL}</p>
            </div>
            <div className="flex flex-wrap flex-row h-40 border-b-2 border-white">
                <Details returns={returns} stakeInNum={stakeInNum} stakeInDollar={stakeInDollar} earnedInNum={earnedInNum} earnedInDollar={earnedInDollar} stakeIcon={stakeIcon} earnedIcon={earnedIcon} />
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