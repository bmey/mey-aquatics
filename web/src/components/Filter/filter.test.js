import sort from "./filter";
import { SORT_BY } from "./constants";

describe("filter", () => {
  it("returns empty array when input is null", () => {
    const result = sort(null);

    expect(result).toEqual([]);
  });

  it("returns empty array when input is undefined", () => {
    const result = sort(undefined);

    expect(result).toEqual([]);
  });

  it("returns empty array when input is empty", () => {
    const result = sort([]);

    expect(result).toEqual([]);
  });

  it("returns default sorting (alphabetical by common name) when no sort specified", () => {
    const productList = [setupProductItem("Z"), setupProductItem("A")];

    const result = sort(productList);

    expect(result[0].id).toEqual("A");
    expect(result[1].id).toEqual("Z");
  });

  it("sorts case-insensitive alphabetical by common name when alphabetical specified", () => {
    const productList = [setupProductItem("aA"), setupProductItem("B"), setupProductItem("AA"), setupProductItem("aa")];

    const result = sort(productList, SORT_BY.ALPHABETICAL);

    expect(result[0].id).toEqual("aA");
    expect(result[1].id).toEqual("AA");
    expect(result[2].id).toEqual("aa");
    expect(result[3].id).toEqual("B");
  });

  it("sorts by price (low to high) when low-to-high specified", () => {
    const productList = [setupProductItem("C", 10), setupProductItem("B", 15), setupProductItem("A", 10)];

    const result = sort(productList, SORT_BY.PRICE_LOW_TO_HIGH);

    expect(result[0].id).toEqual("C");
    expect(result[1].id).toEqual("A");
    expect(result[2].id).toEqual("B");
  });

  it("sorts by price (high to low) when high-to-low specified", () => {
    const productList = [setupProductItem("C", 10), setupProductItem("B", 15), setupProductItem("A", 10)];

    const result = sort(productList, SORT_BY.PRICE_HIGH_TO_LOW);

    expect(result[0].id).toEqual("B");
    expect(result[1].id).toEqual("C");
    expect(result[2].id).toEqual("A");
  });

  it("sorts by price (high to low) considering all prices an item lists for various sizes", () => {
    const productList = [
      setupProductItem("C", 0, { B: { price: 2 } }),
      setupProductItem("B", 0, { L: { price: 4 } }),
      setupProductItem("A", 1, { B: { price: 3 } }),
    ];

    const result = sort(productList, SORT_BY.PRICE_HIGH_TO_LOW);

    expect(result[0].id).toEqual("B");
    expect(result[1].id).toEqual("A");
    expect(result[2].id).toEqual("C");
  });

  it("sorts by price (low to high) using lowest non-zero price for all sizes", () => {
    const productList = [
      setupProductItem("C", 0, { B: { price: 2 } }),
      setupProductItem("B", 0, { L: { price: 4 } }),
      setupProductItem("A", 5, { B: { price: 1 } }),
    ];

    const result = sort(productList, SORT_BY.PRICE_LOW_TO_HIGH);

    expect(result[0].id).toEqual("A");
    expect(result[1].id).toEqual("C");
    expect(result[2].id).toEqual("B");
  });

  const setupProductItem = (name, price, sizeOptions = {}) => {
    return {
      id: name,
      onCaresList: false,
      common: name,
      scientific: name,
      origin: "country of origin",
      sizes: {
        S: { price },
        M: { price },
        L: { price },
        B: { price },
        ...sizeOptions,
      },
    };
  };

  const createSizeData = price => {
    return {
      price,
    };
  };
});
