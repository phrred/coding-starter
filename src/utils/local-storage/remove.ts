export default function removeWithPrefix(key: string) {
  localStorage.removeItem(`${key}`);
}
