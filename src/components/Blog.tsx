
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Building Scalable React Applications with Modern Architecture',
      excerpt: 'Discover the best practices for structuring large-scale React applications with proper state management and component architecture.',
      date: '2024-01-15',
      readTime: '8 min read',
      category: 'React',
      image: '/placeholder.svg'
    },
    {
      id: 2,
      title: 'The Future of Web Development: Trends to Watch in 2024',
      excerpt: 'Exploring the latest trends in web development including AI integration, serverless architecture, and progressive web apps.',
      date: '2024-01-10',
      readTime: '6 min read',
      category: 'Web Development',
      image: '/placeholder.svg'
    },
    {
      id: 3,
      title: 'Machine Learning in Frontend Development',
      excerpt: 'How machine learning is revolutionizing user experience and interface design in modern web applications.',
      date: '2024-01-05',
      readTime: '10 min read',
      category: 'Machine Learning',
      image: '/placeholder.svg'
    },
    {
      id: 4,
      title: 'Optimizing Performance in Next.js Applications',
      excerpt: 'Advanced techniques for improving loading times and user experience in Next.js applications.',
      date: '2023-12-28',
      readTime: '7 min read',
      category: 'Performance',
      image: '/placeholder.svg'
    },
    {
      id: 5,
      title: 'Design Systems: Building Consistency at Scale',
      excerpt: 'Creating and maintaining design systems that scale across multiple products and teams.',
      date: '2023-12-20',
      readTime: '9 min read',
      category: 'Design',
      image: '/placeholder.svg'
    },
    {
      id: 6,
      title: 'Getting Started with TypeScript in React Projects',
      excerpt: 'A comprehensive guide to integrating TypeScript into your React workflow for better code quality.',
      date: '2023-12-15',
      readTime: '12 min read',
      category: 'TypeScript',
      image: '/placeholder.svg'
    }
  ];

  const categories = ['All', 'React', 'Web Development', 'Machine Learning', 'Performance', 'Design', 'TypeScript'];

  return (
    <section id="blog" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Latest Blog Posts
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
            Insights, tutorials, and thoughts on web development, technology, and design
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className="px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                  <Calendar size={16} className="mr-2" />
                  <span className="mr-4">{new Date(post.date).toLocaleDateString()}</span>
                  <Clock size={16} className="mr-2" />
                  <span>{post.readTime}</span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                  {post.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                <button className="flex items-center text-blue-600 dark:text-blue-400 font-medium hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200">
                  Read More
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105">
            Load More Posts
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
