import React, { useState, useEffect, useRef } from 'react';

/**
 * Takt Hero Section Component
 * Main hero area with fire-fighting squad messaging and demo video
 * Enhanced visual design: smooth animations, curved edges, optimized spacing
 * Follows brand guidelines: Poppins font, Takt Orange accents, generous spacing
 */
const HeroSection = ({ className = '' }) => {
  const [showVideo, setShowVideo] = useState(false);
  const [isYouTubeAPIReady, setIsYouTubeAPIReady] = useState(false);
  const playerRef = useRef(null);
  const videoId = '9No2Smi9AiI';

  // Load YouTube IFrame API
  useEffect(() => {
    // Check if API is already loaded
    if (window.YT && window.YT.Player) {
      setIsYouTubeAPIReady(true);
      return;
    }

    // Load YouTube IFrame API script
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    // Set up global callback
    window.onYouTubeIframeAPIReady = () => {
      setIsYouTubeAPIReady(true);
    };

    return () => {
      // Cleanup
      delete window.onYouTubeIframeAPIReady;
    };
  }, []);

  // Initialize player when video is shown and API is ready
  useEffect(() => {
    if (showVideo && isYouTubeAPIReady && !playerRef.current) {
      playerRef.current = new window.YT.Player('youtube-player', {
        height: '100%',
        width: '100%',
        videoId: videoId,
        playerVars: {
          autoplay: 1, // Auto-play when user clicks thumbnail
          rel: 0,
          modestbranding: 1,
          playsinline: 1,
          enablejsapi: 1
        },
        events: {
          onReady: (event) => {
            // Try to set HD quality when player is ready, then play
            try {
              event.target.setPlaybackQuality('hd720');
              // Start playing immediately after setting quality
              event.target.playVideo();
            } catch (error) {
              console.log('Could not set HD quality or play video:', error);
            }
          },
          onStateChange: (event) => {
            // Try to set HD quality when video starts playing
            if (event.data === window.YT.PlayerState.PLAYING) {
              try {
                event.target.setPlaybackQuality('hd720');
              } catch (error) {
                console.log('Could not set HD quality during playback:', error);
              }
            }
          }
        }
      });
    }
  }, [showVideo, isYouTubeAPIReady, videoId]);
  return (
    <section className={`pt-32 pb-20 md:pt-40 md:pb-32 bg-canvas-cream relative overflow-hidden ${className}`}>
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-takt-orange rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-takt-green rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Primary Headline with enhanced animations */}
          <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-8 leading-tight animate-fade-in-up">
            <div className="text-takt-orange mb-4"> Unify your factory's fragmented data.</div>
            <div className="text-takt-green">Search and analyze in seconds.</div>
          </h1>
          
          {/* Supporting Subtext with Production Floor Card */}
          <div className="animate-fade-in-up animation-delay-200">
            <div className="max-w-4xl mx-auto mb-12">
              {/* Text and Image Card - Stacked Layout */}
              <div className="bg-white rounded-takt shadow-lg overflow-hidden border border-gray-100">
                {/* Text Content - Top */}
                <div className="p-8 md:p-10">
                  <p className="text-lg md:text-xl text-iron-grey leading-relaxed font-medium text-center">
                    Takt unifies data across your ERP, MES, and historians into a single AI-powered conversation that drives higher throughput and less downtime. 
                  </p>
                </div>
                
                {/* Demo Video - Bottom */}
                <div className="relative bg-gradient-to-br from-canvas-cream to-gray-100">
                  {!showVideo ? (
                    /* YouTube Thumbnail with Play Button */
                    <div className="relative aspect-video cursor-pointer group"
                         onClick={() => setShowVideo(true)}>
                      {/* YouTube Thumbnail Image */}
                      <img
                        src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                        alt="Takt Demo Video Thumbnail"
                        className="w-full h-full object-cover"
                      />
                      
                      {/* Play Button Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300">
                        <div className="w-16 h-16 md:w-20 md:h-20 bg-red-600 bg-opacity-90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                          <svg className="w-6 h-6 md:w-8 md:h-8 ml-1 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z"/>
                          </svg>
                        </div>
                      </div>
                    </div>
                  ) : (
                    /* YouTube Player with API */
                    <div className="relative aspect-video">
                      <div
                        id="youtube-player"
                        className="absolute inset-0 w-full h-full"
                      ></div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
