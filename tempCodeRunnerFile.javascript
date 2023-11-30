
function isLeap ( Year ) {
if ( Year % 4 === 0 && Year % 100 === 0 ) {
if  ( Year % 400 === 0 ) { 

var Year = "Leap year.";

} else { 

var Year = "Not leap year.";

 }

} else  { 

var Year = "Not leap year.";

 }

return Year;
}
