/**
 * Joins the passed-in CSS classes with a space.
 */
export default function joinClasses(
  ...cssClasses: Array<string | null | undefined>
): string {
  return cssClasses.filter((className) => className != null).join(" ");
}
