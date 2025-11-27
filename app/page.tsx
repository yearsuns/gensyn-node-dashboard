'use client';

import { SearchForm } from '@/components/ui/SearchForm';
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher';
import { GithubLink } from '@/components/ui/GithubLink';
import { useLanguageContext } from '@/lib/i18n/context';

export default function DashboardPage() {
  const { messages } = useLanguageContext();

  return (
    <main className="min-h-screen p-4 sm:p-6 lg:p-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold gradient-text text-glow">
            {messages.nav.home}
          </h1>
          <div className="flex items-center gap-3">
            <GithubLink url="https://github.com/yearsuns/gensyn-nodes" />
            <LanguageSwitcher />
          </div>
        </div>

        {/* Search Section */}
        <section className="mb-12">
          <SearchForm />
        </section>
      </div>
    </main>
  );
}
