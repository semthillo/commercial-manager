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
async function getClient(){
    const connection = await pool.getConnection()
   const [client] = await connection.execute('SELECT  id FROM customers')
  
   const ids = client.map(clien => clien.id); 
    // console.log(ids);
    return ids;

}


async function getPrix(price) {
    const connection = await pool.getConnection();
    
    try {
      
      const [rows] = await connection.execute('SELECT price FROM products WHERE id = ?', [price]);
      
      
      const prices = rows.map(row => row.price);
  
      return prices;  
    } catch (err) {
      console.error("Erreur lors de la récupération du prix:", err);
    } finally {
      connection.release();  
    }
  }
  
 
  

async function addOrder(order) {
    const connection = await pool.getConnection();
    try {
        
        const { date_purchase, delivery_adress, customer_id, track_number, status } = order;
        const [result] = await connection.execute(
            'INSERT INTO purchase_orders (date_purchase, delivery_adress, customer_id, track_number, status) VALUES (?, ?, ?, ?, ?)', 
            [date_purchase, delivery_adress, customer_id, track_number, status]
        );
         
        return result.insertId;
    } catch (error) {
        console.error("Error inserting order:", error);  
        throw error;
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

async function addDetail(order_id, product_id, quantity, price){
    const connection = await pool.getConnection()
    try {
        const [result] = await connection.execute('INSERT INTO order_details (order_id, product_id, quantity, price)VALUE (?, ?, ?, ?)', [order_id, product_id, quantity, price])
        return result.insertId
    } catch (error) {
        throw error
    } finally {
        connection.release();
    }
} 

async function getDetailByOrderId(orderId) {
    const connection = await pool.getConnection();
    try {
      const [rows] = await connection.execute('SELECT * FROM order_details WHERE order_id = ?', [orderId]);
      
      
      const details = rows.map(row => ({
        id: row.id,
        quantite: row.quantity,
        prixUnitaire: row.price,
        orderId : row.order_id,
        produitId: row.product_id,
        
        
      }));
  
      console.log(details); 
  
      return details;
  
    } catch (error) {
      console.error("Erreur lors de la récupération des détails:", error);
      return []; 
    }
    //  finally {
    //   connection.release(); 
    // }
  }
  

getDetailByOrderId (1037)

module.exports = {
    getOrder,
    addOrder,
    destroyOrder,
    updateOrder,
    getClient,
    addDetail,
    getPrix,
    getDetailByOrderId

}