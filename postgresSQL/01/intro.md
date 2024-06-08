# PostgresSQL
## Find Version 
    SELECT version();

## Create Table
    CREATE TABLE cars (
        id SERIAL PRIMARY KEY, // SERIAL means autoincreate id
        brand VARCHAR(255),
        model VARCHAR(255),
        year INT
    );

## Display Table
    SELECT * FROM cars;

## Insert Data
    INSERT INTO cars (brand, model, year)
    VALUES ('FORD', 'Mustang', 1988);

## Insert multiple rows
    INSERT INTO cars (brand, model, year)
    VALUES
    ('Volvo', 'p1800', 1968),
    ('BMW', 'M1', 1978),
    ('Toyota', 'Celica', 1975);

## Retrive Specific columns
    SELECT brand, year FROM cars;

## Adding new column to existing Table
- ALTER TABLE is used to do so
- It can add, delete or modify columns in an existing table.
- It can be also used to add/drop various constraints on an existing table.
- Also used to drop column

    ```
    ALTER TABLE cars
    ADD color VARCHAR(255);
    ```

## Update Table
    UPDATE cars
    SET color = 'red', year = 2000, model = 'T'
    WHERE brand = 'FORD';

## Update/Change constraints of Table(Data Type)
- Modifying datatype of year from INT to VARCHAR(4)

    ```
    ALTER TABLE cars
    ALTER COLUMN year TYPE VARCHAR(4);
    ```
## DROP Column
    ALTER TABLE cars
    DROP COLUMN color;

## DELETING record/row. row is also called record
    DELETE FROM cars
    WHERE brand = 'BMW';

## Delete all rows/records without deleting TABLE car
    DELETE FROM cars;
    
or
    
    TRUNCATE TABLE cars;

## DROP/DELETE Table
    DROP TABLE cars;
