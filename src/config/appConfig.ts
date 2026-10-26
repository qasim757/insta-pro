/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * ============================================================================
 * INSTA PRO APK - CENTRAL APPLICATION CONFIGURATION
 * ============================================================================
 * 
 * APK DOWNLOAD CONFIGURATION:
 * 
 * Primary and backup mirror URLs are configured below. Users and developers
 * can also dynamically change or test custom APK URLs directly through the
 * on-screen "Custom APK Link Manager" in the download section.
 */
export const APP_CONFIG = {
  /**
   * Primary APK Download URL.
   * Points directly to the verified Insta Pro latest package distribution file.
   */
  APK_DOWNLOAD_URL: "https://download.instapro.app/InstaPro_Latest.apk" as string | null,

  /**
   * Official Web Mirror / Release Portal URL.
   */
  APK_MIRROR_URL: "https://instapro.app/download",

  /**
   * Secondary GitHub Release / Backup Mirror.
   */
  APK_BACKUP_MIRROR_URL: "https://github.com/sammods/instapro/releases/latest",

  /**
   * Expected cryptographic package hash (SHA-256) placeholder for verification.
   */
  EXPECTED_SHA256_HASH: "7f83b1657ff1fc53b92dc18148a1d65dfc2d4b1fa3d677284addd200126d9069",

  /**
   * App identity and factual specifications.
   */
  APP_NAME: "Insta Pro",
  APP_EDITION: "Community Informational Portal",
  CATEGORY: "Social / Media Utilities",
  MIN_OS: "Android 5.0 (Lollipop) or higher",
  RECOMMENDED_OS: "Android 10.0+",
  SUPPORTED_ABIS: ["arm64-v8a", "armeabi-v7a", "x86", "x86_64"],
  PACKAGE_TYPE: "APK (Standalone / Sideload)",
  LICENSE: "Freeware (Third-Party Project)",
  ROOT_REQUIRED: false,
  GOOGLE_PLAY_SERVICES: "Not mandatory (works on non-GMS devices)",

  /**
   * Mandatory legal disclaimers and ownership notice
   */
  LEGAL_NOTICE: "Independent informational website. Not affiliated with, endorsed by, or sponsored by Instagram, Meta Platforms, Inc., or their respective subsidiaries. All trademarks, service marks, trade names, and product names are the property of their respective owners.",
  
  SITE_CANONICAL: "https://instapro-guide.example.com",
} as const;
