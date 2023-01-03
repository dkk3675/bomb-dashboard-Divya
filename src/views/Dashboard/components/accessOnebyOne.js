import React,{ useMemo } from 'react';

import Bomb from '../assets/bomb.png';
import BBond from '../assets/bbond.png';
import BShares from '../assets/bshares.png';
import BombBitcoin from '../assets/bomb-bitcoin.png';
import BombbnbLP from '../assets/bomb-bnb-lp.png';
import BigPoster from './bigposter';

import useBanks from '../../../hooks/useBanks';
import useBank from '../../../hooks/useBank';
import useStatsForPool from '../../../hooks/useStatsForPool';
import useEarnings from '../../../hooks/useEarnings';
import useShareStats from '../../../hooks/usebShareStats';
import {getDisplayBalance} from '../../../utils/formatBalance';
import useStakedBalance from '../../../hooks/useStakedBalance';
import useBombStats from '../../../hooks/useBombStats';


const AccessOnebyOne = ({ type,bankId,stakeIcon,earnedIcon }) => {
    const bombStats = useBombStats();
    const bank = useBank(bankId);
    
    let statsOnPool = useStatsForPool(bank);
    console.log(typeof(bankId),"type here",bankId,typeof(bank),statsOnPool);

    const earnings = useEarnings(bank.contract, bank.earnTokenName, bank.poolId);
    const tShareStats = useShareStats();
    const tokenStats = bank.earnTokenName === 'BSHARE' ? tShareStats : bombStats;
    const tokenPriceInDollars = useMemo(
        () => (tokenStats ? Number(tokenStats.priceInDollars).toFixed(2) : null),
        [tokenStats],
    );
    const earnedInDollars = (Number(tokenPriceInDollars) * Number(getDisplayBalance(earnings))).toFixed(2);
    const stakedBalance = useStakedBalance(bank.contract, bank.poolId);

    // console.log(bank,statsOnPool?.dailyAPR,getDisplayBalance(earnings),earnedInDollars,getDisplayBalance(stakedBalance, bank.depositToken.decimal),earnedInDollars);
    return(
      <BigPoster type={type} returns={bank.closedForStaking ? '0.00' : statsOnPool?.dailyAPR} TVL={statsOnPool?.TVL} stakeInNum={getDisplayBalance(earnings)} stakeInDollar={earnedInDollars} earnedInNum={getDisplayBalance(stakedBalance, bank.depositToken.decimal)} earnedInDollar={earnedInDollars} stakeIcon={stakeIcon} earnedIcon={earnedIcon} />
    );
}

export default AccessOnebyOne;