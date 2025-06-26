export const createRoleQuery = `
    CREATE TYPE role_type AS
    ENUM('Manager', 'Developer', 'HR', 'Sales', 'Intern');
`;

export const createEmployeTableQuery = `

    CREATE TABLE employe_details(
        id SERIAL PRIMARY KEY,
        name VARCHAR(50) NOT NULL,
        email VARCHAR(50) NOT NULL UNIQUE,
        age SMALLINT NOT NULL CHECK (age > 17),
        role role_type NOT NULL DEFAULT 'Intern',
        salary DECIMAL(8,2) NOT NULL
    );
`;

export const getAllEmployeQuery = `SELECT * FROM employe_details`;

export const createEmployeQuery = `
    INSERT INTO employe_details(name,email,age,role,salary)
    VALUES($1,$2,$3,COALESCE($4::role_type,'Intern'::role_type),$5) RETURNING *
`;

export const getEmployeQuery = `SELECT * FROM employe_details WHERE id = $1`;
