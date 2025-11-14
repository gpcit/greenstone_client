import { create } from 'zustand';
import { getFirstRaffleWinners, getSecondtRaffleWinners, getThirdRaffleWinners } from '../services/raffleWinnerServices';

export const useRaffleWinnerStore = create((set) => ({
    firstRaffleWinners: [],
    secondRaffleWinners: [],
    thirdRaffleWinners: [],
    fetchFirstRaffleWinners: async () => {
        try {
            const firstRaffleWinners = await getFirstRaffleWinners();
            set({ firstRaffleWinners });
        } catch (error) {
            console.error("Error fetching first raffle winners:", error);
        }
    },
    fetchSecondRaffleWinners: async () => {
        try {
            const secondRaffleWinners = await getSecondtRaffleWinners();
            set({ secondRaffleWinners });
        } catch (error) {
            console.error("Error fetching second raffle winners:", error);
        }
    },
    fetchThirdRaffleWinners: async () => {
        try {
            const thirdRaffleWinners = await getThirdRaffleWinners();
            set({ thirdRaffleWinners });
        } catch (error) {
            console.error("Error fetching third raffle winners:", error);
        }
    },
}))

