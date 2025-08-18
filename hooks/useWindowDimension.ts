import { useSyncExternalStore } from "react";

const subscribe = (callback: () => void) => {
  window.addEventListener("resize", callback);
  return () => window.removeEventListener("resize", callback);
};

const getSnapShot = () => window.innerWidth;

// 서버에서는 window가 없으므로 기본값 제공
const getServerSnapshot = () => 1024; // SSR 시 안전한 fallback 값

const useWindowWidth = () => {
  return useSyncExternalStore(subscribe, getSnapShot, getServerSnapshot);
};

export default useWindowWidth;
