#!/usr/bin/env node

console.log("this is nice");
const fs = require('fs');
const inpute =require('readline');

const entente = inpute.createInterface({
input :process.stdin,output : process.stdout });

const taskFile ='task.json';
let taskList = [];
try{
const work = fs.readFileSync(taskFile , 'utf8');
 taskList = JSON.parse(work);
}catch(err){
console.error('Error reading the file : ');
}




function addTask(description){
taskList.push({description ,completed :false});
save();
console.log("you have added a new task in your tracker");

}
function completedTask(index){
if(index>=0 && index<taskList.length){
taskList[index].completed =true;
save();
console.log("you have completed a task today");
}else{
console.log("invalid task index");
}


}

function lists(){
if(taskList.length ===0){
console.log("You have no task .Please add a new task");
}else{
taskList.forEach((task , index)=>{
console.log(`${index+1}.  [${task.completed? 'x': ' '}] ${task.description}`);
});}}

function save(){
fs.writeFileSync(taskFile, JSON.stringify(taskList ,null, 2));
}

function deleteTasks(index){
if(index>=0 && index <taskList.length){
taskList.splice(index ,1);
save();
console.log("you deleted a task");
}else{
console.log("invalid task index");
}

}


function handleInput(input){
const [commands, ...args]=input.trim().split( ' ' );
switch(commands){

case 'add':
addTask(args.join(' '));
break;



case 'completed':
completedTask(parseInt(args[0])-1);
break;

case 'myTasks':
lists();
break;

case 'delete':
deleteTasks(parseInt(args[0])-1);
break;

case 'help':
console.log("this are the only avalable commands :\n 'add' ,'save' ,'completed' ,'delete','edit','list','exit' ");
break;

case 'exit':
console.log("You are exiting your Task Tracker");
entente.close();
break;

default:
console.log("Command unsupported. \nType 'help' for assistance");

}

entente.prompt();
}


 

entente.on('line' , (input)=>{
handleInput(input);
});
entente.on('close', ()=>{
process.exit(0);
});

console.log("welcome to your task tracker CLI");
entente.prompt() ;