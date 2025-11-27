'use client';

import { createPublicClient, http } from 'viem';
import { NODE_REGISTRY_ABI } from './contracts';
import type { GensynNode } from '@/types/node';

// Get RPC URL
function getRpcUrl(): string {
  const rpcUrl = process.env.NEXT_PUBLIC_GENSYN_RPC_URL;
  
  if (!rpcUrl) {
    throw new Error('NEXT_PUBLIC_GENSYN_RPC_URL environment variable is not configured');
  }
  
  return rpcUrl;
}

// Contract address (to be configured via environment variable)
// Note: Must use static process.env access for Next.js to replace at build time
function getNodeRegistryAddress(): `0x${string}` {
  const address = process.env.NEXT_PUBLIC_NODE_REGISTRY_ADDRESS;
  
  if (!address) {
    throw new Error('NEXT_PUBLIC_NODE_REGISTRY_ADDRESS environment variable is not configured');
  }
  
  return address as `0x${string}`;
}

// Multicall3 address (to be configured via environment variable)
function getMulticall3Address(): `0x${string}` {
  const address = process.env.NEXT_PUBLIC_MULTICALL3_ADDRESS;
  
  if (!address) {
    throw new Error('NEXT_PUBLIC_MULTICALL3_ADDRESS environment variable is not configured');
  }
  
  return address as `0x${string}`;
}

// Client-side public client (uses NEXT_PUBLIC_ env vars)
export function createClientPublicClient() {
  return createPublicClient({
    transport: http(getRpcUrl()),
  });
}

/**
 * Batch query multiple nodes using Multicall3 (client-side)
 * @param peerIds Array of PeerIds to query
 * @returns Array of GensynNode data
 */
export async function getNodesByPeerIdsClient(peerIds: string[]): Promise<GensynNode[]> {
  if (peerIds.length === 0) {
    return [];
  }

  const publicClient = createClientPublicClient();
  const nodeRegistryAddress = getNodeRegistryAddress();
  const multicall3Address = getMulticall3Address();

  // Batch query rewards for all nodes at once
  const rewardsResult = await publicClient.readContract({
    address: nodeRegistryAddress,
    abi: NODE_REGISTRY_ABI,
    functionName: 'getTotalRewards',
    args: [peerIds],
  });

  // Prepare individual queries for wins and vote counts
  const calls = peerIds.flatMap((peerId) => [
    {
      address: nodeRegistryAddress,
      abi: NODE_REGISTRY_ABI,
      functionName: 'getTotalWins',
      args: [peerId],
    },
    {
      address: nodeRegistryAddress,
      abi: NODE_REGISTRY_ABI,
      functionName: 'getVoterVoteCount',
      args: [peerId],
    },
  ]);

  // Execute batch queries via Multicall3
  const results = await publicClient.multicall({
    contracts: calls,
    multicallAddress: multicall3Address,
  });

  // Transform results
  return peerIds
    .map((peerId, index) => {
      const winsResult = results[index * 2];
      const voteCountResult = results[index * 2 + 1];
      const rewards = rewardsResult[index] || 0n;

      // Skip nodes where all queries failed (node doesn't exist)
      if (
        winsResult.status === 'failure' &&
        voteCountResult.status === 'failure' &&
        rewards === 0n
      ) {
        return null;
      }

      return {
        peerId,
        keyMetrics: {
          participation:
            voteCountResult.status === 'success' ? Number(voteCountResult.result) : 0,
          rewards: Number(rewards), // Can be negative (int256)
          wins: winsResult.status === 'success' ? Number(winsResult.result) : 0,
        },
        lastUpdated: new Date(),
      };
    })
    .filter((node): node is GensynNode => node !== null);
}

