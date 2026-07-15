import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, ArrowLeft } from 'lucide-react';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);

  const featuredPosts = [
    {
      id: 1,
      title: '5 Natural Ways to Lower Blood Sugar Without Medication',
      excerpt: 'Discover evidence-based strategies to manage your blood sugar levels naturally through diet and lifestyle changes.',
      date: 'January 15, 2024',
      readTime: '7 min read',
      category: 'Diabetes Management',
      image: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 2,
      title: 'The Mediterranean Diet: Your Heart\'s Best Friend',
      excerpt: 'Learn how this time-tested eating pattern can significantly reduce your risk of heart disease and stroke.',
      date: 'January 10, 2024',
      readTime: '5 min read',
      category: 'Heart Health',
      image: 'https://images.unsplash.com/photo-1490818387583-1baba5e638af?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 3,
      title: 'Breaking the Weight Loss Plateau: Science-Based Solutions',
      excerpt: 'Overcome common weight loss challenges with proven strategies that work for long-term success.',
      date: 'January 5, 2024',
      readTime: '8 min read',
      category: 'Weight Management',
      image: 'https://images.unsplash.com/photo-1514846316711-8a4a8f4a0143?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 4,
      title: 'Essential Supplements Guide: What Really Works',
      excerpt: 'A comprehensive guide to the most important supplements for modern lifestyles and how to choose them wisely.',
      date: 'December 28, 2023',
      readTime: '6 min read',
      category: 'Supplement Guide',
      image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 5,
      title: 'Exercise & Nutrition: The Perfect Partnership for Fitness',
      excerpt: 'How to optimize your workouts with proper nutrition timing and choices for maximum results.',
      date: 'December 20, 2023',
      readTime: '9 min read',
      category: 'Exercise & Nutrition',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 6,
      title: 'Healthy Recipes for Busy Weeknights',
      excerpt: 'Quick, nutritious meals that can be prepared in 30 minutes or less without compromising on health.',
      date: 'December 15, 2023',
      readTime: '4 min read',
      category: 'Healthy Recipes',
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 7,
      title: 'Sustainable Weight Loss: Beyond Quick Fixes',
      excerpt: 'Learn the science behind sustainable weight loss and how to maintain your results long-term.',
      date: 'December 10, 2023',
      readTime: '8 min read',
      category: 'Weight Loss',
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 8,
      title: 'Meal Planning Mastery: Save Time and Eat Healthy',
      excerpt: 'Discover how effective meal planning can transform your health and simplify your weekly routine.',
      date: 'December 5, 2023',
      readTime: '5 min read',
      category: 'Meal Planning',
      image: 'https://images.unsplash.com/photo-1505576399279-565b52d4ac71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 9,
      title: 'Lifestyle Changes That Transform Your Health',
      excerpt: 'Small but powerful daily habits that can dramatically improve your overall health and wellbeing.',
      date: 'November 28, 2023',
      readTime: '6 min read',
      category: 'Lifestyle Changes',
      image: 'https://images.unsplash.com/photo-1553755147-63e1e8c0ce63?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  const popularTopics = [
    'Diabetes Management',
    'Supplement Guide',
    'Heart Health',
    'Exercise & Nutrition',
    'Weight Loss',
    'Healthy Recipes',
    'Meal Planning',
    'Lifestyle Changes'
  ];

  const categories = [
    'All',
    'Diabetes Management',
    'Heart Health',
    'Weight Management',
    'Supplement Guide',
    'Exercise & Nutrition',
    'Healthy Recipes',
    'Weight Loss',
    'Meal Planning',
    'Lifestyle Changes'
  ];

  // Filter posts by selected category
  const filteredPosts = selectedCategory === 'All' 
    ? featuredPosts 
    : featuredPosts.filter(post => post.category === selectedCategory);

  // Pagination logic
  const postsPerPage = 3;
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = filteredPosts.slice(startIndex, startIndex + postsPerPage);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-green-50 to-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Latest Health & Nutrition Insights
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Stay informed with evidence-based articles on nutrition, lifestyle medicine, and practical tips for managing your health naturally.
            </p>
            
            {/* Categories Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {categories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => handleCategoryClick(category)}
                  className={`px-6 py-2 rounded-full font-medium transition duration-300 border cursor-pointer ${
                    selectedCategory === category
                      ? 'bg-green-600 text-white border-green-600'
                      : 'bg-white text-green-600 border-green-600 hover:bg-green-600 hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Blog Posts Column */}
          <div className="lg:col-span-2">
            <div className="space-y-8">
              {currentPosts.map((post) => (
                <article key={post.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
                  <div className="md:flex">
                    <div className="md:w-2/5">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-64 md:h-full object-cover"
                      />
                    </div>
                    <div className="md:w-3/5 p-8">
                      <span className="inline-block bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-medium mb-4">
                        {post.category}
                      </span>
                      <h2 className="text-2xl font-bold text-gray-900 mb-4">
                        {post.title}
                      </h2>
                      <p className="text-gray-600 mb-6">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span>{post.date}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="w-4 h-4" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                        <Link
                          to={`/blog/${post.id}`}
                          className="text-green-500 hover:text-green-600 font-medium flex items-center space-x-2 cursor-pointer"
                        >
                          <span>Read More</span>
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center space-x-4 mt-12">
                <button 
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="flex items-center space-x-2 text-green-500 hover:text-green-600 font-medium cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Previous</span>
                </button>
                <div className="flex space-x-2">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      onClick={() => handlePageChange(page)}
                      className={`w-10 h-10 rounded-full font-medium cursor-pointer ${
                        page === currentPage 
                          ? 'bg-green-500 text-white' 
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                </div>
                <button 
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="flex items-center space-x-2 text-green-500 hover:text-green-600 font-medium cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span>Next</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Popular Topics */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Popular Health Topics</h3>
              <div className="space-y-4">
                {popularTopics.map((topic, index) => (
                  <div key={index} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0">
                    <span className="text-gray-700 font-medium">{topic}</span>
                    <button
                      onClick={() => handleCategoryClick(topic)}
                      className="text-green-500 hover:text-green-600 flex items-center space-x-1 cursor-pointer"
                    >
                      <span className="text-sm">Learn more</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Category Stats */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Categories</h3>
              <div className="space-y-3">
                {categories.filter(cat => cat !== 'All').map((category, index) => (
                  <button
                    key={index}
                    onClick={() => handleCategoryClick(category)}
                    className="w-full flex justify-between items-center py-2 px-3 rounded-lg hover:bg-gray-50 cursor-pointer"
                  >
                    <span className="text-gray-700">{category}</span>
                    <span className="bg-green-100 text-green-600 px-2 py-1 rounded-full text-sm">
                      {featuredPosts.filter(post => post.category === category).length}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;














