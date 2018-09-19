
# Australia Open matches from 2004 to 2014 visualization

## Overview Chart

This chart visualizes all the players and all the games in the dataset.

- Marks for players: each circle denotes one player in the dataset. Star glyphs show the number of times the player has won the cup. On click, player name will appear on the right side of the circle
- Marks for games: each edge in graph show one game in the dataset. Hovering the pointer over the edge causes the game information to be displayed on the top section of the chart.
- Channels for players: Circle areas are encoded by the number of wins; a larger circle implies better player. Besides groups of players that have the close number of wins are clustered together using a force clustering technique.
- Channels for games: edges are encoded by the round the game was played. Furthermore, by clicking on the legend on the top left corner of the overview, all the games that were played in that specific round will be shown

## Detail Chart

This chart visualizes all the metrics in the dataset. By default, it uses a box plot to show minimum, maximum, and median value of a certain statistic in the dataset. The boxplots will change according to the tournament year selected to summarize the statistic for the selected tournament. Clicking on a player in the overview chart will cause their statistics to be displayed alongside the box plot.

- Marks for summary statistics (all players): rectangles and lines; rectangle upper and lower edges show minimum and maximum of the categorical statistic. The line passing through the rectangle shows the median value for the category.
- Marks for summary statistics (individual player): The distribution of the player's statistic will be shown as small blue dots.
- Channels for summary statistics (all players): position of the rectangle relative to x and y axis.
- Channels for summary statistics (individual player): position of the points relative to x and y axis

## Interactions

- Clicking on a player shows the distribution of their summary stats compared to everyone in the dataset.
- Players can be selected either by clicking on the circles in the graph or by selecting their name from a select control.
- Tournament year can be selected using a select control. Upon change, both overview and detail charts will change to reflect players and statistics for the selected tournament.
- A reset button is provided; clicking on it will show the original visualization.
- Hovering the pointer on an edge will show match information.
- Clicking on legend will show all the matches played in that round. In combination with tournament filter, this can provide a quick overview of what rounds the player played in.

## Quirks and External Libraries

    I am using one external d3 library called forceCluster.js. It is only a wrapper around a clustering algorithm from a bl.ock Mike Bostock originally created. Here is the github link for this module. In any case, clustering is not an essential part of this visualization.
    Even if a tournament winner was not present in a certain tournament, their stars will still be displayd. This is by design so the user can always have some idea about the most interesting players. But it can be fixed.
    The force layout is only used for clustering and automatic positioning of the nodes. The animation is only for aesthetic purposes and does not convey any useful information except to visually separate players with more wins. The amount of code needed to make this a static graph was considerable so I decided to leave it as is.
    I have opted for a fully rectangular box plot instead of a box and whisker plot. This is to avoid extra statistical computations to determine IQR and other statistical properties of a box and whisker plot. However, a box and whisker plot would do a better job in showing the outliers.

