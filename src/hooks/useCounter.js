import { useEffect, useState } from "react";

export default function useCounter(target, trigger) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!trigger) return;

    let start = null;

    const duration = 1400;

    const step = (timestamp) => {
      if (!start) {
        start = timestamp;
      }

      const progress = Math.min((timestamp - start) / duration, 1);

      const eased = 1 - Math.pow(1 - progress, 3);

      setValue(Math.round(eased * target));

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [trigger, target]);

  return value;
}
