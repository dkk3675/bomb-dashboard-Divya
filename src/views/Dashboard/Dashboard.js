import React, { useMemo,useState } from 'react';
import useBondStats from '../../hooks/useBondStats';
import usebShareStats from '../../hooks/usebShareStats';
import useBombStats from '../../hooks/useBombStats';

import useCurrentEpoch from '../../hooks/useCurrentEpoch';
import moment from 'moment';
import useTreasuryAllocationTimes from '../../hooks/useTreasuryAllocationTimes';
import ProgressCountdown from '../Boardroom/components/ProgressCountdown';
import useCashPriceInEstimatedTWAP from '../../hooks/useCashPriceInEstimatedTWAP';
import CountUp from 'react-countup';
import useTotalValueLocked from '../../hooks/useTotalValueLocked';
import useCashPriceInLastTWAP from '../../hooks/useCashPriceInLastTWAP';

import useBanks from '../../hooks/useBanks';

import {getDisplayBalance} from '../../utils/formatBalance';
import useBombFinance from '../../hooks/useBombFinance';
import useTokenBalance from '../../hooks/useTokenBalance';

import useCatchError from '../../hooks/useCatchError';
import useApprove, {ApprovalState} from '../../hooks/useApprove';

import './Dashboard.css';
import Bomb from './assets/bomb.png';
import BBond from './assets/bbond.png';
import BShares from './assets/bshares.png';
import BombBitcoin from './assets/bomb-bitcoin.png';
import BombbnbLP from './assets/bomb-bnb-lp.png';
import Discord from './assets/discord.png';
import Docs from './assets/docs.png';
import SmallPoster from './components/smallposter';
import One from './assets/Vector 90 - Vector 91 - 818.svg';
import Two from './assets/Vector 90 - Vector 91 - 909.svg';
import Three from './assets/Vector 90 - Vector 91 - 727.svg';
import Four from './assets/Vector 90 - Vector 91 - 636.svg';
import Five from './assets/Vector 90 - Vector 91 - 545.svg';
import Six from './assets/Vector 90 - Vector 91 - 455.svg';
import Seven from './assets/Vector 90 - Vector 91 - 364.svg';
import Eight from './assets/Vector 90 - Vector 91 - 273.svg';
import Nine from './assets/Vector 90 - Vector 91 - 182.svg';
import Ten from './assets/Vector 90 - Vector 91 - 91.svg';
import Eleven from './assets/Vector 90.svg';
import Twelve from './assets/Vector 91.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart,faArrowCircleDown } from '@fortawesome/free-solid-svg-icons';

import TableData from './components/tabledata';
import AccessOnebyOne from './components/accessOnebyOne';

import WalletProviderModal from '../../components/WalletProviderModal/WalletProviderModal.js';

const Dashboard = () => {
  const [isWalletProviderOpen, setWalletProviderOpen] = useState(true);

  const handleWalletProviderClose = () => {
    setWalletProviderOpen(false);
  };


  const bombStats = useBombStats();
  const bShareStats = usebShareStats();
  const tBondStats = useBondStats();

  const bombPriceInBNB = useMemo(() => (bombStats ? Number(bombStats.tokenInFtm).toFixed(4) : null), [bombStats]);
  const bombPriceInDollars = useMemo(
    () => (bombStats ? Number(bombStats.priceInDollars).toFixed(2) : null),
    [bombStats],
  );
  const bombCirculatingSupply = useMemo(() => (bombStats ? String(bombStats.circulatingSupply) : null), [bombStats]);
  const bombTotalSupply = useMemo(() => (bombStats ? String(bombStats.totalSupply) : null), [bombStats]);

  const bSharePriceInDollars = useMemo(
    () => (bShareStats ? Number(bShareStats.priceInDollars).toFixed(2) : null),
    [bShareStats],
  );
  const bSharePriceInBNB = useMemo(
    () => (bShareStats ? Number(bShareStats.tokenInFtm).toFixed(4) : null),
    [bShareStats],
  );
  const bShareCirculatingSupply = useMemo(
    () => (bShareStats ? String(bShareStats.circulatingSupply) : null),
    [bShareStats],
  );
  const bShareTotalSupply = useMemo(() => (bShareStats ? String(bShareStats.totalSupply) : null), [bShareStats]);

  const tBondPriceInDollars = useMemo(
    () => (tBondStats ? Number(tBondStats.priceInDollars).toFixed(2) : null),
    [tBondStats],
  );
  const tBondPriceInBNB = useMemo(() => (tBondStats ? Number(tBondStats.tokenInFtm).toFixed(4) : null), [tBondStats]);
  const tBondCirculatingSupply = useMemo(
    () => (tBondStats ? String(tBondStats.circulatingSupply) : null),
    [tBondStats],
  );
  const tBondTotalSupply = useMemo(() => (tBondStats ? String(tBondStats.totalSupply) : null), [tBondStats]);

  const currentEpoch = useCurrentEpoch();
  const { to } = useTreasuryAllocationTimes();
  const cashStat = useCashPriceInEstimatedTWAP();
  const scalingFactor = useMemo(() => (cashStat ? Number(cashStat.priceInDollars).toFixed(4) : '0.0000'), [cashStat]);
  const TVL = useTotalValueLocked();
  const cashPrice = useCashPriceInLastTWAP();
  const bondScale = (Number(cashPrice) / 100000000000000).toFixed(4);

  const [banks] = useBanks();
  const activeBanks = banks.filter((bank) => !bank.finished && (bank.poolId === 1 || bank.poolId === 0));


  const bondStat = useBondStats();
  const bombFinance = useBombFinance();
  const bondBalance = useTokenBalance(bombFinance?.BBOND);

  const catchError = useCatchError();
  const {
    contracts: {Treasury},
  } = useBombFinance();
  const [approveStatus, approve] = useApprove(bombFinance.BOMB, Treasury.address);
  const [redeemStatus, redeem] = useApprove(bombFinance.BBOND, Treasury.address);


  return (
    <section className='flex flex-wrap flex-col max-w-full h-auto bg-[#373747] items-center p-0 m-0 text-white'>
      <WalletProviderModal open={isWalletProviderOpen} handleClose={handleWalletProviderClose} />
      {/* Background */}
      <div className=" h-auto fixed overflow-hidden">
        <svg height='1000' width='950' >
          <image href={ One } height='900' width='905' />
          <image href={ Two } height='910' width='910'  />
          <image href={ Three } height='920' width='915'  />
          <image href={ Four } height='930' width='920'  />
          <image href={ Five } height='940' width='925'  />
          <image href={ Six } height='950' width='930'  />
          <image href={ Seven } height='960' width='935'  />
          <image href={ Eight } height='970' width='940'  />
          <image href={ Nine } height='980' width='942'  />
          <image href={ Ten } height='985' width='945'  />
          <image href={ Eleven } height='990' width='948'  />
          <image href={ Twelve } height='1000' width='950'  />
        </svg>
      </div>

      {/* BOMB Finance SUMMARY */}
      <div className="flex flex-wrap flex-col h-80 w-3/4 p-3 bg mt-5">
        <div className="flex flex-wrap h-12 w-full justify-center border-b-[#C3C5CBBF] border-b-[1px]">
          <h1 className='text-2xl font-semibold'>Bomb Finance Summary</h1>
        </div>
        <div className="flex flex-wrap flex-row">
          <div className="flex flex-wrap w-2/3 items-center justify-start">
            <table className='text-xs'>
              <thead className='border-b-2 border-[#C3C5CBBF] p-3 text-[#C3C5CBBF]'>
                <tr>
                  <th></th>
                  <th>Current Supply</th>
                  <th>Total Supply</th>
                  <th>Price</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>

                <TableData icon={Bomb} type='BOMB' currSupply={bombCirculatingSupply} totalSupply={bombTotalSupply} priceinDollar={bombPriceInDollars} priceinBNB={bombPriceInBNB} />

                <TableData icon={BShares} type='BSHARE' currSupply={bShareCirculatingSupply} totalSupply={bShareTotalSupply} priceinDollar={bSharePriceInDollars} priceinBNB={bSharePriceInBNB} />

                <TableData icon={BBond} type='BBOND' currSupply={tBondCirculatingSupply} totalSupply={tBondTotalSupply} priceinDollar={tBondPriceInDollars} priceinBNB={tBondPriceInBNB} />

              </tbody>
            </table>
          </div>
          <div className="flex flex-wrap flex-col w-1/3 items-center justify-end">
            <div className="flex flex-wrap h-20 justify-center items-center border-b-2 border-b-[#C3C5CBBF]">
              <span>Current Epoch<p className='flex justify-center items-center text-2xl font-semibold'>{Number(currentEpoch)}</p></span>
            </div>
            <div className="flex flex-wrap h-20 justify-center items-center border-b-2 border-b-[#C3C5CBBF]">
              <span><p className='flex justify-center items-center text-2xl font-semibold'><ProgressCountdown base={moment().toDate()} hideBar={true} deadline={to} description="Next Epoch" /></p>Next Epoch in</span>
            </div>
            <div className="flex flex-wrap h-20 justify-center items-center text-[#C3C5CBBF]">
              <span>
                <h4 className='flex justify-center items-center'>Live TWAP:&nbsp;<p className='text-[#00E8A2]'>{scalingFactor}</p></h4>
                <h4 className='flex justify-center items-center'>TVL:&nbsp;<p className='text-[#00E8A2]'><CountUp end={TVL} separator="," prefix="$" /></p></h4>
                <h4 className='flex justify-center items-center'>Last Epoch TWAP:&nbsp;<p className='text-[#00E8A2]'>{bondScale || '-'}</p></h4>
              </span>
            </div>
          </div>
        </div>
      </div>


      {/* 2-nd section containing Latest news, Boardroom, Chat on Discord, Read Investment Strategy & Docs */}
      <div className="flex flex-wrap flex-row h-96 w-3/4 m-2">
        <div className="flex flex-wrap flex-col w-2/3 p-2">
          <a href='https://bombbshare.medium.com/the-bomb-cycle-how-to-print-forever-e89dc82c12e5' target='_blank' className="flex flex-wrap justify-end underline text-[#9EE6FF] opacity-75">Read Investment Strategy&gt;</a>
          <button onClick={() => {window.open('https://app.bogged.finance/bsc/swap','_blank')}} className='bg-[#00ADE8] opacity-75 font-bold p-1 m-1 border-[#E41A1A] border-2'>Invest Now</button>
          <div className='flex flex-wrap flex-row h-11'>
            <button onClick={() => {window.open('https://discord.com/invite/94Aa4wSz3e','_blank')}} className='bg-slate-400 opacity-75 text-black h-9 border-[#728CDF] border-2 w-[299px] justify-center p-1 m-1'><span className='inline-flex'><img src={ Discord } alt="" className='h-6 w-6 p-1 rounded-full bg-white' />&nbsp;Chat on Discord</span></button>
            <button onClick={() => {window.open('https://docs.bomb.money/welcome-start-here/readme','_blank')}} className='bg-slate-400 opacity-75 text-black h-9 border-[#728CDF] border-2 w-[300px] justify-center p-1 m-1'><span className='inline-flex'><img src={ Docs } alt="" className='h-6 w-6 p-1 rounded-full bg-white' />&nbsp;Read Docs</span></button>
          </div>
          <SmallPoster bsharePrice={bSharePriceInDollars} />
        </div>
        <div className="flex flex-wrap bg w-1/3 h-96 p-3 rounded-lg border-[#728CDF] border-2 text-lg font-semibold">Latest News</div>
      </div>

      {/* BOMB FARMS */}
      <div className="flex flex-wrap flex-col h-[700px] w-3/4 bg p-3 rounded-lg border-2 border-[#728CDF]">
        <div className="flex flex-wrap flex-row h-20">
          <div className='flex flex-wrap w-[50%] justify-start'>
            <span>
              <h1>Bomb Farms</h1>
              <p>Stake your LP tokens in our farms to start earning $BSHARE</p>
            </span>
          </div>
          <div className="flex flex-wrap w-[50%] justify-end">
              <button className='border-2 border-white rounded-full h-10 w-36'>
                <span className='inline-flex'>Claim All&nbsp;<img src={ BShares } alt="" className='h-6 w-6 p-1 bg-gray-700 rounded-full' /></span>
              </button>
          </div>
        </div>

        {activeBanks.map((bank) => {
            return(<AccessOnebyOne key={bank.poolId} type={bank.depositTokenName.replace('-LP','')} bankId={bank.contract} stakeIcon={(bank.poolId === 1) ? BombBitcoin : BombbnbLP } earnedIcon={BShares} />);
        })}

      </div>

        {/* BBONDS */}
      <div className="flex flex-wrap flex-col h-72 w-3/4 bg m-2 rounded-lg border-2 border-[#728CDF] p-3">
        <div className="flex flex-wrap h-30 w-3/4">
          <img src={ BBond } alt="" className='h-12 w-12' />
          <span>
            <h3>Bonds</h3>
            <p>BBOND can be purchased only on contraction periods, when TWAP of BOMB is below 1</p>
          </span>
        </div>
        <div className="flex flex-wrap flex-row h-40 p-3">
          <div className="flex flex-wrap w-1/4 items-center justify-center p-3">
            <span>
              <p>Current Price: (Bomb)^2</p>
              <h3 className='text-base font-bold'>10K BBOND = {Number(bondStat?.tokenInFtm).toFixed(4) || '-'} BTCB</h3>
            </span>
          </div>
          <div className="flex flex-wrap flex-col w-1/4 items-center justify-center p-5">
              <div className="flex flex-wrap h-30">
                <p>Available to redeem</p>
              </div>
              <div className='flex flex-wrap h-30'>
                <img src={ BBond } alt="" className='h-8 w-8' />
                <h3 className='ml-1 text-3xl font-semibold'>{getDisplayBalance(bondBalance)}</h3>
              </div>
          </div>
          <div className="flex flex-wrap flex-col w-2/4 p-3">
            <div className="flex flex-wrap h-20 border-b-2 border-white p-2">
              <span className='w-2/4'>
                <h3>Purchase BBond</h3>
                <p>Bomb is over peg</p>
              </span>
              <div className='flex flex-wrap justify-end w-2/4'>
                <button disabled={approveStatus === ApprovalState.PENDING || approveStatus === ApprovalState.UNKNOWN} onClick={() => catchError(approve(), `Unable to approve BOMB`)} className={`border-2 rounded-full h-10 w-36 pt-1 pb-1 ${approveStatus === ApprovalState.PENDING || approveStatus === ApprovalState.UNKNOWN ? 'border-[#C3C5CBBF] text-[#C3C5CBBF]' : 'border-white text-white'}`}>Purchase&nbsp;&nbsp;&nbsp;<FontAwesomeIcon icon={faShoppingCart} /></button>
              </div>
            </div>
            <div className="flex flex-wrap h-20 mt-5 p-2">
              <h3 className='w-2/4'>Redeem Bomb</h3>
              <div className='flex flex-wrap justify-end w-2/4'>
                <button disabled={redeemStatus === ApprovalState.PENDING || redeemStatus === ApprovalState.UNKNOWN} onClick={() => catchError(redeem(), `Unable to redeem BBOND`)} className={`border-2 rounded-full h-10 w-36 pt-1 pb-1 ${approveStatus === ApprovalState.PENDING || approveStatus === ApprovalState.UNKNOWN ? 'border-[#C3C5CBBF] text-[#C3C5CBBF]' : 'border-white text-white'}`}>Redeem&nbsp;&nbsp;&nbsp;<FontAwesomeIcon icon={faArrowCircleDown} /></button>
              </div>
            </div>
          </div>
        </div>
      </div>



    </section>
  );
}

export default Dashboard;
