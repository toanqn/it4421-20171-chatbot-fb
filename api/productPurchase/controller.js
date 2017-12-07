const schema = require('./schema');

const savePurchase = function (purchase) {
  options = { upsert: true, new: true, setDefaultsOnInsert: true };
  return schema.update(
    {
      productId: purchase.productId,
      owner: purchase.owner
    },
    purchase,
    {
      upsert: true
    }
  );
};

const updatePurchase = function (purchase) {
  return schema.update(
    {
      productId: purchase.productId,
      owner: purchase.owner
    },
    purchase
  );
}

const getProductsByOwner = function(owner){
  return schema.find({owner: owner});
}

module.exports = {
  savePurchase,
  updatePurchase,
  getProductsByOwner,
};
