function isEmpty(item) {
  return !item.id && !item.common && !item.scientific;
}

function filterSpecies(species) {
  return species.filter(function(item) {
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
  return items.filter(function(item) {
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

function filterAndCombineLists(species, stock) {
  var stockDictionary = aggregateStock(filterStock(stock));
  var species = filterSpecies(species);
  var data = [];

  species.forEach(function(item) {
    var model = {
      id: getId(item),
      onCaresList: !!item.onCaresList,
      common: item.common,
      scientific: item.scientific,
      origin: item.origin,
      sizes: {
        F: { length: +item.sizeF || 0 },
        S: { length: +item.sizeS || 0 },
        M: { length: +item.sizeM || 0 },
        L: { length: +item.sizeL || 0 },
        B: { length: +item.sizeB || 0 },
      },
    };

    if (item.picture) {
      model.picture = "fish/tagged/" + item.picture;
    }

    model.sizes = combineSizes(model, stockDictionary);
    data.push(model);
  });

  return data;
}
