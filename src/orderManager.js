const pool = require ('./db')

async function getOrder() {
    const connection = await pool.getConnection()
    try {
        const [rows] = await connection.execute('SELECT * FROM purchase_orders')
        return rows
    } catch (error) {
        throw error
    } finally {
        connection.release();
    }
}
    
async function addOrder(date_purchase, customer_id, delivery_address, track_number, status){
    const connection = await pool.getConnection()
    try {
        const [result] = await connection.execute('INSERT INTO purchase_orders (date_purchase, customer_id, delivery_address, track_number, status) VALUES (?, ?, ?, ?, ?)', [date_purchase, customer_id, delivery_address, track_number, status])
        return result.insertId
    } catch (error) {
        throw error
    } finally {
        connection.release();
    }
} 

async function updateOrder(id, date_purchase, customer_id, delivery_address, track_number, status) {
    const connection = await pool.getConnection()
    try {
        const [result] = await connection.execute('UPDATE purchase_orders SET  date_purchase = ?, customer_id = ?, delivery_address = ?, track_number = ?, status = ?', [ date_purchase, customer_id, delivery_address, track_number, status, id,])
        return result.affectedRows
    } catch (error) {
        throw error
    } finally {
        connection.release();
    }
    
}

async function destroyOrder(id) {
    const connection = await pool.getConnection()
    try {
        const [result] = await connection.execute('DELETE FROM purchase_orders WHERE id = ?', [id])
        return result.affectedRows
    } catch (error) {
        throw error
    } finally {
        connection.release();
    }
}



module.exports = {
    getOrder,
    addOrder,
    destroyOrder,
    updateOrder

}