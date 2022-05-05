import { GTM } from "../../../lib/info"

export default function GTMIframe() {
  return (
    <>
      <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
      </noscript>
          
    </>
  )
}