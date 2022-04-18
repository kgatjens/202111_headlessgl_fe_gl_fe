import Script from 'next/script'

export default function ContactUsForm() {
    

  return (
    <>
      <div className="sm:mx-0">
        <Script id="hs-legacy-forms-js" src="//js.hsforms.net/forms/v2-legacy.js" strategy="beforeInteractive" />
        <Script id="hs-forms-js" src="//js.hsforms.net/forms/v2.js"  strategy="beforeInteractive"  onLoad={() =>
          
          hbspt.forms.create({
            region: "na1",
            portalId: "2059590",
            formId: "9a3b6713-d4c3-44c8-a450-2ba09b052e8b",
            target: '#contact-us-form'
        })}
        />   

      <div id='contact-us-form'></div>
      </div>
    </>
      
  )
}