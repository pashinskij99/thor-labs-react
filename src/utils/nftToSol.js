export const nftToSOL = (countNFT) =>
  parseFloat((countNFT * Number(process.env.REACT_APP_PRICE)).toFixed(2))
