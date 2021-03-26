import Portal from "@reach/portal";
import { useEffect, useRef } from "react";
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from "body-scroll-lock";

interface ISidebar {
  children: any;
  open: boolean;
}

export const Sidebar: React.FC<ISidebar> = ({ children, open }) => {
  const ref = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    if (ref.current) {
      if (open) {
        disableBodyScroll(ref.current);
      } else {
        enableBodyScroll(ref.current);
      }
    }
    return () => {
      clearAllBodyScrollLocks();
    };
  }, [open]);

  return (
    <Portal>
      {open ? (
        <div
          className="fixed md:hidden inset-0 overflow-hidden h-full z-40"
          ref={ref}
        >
          <div className="absolute inset-0 overflow-hidden">
            {/* <div
              className="hidden md:block absolute inset-0 bg-black bg-opacity-50 transition-opacity"
              onClick={onClose}
            /> */}
            <section className="absolute inset-y-0 right-0 max-w-full flex outline-none">
              <div className="h-full w-screen">
                <div className="h-full flex flex-col text-base bg-accents-1 shadow-xl overflow-y-auto">
                  {children}
                </div>
              </div>
            </section>
          </div>
        </div>
      ) : null}
    </Portal>
  );
};
