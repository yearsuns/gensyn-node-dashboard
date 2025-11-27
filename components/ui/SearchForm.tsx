'use client';

import { useState, FormEvent } from 'react';
import { NodeCard } from './NodeCard';
import { parsePeerIds, validatePeerIds, deduplicatePeerIds } from '@/lib/utils/peerId';
import { getNodesByPeerIdsClient } from '@/lib/blockchain/client';
import { useLanguageContext } from '@/lib/i18n/context';
import type { GensynNode } from '@/types/node';

type SearchResult =
  | { success: true; data: GensynNode[]; duplicates?: string[] }
  | { success: false; error: string; message: string };

export function SearchForm() {
  const { messages } = useLanguageContext();
  const [isPending, setIsPending] = useState(false);
  const [state, setState] = useState<SearchResult | null>(null);
  const [clientError, setClientError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setClientError(null);
    setIsPending(true);
    
    const formData = new FormData(e.currentTarget);
    const peerIdsInput = formData.get('peerIds') as string;
    
    // Client-side validation and processing
    if (!peerIdsInput || peerIdsInput.trim().length === 0) {
      setClientError(messages.search.noPeerIds);
      setIsPending(false);
      return;
    }

    // Parse PeerIds
    const parsedPeerIds = parsePeerIds(peerIdsInput);
    if (parsedPeerIds.length === 0) {
      setClientError(messages.search.noValidPeerIds);
      setIsPending(false);
      return;
    }

    // Remove duplicates
    const { unique: uniquePeerIds, duplicates } = deduplicatePeerIds(parsedPeerIds);

    // Validate PeerIds
    const { valid, invalid } = validatePeerIds(uniquePeerIds);
    
    if (invalid.length > 0) {
      setClientError(`${messages.search.invalidFormat}: ${invalid.join(', ')}`);
      setIsPending(false);
      return;
    }

    if (valid.length === 0) {
      setClientError(messages.search.noValidPeerIds);
      setIsPending(false);
      return;
    }

    // Query nodes directly from client
    try {
      const nodes = await getNodesByPeerIdsClient(valid);
      setState({
        success: true,
        data: nodes,
        ...(duplicates.length > 0 && { duplicates }),
      });
    } catch (error) {
      setState({
        success: false,
        error: 'QUERY_FAILED',
        message: error instanceof Error ? error.message : 'Failed to query node data',
      });
    } finally {
      setIsPending(false);
    }
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="mb-6">
        <div className="mb-4">
          <label htmlFor="peerIds" className="block text-sm font-medium text-cyan-300 mb-2 text-glow">
            {messages.search.label}
          </label>
          <textarea
            id="peerIds"
            name="peerIds"
            placeholder={messages.search.placeholder}
            rows={6}
            className="w-full px-4 py-3 glass-dark rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:glow-blue transition-all font-mono text-sm text-cyan-100 placeholder:text-gray-500 disabled:opacity-50 scrollbar-tech overflow-y-auto resize-none"
            disabled={isPending}
          />
          <p className="mt-2 text-xs text-gray-400">
            {messages.search.hint}
          </p>
        </div>
        <div className="flex gap-2">
          <button
            type="submit"
            disabled={isPending}
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-500 hover:to-purple-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all glow-blue hover:glow-purple font-medium shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95"
          >
            {isPending ? (
              <span className="flex items-center gap-2">
                <span className="animate-spin">⚡</span>
                {messages.search.searching}
              </span>
            ) : (
              messages.search.button
            )}
          </button>
        </div>
        {clientError && (
          <div className="mt-3 p-3 glass-dark border border-red-500/30 rounded-xl glow-red">
            <p className="text-sm text-red-400 font-medium">{clientError}</p>
          </div>
        )}
        {state && !state.success && (
          <div className="mt-3 p-3 glass-dark border border-red-500/30 rounded-xl glow-red">
            <p className="text-sm text-red-400 font-medium">{state.message}</p>
          </div>
        )}
        {state && state.success && state.duplicates && state.duplicates.length > 0 && (
          <div className="mt-3 p-4 glass-dark border border-yellow-500/30 rounded-xl">
            <p className="text-sm text-yellow-300 font-medium mb-2 text-glow">
              {messages.search.duplicates}
            </p>
            <p className="text-sm text-yellow-400/80 font-mono">
              {state.duplicates.join(', ')}
            </p>
          </div>
        )}
      </form>

      {/* Search Results */}
      {state && state.success && state.data.length > 0 && (
        <div className="mt-8 animate-float">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 gradient-text">
            {messages.search.results} <span className="text-cyan-300">({state.data.length} {state.data.length === 1 ? 'node' : 'nodes'})</span>
          </h2>
          <div className="grid grid-auto-fit gap-6">
            {state.data.map((node, index) => (
              <div
                key={node.peerId}
                className="animate-float"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <NodeCard node={node} />
              </div>
            ))}
          </div>
        </div>
      )}

      {state && state.success && state.data.length === 0 && (
        <div className="mt-8 p-6 glass-dark rounded-xl border border-gray-500/30 text-center">
          <p className="text-gray-400">{messages.search.noResults}</p>
        </div>
      )}
    </div>
  );
}

