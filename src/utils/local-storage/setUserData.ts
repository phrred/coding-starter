import { UserData } from "utils/local-storage/types";

export default function setUserData(key: string, value: UserData) {
  localStorage.setItem(`${key}`, JSON.stringify(value));
}
