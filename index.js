function createEmployeeRecord(employeeArray) {
    const employee = {};
    employee[`firstName`] = employeeArray[0];
    employee[`familyName`] = employeeArray[1];
    employee[`title`] = employeeArray[2];
    employee[`payPerHour`] = employeeArray[3];
    employee[`timeInEvents`] = [];
    employee[`timeOutEvents`] = [];

    return employee;
}
function createEmployeeRecords(employees) {
    let employeeRecords = [];
    employees.forEach(record => {
        const employee = createEmployeeRecord(record)
        employeeRecords.push(employee)
    });
    return employeeRecords;
}

function createTimeInEvent(date) {
   const dateTime =date.split(" ");
   this.timeInEvents.push({
    type:"TimeIn",
     date:dateTime[0],
     hour:parseInt(dateTime[1])
   })
   return this

}

function createTimeOutEvent(date){
    const dateTime=date.split(" ")
    this.timeOutEvents.push({
    type:"TimeOut",
    date:dateTime[0],
    hour:parseInt(dateTime[1])
    })
    return this
}

function hoursWorkedOnDate(dateTimeString){
    const hoursWorkedIn = this.timeInEvents.find(hours =>hours.date===dateTimeString  )
    const hoursWorkedOut =this.timeOutEvents.find(hours =>hours.date===dateTimeString)
    return (hoursWorkedOut.hour-hoursWorkedIn.hour)/100
}

function wagesEarnedOnDate(dateTimeString){
    return hoursWorkedOnDate.call(this, dateTimeString)*this.payPerHour
}

function findEmployeeByFirstName(array,name){
    let arr=[]
    array.forEach(employee =>{
        if(employee.firstName === name){
            arr.push(employee);
        }
    })
    return arr[0];
}

function calculatePayroll(array){
    let sum=0
    for (let i=0 ;i<array.length;i++){
        sum +=allWagesFor.call(array[i])
    }
    return sum
}