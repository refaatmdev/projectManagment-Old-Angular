const connection = require("../database/index");

const moment = require('moment');

async function getEmployeeById(employeeId) {
  console.log(employeeId)
  const getEmployeeQuery = `
  SELECT ${process.env.DB_SCHEMA}.employee.id As id,
  ${process.env.DB_SCHEMA}.employee.firstName,
  ${process.env.DB_SCHEMA}.employee.lastName,
  ${process.env.DB_SCHEMA}.employee.phone,
  ${process.env.DB_SCHEMA}.employee.bankBranch,
  ${process.env.DB_SCHEMA}.employee.createdAt,
  ${process.env.DB_SCHEMA}.employee.updatedAt,
  ${process.env.DB_SCHEMA}.employee.bankAccount
 FROM ${process.env.DB_SCHEMA}.employee 
where ${process.env.DB_SCHEMA}.employee.id = ?
  `;
  const [rows] = await (
    await connection()
  ).execute(getEmployeeQuery, [employeeId]);
  return rows[0];
}
async function createEmployee(employeeValues) {
  const { firstName, lastName, phone, wagePerDay, bankAccount, bankBranch } =
    employeeValues;
  const values = [firstName, lastName, phone, bankAccount, bankBranch];

  const createProjectQuery = `INSERT INTO ${process.env.DB_SCHEMA}.employee (firstName, lastName, phone, bankAccount,bankBranch) VALUES (?,?,?,?,?);`;
  const [rows] = await (await connection()).execute(createProjectQuery, values);
  return rows.insertId;
}

async function addDailyWage(employeeId, dailyWage, startFrom) {
  const values = [employeeId, dailyWage, startFrom];
  const insertDailyWage = `INSERT INTO ${process.env.DB_SCHEMA}.employeeDailyWage (employeeId, dailyWage,startFromDate) VALUES (?,?,?);`;
  const [rows] = await (await connection()).execute(insertDailyWage, values);
  return rows;
}

async function getEmployees(pageSize, currentPage,searchValue) {
  const serchV = searchValue ? `WHERE ${process.env.DB_SCHEMA}.employee.firstName  LIKE '%${searchValue}%' ` : ""
  const currentDate = moment().format('YYYY-MM-DD hh:mm:ss')
  const limitQuery = currentPage
    ? `LIMIT ${pageSize * (currentPage - 1) + "," + pageSize}`
    : "";
  const getEmployeeQuery =`
  SELECT ${process.env.DB_SCHEMA}.employee.id As id,
  ${process.env.DB_SCHEMA}.employee.firstName,
  ${process.env.DB_SCHEMA}.employee.lastName,
  ${process.env.DB_SCHEMA}.employee.phone,
  ${process.env.DB_SCHEMA}.employee.bankBranch,
  ${process.env.DB_SCHEMA}.employee.createdAt,
  ${process.env.DB_SCHEMA}.employee.updatedAt,
  ${process.env.DB_SCHEMA}.employee.bankAccount,

  (SELECT 
    dailywage
FROM
    ${process.env.DB_SCHEMA}.employeeDailyWage
WHERE
    startFromDate <= ?
        AND ${process.env.DB_SCHEMA}.employeeDailyWage.employeeId = ${process.env.DB_SCHEMA}.employee.id
ORDER BY startFromDate DESC
LIMIT 1) AS dailyWage,
(SELECT 
    startFromDate
FROM
    ${process.env.DB_SCHEMA}.employeeDailyWage
WHERE
    startFromDate <= ?
        AND ${process.env.DB_SCHEMA}.employeeDailyWage.employeeId = ${process.env.DB_SCHEMA}.employee.id
ORDER BY startFromDate DESC
LIMIT 1) AS startFromDate
 FROM ${process.env.DB_SCHEMA}.employee 
 left join ${process.env.DB_SCHEMA}.employeeDailyWage
 on ${process.env.DB_SCHEMA}.employeeDailyWage.employeeId = ${process.env.DB_SCHEMA}.employee.id 
 ${serchV}
 GROUP BY id 
  order by dailyWage
desc
${limitQuery}
  `
  
  // `
  
  // SELECT * FROM ${process.env.DB_SCHEMA}.employee ${limitQuery};
  // `;
  
  const [rows] = await (await connection()).execute(getEmployeeQuery,[currentDate,currentDate]);
  return rows;
}

async function getEmployeesCount() {
  const getEmployeesQuery = `SELECT count(*) as totalEmployees FROM ${process.env.DB_SCHEMA}.employee `;
  const [rows] = await (await connection()).execute(getEmployeesQuery);
  return rows[0].totalEmployees;
}

async function editEmployee(employeeValues, employeeId) {
  const { firstName, lastName, phone, bankAccount, bankBranch } =
    employeeValues;
  const values = [
    firstName,
    lastName,
    phone,
    bankAccount,
    bankBranch,
    employeeId,
  ];
  const updateQuery =
    "UPDATE `employee` SET `firstName` = ?, `lastName` = ?, `phone` = ?,  `bankAccount` = ? , `bankBranch` = ? WHERE (`id` = ?);  ";
  const [rows] = await (await connection()).execute(updateQuery, values);
  return rows;
}

async function deleteEmployeeById(employeeId) {
  const deleteQuery = "DELETE FROM employee WHERE (id = ?);";
  const [rows] = await (await connection()).execute(deleteQuery, [employeeId]);
  return rows.affectedRows;
}


module.exports = {
  createEmployee,
  getEmployees,
  getEmployeeById,
  getEmployeesCount,
  deleteEmployeeById,
  editEmployee,
  addDailyWage,
};
