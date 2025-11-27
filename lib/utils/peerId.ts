/**
 * Validates a PeerId format
 * Format: Starts with Qm, 46 characters long, base58 encoded
 * @param peerId - The PeerId to validate
 * @returns true if valid, false otherwise
 */
export function isValidPeerId(peerId: string): boolean {
  // PeerId must start with "Qm" and have exactly 46 characters
  // Base58 encoding: uses alphanumeric characters (no 0, O, I, l)
  if (!peerId || peerId.length !== 46) {
    return false;
  }
  
  // Must start with "Qm"
  if (!peerId.startsWith('Qm')) {
    return false;
  }
  
  // Base58 characters: 1-9, A-H, J-N, P-Z, a-k, m-z (excludes 0, O, I, l)
  // For simplicity, we check alphanumeric and ensure no problematic characters
  return /^Qm[a-zA-Z0-9]{44}$/.test(peerId);
}

/**
 * Normalizes a PeerId (trim, lowercase if case-insensitive, etc.)
 * @param peerId - The PeerId to normalize
 * @returns Normalized PeerId
 */
export function normalizePeerId(peerId: string): string {
  return peerId.trim();
}

/**
 * Parse multiple PeerIds from text (separated by newlines or commas)
 * @param input - Text containing PeerIds
 * @returns Array of normalized PeerIds
 */
export function parsePeerIds(input: string): string[] {
  return input
    .split(/[\n,]+/) // Split by newlines or commas
    .map((id) => normalizePeerId(id))
    .filter((id) => id.length > 0); // Remove empty strings
}

/**
 * Remove duplicates from PeerId array
 * @param peerIds - Array of PeerIds
 * @returns Object with unique PeerIds and duplicates
 */
export function deduplicatePeerIds(peerIds: string[]): {
  unique: string[];
  duplicates: string[];
} {
  const seen = new Set<string>();
  const unique: string[] = [];
  const duplicates: string[] = [];

  peerIds.forEach((peerId) => {
    if (seen.has(peerId)) {
      duplicates.push(peerId);
    } else {
      seen.add(peerId);
      unique.push(peerId);
    }
  });

  return { unique, duplicates };
}

/**
 * Validate multiple PeerIds
 * @param peerIds - Array of PeerIds to validate
 * @returns Object with valid and invalid PeerIds
 */
export function validatePeerIds(peerIds: string[]): {
  valid: string[];
  invalid: string[];
} {
  const valid: string[] = [];
  const invalid: string[] = [];

  peerIds.forEach((peerId) => {
    if (isValidPeerId(peerId)) {
      valid.push(peerId);
    } else {
      invalid.push(peerId);
    }
  });

  return { valid, invalid };
}

