import React from 'react';
import { roundAndFormatNumber } from '../../../0x';
import MetaMask from '../assets/metamask.png';

const TableData = ({ icon,type,currSupply,totalSupply,priceinDollar,priceinBNB }) => {
    return(
        <tr className='border-b-2 border-[#C3C5CBBF] p-3'>
            <td><span className='inline-flex'><img src={ icon } alt="" className='h-5 w-5 p-1 rounded-full bg-gray-700' />{type}</span></td>
            <td>{roundAndFormatNumber(currSupply, 2)}</td>
            <td>{roundAndFormatNumber(totalSupply, 2)}</td>
            <td>${priceinDollar ? roundAndFormatNumber(priceinDollar, 2) : '-.--'}<br />{priceinBNB ? priceinBNB : '-.----'} BTCB</td>
            <td><img src={ MetaMask } alt="" className='h-10 w-10' /></td>
        </tr>
    );
};

export default TableData;