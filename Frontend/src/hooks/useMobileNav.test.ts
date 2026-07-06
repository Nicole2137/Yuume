import { renderHook, act } from "@testing-library/react";
import { useMobileNav } from "./useMobileNav";
import { mobileNavDragProperties } from "@/constants/mobileNav";

const setupMobileNav = () => {
  const { result } = renderHook(() => useMobileNav());

  result.current.mobileNavRef.current = {
    getBoundingClientRect: () => ({ width: 300 }),
  } as HTMLElement;

  return result;
};

const touchEvent = (
  type: "touchstart" | "touchmove" | "touchend",
  x: number,
  y: number,
) => {
  const event = new TouchEvent(type, {
    changedTouches: [{ screenX: x, screenY: y } as unknown as Touch],
  });

  document.dispatchEvent(event);
};

describe("useMobileNavHook", () => {
  it("closes mobile nav after clicking escape key", () => {
    const { result } = renderHook(() => useMobileNav());

    act(() => {
      result.current.setIsOpen(true);
    });

    expect(result.current.isOpen).toBe(true);

    act(() => {
      const escapeEvent = new KeyboardEvent("keydown", { key: "Escape" });
      document.dispatchEvent(escapeEvent);
    });

    expect(result.current.isOpen).toBe(false);
  });

  it("does not active drag gesture when move is more vertical than horizontal", () => {
    const result = setupMobileNav();

    const initialDragX = result.current.dragX.get();

    act(() => {
      touchEvent("touchstart", 0, 0);
      touchEvent("touchmove", 20, 25);
    });

    expect(result.current.dragX.get()).toBe(initialDragX);
  });

  it("active drag gesture when move is more horizontal than vertical", () => {
    const result = setupMobileNav();

    const initialDragX = result.current.dragX.get();

    act(() => {
      touchEvent("touchstart", 0, 0);
      touchEvent("touchmove", -25, 20);
    });

    expect(result.current.dragX.get()).not.toBe(initialDragX);
  });

  it("opens MobileNav if the drag distance is greater or equal than openOffset", () => {
    const result = setupMobileNav();

    const openOffset = -mobileNavDragProperties.openOffset;
    const errorTolerance = 2;

    const dragDistance = openOffset - errorTolerance;

    act(() => {
      touchEvent("touchstart", 0, 0);
      touchEvent("touchmove", dragDistance, 0);
      touchEvent("touchend", dragDistance, 0);
    });

    expect(result.current.isOpen).toBe(true);
  });

  it("closes MobileNav if the drag distance is greater or equal than closeOffset", () => {
    const result = setupMobileNav();

    const closeOffset = mobileNavDragProperties.closeOffset;
    const errorTolerance = 2;

    const dragDistance = closeOffset + errorTolerance;

    act(() => {
      result.current.setIsOpen(true);
    });

    expect(result.current.isOpen).toBe(true);

    act(() => {
      touchEvent("touchstart", 0, 0);
      touchEvent("touchmove", dragDistance, 0);
      touchEvent("touchend", dragDistance, 0);
    });

    expect(result.current.isOpen).toBe(false);
  });

  it("does not open MobileNav if the drag distance is lower than openOffset", () => {
    const result = setupMobileNav();

    const openOffset = -mobileNavDragProperties.openOffset;
    const dragShift = 5;

    const dragDistance = openOffset + dragShift;

    act(() => {
      touchEvent("touchstart", 0, 0);
      touchEvent("touchmove", dragDistance, 0);
      touchEvent("touchend", dragDistance, 0);
    });

    expect(result.current.isOpen).toBe(false);
  });

  it("does not close MobileNav if the drag distance is lower than closeOffset", () => {
    const result = setupMobileNav();

    const closeOffset = mobileNavDragProperties.closeOffset;
    const dragShift = 5;

    const dragDistance = closeOffset - dragShift;

    act(() => {
      result.current.setIsOpen(true);
    });

    expect(result.current.isOpen).toBe(true);

    act(() => {
      touchEvent("touchstart", 0, 0);
      touchEvent("touchmove", dragDistance, 0);
      touchEvent("touchend", dragDistance, 0);
    });

    expect(result.current.isOpen).toBe(true);
  });
});
