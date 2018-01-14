function takeANumber(line, name) {
  line.push(name);
  return `Welcome, ${name}. You are number ${line.indexOf(name) + 1} in line.`
}

function nowServing(line) {
  if (line[0] === undefined) {
    return "There is nobody waiting to be served!";
  } else { 
    return `Currently serving ${line.shift()}.`;
  }
}

function currentLine(line){
  if (line[0] === undefined) {
    return "The line is currently empty.";
  } else {
<<<<<<< HEAD
    let deliLine = line.map(x => ` ${line.indexOf(x) + 1}. ${x}`);
    return `The line is currently:${deliLine}`;
=======
    let i = 0;
    let current = line.splice(i);
    while (i < line.length) {
      current += current[i];
      i++;
    }
    return `The line is currently: ${i + 1}. ${current}`;
>>>>>>> 2b21f618d28a57db7b1a9b2bb935dacdd8cad2f0
  }
}