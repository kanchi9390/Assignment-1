##● Explain the difference between SQL and NoSQL databases. Provide examples of use cases for each.


### SQL Databases:

##### 1.Structure:
SQL databases are relational databases, which means they organize data into structured tables with predefined schemas.
Data is organized in rows and columns, and relationships between tables are established using foreign keys.

##### 2.Schema:
SQL databases have a fixed schema, meaning the structure of the database (table names, column names, and data types) is defined before inserting any data.

##### 3.Scaling:
Vertical scaling is typically used to handle increased load (by adding more resources to a single server).

##### 4.Consistency:
SQL databases adhere to the ACID (Atomicity, Consistency, Isolation, Durability) properties, ensuring data consistency and integrity.

##### 5.Examples:
MySQL, PostgreSQL, Oracle Database, Microsoft SQL Server.

#### Use Cases for SQL Databases:
Applications requiring complex queries and transactions (e.g., financial applications).
Situations where data integrity and consistency are critical.
Well-defined data structures with relationships.

### NoSQL Databases:

##### 1.Structure:
NoSQL databases are non-relational and can handle unstructured or semi-structured data.
Data can be stored in various formats, such as key-value pairs, documents, columns, or graphs.

##### 2.Schema:
NoSQL databases are schema-less or have a dynamic schema, allowing flexibility in adding or modifying fields on the fly.

##### 3.Scaling:
Horizontal scaling is typically used to handle increased load by adding more servers to a distributed database.

##### 4.Consistency:
NoSQL databases prioritize performance and scalability over strict consistency, and they may follow the CAP theorem (Consistency, Availability, Partition Tolerance).

##### 5.Examples:
MongoDB (document store), Cassandra (wide-column store), Redis (key-value store), Neo4j (graph database).

#### Use Cases for NoSQL Databases:
Large-scale distributed systems requiring horizontal scaling.
Rapid development and iteration with changing data requirements.
Real-time applications with high read and write loads (e.g., social media, gaming).
