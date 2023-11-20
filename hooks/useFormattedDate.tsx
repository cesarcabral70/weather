export default function useFormattedDate() {
  const originalDate = new Date();
  const utcDate = new Date(
    originalDate.getTime() - originalDate.getTimezoneOffset() * 60000
  );
  const isoFormattedDate = utcDate.toISOString();

  return {
    isoFormattedDate,
  };
}
