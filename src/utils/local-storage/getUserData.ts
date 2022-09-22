import { UserData } from "utils/local-storage/types";

export default function getUserData(key: string): UserData {
  const value = localStorage.getItem(`${key}`);
  return value != null ? (JSON.parse(value) as UserData) : {};
}
