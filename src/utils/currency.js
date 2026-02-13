export const FREEBIE_SYMBOL = "₣";

export const FREEBIE_WORD = (amount) => { 
   const formatted = amount.toLocaleString();
    return amount === 1 ? `${formatted} freebie` : `${formatted} Freebies`;
};