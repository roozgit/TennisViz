let leftChartWidth = 900;
let leftChartHeight = 600;
let rightChartWidth = 650;
let rightChartHeight = 180;
let rightChartHeight2 = 180;
let rightChartHeight3 = 180;
let margin = {top: 20, right: 20, bottom: 50, left: 55};
let scales = {speedScales: {}, percentScales: {}, pointScales:{}};

let summary = {dims : {}, stats : {average: {}, median: {}, maximum: {}, minimum: {}, extent: {}}};

function Node(name, country) {
    this.id = name;
    this.country = country;
    this.cluster = 0;
    this.radius = 10;
}

function Edge(source, target, rround, yyear, setInfo) {
    this.source = source;
    this.target = target;
    this.tourneyRound = rround;
    this.tourneyYear = yyear;
    this.setInfo = setInfo;
    this.gameNo = 1;
}

function PlayerStats() {
    this.hero = 0;
    this.wins = 0;

    //serve speed types
    this.avgFirstServeSpd = [];
    this.avgSecServeSpd = [];
    this.fastestServeSpd = [];

    //point types
    this.aces = [];
    this.doubleFaults = [];
    this.pointsWonNotReceived = [];
    this.errors = [];
    this.totalPointsWon = [];

    //Percentage types
    this.firstServePct = [];
    this.firstPointWonPct = [];
    this.secPointWonPct = [];
    this.breakPointsPct = [];
    this.returnsWonPct = [];
    this.netsPct = [];
}

let playerData = new Map();

function updateStats(playerStat, stat, no) {
    playerStat.firstServePct.push(parseInt(stat['firstServe' + no].slice(0, -1)));
    playerStat.aces.push(parseInt(stat['ace' + no]));
    playerStat.doubleFaults.push(parseInt(stat['double' + no]));
    playerStat.firstPointWonPct.push(parseInt(stat['firstPointWon' + no].slice(0,-1)));
    playerStat.secPointWonPct.push(parseInt(stat['secPointWon' + no].slice(0, -1)));
    playerStat.fastestServeSpd.push(parseInt(stat['fastServe' + no]));
    playerStat.avgFirstServeSpd.push(parseInt(stat['avgFirstServe' + no]));
    playerStat.avgSecServeSpd.push(parseInt(stat['avgSecServe' + no]));
    playerStat.breakPointsPct.push(parseInt(stat['break' + no].slice(0, -1)));
    playerStat.returnsWonPct.push(parseInt(stat['return' + no].slice(0, -1)));
    playerStat.totalPointsWon.push(parseInt(stat['total' + no]));
    playerStat.pointsWonNotReceived.push(parseInt(stat['winner' + no]));
    playerStat.errors.push(parseInt(stat['error' + no]));
    playerStat.netsPct.push(parseInt(stat['net' + no].slice(0, -1)));

    if(stat['round'] === "Final" && no === 1) playerStat.hero += 1;
    if(no === 1) playerStat.wins += 1;
}

let graph = {
    'nodes' : [],
    'edges' : []
};