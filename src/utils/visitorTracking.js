const TRACKING_COOKIE = "visitor_tracking";
const TRACKING_TTL_SECONDS = 30 * 60;
const TRACKING_ENDPOINT = import.meta.env.VITE_TRACKING_ENDPOINT || "https://lavish.gnbags.in/api/track.php";
const TRACKING_TIMEOUT_MS = 5000;

let trackingRequest;

function hasRecentTracking() {
  return document.cookie
    .split("; ")
    .some((cookie) => cookie.startsWith(`${TRACKING_COOKIE}=`));
}

function setTrackingCookie(payload) {
  const value = encodeURIComponent(
    JSON.stringify({
      trackedAt: new Date().toISOString(),
      ...payload,
    })
  );
  const secure = window.location.protocol === "https:" ? "; Secure" : "";

  document.cookie = `${TRACKING_COOKIE}=${value}; Max-Age=${TRACKING_TTL_SECONDS}; Path=/; SameSite=Lax${secure}`;
}

function getBrowserName(userAgent) {
  if (/Edg\//i.test(userAgent)) return "Edge";
  if (/OPR\//i.test(userAgent)) return "Opera";
  if (/Chrome\//i.test(userAgent)) return "Chrome";
  if (/Firefox\//i.test(userAgent)) return "Firefox";
  if (/Safari\//i.test(userAgent) && !/Chrome\//i.test(userAgent)) return "Safari";
  if (/MSIE|Trident\//i.test(userAgent)) return "Internet Explorer";

  return "Unknown";
}

function getDeviceFallback(userAgent) {
  const isMobile = /Android|iPhone|iPad|iPod|Mobile/i.test(userAgent);
  const androidMatch = userAgent.match(/Android[^;)]*;\s*(?:[a-z]{2}-[a-z]{2};\s*)?([^;)]+?)(?:\s+Build\/[^;)]*)?[;)]/i);
  const appleMatch = userAgent.match(/\((?:iPhone|iPad);[^)]*\)/i);

  return {
    device: isMobile ? "mobile" : "desktop",
    brand: /Samsung/i.test(userAgent) ? "Samsung" : "Unknown",
    model: androidMatch?.[1]?.trim() || (appleMatch ? appleMatch[0].split(";")[0].slice(1) : "Unknown"),
    os: /Android/i.test(userAgent)
      ? "Android"
      : /iPhone|iPad|iPod/i.test(userAgent)
        ? "iOS"
        : "Unknown",
  };
}

async function getDeviceInfo() {
  const userAgent = navigator.userAgent || "";
  const fallback = getDeviceFallback(userAgent);
  const userAgentData = navigator.userAgentData;

  if (!userAgentData?.getHighEntropyValues) {
    return fallback;
  }

  try {
    const details = await userAgentData.getHighEntropyValues([
      "platform",
      "platformVersion",
      "model",
      "fullVersionList",
    ]);
    const browserBrand = details.fullVersionList?.find(({ brand }) => !/Not A Brand/i.test(brand));

    return {
      device: userAgentData.mobile ? "mobile" : "desktop",
      brand: details.platform || fallback.brand,
      model: details.model || fallback.model,
      os: details.platform || fallback.os,
      browser: browserBrand?.brand || getBrowserName(userAgent),
    };
  } catch {
    return fallback;
  }
}

async function buildTrackingPayload() {
  const deviceInfo = await getDeviceInfo();
  const userAgent = navigator.userAgent || "";

  return {
    landing_url: window.location.href,
    device_info: {
      ...deviceInfo,
      browser: deviceInfo.browser || getBrowserName(userAgent),
      screen: {
        width: window.screen?.width || 0,
        height: window.screen?.height || 0,
      },
      language: navigator.language || "",
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || "",
    },
  };
}

async function sendTrackingRequest() {
  const payload = await buildTrackingPayload();
  const controller = new AbortController();
  const timeout = window.setTimeout(() => controller.abort(), TRACKING_TIMEOUT_MS);

  try {
    const response = await fetch(TRACKING_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "same-origin",
      body: JSON.stringify(payload),
      signal: controller.signal,
    });

    if (!response.ok) {
      throw new Error(`Visitor tracking failed with status ${response.status}`);
    }

    const responseText = await response.text();
    if (responseText) {
      try {
        const result = JSON.parse(responseText);
        if (result.success === false || result.status === "error") {
          throw new Error("Visitor tracking API returned an error");
        }
      } catch (error) {
        if (error instanceof SyntaxError) {
          return payload;
        }
        throw error;
      }
    }

    return payload;
  } finally {
    window.clearTimeout(timeout);
  }
}

export function trackVisitor() {
  if (typeof window === "undefined" || hasRecentTracking()) {
    return Promise.resolve(false);
  }

  if (!trackingRequest) {
    trackingRequest = sendTrackingRequest()
      .then((payload) => {
        setTrackingCookie(payload);
        return true;
      })
      .catch(() => false);
  }

  return trackingRequest;
}