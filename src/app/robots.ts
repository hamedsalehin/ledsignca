import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/wp-admin/",
          "/wp-content/",
          "/wp-includes/",
          "/wp-json/",
          "/wp-login.php",
          "/xmlrpc.php",
          "/?s=",
          "/?p=",
          "/?page_id=",
        ],
      },
    ],
    sitemap: "https://led-sign.ca/sitemap.xml",
  };
}
