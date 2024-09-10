const pool = require ('./db')

async function getCustomer() {
    const connection = await pool.getConnection()
    try {
        const [rows] = await connection.execute('SELECT * FROM customers')
        return rows
    } catch (error) {
        throw error
    } finally {
        connection.release();
    }
}
    
async function addCustomer(name, address, email, phone){
    const connection = await pool.getConnection()
    try {
        const [result] = await connection.execute('INSERT INTO customers (name, address, email, phone)VALUES (?, ?, ?, ?)', [name, address, email, phone])
        
        
        return result.insertId
    } catch (error) {
        throw error
    } finally {
        connection.release();
    }
} 

async function updateCustomer(id, name, address, email, phone) {
    const connection = await pool.getConnection()
    try {
        const [result] = await connection.execute('UPDATE customers SET  name = ?, address = ?, email = ?, phone = ? WHERE id = ?', [ name, address, email, phone, id])
        return result.affectedRows
    } catch (error) {
        throw error
    } finally {
        connection.release();
    }
    
}

async function destroyCustomer(id) {
    const connection = await pool.getConnection()
    try {
        const [result] = await connection.execute('DELETE FROM customers WHERE id = ?', [id])
        return result.affectedRows
    } catch (error) {
        throw error
    } finally {
        connection.release();
    }
}



module.exports = {
    getCustomer,
    addCustomer,
    destroyCustomer,
    updateCustomer

}