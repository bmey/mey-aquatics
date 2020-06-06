function isEmpty(item) {
  return !item.id && !item.common && !item.scientific;
}

function filterSpecies(species) {
  return species.filter(function (item) {
    if (isEmpty(item)) {
      return false;
    }

    if (!item.shouldShow) {
      return false;
    }

    return true;
  });
}

function filterStock(items) {
  return items.filter(function (item) {
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
    .toUpperCase()
    .trim();
}

function getId(item) {
  return toKebabCase(item.id);
}

function aggregateStock(stock) {
  return stock.reduce(function (allStock, item) {
    var id = getId(item).concat("|", item.size.toUpperCase());
    if (id in allStock) {
      allStock[id] += +item.count;
    } else {
      allStock[id] = +item.count;
    }
    return allStock;
  }, {});
}

function combineSizes(item, stockCount) {
  item.sizes["F"].count = updateSizeCount(item, stockCount, "F");
  item.sizes["S"].count = updateSizeCount(item, stockCount, "S");
  item.sizes["M"].count = updateSizeCount(item, stockCount, "M");
  item.sizes["L"].count = updateSizeCount(item, stockCount, "L");
  item.sizes["B"].count = updateSizeCount(item, stockCount, "B");

  return item.sizes;
}

function updateSizeCount(item, stockCount, size) {
  return stockCount[item.id + "|" + size] || 0;
}

function getOriginId(item) {
  var subOriginId = toKebabCase(item.origin ? item.origin.replace(/\s+/g, "").substr(0, 5) : "OTHER");
  var continentId = item.id.split("-")[0];

  if (subOriginId === "SEASI" || subOriginId === "AFRIC") {
    subOriginId = "OTHER";
  }

  return continentId + "-" + subOriginId;
}

function filterAndCombineLists(species, stock) {
  var stockDictionary = aggregateStock(filterStock(stock));
  var species = filterSpecies(species);
  var data = [];

  species.forEach(function (item) {
    var model = {
      id: getId(item),
      onCaresList: !!item.onCaresList,
      common: item.common,
      scientific: item.scientific,
      origin: getOriginId(item),
      sizes: {
        F: { length: +item.sizeF || 0, price: item.priceF, wholesalePrice: item.wholesalePriceF },
        S: { length: +item.sizeS || 0, price: item.priceS, wholesalePrice: item.wholesalePriceS },
        M: { length: +item.sizeM || 0, price: item.priceM, wholesalePrice: item.wholesalePriceM },
        L: { length: +item.sizeL || 0, price: item.priceL, wholesalePrice: item.wholesalePriceL },
        B: { length: +item.sizeB || 0, price: item.priceB, wholesalePrice: item.wholesalePriceB },
      },
    };

    if (item.picture) {
      model.picture = item.picture;
    }

    model.sizes = combineSizes(model, stockDictionary);
    data.push(model);
  });

  return data;
}

function getHotItems(hotItemsSheetModel) {
  return hotItemsSheetModel.reduce(function (result, item) {
    result.push(item.id);
    return result;
  }, []);
}
