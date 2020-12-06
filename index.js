
var ask = require('readline-sync');
const chalk = require('chalk')

var username = ask.question(chalk.bold("what's your name dude "));
console.log();

console.log(``);

console.log(chalk.bgMagenta(`nice to have you here ${username} \nLet's see how well do you know me, ${username} \n`));

var question1 = {
    question: `guess my age dude! \n(A)-19 \n(B)-20 \n(C)-21 \n(D)-22 \n\nenter A,B,C or D `,
    answer: `b`,
    answercap: `B`
  }

var question2 = {
    question: `where do i live currently \n(A)-Mumbai \n(B)-Chandigarh \n(C)-Shimla \n(D)-Mohali \n\nenter A,B,C or D `,
    answer: 'b',
    answercap: `B`
  }

var question3 = {
  question: `where do i study! \n(A)- PTU,kapurthala \n(B)-Panjab University \n(C)- CGC, Landran \n(D)-PTU, Mohali\n \nenter A,B,C or D `,
  answer: `d`,
  answercap: `D`
}

var question4 = {
  question: `Which kind of food do I prefer? \n(A)- Vegan \n(B)- Vegetarian \n(C)- Eggetarian \n(D)- Non Vegetarian \n\nenter A,B,C or D `,
  answer: `b`,
  answercap: `B`
}

var question5 = {
  question: `where is my hometown \n(A)- Solan \n(B)-Shimla \n(C)- Mandi \n(D)-Amritsar \n\nenter A,B,C or D `,
  answer: `a`,
  answercap: `a`
}

var question6 = {
  question: `Which is My Happy Place in Tricity. \n(A)- Elante \n(B)- Washroom  \n(C)- Sukhna Lake \n(D)- Citco \n\nenter A,B,C or D `,
  answer: `c`,
  answercap: `C`
}

var question7 = {
  question: `Do we have a rememberable memory together!  \n(A)- Yes \n(B)-No \n\nenter A,B,C or D `,
  answer: `a`,
  answercap: `A`
}

var allquestions = [question1,question2,question3,question4,question5,question6,question7];

var result = askquestion(allquestions,0);


  function askquestion (allquestions,score) {
    for(var i=0;i<allquestions.length;i++)
    {
      var userans = ask.question(chalk.bold(allquestions[i].question));

      if((userans === allquestions[i].answer) || (userans === allquestions[i].answercap)) {
        console.log(chalk.green("\nyeah! you are right "));
        score++;
      }                 
      else {
        console.log(chalk.red.bold("\nnaah dude you were wrong."));
      } 

        console.log(chalk.yellow.bold(`your score is ${score} \n`));
        console.log(chalk.gray('---------------------\n'));
        
    }

    if((userans == 'a') || (userans == 'A')) {
      var memory = ask.question(chalk.bold.bgCyan(`please share some insights about it here ${username} \n`));
    }
    return score;
  }

var leaderboard = [{
  name: "pradeep" ,
  score: 5 
},
{
  name: "khaira" ,
  score: 4
},
{
  name: "shreya" ,
  score: 4
}];

console.log(chalk.bgGrey.white(`\n Congrats ` + username + ` You scored a total of `+result+` points \n`));
console.log(chalk.gray('---------------------\n'));
console.log(chalk.bold.magenta("LEADERBOARD:-  \n \n"));
  for(var i = 0;i<leaderboard.length;i++) {
    console.log(` ${leaderboard[i].name} : ${leaderboard[i].score} \n`);
  }

console.log(chalk.gray('---------------------\n'));
console.log(chalk.bold.bgCyan("now send me a screenshot of this \n(ig: tushartiwari0172) and i will add your name to the Leaderboard"));

