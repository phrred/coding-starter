export default function getWithPrefix(prefix: string, key: string) {
  return localStorage.getItem(`${prefix}-${key}`);
}
