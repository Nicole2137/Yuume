import { useState, useEffect, useRef, useCallback } from "react";
import { useMotionValue, animate, useTransform } from "motion/react";
import {
  mobileNavDragProperties,
  mobileNavAnimation,
} from "@/constants/mobileNav";

export const useMobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const mobileNavRef = useRef<HTMLElement>(null);
  const dragX = useMotionValue<number>(mobileNavDragProperties.closedPosition);
  const overlayOpacity = useTransform(
    dragX,
    [
      mobileNavDragProperties.openedPosition,
      mobileNavDragProperties.closedPosition,
    ],
    [1, 0],
  );

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const animateNavToState = useCallback(() => {
    animate(
      dragX,
      isOpen
        ? mobileNavDragProperties.openedPosition
        : mobileNavDragProperties.closedPosition,
      {
        type: mobileNavAnimation.type,
        duration: mobileNavAnimation.duration,
        ease: mobileNavAnimation.ease,
      },
    );
  }, [dragX, isOpen]);

  useEffect(() => animateNavToState(), [animateNavToState]);

  useEffect(() => {
    let [touchStartX, touchStartY] = [0, 0];
    let isDragging = false;
    let navWidth = 0;

    const handleTouchStart = (event: TouchEvent) => {
      const currentTouch = event.changedTouches[0];
      [touchStartX, touchStartY] = [currentTouch.screenX, currentTouch.screenY];

      if (mobileNavRef.current) {
        navWidth = mobileNavRef.current.getBoundingClientRect().width;
      }

      if (navWidth === 0) return;

      isDragging = true;
    };

    const handleTouchMove = (event: TouchEvent) => {
      if (!isDragging) return;

      const currentTouch = event.changedTouches[0];
      const [currentX, currentY] = [currentTouch.screenX, currentTouch.screenY];

      const deltaX = currentX - touchStartX;
      const deltaY = Math.abs(currentY - touchStartY);

      if (deltaY > Math.abs(deltaX)) {
        isDragging = false;
        return;
      }

      const dragOffsetPercent = (deltaX / navWidth) * 100;

      const newTargetPositionPercent = Math.max(
        0,
        Math.min(100, isOpen ? dragOffsetPercent : 100 + dragOffsetPercent),
      );

      dragX.set(newTargetPositionPercent);
    };

    const handleTouchEnd = () => {
      if (!isDragging) return;

      const currentPercent = dragX.get();

      const pixelsMoved = Math.abs(
        ((isOpen ? currentPercent : 100 - currentPercent) / 100) * navWidth,
      );

      if (!isOpen && pixelsMoved >= mobileNavDragProperties.openOffset) {
        setIsOpen(true);
      } else if (isOpen && pixelsMoved >= mobileNavDragProperties.closeOffset) {
        setIsOpen(false);
      } else {
        animateNavToState();
      }

      isDragging = false;
    };

    const handleTouchCancel = () => {
      if (!isDragging) return;

      isDragging = false;
      animateNavToState();
    };

    document.addEventListener("touchstart", handleTouchStart);
    document.addEventListener("touchmove", handleTouchMove);
    document.addEventListener("touchend", handleTouchEnd);
    document.addEventListener("touchcancel", handleTouchCancel);

    return () => {
      document.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleTouchEnd);
      document.removeEventListener("touchcancel", handleTouchCancel);
    };
  }, [dragX, isOpen, animateNavToState]);

  return {
    isOpen,
    setIsOpen,
    mobileNavRef,
    dragX,
    overlayOpacity,
  };
};
