import React from 'react';
import './StarBadge.css';

/**
 * StarBadge Component
 * Displays a veteran's star count with a visual badge representing their rank
 * 
 * Props:
 * - starCount: number (required) - The total number of stars earned by the veteran
 * - size: string ('small', 'medium', 'large') - Controls badge size (default: 'medium')
 * - showCount: boolean - Whether to display the numeric star count (default: true)
 * - showRank: boolean - Whether to display the rank title (default: true)
 * - className: string - Additional CSS class names
 * - onClick: function - Optional click handler
 */
const StarBadge = ({ 
  starCount = 0, 
  size = 'medium', 
  showCount = true, 
  showRank = true, 
  className = '',
  onClick 
}) => {
  
  // Determine rank based on star count
  const getRankInfo = (stars) => {
    if (stars >= 100000) {
      return {
        rank: 'Eternal Sage',
        badgeClass: 'badge-eternal-sage',
        icon: 'crown',
        color: '#E5E4E2', // Platinum
        description: 'The highest honor for veterans with exceptional service'
      };
    } else if (stars >= 70000) {
      return {
        rank: 'Platinum Veteran',
        badgeClass: 'badge-platinum',
        icon: 'gem',
        color: '#E5E4E2', // Platinum
        description: 'Distinguished veteran with extraordinary contributions'
      };
    } else if (stars >= 65000) {
      return {
        rank: 'Sapphire Veteran',
        badgeClass: 'badge-sapphire',
        icon: 'gem',
        color: '#0F52BA', // Sapphire blue
        description: 'Highly respected veteran with significant achievements'
      };
    } else if (stars >= 60000) {
      return {
        rank: 'Diamond Veteran',
        badgeClass: 'badge-diamond',
        icon: 'gem',
        color: '#B9F2FF', // Diamond
        description: 'Elite veteran with remarkable accomplishments'
      };
    } else if (stars >= 50000) {
      return {
        rank: 'Golden Veteran',
        badgeClass: 'badge-gold',
        icon: 'trophy',
        color: '#FFD700', // Gold
        description: 'Senior veteran with substantial experience'
      };
    } else if (stars >= 40000) {
      return {
        rank: 'Ruby Veteran',
        badgeClass: 'badge-ruby',
        icon: 'gem',
        color: '#E0115F', // Ruby red
        description: 'Accomplished veteran with proven expertise'
      };
    } else if (stars >= 25000) {
      return {
        rank: 'Silver Veteran',
        badgeClass: 'badge-silver',
        icon: 'award',
        color: '#C0C0C0', // Silver
        description: 'Experienced veteran with commendable service'
      };
    } else {
      return {
        rank: 'Rising Star',
        badgeClass: 'badge-rising',
        icon: 'star',
        color: '#FFA500', // Orange
        description: 'Veteran building their legacy'
      };
    }
  };

  // Format star count with commas
  const formatStarCount = (count) => {
    return count.toLocaleString();
  };

  // Get icon SVG based on rank
  const getIcon = (iconType) => {
    switch (iconType) {
      case 'crown':
        return (
          <svg className="badge-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5zm14 3c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-1h14v1z"/>
          </svg>
        );
      case 'gem':
        return (
          <svg className="badge-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M16 9h6l-8 11-8-11h6l2-7h4l2 7zm-2.5 4.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
          </svg>
        );
      case 'trophy':
        return (
          <svg className="badge-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M21 4h-3V2H6v2H3c-.6 0-1 .4-1 1v3c0 3.5 2.6 6.4 6 6.9V17H8c-1.7 0-3 1.3-3 3v2h14v-2c0-1.7-1.3-3-3-3h-2v-2.1c3.4-.5 6-3.4 6-6.9V5c0-.6-.4-1-1-1zm-8 10v3h4v1c0 .6.4 1 1 1h1v1H5v-1h1c.6 0 1-.4 1-1v-1h4v-3h4zM4 8V6h2v5.8c-1.2-.7-2-2-2-3.8zm14 0c0 1.8-.8 3.1-2 3.8V6h2v2z"/>
          </svg>
        );
      case 'award':
        return (
          <svg className="badge-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17 4v2c1.7 0 3 1.3 3 3v8c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2V9c0-1.7 1.3-3 3-3V4h10zm-5 12c2.2 0 4-1.8 4-4s-1.8-4-4-4-4 1.8-4 4 1.8 4 4 4zm0-2c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm-5-7c-.6 0-1 .4-1 1v8c0 .6.4 1 1 1h1v-1c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2v1h1c.6 0 1-.4 1-1V9c0-.6-.4-1-1-1H7z"/>
          </svg>
        );
      case 'star':
      default:
        return (
          <svg className="badge-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 17.3l4.2 2.5-.8-4.8 3.5-3.4-4.9-.7L12 6.5 9.9 10.9l-4.9.7 3.5 3.4-.8 4.8z"/>
          </svg>
        );
    }
  };

  const rankInfo = getRankInfo(starCount);
  const isClickable = typeof onClick === 'function';

  return (
    <div 
      className={`star-badge ${rankInfo.badgeClass} size-${size} ${isClickable ? 'clickable' : ''} ${className}`}
      onClick={onClick}
      title={rankInfo.description}
      role={isClickable ? 'button' : 'presentation'}
      tabIndex={isClickable ? 0 : -1}
    >
      <div className="badge-container">
        <div className="badge-icon-container" style={{ backgroundColor: rankInfo.color }}>
          {getIcon(rankInfo.icon)}
        </div>
        
        <div className="badge-content">
          {showRank && (
            <div className="badge-rank">{rankInfo.rank}</div>
          )}
          
          {showCount && (
            <div className="badge-stars">
              <span className="star-icon">⭐</span>
              <span className="star-count">{formatStarCount(starCount)}</span>
              <span className="star-label"> stars</span>
            </div>
          )}
        </div>
      </div>
      
      {/* Progress bar showing progression to next rank */}
      <div className="rank-progress-container">
        <div className="rank-progress-label">
          Progress to next rank
        </div>
        <div className="rank-progress-bar">
          <div 
            className="rank-progress-fill" 
            style={{ 
              width: `${Math.min(100, (starCount / 25000) * 100)}%`,
              backgroundColor: rankInfo.color
            }}
          ></div>
        </div>
        <div className="rank-progress-text">
          {starCount < 25000 ? `${formatStarCount(25000 - starCount)} stars to Silver` : 
           starCount < 40000 ? `${formatStarCount(40000 - starCount)} stars to Ruby` :
           starCount < 50000 ? `${formatStarCount(50000 - starCount)} stars to Gold` :
           starCount < 60000 ? `${formatStarCount(60000 - starCount)} stars to Diamond` :
           starCount < 65000 ? `${formatStarCount(65000 - starCount)} stars to Sapphire` :
           starCount < 70000 ? `${formatStarCount(70000 - starCount)} stars to Platinum` :
           starCount < 100000 ? `${formatStarCount(100000 - starCount)} stars to Eternal Sage` :
           'Maximum rank achieved!'}
        </div>
      </div>
    </div>
  );
};

export default StarBadge;
