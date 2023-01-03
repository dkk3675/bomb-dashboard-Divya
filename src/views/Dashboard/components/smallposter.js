import React,{useMemo} from 'react';

import useFetchBoardroomAPR from '../../../hooks/useFetchBoardroomAPR';
import { getDisplayBalance } from '../../../utils/formatBalance';
import useTotalStakedOnBoardroom from '../../../hooks/useTotalStakedOnBoardroom';
import useStakedBalanceOnBoardroom from '../../../hooks/useStakedBalanceOnBoardroom';
import useStakedTokenPriceInDollars from '../../../hooks/useStakedTokenPriceInDollars';
import useBombFinance from '../../../hooks/useBombFinance';
import useBombStats from '../../../hooks/useBombStats';
import useEarningsOnBoardroom from '../../../hooks/useEarningsOnBoardroom';

import useHarvestFromBoardroom from '../../../hooks/useHarvestFromBoardroom';
import useRedeemOnBoardroom from '../../../hooks/useRedeemOnBoardroom';
import useApprove, {ApprovalState} from '../../../hooks/useApprove';
import useClaimRewardCheck from '../../../hooks/boardroom/useClaimRewardCheck';
import useWithdrawCheck from '../../../hooks/boardroom/useWithdrawCheck';

import Bomb from '../assets/bomb.png';
import BShares from '../assets/bshares.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleUp,faArrowCircleDown } from '@fortawesome/free-solid-svg-icons';
import Details from './details';

const SmallPoster = ({ bsharePrice }) => {
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
    const earning = useEarningsOnBoardroom();
    const tokenBombInDollars = useMemo(
        () => bombStats ? Number(bombStats.priceInDollars).toFixed(2) : null,
        [bombStats],
    );
    const earnedInDollars = (Number(tokenBombInDollars) * Number(getDisplayBalance(earning))).toFixed(2);
    const totalStake = Number(getDisplayBalance(totalStaked)).toFixed(2);
    const TVL = (bsharePrice*totalStake).toFixed(2);

    const {onReward} = useHarvestFromBoardroom();
    const earnings = useEarningsOnBoardroom();
    const canClaimReward = useClaimRewardCheck();
    const [approveStatus, approve] = useApprove(bombFinance.BSHARE, bombFinance.contracts.Boardroom.address);
    const canWithdraw = useWithdrawCheck();
    const { onRedeem } = useRedeemOnBoardroom();
    
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
                <p>TVL: ${TVL || '----.--'}</p>
              </div>
            </div>

            <div className="flex flex-wrap flex-row h-[155px] border-b-2 border-white">
                
                <Details returns={(boardroomAPR/(30*12)).toFixed(2)} stakeInNum={getDisplayBalance(stakedBalance)} stakeInDollar={tokenPriceInDollars} earnedInNum={getDisplayBalance(earnings)} earnedInDollar={earnedInDollars} stakeIcon={BShares} earnedIcon={Bomb} />

                <div className="flex flex-wrap w-3/6 justify-end items-end mb-5">
                  <p className='inline-flex'>Total Staked: <img src={ BShares } alt="" className='h-5 w-5' />{totalStake}</p>
                  <div className="inline-flex">
                    <button disabled={approveStatus !== ApprovalState.NOT_APPROVED} onClick={approve}className={`border-2 border-white rounded-full h-10 w-28 pt-1 pb-1 ml-2 ${approveStatus === ApprovalState.NOT_APPROVED ? 'border-white text-white' : 'border-[#C3C5CBBF] text-[#C3C5CBBF]'}`}>Deposit&nbsp;&nbsp;&nbsp;<FontAwesomeIcon icon={faArrowCircleUp} /></button>
                    <button disabled={stakedBalance.eq(0) || (!canWithdraw && !canClaimReward)} onClick={onRedeem} className={`border-2 border-white rounded-full h-10 w-28 pt-1 pb-1 ml-2 ${stakedBalance.eq(0) || (!canWithdraw && !canClaimReward) ? 'border-[#C3C5CBBF] text-[#C3C5CBBF]' : 'border-white text-white'}`}>Withdraw&nbsp;&nbsp;&nbsp;<FontAwesomeIcon icon={faArrowCircleDown} /></button>
                  </div>
                    <button onClick={onReward} disabled={earnings.eq(0) || !canClaimReward} className={`border-2 border-white rounded-full h-10 w-[14.5rem] pt-1 pb-1 ${earnings.eq(0) || !canClaimReward ? 'border-[#C3C5CBBF] text-[#C3C5CBBF]' : 'border-white text-white'}`}><span className='inline-flex'>Claim Rewards&nbsp;<img src={ BShares } alt="" className='h-6 w-6 p-1 bg-gray-700 rounded-full' /></span></button>
                </div>
            </div>
        </div>
    );
};

export default SmallPoster;