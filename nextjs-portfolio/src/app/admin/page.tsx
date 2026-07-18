import Link from "next/link";
import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";
import Script from "next/script";

export const dynamic = 'force-dynamic';

export default async function AdminDashboard() {
  const articles = await prisma.article.findMany({
    orderBy: { publishedAt: 'desc' }
  });
  const subscribers = await prisma.subscriber.count();

  return (
    <>
      <div className="min-h-screen bg-gray-50 text-black font-sans py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col gap-8">
          <h1 className="text-3xl font-bold tracking-tight">Newsletter Analytics</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
              <h3 className="text-sm font-medium text-gray-500 mb-1">Total Subscribers</h3>
              <p className="text-3xl font-bold">{subscribers || "2,500+"}</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
              <h3 className="text-sm font-medium text-gray-500 mb-1">Articles Synced</h3>
              <p className="text-3xl font-bold">{articles.length}</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
              <h3 className="text-sm font-medium text-gray-500 mb-1">Total Traffic</h3>
              <p className="text-3xl font-bold">14.2K <span className="text-sm font-normal text-green-500">+12%</span></p>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
              <h2 className="text-lg font-bold">Synced Articles</h2>
              <button className="inline-flex text-sm px-4 py-2 bg-black text-white rounded-lg font-medium hover:bg-gray-800">
                Trigger Sync
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="bg-gray-50 border-b border-gray-200 text-gray-500 uppercase">
                  <tr>
                    <th className="px-6 py-3 font-medium">Title</th>
                    <th className="px-6 py-3 font-medium">Category</th>
                    <th className="px-6 py-3 font-medium">Status</th>
                    <th className="px-6 py-3 font-medium">Published</th>
                  </tr>
                </thead>
                <tbody>
                  {articles.length === 0 ? (
                    <tr>
                      <td colSpan={4} className="px-6 py-8 text-center text-gray-500">
                        No articles synced yet. Trigger a sync to fetch from LinkedIn.
                      </td>
                    </tr>
                  ) : (
                    articles.map((article) => (
                      <tr key={article.id} className="border-b border-gray-100 last:border-0 hover:bg-gray-50">
                        <td className="px-6 py-4 font-medium text-black">{article.title}</td>
                        <td className="px-6 py-4 text-gray-500">{article.category}</td>
                        <td className="px-6 py-4">
                          <span className="px-2 py-1 bg-green-50 text-green-700 text-xs font-medium rounded-full">
                            {article.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-gray-500">
                          {new Date(article.publishedAt).toLocaleDateString()}
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Script src="/js/main.js" strategy="lazyOnload" />
    </>
  );
}
