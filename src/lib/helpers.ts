export function getErrorMessage(err: unknown): string {
  const e = err as { message?: string };
  if (e && e.message) {
    return e.message;
  }
  return "Something went wrong. Please try again.";
}
