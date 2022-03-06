import { O } from "utils/local-storage/types";

export default function setString(key: string, value: O) {
  localStorage.setItem(`${key}`, JSON.stringify(value));
}
