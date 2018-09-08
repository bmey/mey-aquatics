function isEmpty(item) {
  return !item.common && !item.scientific;
}

function filterSpecies(species) {
  return species.filter(function(item) {
    if (!(item.onCaresList === 1 || item.onCaresList === "")) {
      return false;
    }

    if (isEmpty(item)) {
      return false;
    }

    if (!item.size) {
      return false;
    }

    return true;
  });
}

function filterStock(stock) {
  return stock.filter(function(item) {
    if (isEmpty(item)) {
      return false;
    }

    return true;
  });
}

function toKebabCase(string) {
  return string
    .replace(/\"/g, "")
    .replace(/\'/g, "")
    .replace(/\s+/g, "-")
    .toLowerCase()
    .trim();
}

function getId(item) {
  var common = toKebabCase(item.common);
  var scientific = toKebabCase(item.scientific);
  var origin = toKebabCase(item.origin);
  var id = scientific || common;

  if (origin) {
    return id.concat("|", origin);
  }

  return id;
}

function aggregateStock(stock) {
  return stock.reduce(function(allStock, item) {
    var id = getId(item).concat("|", item.size.toUpperCase());
    if (id in allStock) {
      allStock[id] += +item.count;
    } else {
      allStock[id] = +item.count;
    }
    return allStock;
  }, {});
}

function aggregateSpecies(species) {
  return species.reduce(function(all, item) {
    var id = getId(item);
    var currentSize = item.size.toUpperCase();

    if (id in all) {
      all[id].sizes[currentSize].length = +item.length;
      all[id].sizes[currentSize].price = +item.price;
    } else {
      all[id] = item;
      all[id].id = id;
      all[id].size = undefined;
      all[id].sizes = {
        S: { length: 0, price: 0 },
        M: { length: 0, price: 0 },
        L: { length: 0, price: 0 },
        B: { length: 0, price: 0 },
      };

      all[id].sizes[currentSize].length = +item.length;
      all[id].sizes[currentSize].price = +item.price;
    }
    return all;
  }, {});
}

function combineSizes(item, stockCount) {
  item.sizes["S"].count = updateSizeCount(item, stockCount, "S");
  item.sizes["M"].count = updateSizeCount(item, stockCount, "M");
  item.sizes["L"].count = updateSizeCount(item, stockCount, "L");
  item.sizes["B"].count = updateSizeCount(item, stockCount, "B");

  return item.sizes;
}

function updateSizeCount(item, stockCount, size) {
  return stockCount[item.id + "|" + size] || 0;
}

function filterAndCombineLists(species, stock) {
  var stockDictionary = aggregateStock(filterStock(stock));
  var speciesDictionary = aggregateSpecies(filterSpecies(species));
  var data = [];

  Object.keys(speciesDictionary).forEach(function(key) {
    var item = speciesDictionary[key];
    var sizes = combineSizes(item, stockDictionary);
    data.push({
      id: item.id,
      onCaresList: !!item.onCaresList,
      common: item.common,
      scientific: item.scientific,
      origin: item.origin,
      collectionPoint: item.collectionPoint,
      sizes: sizes,
    });
  });

  return data;
}
