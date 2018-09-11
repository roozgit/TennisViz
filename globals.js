let leftChartWidth = 800;
let leftChartHeight = 800;

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
    this.nets = [];
}

let playerData = new Map();

function updateStats(playerStat, stat, no) {
    playerStat.firstServePct.push(parseInt(stat['firstServe' + no].slice(0, -1)) / 100);
    playerStat.aces.push(stat['ace' + no]);
    playerStat.doubleFaults.push(stat['double' + no]);
    playerStat.firstPointWonPct.push(stat['firstPointWon' + no]);
    playerStat.secPointWonPct.push(stat['secPointWon' + no]);
    playerStat.fastestServeSpd.push(stat['fastServe' + no]);
    playerStat.avgFirstServeSpd.push(stat['avgFirstServe' + no]);
    playerStat.avgSecServeSpd.push(stat['avgSecServe' + no]);
    playerStat.breakPointsPct.push(stat['break' + no]);
    playerStat.returnsWonPct.push(stat['return' + no]);
    playerStat.totalPointsWon.push(stat['total' + no]);
    playerStat.pointsWonNotReceived.push(stat['winner' + no]);
    playerStat.errors.push(stat['error' + no]);
    playerStat.nets.push(stat['net' + no]);

    if(stat['round'] === "Final" && no === 1) playerStat.hero += 1;
    if(no === 1) playerStat.wins += 1;
}

let graph = {
    'nodes' : [],
    'edges' : []
};