const pool = require ('./db')

async function getProduct() {
    const connection = await pool.getConnection()
    try {
        const [rows] = await connection.execute('SELECT * FROM products')
        return rows
    } catch (error) {
        throw error
    } finally {
        connection.release();
    }
}
    
async function addProduct(name, description, price, stock, category, barcode, status){
    const connection = await pool.getConnection()
    try {
        const [result] = await connection.execute('INSERT INTO products (name, description, price, stock, category, barcode, status) VALUES (?, ?, ?, ?, ?, ?, ?)', [name, description, price, stock, category, barcode, status])
        return result.insertId
    } catch (error) {
        throw error
    } finally {
        connection.release();
    }
} 

async function updateProduct(id, name, description, price, stock, category, barcode, status) {
    const connection = await pool.getConnection()
    try {
        const [result] = await connection.execute('UPDATE products SET  name = ?, description = ?, price = ?, stock = ?, category = ?, barcode = ?, status = ? WHERE id = ?', [ name, description, price, stock, category, barcode, status, id,])
        return result.affectedRows
    } catch (error) {
        throw error
    } finally {
        connection.release();
    }
    
}

async function destroyProduct(id) {
    const connection = await pool.getConnection()
    try {
        const [result] = await connection.execute('DELETE FROM products WHERE id = ?', [id])
        return result.affectedRows
    } catch (error) {
        throw error
    } finally {
        connection.release();
    }
}



module.exports = {
    getProduct,
    addProduct,
    destroyProduct,
    updateProduct

}