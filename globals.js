let leftChartWidth = 800;
let leftChartHeight = 800;
let rightChartWidth = 800;
let rightChartHeight = 800;
let summary = {dims : {}, stats : {average:{}, median : {}, maximum:{}, minimum:{}, extent:{}}};

function Node(name, country) {
    this.id = name;
    this.country = country;
    this.cluster = 0;
    this.radius = 10;
}

function Edge(source, target, rround, yyear) {
    this.source = source;
    this.target = target;
    this.tourneyRound = rround;
    this.tourneyYear = yyear;
    this.gameNo = 1;
}

function PlayerStats() {
    this.hero = 0;
    this.wins = 0;
    this.firstServePct = [];
    this.aces = [];
    this.doubleFaults = [];
    this.firstPointWonPct = [];
    this.secPointWonPct = [];
    this.fastestServeSpd = [];
    this.avgFirstServeSpd = [];
    this.avgSecServeSpd = [];
    this.breakPointsPct = [];
    this.returnsWonPct = [];
    this.totalPointsWon = [];
    this.pointsWonNotReceived = [];
    this.errors = [];
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