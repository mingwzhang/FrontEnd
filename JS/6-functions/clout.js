const recentTikTokViews = [1932, 2300, 453, 5222, 6733, 7402, 8334];
const recentInstagramViews = [936, 2576, 453, 7013, 5489, 7402, 3921];
const recentYouTubeViews = [2300, 453, 5222, 989, 6733, 7402, 2789];

function mean(viewsArray)
{
    let totalViews = 0;

    for(let i = 0; i < viewsArray.length; i++)
        {
            totalViews += viewsArray[i];
        }
    console.log("Mean: " + totalViews/viewsArray.length);
}

function median(viewsArray)
{
    let sortedArray = viewsArray.sort(function(a, b) { return a - b;});

    console.log("Median: " + sortedArray[Math.floor(sortedArray.length/2)]);
}

console.log("TikTok");
mean(recentTikTokViews);
median(recentTikTokViews);

console.log("Instagram");
mean(recentInstagramViews);
median(recentInstagramViews);


console.log("YouTube");
mean(recentYouTubeViews);
median(recentYouTubeViews);


