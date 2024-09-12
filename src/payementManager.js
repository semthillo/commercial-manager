const pool = require ('./db')

async function getPayement() {
    const connection = await pool.getConnection()
    try {
        const [rows] = await connection.execute('SELECT * FROM payements')
        return rows
    } catch (error) {
        throw error
    } finally {
        connection.release();
    }
}
    
async function addPayement(order_id, date_payement, amount, payement_method){
    const connection = await pool.getConnection()
    try {
        const [result] = await connection.execute('INSERT INTO payements (order_id, date_payement, amount, payement_method) VALUES (?, ?, ?, ?)', [order_id, date_payement, amount, payement_method])
        return result.insertId
    } catch (error) {
        throw error
    } finally {
        connection.release();
    }
} 

async function updatePayement(payementDetails) {
    const connection = await pool.getConnection();
    try {
        const { date_payement, amount, payement_method, order_id } = payementDetails;

        
        const [result] = await connection.execute(
            'UPDATE payements SET date_payement = ?, amount = ?, payement_method = ? WHERE order_id = ?',
            [date_payement, amount, payement_method, order_id]
        );
        return result.affectedRows;
    } catch (error) {
        console.error("Erreur de modification");
        throw error;
    } finally {
        connection.release();
    }
}


async function destroyPayement(id) {
    const connection = await pool.getConnection();
    try {
        
        const [payementExists] = await connection.execute('SELECT 1 FROM payements WHERE id = ?', [id]);
        if (payementExists.length === 0) {
            throw new Error(`Paiement avec l'ID ${id} introuvable.`);
        }

        const [result] = await connection.execute('DELETE FROM payements WHERE id = ?', [id]);
        return result.affectedRows;
    } catch (error) {
        throw error
    } finally {
        connection.release();
    }
}

module.exports = {
    getPayement,
    addPayement,
    destroyPayement,
    updatePayement

}