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


async function getOrderById() {
    const connection = await pool.getConnection();
    const [orderExists] = await connection.execute('SELECT id FROM purchase_orders ');

    const ids = orderExists.map(produ => produ.id); 
    
    return ids;
    

        
        
//     }
//     console.log(`${id}`);
    }
     getOrderById()
    
    
    




     async function updateOrder(id, orderDetails) {
        const connection = await pool.getConnection();
        try {
            const { date_purchase, customer_id, delivery_adress, track_number, status } = orderDetails;
    
            const [result] = await connection.execute(
                'UPDATE purchase_orders SET date_purchase = ?, customer_id = ?, delivery_adress = ?, track_number = ?, status = ? WHERE id = ?',
                [date_purchase, customer_id, delivery_adress, track_number, status, id]
            );
            return result.affectedRows;
        } catch (error) {
            console.error(error)
        } finally {
            connection.release();
        }
    }
    
async function destroyOrder(id) {
    const connection = await pool.getConnection();
    try {
        
        const [orderExists] = await connection.execute('SELECT 1 FROM purchase_orders WHERE id = ?', [id]);
        if (orderExists.length === 0) {
            throw new Error(`Commande avec l'ID ${id} introuvable.`);
        }

        
        const [paymentExists] = await connection.execute('SELECT 1 FROM payements WHERE order_id = ?', [id]);
        if (paymentExists.length > 0) {
            
            throw new Error('Cette commande ne peut pas être supprimée car elle a déjà été payée.');
        }

        
        const [result] = await connection.execute('DELETE FROM purchase_orders WHERE id = ?', [id]);
        return result.affectedRows;
    } catch (error) {
        throw error;
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

async function updateDetail(id, order_id, product_id, quantity, price) {
    const connection = await pool.getConnection();
    try {
        const [result] = await connection.execute(
            'UPDATE order_details SET order_id = ?, product_id = ?, quantity = ?, price = ? WHERE id = ?', 
            [order_id, product_id, quantity, price, id]  
        );
        return result.affectedRows;
    } catch (error) {
        console.error(error)
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
      console.error("Erreur lors de la récupération des détail", error);
      return []; 
    }
     finally {
      connection.release(); 
    }
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
    getDetailByOrderId,
    updateDetail,
    getOrderById

}