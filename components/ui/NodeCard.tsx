'use client';

import { useState } from 'react';
import { useLanguageContext } from '@/lib/i18n/context';
import type { GensynNode } from '@/types/node';

interface NodeCardProps {
  node: GensynNode;
}

export function NodeCard({ node }: NodeCardProps) {
  const { messages } = useLanguageContext();
  const [copied, setCopied] = useState(false);

  const formatNumber = (num: number): string => {
    if (num < 0) {
      return `-${Math.abs(num).toLocaleString()}`;
    }
    return num.toLocaleString();
  };

  const copyPeerId = async () => {
    try {
      await navigator.clipboard.writeText(node.peerId);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy PeerId:', err);
    }
  };

  return (
    <div className="glass-dark rounded-xl p-6 w-full border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 hover:glow-blue group relative overflow-hidden">
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-purple-500/0 to-cyan-500/0 group-hover:from-blue-500/10 group-hover:via-purple-500/10 group-hover:to-cyan-500/10 transition-all duration-300"></div>
      
      <div className="relative z-10">
        <div className="mb-4">
          <div className="mb-2">
            <label className="text-xs font-medium text-cyan-300 block mb-1">{messages.nodeCard.peerId}</label>
            <button
              onClick={copyPeerId}
              className="group/btn relative w-full text-left"
              title={messages.nodeCard.copyTooltip}
            >
              <span className="text-sm font-semibold font-mono break-all block text-cyan-100 group-hover/btn:text-cyan-300 transition-colors leading-relaxed">
                {node.peerId}
              </span>
              {copied && (
                <span className="absolute top-full left-0 mt-1 text-xs text-green-400 font-medium whitespace-nowrap glow-green">
                  {messages.nodeCard.copied}
                </span>
              )}
            </button>
          </div>
          {node.address && (
            <div>
              <label className="text-xs font-medium text-gray-400 block mb-1">{messages.nodeCard.address}</label>
              <p className="text-xs text-gray-500 font-mono break-all leading-tight">{node.address}</p>
            </div>
          )}
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div className="p-3 glass rounded-lg border border-blue-500/20">
            <p className="text-xs text-gray-400 mb-1">{messages.metrics.participation}</p>
            <p className="text-xl font-bold text-blue-300">{formatNumber(node.keyMetrics.participation)}</p>
          </div>
          <div className={`p-3 glass rounded-lg border ${
            node.keyMetrics.rewards < 0 
              ? 'border-red-500/30 glow-red' 
              : 'border-green-500/30 glow-green'
          }`}>
            <p className="text-xs text-gray-400 mb-1">{messages.metrics.rewards}</p>
            <p
              className={`text-xl font-bold ${
                node.keyMetrics.rewards < 0 ? 'text-red-400' : 'text-green-400'
              }`}
            >
              {formatNumber(node.keyMetrics.rewards)}
            </p>
          </div>
          <div className="p-3 glass rounded-lg border border-purple-500/20">
            <p className="text-xs text-gray-400 mb-1">{messages.metrics.wins}</p>
            <p className="text-xl font-bold text-purple-300">{formatNumber(node.keyMetrics.wins)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

