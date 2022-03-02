import LocalStoragePrefix from "types/enums/LocalStoragePrefix";

export default function getWithPrefix(prefix: LocalStoragePrefix, key: string) {
  return localStorage.getItem(`${prefix}-${key}`);
}
