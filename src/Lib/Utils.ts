export const toShortForm = (value: string) => {
  const words = value
    .trim()
    .split(/\s+/)
    .filter(Boolean);

  if (!words.length) {
    return "";
  }

  return words
    .slice(0, 4)
    .map((word) => word[0].toUpperCase())
    .join("");
};