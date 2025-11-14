import React, { useEffect } from 'react'
import Layout from '../components/ui/Layout'
import { useNavigate } from "react-router-dom";
import Table from '../components/ui/Table';
import { socket } from "../socket";
import { chunkArray } from '../utils/chunkArray';
import { useRaffleWinnerStore } from '../store/raffleWinnerStore';

const secondRaffleWinnersHead = [
  { key: 'name', label: 'Name' }
];

const Text = "text-md text-left font-semibold whitespace-nowrap px-5 py-3";

const SecondRaffle = () => {
  const { fetchSecondRaffleWinners, secondRaffleWinners } = useRaffleWinnerStore();
  const router = useNavigate();
  const handleNavigate = (path) => {
    router(path);
  }

  useEffect(() => {
    socket.on("second-raffle-winner-updated", () => {
      fetchSecondRaffleWinners();
    });
    return () => socket.off("second-raffle-winner-updated");
  }, [fetchSecondRaffleWinners]);

  useEffect(() => {
      fetchSecondRaffleWinners();
  }, [fetchSecondRaffleWinners]);

  const rowRenderer = (attendee) => (
    <>
      <td className={`px-6 ${Text} py-4`}>{attendee.name}</td>
    </>
  );
  const balintawakAttendees = secondRaffleWinners.filter(a => a.isSecondRaffleWinner === true);
  const balintawakChunks = chunkArray(balintawakAttendees, 11);
  return (
    <Layout>
      <div className=' container-fluid mx-auto flex flex-col p-5 lg:p-10'>
        <div >
          <button onClick={() => handleNavigate("/raffle/2nd/qr-scan")} className='bg-green-600 transitions border hover:bg-green-700 text-white font-bold py-2 px-4 rounded mb-5 shadow-lg'>
            Scan QR Code
          </button>
        </div>
        <div className='grid grid-cols-10 gap-4 mb-5'>
          <div className='col-span-10 border rounded-sm border-black shadow-md'>
            <h1 className='text-xl font-bold text-center p-2'>Second Raffle</h1>
            <hr className='border-black' />
              <>
                {balintawakChunks.length > 0 ? (
                  <div className='grid grid-cols-8 gap-2'>
                    {balintawakChunks.map((chunk, idx) => (
                      <div className="flex col-span-4 md:col-span-4 lg:col-span-2 mt-1 gap-4 overflow-x-auto">
                        <Table
                          key={idx}
                          tableHead={secondRaffleWinnersHead}
                          data={chunk}
                          rowRender={rowRenderer}
                        />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className='flex justify-center items-center h-48'>
                    <h1 className='text-2xl font-bold text-center'>No Winners</h1>
                  </div>
                )}
              </>
          </div>
        </div>
      </div>
    </Layout>
    
  )
}

export default SecondRaffle