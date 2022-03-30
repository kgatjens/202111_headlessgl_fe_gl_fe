// const GOOGLE_ANALYTICS = process.env.GOOGLE_ANALYTICS
import GTMIframe from "./google/gtm-iframe"

export default function TopTracking() {
    return (
      <>
        <GTMIframe /> 
      </>
    )
  }