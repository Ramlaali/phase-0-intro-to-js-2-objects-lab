
let employee = {
    name : 'Sam',
    streetAddress : '11 Broadway'
};

function updateEmployeeWithKeyAndValue(employee, key, value){
    const newemployee = {...employee};
    newemployee[key] = value;
    return newemployee
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee
}

function deleteFromEmployeeByKey(employee, key){
    const newemployee = Object.assign({}, employee);
    delete newemployee[key];
    return newemployee
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
}