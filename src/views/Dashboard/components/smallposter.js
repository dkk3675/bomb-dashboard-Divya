import React,{useMemo} from 'react';

import useFetchBoardroomAPR from '../../../hooks/useFetchBoardroomAPR';
import { getDisplayBalance } from '../../../utils/formatBalance';
import useTotalStakedOnBoardroom from '../../../hooks/useTotalStakedOnBoardroom';
import Label from '../../../components/Label';
import Value from '../../../components/Value';
import useStakedBalanceOnBoardroom from '../../../hooks/useStakedBalanceOnBoardroom';
import useStakedTokenPriceInDollars from '../../../hooks/useStakedTokenPriceInDollars';
import useBombFinance from '../../../hooks/useBombFinance';
import useBombStats from '../../../hooks/useBombStats';
import useEarningsOnBoardroom from '../../../hooks/useEarningsOnBoardroom';


import Bomb from '../assets/bomb.png';
import BBond from '../assets/bbond.png';
import BShares from '../assets/bshares.png';
import BombBitcoin from '../assets/bomb-bitcoin.png';
import Details from './details';

const SmallPoster = () => {
    const bombStats = useBombStats();
    const bombFinance = useBombFinance();
    const boardroomAPR = useFetchBoardroomAPR();
    const totalStaked = useTotalStakedOnBoardroom();
    const stakedBalance = useStakedBalanceOnBoardroom();
    const stakedTokenPriceInDollars = useStakedTokenPriceInDollars('BSHARE', bombFinance.BSHARE);
    const tokenPriceInDollars = useMemo(
        () =>
          stakedTokenPriceInDollars
            ? (Number(stakedTokenPriceInDollars) * Number(getDisplayBalance(stakedBalance))).toFixed(2).toString()
            : null,
        [stakedTokenPriceInDollars, stakedBalance],
    );
    const earnings = useEarningsOnBoardroom();
    const tokenBombInDollars = useMemo(
        () => bombStats ? Number(bombStats.priceInDollars).toFixed(2) : null,
        [bombStats],
    );
    const earnedInDollars = (Number(tokenBombInDollars) * Number(getDisplayBalance(earnings))).toFixed(2);
    
    return(
        <div className="flex flex-wrap flex-col w-full bg p-3 rounded-lg border-2 border-[#728CDF]">
            <div className="flex flex-wrap h-20 w-full">
              <img src={ BShares } alt="" className='h-12 w-12' />
              <span>
                <div className='inline-flex'>
                  <div>
                    <h3>Boardroom</h3>
                  </div>
                  <div>
                    <p className='flex flex-wrap justify-center rounded-lg ml-5 w-36 h-6  bg-[#00E8A2]'>Recommended</p>
                  </div>
                </div>
                <p>Stake BSHARE and earn BOMB every epoch</p>
              </span>
              <div className='flex flex-wrap justify-end w-full border-b-2 border-white'>
                <p>TVL: $1,008,430</p>
              </div>
            </div>

            <div className="flex flex-wrap flex-row h-[155px] border-b-2 border-white">
                
                <Details returns={(boardroomAPR/(30*12)).toFixed(2)} stakeInNum={getDisplayBalance(stakedBalance)} stakeInDollar={tokenPriceInDollars} earnedInNum={getDisplayBalance(earnings)} earnedInDollar={earnedInDollars} stakeIcon={BShares} earnedIcon={Bomb} />

                <div className="flex flex-wrap w-3/6 justify-end items-end mb-5">
                  <p className='inline-flex'>Total Staked: <img src={ BShares } alt="" className='h-5 w-5' />{Math.round(getDisplayBalance(totalStaked))}</p>
                  <div className="inline-flex">
                    <button className='border-2 border-white rounded-full h-10 w-28 pt-1 pb-1 ml-2'>Deposit</button>
                    <button className='border-2 border-white rounded-full h-10 w-28 pt-1 pb-1 ml-2'>Withdraw</button>
                  </div>
                    <button className='border-2 border-white rounded-full h-10 w-[14.5rem] pt-1 pb-1'><span className='inline-flex'>Claim Rewards&nbsp;<img src={ BShares } alt="" className='h-6 w-6 p-1 bg-gray-700 rounded-full' /></span></button>
                </div>
            </div>
        </div>
    );
};

export default SmallPoster;