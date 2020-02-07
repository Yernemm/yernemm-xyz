import React from 'react'
import { initGA, logPageView } from '../scripts/analytics'
export default class Analytics extends React.Component {
  componentDidMount () {
    if (!window.GA_INITIALIZED) {
      initGA()
      window.GA_INITIALIZED = true
    }
    
    (window.adsbygoogle = window.adsbygoogle || []).push({
        google_ad_client: "ca-pub-2219001427204097",
        enable_page_level_ads: true
   });
   logPageView();
  }
  render () {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}