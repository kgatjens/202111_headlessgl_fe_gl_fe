import Script from 'next/script'

export default function ContactUsForm() {
    return (
    <>
      <div className="sm:mx-0">
        <Script id="hs-legacy-forms-js" src="//js.hsforms.net/forms/v2-legacy.js" strategy="beforeInteractive" />
        <Script id="hs-forms-js" src="//js.hsforms.net/forms/v2.js"  strategy="beforeInteractive" />
        <div id='my_form'>Form Here</div>
      
        <Script id='hs-contact-us'  strategy="afterInteractive" 
        
            dangerouslySetInnerHTML={{
              __html: `
              hbspt.forms.create({
                  region: "na1",
                  portalId: "2059590",
                  formId: "9a3b6713-d4c3-44c8-a450-2ba09b052e8b"
                  target: '#my_form',
              });
            `,
            }} 
        />
      </div>
    </>
      
  )
}