import React, { useEffect } from "react";

const SideBarAds = () => {
  useEffect(() => {
    // Dynamically load the Google Ads script
    const adsScript = document.createElement("script");
    adsScript.src =
      "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8141547052505289";
    adsScript.async = true;
    adsScript.crossOrigin = "anonymous";
    document.body.appendChild(adsScript);

    // Initialize adsbygoogle after the script is loaded
    adsScript.onload = () => {
      if (window.adsbygoogle) {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    };

    return () => {
      // Cleanup by removing the script when the component is unmounted
      document.body.removeChild(adsScript);
    };
  }, []);
  return (
    <div>
       <div className="flex justify-center items-center my-4">
      <ins
        className="adsbygoogle block w-[728px] h-[90px] bg-gray-100"
        style={{ display: "inline-block" }}
        data-ad-client="ca-pub-8141547052505289"
        data-ad-slot="1703423936"
      ></ins>
    </div>
    </div>
  )
}

export default SideBarAds

