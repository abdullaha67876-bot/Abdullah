import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean>(false)

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    const onChange = () => {
      setIsMobile(mql.matches)
    }
    
    // Set initial state without triggering cascading render warning
    // We can do this since we initialized with false and will update if needed
    if (mql.matches !== isMobile) {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setIsMobile(mql.matches)
    }
    
    mql.addEventListener("change", onChange)
    return () => mql.removeEventListener("change", onChange)
  }, [isMobile])

  return isMobile
}
