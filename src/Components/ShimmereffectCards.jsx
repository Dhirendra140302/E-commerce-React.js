const ShimmerEffectCards = () => {
  return (
    <div className="shimmer-section bg-secondary">
      
      {/* Search bar shimmer */}
      <div className="shimmer-search-wrapper">
        <div className="shimmer-search"></div>
      </div>

      {/* Cards shimmer */}
      <div className="shimmer-container">
        {[...Array(20)].map((_, index) => (
          <div key={index} className="shimmer-card"></div>
        ))}
      </div>

    </div>
  );
};

export default ShimmerEffectCards;
