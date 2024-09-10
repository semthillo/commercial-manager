const pool = require ('./db')

async function getDetail() {
    const connection = await pool.getConnection()
    try {
        const [rows] = await connection.execute('SELECT * FROM order_details')
        return rows
    } catch (error) {
        throw error
    } finally {
        connection.release();
    }
}
    
async function addDetail(order_id, product_id, quantity, price){
    const connection = await pool.getConnection()
    try {
        const [result] = await connection.execute('INSERT INTO order_details (order_id, product_id, quantity, price)', [order_id, product_id, quantity, price])
        return result.insertId
    } catch (error) {
        throw error
    } finally {
        connection.release();
    }
} 

async function updateDetail(id, order_id, product_id, quantity, price) {
    const connection = await pool.getConnection()
    try {
        const [result] = await connection.execute('UPDATE order_details SET  order_id = ?, product_id = ?, quantity = ?, price = ?', [ order_id, product_id, quantity, price, id,])
        return result.affectedRows
    } catch (error) {
        throw error
    } finally {
        connection.release();
    }
    
}

async function destroyDetail(id) {
    const connection = await pool.getConnection()
    try {
        const [result] = await connection.execute('DELETE FROM order_details WHERE id = ?', [id])
        return result.affectedRows
    } catch (error) {
        throw error
    } finally {
        connection.release();
    }
}



module.exports = {
    getDetail,
    addDetail,
    destroyDetail,
    updateDetail

}