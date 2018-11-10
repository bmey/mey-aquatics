import sort from "./sort";
import { SORT_BY } from "./constants";

describe("sort", () => {
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

  it("sorts case-insensitive alphabetical by common name", () => {
    const productList = [setupProductItem("aA"), setupProductItem("B"), setupProductItem("AA"), setupProductItem("aa")];

    const result = sort(productList, SORT_BY.ALPHABETICAL);

    expect(result.map(r => r.id)).toEqual(["aA", "AA", "aa", "B"]);
  });

  it("sorts empty common names to end when alphabetical by common name", () => {
    const productList = [
      {
        id: "empty",
        common: "",
      },
      setupProductItem("A"),
      {
        id: "empty2",
        common: "",
      },
    ];

    const result = sort(productList, SORT_BY.ALPHABETICAL);

    expect(result.map(r => r.id)).toEqual(["A", "empty", "empty2"]);
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
      common: name,
      sizes: {
        S: { price },
        M: { price },
        L: { price },
        B: { price },
        ...sizeOptions,
      },
    };
  };
});
