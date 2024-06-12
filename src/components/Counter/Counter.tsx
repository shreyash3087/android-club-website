import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useAnimation } from "framer-motion";
import React from "react";
/**
 * Counter component to animate number counting when in view.
 *
 * @param {object} props - Component props.
 * @param {number} props.start_value - The starting value for the counter.
 * @param {number} props.end_value - The target value for the counter.
 */
export default function Counter({ start_value, end_value }: { start_value: number, end_value: number }) {
  // Reference to the DOM element
  const ref = useRef<HTMLSpanElement>(null);

  // Initialize motion value starting from start_value
  const motionValue = useMotionValue(start_value);

  // Apply spring animation to the motion value
  const springValue = useSpring(motionValue, {
    damping: 100,
    stiffness: 100,
  });

  // Animation controls to handle the view states
  const controls = useAnimation();

  // Use effects to handle entering and leaving the viewport
  useEffect(() => {
    const handleViewportEnter = () => {
      motionValue.set(start_value);
      controls.start({ opacity: 1 }).then(() => {
        motionValue.set(end_value);
      });
    };

    const handleViewportLeave = () => {
      motionValue.set(start_value);
      controls.start({ opacity: 0 });
    };

    const element = ref.current;
    if (element) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            handleViewportEnter();
          } else {
            handleViewportLeave();
          }
        },
        { threshold: 0.1 }
      );

      observer.observe(element);

      return () => {
        observer.unobserve(element);
      };
    }
  }, [motionValue, controls, start_value, end_value]);

  // Update the text content of the span element whenever the spring value changes
  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Intl.NumberFormat("en-US").format(
          latest.toFixed(0)
        );
      }
    });
    return () => unsubscribe();
  }, [springValue]);

  return (
    <motion.span
      ref={ref}
      animate={controls}
      initial={{ opacity: 0 }}
    />
  );
}
