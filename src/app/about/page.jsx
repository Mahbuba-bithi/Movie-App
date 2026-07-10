import React from "react";

const page = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-12 px-6">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12">
        
        <h1 className="text-4xl font-bold text-center text-blue-600 dark:text-blue-400 mb-8">
          🎵 About Music
        </h1>

        <p className="text-gray-700 dark:text-gray-300 text-lg leading-8 mb-6">
          Music is a universal language that brings people together regardless
          of their culture, age, or background. It has the power to express
          emotions such as happiness, sadness, excitement, and love. People
          listen to music for relaxation, entertainment, and inspiration.
          Different types of music, including pop, rock, classical, jazz, and
          folk, offer unique experiences and appeal to different tastes.
        </p>

        <p className="text-gray-700 dark:text-gray-300 text-lg leading-8 mb-6">
          Music also plays an important role in our daily lives. Many people
          enjoy listening to music while studying, working, exercising, or
          traveling because it helps them stay focused and motivated. Learning
          to play a musical instrument, such as the guitar, piano, or violin,
          can improve creativity, patience, and discipline. Music is also an
          important part of celebrations, festivals, and cultural traditions
          around the world.
        </p>

        <p className="text-gray-700 dark:text-gray-300 text-lg leading-8">
          In conclusion, music is much more than just entertainment. It helps
          people express their feelings, reduce stress, and connect with
          others. Whether someone enjoys singing, playing an instrument, or
          simply listening to their favorite songs, music adds joy and meaning
          to life. It is a timeless art form that continues to inspire people
          of all generations.
        </p>

        <div className="mt-10 flex justify-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold transition duration-300">
            Explore More
          </button>
        </div>

      </div>
    </div>
  );
};

export default page;