// Build a database connection pool manager where clients can acquire and release connections efficiently.

class DBConnection {
    constructor(id) {
      this.id = id;
      this.inUse = false;
    }
  
    query(sql) {
      console.log(`🔌 [Connection ${this.id}] Running query: ${sql}`);
    }
}

class DBConnectionPoolManager {
    static #instance = null // private static instance -- all class will have same instance 
    // singleton pattern this static private
    #pool = []
    #INITIAL_POOL_SIZE = 3;

    constructor() {
        if (DBConnectionPoolManager.#instance) {
          throw new Error("Use getInstance() instead of new!");
        }
        for (let i = 1; i <= this.#INITIAL_POOL_SIZE; i++) {
          this.#pool.push(new DBConnection(i));
        }
    }

    static getInstance() {
        if(!DBConnectionPoolManager.#instance) {
            DBConnectionPoolManager.#instance = new DBConnectionPoolManager()
        }
        return DBConnectionPoolManager.#instance;
    }

    acquire() {
        const conn = this.#pool.find(c => !c.inUse);
        if(conn) {
            conn.inUse = true;
            console.log("Connection Locked");
            return conn;
        }
        return null;
    }

    release(conn) {
        conn.inUse = true;
        console.log("Connection Released");
    }

}

const pool = DBConnectionPoolManager.getInstance();

const conn1 = pool.acquire();
conn1?.query("SELECT * FROM users");

const conn2 = pool.acquire();
conn2?.query("SELECT * FROM products");

const conn3 = pool.acquire();
conn3?.query("SELECT * FROM orders");

const conn4 = pool.acquire(); // ❌ No available connections

pool.release(conn1);

const conn5 = pool.acquire(); // ✅ Reuses conn1
conn5?.query("SELECT * FROM sales");
