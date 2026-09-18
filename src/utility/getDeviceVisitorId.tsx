import FingerprintJS from "@fingerprintjs/fingerprintjs";

export const getDeviceVisitorId = async (): Promise<string> => {
  // Fingerprint Agent লোড করুন
  const fp = await FingerprintJS.load();

  
  const result = await fp.get();
 

  return result.visitorId; // e.g. "a1b2c3d4e5f6..."
};
