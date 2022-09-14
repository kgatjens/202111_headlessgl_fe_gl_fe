import Script from 'next/script'
import HubspotForm from 'react-hubspot-form'


export default function ContactUsForm() {
    

  return (
    <>
      <div className="sm:mx-0">
         



<HubspotForm id="footer-hs-form"
              portalId='2059590'
              formId='9a3b6713-d4c3-44c8-a450-2ba09b052e8b'
              onSubmit={() => console.log('Submit!')}
              onReady={(form) => console.log('Form ready!')}
              loading={<div>Loading...</div>}
              />
      </div>
    </>
      
  )
}