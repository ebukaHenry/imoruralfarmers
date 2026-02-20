import { useEffect } from 'react'

export default function SEO() {
  useEffect(() => {
    // NGO Schema Markup
    const ngoSchema = {
      "@context": "https://schema.org",
      "@type": "NGO",
      "name": "Rural Farmers NGO",
      "description": "Empowering rural farmers through sustainable agriculture, training, and community support",
      "url": "https://yourdomain.com",
      "telephone": "+1-234-567-8900",
      "email": "info@ruralfarmersngo.org",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Your Street Address",
        "addressLocality": "Your City",
        "addressRegion": "Your State",
        "postalCode": "12345",
        "addressCountry": "Your Country"
      },
      "sameAs": [
        "https://www.facebook.com/yourpage",
        "https://www.twitter.com/yourhandle",
        "https://www.instagram.com/yourprofile"
      ],
      "foundingDate": "2020",
      "founder": {
        "@type": "Person",
        "name": "Founder Name"
      }
    }

    // Organization Schema
    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Rural Farmers NGO",
      "alternateName": "RF NGO",
      "url": "https://imoruralfarmers.com",
      "logo": "https://imoruralfarmers.com/logo.png",
      "description": "Non-profit organization dedicated to empowering rural farmers through education and sustainable practices",
      "Contact": {
        "@type": "ContactPoint",
        "contactType": "Customer Support",
        "telephone": "+1-234-567-8900",
        "email": "info@ruralfarmersngo.org"
      }
    }

    // BreadcrumbList Schema
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://imoruralfarmers.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "About",
          "item": "https://imoruralfarmers.com/#about"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Services",
          "item": "https://imoruralfarmers.com/#services"
        }
      ]
    }

    // Add NGO Schema
    const ngoScript = document.createElement('script')
    ngoScript.type = 'application/ld+json'
    ngoScript.text = JSON.stringify(ngoSchema)
    document.head.appendChild(ngoScript)

    // Add Organization Schema
    const orgScript = document.createElement('script')
    orgScript.type = 'application/ld+json'
    orgScript.text = JSON.stringify(organizationSchema)
    document.head.appendChild(orgScript)

    // Add Breadcrumb Schema
    const breadcrumbScript = document.createElement('script')
    breadcrumbScript.type = 'application/ld+json'
    breadcrumbScript.text = JSON.stringify(breadcrumbSchema)
    document.head.appendChild(breadcrumbScript)

    return () => {
      document.head.removeChild(ngoScript)
      document.head.removeChild(orgScript)
      document.head.removeChild(breadcrumbScript)
    }
  }, [])

  return null
}
