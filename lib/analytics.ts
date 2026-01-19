export type EventPayload = Record<string, string | number | boolean | undefined>;

export const trackEvent = (name: string, payload: EventPayload = {}) => {
  if (typeof window === "undefined") return;
  // Stub for analytics integration.
  console.info("[trackEvent]", name, payload);
};
