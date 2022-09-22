import { ApplicationData } from "utils/local-storage/types";

export default function getApplicationData(key: string): ApplicationData {
  const value = localStorage.getItem(`${key}`);
  return value != null ? (JSON.parse(value) as ApplicationData) : {downvoteCount: 0, upvoteCount: 0};
}
