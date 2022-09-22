import { ApplicationData } from "utils/local-storage/types";

export default function setUserData(key: string, value: ApplicationData) {
  localStorage.setItem(`${key}`, JSON.stringify(value));
}
