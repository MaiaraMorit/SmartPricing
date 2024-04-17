const {AllPacks} = require("../database/models/packsModel");

const packList = async () => {
  const packs = await AllPacks();
  console.log('MEUS PACKS NO SERVICE:', packs);

  return packs;
};

module.exports = { packList };