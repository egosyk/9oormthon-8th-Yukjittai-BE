exports.sortAndFilterPlaces = (places) => {
    // 반경으로 필터링 예시
    const filteredByRadius = places.filter(place => place.radius <= someRadiusValue);
  
    // 리뷰 수로 정렬
    const sortedByReviews = filteredByRadius.sort((a, b) => b.reviewCount - a.reviewCount);
  
    // 가나다순으로 정렬
    const sortedAlphabetically = sortedByReviews.sort((a, b) => a.name.localeCompare(b.name));
  
    return sortedAlphabetically;
  };