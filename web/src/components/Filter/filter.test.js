import filter from "./filter";
import { FILTER } from "./constants";

describe("filter", () => {
  it("returns empty array when input is null", () => {
    const result = filter(null);

    expect(result).toEqual([]);
  });

  it("returns empty array when input is undefined", () => {
    const result = filter(undefined);

    expect(result).toEqual([]);
  });

  it("returns empty array when input is empty", () => {
    const result = filter([]);

    expect(result).toEqual([]);
  });

  it("only includes items on CARES list when CARES filter applied", () => {
    const productList = [{ id: "cares", onCaresList: true }, { id: "non-cares", onCaresList: false }];
    const appliedFilters = [{ type: FILTER.CARES_LIST }];

    const result = filter(productList, appliedFilters);

    expect(result.length).toBe(1);
    expect(result[0].id).toEqual("cares");
  });

  it("includes items from areas of origin when ORIGIN filters applied", () => {
    const productList = [
      { id: "african", origin: "Africa" },
      { id: "american", origin: "Americas" },
      { id: "non-african", origin: "elsewhere" },
    ];
    const appliedFilters = [{ type: FILTER.ORIGIN, value: "africa" }, { type: FILTER.ORIGIN, value: "americas" }];

    const result = filter(productList, appliedFilters);

    expect(result.length).toBe(2);
    expect(result[0].id).toEqual("african");
    expect(result[1].id).toEqual("american");
  });

  /*  
* endangered species (on CARES list)

* origin
	- South East Asia
		- Indonesia
		- India
		- Other
	- Americas
		- South America
		- Costa Rica
		- Panama
		- Central America
		- Other
	- Africa
		- Lake Malawi
		- Lake Tanganyika
		- Lake Victoria
		- Congo River
		- Other

* length (some range breakdown. example ranges below)
	- less than 2 inches
	- 2-5 inches
	- 5+ inches
	
* price (some range breakdown. example ranges below)
	- under $10 each
	- $10-$30 each
	- $30+ each
	*/
  //   const setupProductItem = (name, price, sizeOptions = {}) => {
  //     return {
  //       id: name,
  //       common: name,
  //       sizes: {
  //         S: { price },
  //         M: { price },
  //         L: { price },
  //         B: { price },
  //         ...sizeOptions,
  //       },
  //     };
  //   };

  const setupProductItem = (id, options = {}) => {
    return {
      id,
      ...options,
    };
  };
});
