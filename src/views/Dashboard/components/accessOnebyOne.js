import React, { useMemo } from 'react';

import BigPoster from './bigposter';

import useBank from '../../../hooks/useBank';
import useStatsForPool from '../../../hooks/useStatsForPool';
import useEarnings from '../../../hooks/useEarnings';
import useShareStats from '../../../hooks/usebShareStats';
import { getDisplayBalance } from '../../../utils/formatBalance';
import useStakedBalance from '../../../hooks/useStakedBalance';
import useBombStats from '../../../hooks/useBombStats';

const AccessOnebyOne = ({ type, bankId, stakeIcon, earnedIcon }) => {
  const bombStats = useBombStats();
  const bank = useBank(bankId);

  let statsOnPool = useStatsForPool(bank);

  const earnings = useEarnings(bank.contract, bank.earnTokenName, bank.poolId);
  const tShareStats = useShareStats();
  const tokenStats = bank.earnTokenName === 'BSHARE' ? tShareStats : bombStats;
  const tokenPriceInDollars = useMemo(
    () => (tokenStats ? Number(tokenStats.priceInDollars).toFixed(2) : null),
    [tokenStats],
  );
  const earnedInDollars = (Number(tokenPriceInDollars) * Number(getDisplayBalance(earnings))).toFixed(2);
  const stakedBalance = useStakedBalance(bank.contract, bank.poolId);

  return (
    <BigPoster
      type={type}
      returns={bank.closedForStaking ? '0.00' : statsOnPool?.dailyAPR || '0.00'}
      TVL={statsOnPool?.TVL || '0.00'}
      stakeInNum={getDisplayBalance(earnings)}
      stakeInDollar={earnedInDollars}
      earnedInNum={getDisplayBalance(stakedBalance, bank.depositToken.decimal)}
      earnedInDollar={earnedInDollars}
      stakeIcon={stakeIcon}
      earnedIcon={earnedIcon}
      bank={bank}
    />
  );
};

export default AccessOnebyOne;
