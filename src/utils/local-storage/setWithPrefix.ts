export default function setWithPrefix(
  prefix: string,
  key: string,
  value: string
) {
  localStorage.setItem(`${prefix}-${key}`, value);
}
