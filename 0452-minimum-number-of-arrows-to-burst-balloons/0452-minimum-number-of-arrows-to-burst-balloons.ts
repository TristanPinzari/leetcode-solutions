function findMinArrowShots(points: number[][]): number {
    points = points.sort((a, b) => a[1] - b[1]);
    let index = 0, arrows = 0;

    while (index < points.length) {
        const arrowEnd = points[index][1];
        while (index + 1 < points.length && points[index + 1][0] <= arrowEnd) index++;
        arrows++;
        index++;
    }

    return arrows;
};