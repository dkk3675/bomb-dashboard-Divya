import React from 'react';

import './Dashboard.css';
import Bomb from './assets/bomb.png';
import BBond from './assets/bbond.png';
import BShares from './assets/bshares.png';
import BombBitcoin from './assets/bomb-bitcoin.png';
import MetaMask from './assets/metamask.png';
import Discord from './assets/discord.png';
import Docs from './assets/docs.png';
import BigPoster from './components/bigposter';
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

const Dashboard = () => {
  return (
    <section className='flex flex-wrap flex-col max-w-full h-auto bg-[#373747] items-center p-0 m-0 text-white'>

      {/* <div className=" h-auto fixed overflow-x-hidden">
        <svg height='1000' width='1300' >
          <image href={ One } height='110vh' width='1100' />
          <image href={ Two } height='110vh' width='1150'  />
          <image href={ Three } height='110vh' width='1200'  />
          <image href={ Four } height='110vh' width='1250'  />
          <image href={ Five } height='110vh' width='1300'  />
          <image href={ Six } height='110vh' width='1325'  />
          <image href={ Seven } height='110vh' width='1350'  />
          <image href={ Eight } height='110vh' width='1375'  />
          <image href={ Nine } height='110vh' width='1400'  />
          <image href={ Ten } height='110vh' width='1425'  />
          <image href={ Eleven } height='110vh' width='1450'  />
          <image href={ Twelve } height='110vh' width='1475'  />
        </svg>
      </div> */}

      <div className="flex flex-wrap flex-col h-80 w-3/4 p-3 bg mt-5">
        <div className="flex flex-wrap h-12 w-full justify-center border-b-[#C3C5CBBF] border-b-[1px]">
          <h1>Bomb Finance Summary</h1>
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
                <tr className='border-b-2 border-[#C3C5CBBF] p-3'>
                  <td><span className='inline-flex'><img src={ Bomb } alt="" className='h-5 w-5 p-1 rounded-full bg-gray-700' />$BOMB</span></td>
                  <td>8.66M</td>
                  <td>60.9k</td>
                  <td>$0.24<br />1.05 BTCB</td>
                  <td><img src={ MetaMask } alt="" className='h-10 w-10' /></td>
                </tr>
                <tr className='border-b-2 border-[#C3C5CBBF] p-3'>
                  <td><span className='inline-flex'><img src={ BShares } alt="" className='h-5 w-5 p-1 rounded-full bg-gray-700' />$BSHARE</span></td>
                  <td>11.43K</td>
                  <td>8.49m</td>
                  <td>$300<br />13000 BTCB</td>
                  <td><img src={ MetaMask } alt="" className='h-10 w-10' /></td>
                </tr>
                <tr className='border-b-2 border-[#C3C5CBBF] p-3'>
                  <td><span className='inline-flex'><img src={ BBond } alt="" className='h-5 w-5 p-1 rounded-full bg-gray-700' />$BBOND</span></td>
                  <td>20.00K</td>
                  <td>175k</td>
                  <td>$0.28<br />1.15 BTCB</td>
                  <td><img src={ MetaMask } alt="" className='h-10 w-10' /></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex flex-wrap flex-col w-1/3 items-center justify-end">
            <div className="flex flex-wrap h-20 justify-center items-center border-b-2 border-b-[#C3C5CBBF]">
              <span>Current Epoch<p className='flex justify-center items-center'>258</p></span>
            </div>
            <div className="flex flex-wrap h-20 justify-center items-center border-b-2 border-b-[#C3C5CBBF]">
              <span><p className='flex justify-center items-center'>03:38:36</p>Next Epoch in</span>
            </div>
            <div className="flex flex-wrap h-20 justify-center items-center text-[#C3C5CBBF]">
              <span>
                <h4 className='flex justify-center items-center'>Live TWAP:&nbsp;<p className='text-[#00E8A2]'>1.17</p></h4>
                <h4 className='flex justify-center items-center'>TVL:&nbsp;<p className='text-[#00E8A2]'>$5,002,412</p></h4>
                <h4 className='flex justify-center items-center'>Last Epoch TWAP:&nbsp;<p className='text-[#00E8A2]'>1.22</p></h4>
              </span>
            </div>
          </div>
        </div>
      </div>



      <div className="flex flex-wrap flex-row h-96 w-3/4 m-2">
        <div className="flex flex-wrap flex-col w-2/3 p-2">
          <div className="flex flex-wrap justify-end underline text-[#9EE6FF]">Read Investment Strategy&gt;</div>
          <button className='bg-[#00ADE8] opacity-75 font-bold p-1 m-1 border-[#E41A1A] border-2'>Invest Now</button>
          <div className='flex flex-wrap flex-row h-11'>
            <button className='bg-slate-400 opacity-75 text-black h-9 border-[#728CDF] border-2 w-[299px] justify-center p-1 m-1'><span className='inline-flex'><img src={ Discord } alt="" className='h-6 w-6 p-1 rounded-full bg-white' />&nbsp;Chat on Discord</span></button>
            <button className='bg-slate-400 opacity-75 text-black h-9 border-[#728CDF] border-2 w-[300px] justify-center p-1 m-1'><span className='inline-flex'><img src={ Docs } alt="" className='h-6 w-6 p-1 rounded-full bg-white' />&nbsp;Read Docs</span></button>
          </div>
          <SmallPoster />
        </div>
        <div className="flex flex-wrap bg w-1/3 h-96 p-3 rounded-lg border-[#728CDF] border-2">Latest News</div>
      </div>



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
        <BigPoster />
        <BigPoster />
      </div>


      <div className="flex flex-wrap flex-col h-72 w-3/4 bg m-2 rounded-lg border-2 border-[#728CDF] p-3">
        <div className="flex flex-wrap h-30 w-3/4">
          <img src={ BBond } alt="" className='h-12 w-12' />
          <span>
            <h3>Bonds</h3>
            <p>BBOND can be purchased only on contraction periods, when TWAP of BOMB is below 1</p>
          </span>
        </div>
        <div className="flex flex-wrap flex-row h-40 p-3">
          <div className="flex flex-wrap w-1/4 items-center justify-center p-5">
            <span>
              <p>Current Price: (Bomb)^2</p>
              <h3>BBond = 6.2872 BTCB</h3>
            </span>
          </div>
          <div className="flex flex-wrap flex-col w-1/4 items-center justify-center p-5">
              <div className="flex flex-wrap h-30">
                <p>Available to redeem</p>
              </div>
              <div className='flex flex-wrap h-30'>
                <img src={ BBond } alt="" className='h-5 w-5' />
                <h3 className='ml-5 text-base font-extrabold'>456</h3>
              </div>
          </div>
          <div className="flex flex-wrap flex-col w-2/4 p-3">
            <div className="flex flex-wrap h-20 border-b-2 border-white p-2">
              <span className='w-2/4'>
                <h3>Purchase BBond</h3>
                <p>Bomb is over peg</p>
              </span>
              <div className='flex flex-wrap justify-end w-2/4'>
                <button className='border-2 border-white rounded-full h-10 w-36 pt-1 pb-1'>Purchase</button>
              </div>
            </div>
            <div className="flex flex-wrap h-20 mt-5 p-2">
              <p className='w-2/4'>Redeem Bomb</p>
              <div className='flex flex-wrap justify-end w-2/4'>
                <button className='border-2 border-white rounded-full h-10 w-36 pt-1 pb-1'>Redeem</button>
              </div>
            </div>
          </div>
        </div>
      </div>



    </section>
  );
}

export default Dashboard;
