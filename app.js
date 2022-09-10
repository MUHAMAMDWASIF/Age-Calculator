const calculateAge = ()=>{
    const userDate = Number(document.getElementById('date').value);
    const userMonth = document.getElementById('month').value;
    const userYear = document.getElementById('year').value;
  
  const today = new Date();
 	let date = today.getDate();
	let month = 1 + today.getMonth();
	let year = today.getFullYear();
  
  
    const months = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  
      if(userDate>date){
        date = date + months[month - 1];
        month = month - 1;
    }
  
    if(userMonth > month){
        month = month + 12;
        year = year - 1;
    }
  
    const noOfDays = date - userDate;
    const noOfMonths = month - userMonth;
	const noOfYears = year - userYear;
  
  	const age = document.getElementById('age');
  
      if (userDate>31 || userDate>months[month - 1] || userMonth>12) {
age.innerHTML = "Invalid age";  
    }else if (userYear>year) {
        age.innerHTML = "You are not born";  

    }
    else{
    age.innerHTML = 'Your Age is '+noOfYears+' Years '+noOfMonths+' Months '+noOfDays+' Days';
  }
}