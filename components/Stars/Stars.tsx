'use client';

type Props = {
    rating: number;
    gapWidth: number;
    width: number;
    height: number;
};

function getFixedPercentage(rating: number, gapWidth: number) {
    const starWidth = 10;
    const maxRating = 5;

    const totalWidth = (starWidth * maxRating) + (gapWidth * (maxRating - 1));
    const filledWidth = (Math.floor(rating) * (starWidth + gapWidth)) + (rating % 1 * starWidth);
    const percentage = (filledWidth / totalWidth) * 100;

    return percentage;
}

function generateStarPoints(offsetX: number) {
    return `${offsetX + 5},0.5 ${offsetX + 6.25},3.85 ${offsetX + 9.9},3.85 ${offsetX + 7.075},6.15 ${offsetX + 8.3},9.5 ${offsetX + 5},7.3 ${offsetX + 1.7},9.5 ${offsetX + 2.925},6.15 ${offsetX + 0.1},3.85 ${offsetX + 3.75},3.85`;
}

function generateStars(gapWidth: number) {
    const stars = [];
    for (let i = 0; i < 5; i++) {
        stars.push(<polygon key={i} points={generateStarPoints(i * (10 + gapWidth))} />);
    }
    return stars;
}

export const Stars = ({ rating, gapWidth, width, height }: Props) => {
    const pc = getFixedPercentage(rating, gapWidth);
    const totalWidth = 5 * 10 + 4 * gapWidth;

    return (
        <svg
            width={width}
            height={height}
            style={{
                minWidth: width,
                minHeight: height,
            }}
            viewBox={`0 0 ${totalWidth} 10`}
            xmlns="http://www.w3.org/2000/svg"
        >
            <defs>
                <clipPath id="stars">
                    {generateStars(gapWidth)}
                </clipPath>
            </defs>
            <rect width={totalWidth} height="10" fill="#eee" clipPath="url(#stars)" />
            <rect width={totalWidth} height="10" fill="gold" clipPath="url(#stars)"
                style={{ transition: 'width 0.5s', width: pc + '%' }}
            />
        </svg>
    );
};
