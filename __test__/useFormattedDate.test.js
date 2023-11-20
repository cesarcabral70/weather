import useFormattedDate from "./../hooks/useFormattedDate";

describe("useFormattedDate", () => {
  it("returns the correct ISO formatted date", () => {
    const result = useFormattedDate();
    const { isoFormattedDate } = result;

    // Check if isoFormattedDate is a string
    expect(typeof isoFormattedDate).toBe("string");

    // Check if isoFormattedDate follows the ISO format
    expect(isoFormattedDate).toMatch(
      /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z$/
    );
  });
});
