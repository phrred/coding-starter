export default function removeWithPrefix(prefix: string, key: string) {
  localStorage.removeItem(`${prefix}-${key}`);
}
