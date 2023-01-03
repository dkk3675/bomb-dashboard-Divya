import React from 'react';

import Details from './details';

import useEarnings from '../../../hooks/useEarnings';
import useHarvest from '../../../hooks/useHarvest';
import useRedeem from '../../../hooks/useRedeem';
import useApprove, {ApprovalState} from '../../../hooks/useApprove';

import BShares from '../assets/bshares.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleUp,faArrowCircleDown } from '@fortawesome/free-solid-svg-icons';

const BigPoster = ({ type,returns,TVL,stakeInNum,stakeInDollar,earnedInNum,earnedInDollar,stakeIcon,earnedIcon,bank }) => {
    const earnings = useEarnings(bank.contract, bank.earnTokenName, bank.poolId);
    const {onReward} = useHarvest(bank);
    const { onRedeem } = useRedeem(bank);
    const [approveStatus, approve] = useApprove(bank.depositToken, bank.address);

    
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
                    <button disabled={bank.closedForStaking || approveStatus === ApprovalState.PENDING || approveStatus === ApprovalState.UNKNOWN} onClick={approve} className={`border-2  rounded-full h-10 w-36 pt-1 pb-1 ${bank.closedForStaking || approveStatus === ApprovalState.PENDING || approveStatus === ApprovalState.UNKNOWN ? 'border-[#C3C5CBBF] text-[#C3C5CBBF]' : 'border-white text-white'}`}>Deposit&nbsp;&nbsp;&nbsp;<FontAwesomeIcon icon={faArrowCircleUp} /></button>
                    <button onClick={onRedeem} className='border-2 border-white rounded-full h-10 w-36 pt-1 pb-1 ml-1'>Withdraw&nbsp;&nbsp;&nbsp;<FontAwesomeIcon icon={faArrowCircleDown} /></button>
                    <button onClick={onReward} disabled={earnings.eq(0)} className={`border-2 rounded-full h-10 w-36 pt-1 pb-1 ml-1 ${earnings.eq(0) ? 'border-[#C3C5CBBF] text-[#C3C5CBBF]' : 'border-white text-white'}`}><span className='inline-flex'>Claim Rewards&nbsp;<img src={ BShares } alt="" className='h-6 w-6 p-1 bg-gray-700 rounded-full' /></span></button>
                </div>
            </div>
        </div>
    );
}

export default BigPoster;