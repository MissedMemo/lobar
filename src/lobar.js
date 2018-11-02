const _ = {};

export default _;

_.forEach = _.each = (collection, callback) => {
  if (Array.isArray(collection)) {
    /* cleaner to use 'for-of' for arrays, but we need the index
      for ( const element of collection ) {
        callback( element )
      }
    */
    for (let i = 0; i < collection.length; i++) {
      callback(collection[i], i, collection);
    }
  } else {
    for (const key in collection) {
      callback(collection[key], key, collection);
    }
  }

  return collection; // by convention
};
