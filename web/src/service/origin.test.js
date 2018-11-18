import getOrigins from "./originList";
import mapStateToOrigin from "./origin";

jest.mock("./originList");

describe("mapStateToOrigin", () => {
  const originList = [
    {
      id: "AME",
      name: "Americas",
      subLocations: [
        {
          id: "AME-OTHER",
          name: "Other",
        },
        {
          id: "AME-SOUTH",
          name: "South America",
        },
        {
          id: "AME-NORTH",
          name: "North America",
        },
      ],
    },
    {
      id: "OTHER",
      name: "Other",
      subLocations: [],
    },
  ];

  it("checked is false for all when there are no applied filters", () => {
    getOrigins.mockReturnValue(originList);
    const appliedFilters = [];

    const result = mapStateToOrigin(appliedFilters);

    result.forEach(origin => {
      expect(origin.checked).toBe(false);
      origin.subLocations.forEach(subOrigin => {
        expect(subOrigin.checked).toBe(false);
      });
    });
  });

  it("returns true for matching sub-origins when in applied filters", () => {
    getOrigins.mockReturnValue(originList);
    const appliedFilters = ["AME-OTHER", "AME-NORTH"];

    const result = mapStateToOrigin(appliedFilters);

    const topOrigin = result.filter(origin => origin.id === "AME")[0];
    const otherOrigin = result.filter(origin => origin.id !== "AME")[0];
    const checkedSubOrigins = topOrigin.subLocations.filter(origin => origin.checked);
    const uncheckedSubOrigins = topOrigin.subLocations.filter(origin => !origin.checked);
    expect(topOrigin.checked).toBe(false);
    expect(otherOrigin.checked).toBe(false);
    expect(checkedSubOrigins.map(s => s.id)).toEqual(expect.arrayContaining(["AME-NORTH", "AME-OTHER"]));
    expect(uncheckedSubOrigins.map(s => s.id)).toEqual(["AME-SOUTH"]);
  });
});
