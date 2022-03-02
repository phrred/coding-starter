import LocalStoragePrefix from "types/enums/LocalStoragePrefix";
import getWithPrefix from "utils/local-storage/getWithPrefix";

export default function getExample(key: string) {
  return getWithPrefix(LocalStoragePrefix.Example, key);
}
