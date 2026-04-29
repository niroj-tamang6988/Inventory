import { useState } from "react";

export function useModuleFeedback() {
  const [feedback, setFeedback] = useState("");

  const showFeedback = (message: string) => setFeedback(message);
  const clearFeedback = () => setFeedback("");

  return { feedback, showFeedback, clearFeedback };
}
