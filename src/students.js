import './mystyles.css';
import {getAvg, getTotalScore} from "./averageService.js";

const scores = [90, 75, 60, 99, 94, 100];
const averageScore = getAvg(scores);
const totalScore = getTotalScore(scores);

const messageToDisplay = `average score ${averageScore}`;
const messageToDisplayTotal = `total score ${totalScore}`;

document.write(messageToDisplay);
document.write(messageToDisplayTotal);