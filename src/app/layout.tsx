import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'

export const metadata: Metadata = {
  title: 'Hanzo Network - AI Infrastructure for the Decentralized Economy',
  description: 'Native Lux L2 built for heterogeneous AI compute. Chain ID: 36963, Token: AI',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Script id="hanzo-analytics" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: `!function(t,e){var o,n,p,r;e.__SV||(window.ha=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.crossOrigin="anonymous",p.async=!0,p.src=s.api_host.replace(/\\/$/, "")+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="ha",u.people=u.people||[],u.toString=function(t){var e="ha";return"ha"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="init capture captureException identify alias people.set people.set_once set_config register register_once unregister opt_out_capturing has_opted_out_capturing opt_in_capturing reset isFeatureEnabled onFeatureFlags getFeatureFlag getFeatureFlagPayload reloadFeatureFlags group updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures getActiveMatchingSurveys getSurveys onSessionId setPersonProperties".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.ha||[]);ha.init('ha_WGshOAwqRvyGIfOlYtksynG4LNkhS7GtE1ft2ZjdvaIfs5m',{api_host:'https://insights.hanzo.ai',person_profiles:'always',capture_pageview:true,capture_pageleave:true});` }} />
      </body>
    </html>
  )
}
