const readlineSync = require("readline-sync");
const customerModule = require("./src/customerManager");
const productModule = require("./src/productManager");
const orderModule = require("./src/orderManager");

async function main() {
  //    const customer = await productModule.getProduct()
  //    console.log(customer)

  try {
    console.log("Bienvenue dans ManaerApp !");

    console.log("1. Gerer les Clients");
    console.log("2. Gerer les Produits");
    console.log("3. Gerer les Commande ");
    console.log("4. Gerer les Details de Commande");
    console.log("5. Gerer Les Payement");
    console.log("6. Quitter");

    const choice = readlineSync.question("Choisissez une option : ");

    switch (choice) {
      case "1":
        console.log("1. Liste des clients");
        console.log("2. Ajouter un client");
        console.log("3. Modifier un client");
        console.log("4. Supprimer un client");
        console.log("5. Retourner Au Menu principal");
        console.log("6. Quitter");
        const choix = readlineSync.question("Choisissez une option :");

        switch (choix) {
          case "1":
            const customer = await customerModule.getCustomer();
            console.log(customer);
            break;

          case "2":
            const name = readlineSync.question("Nom du client: ");
            const address = readlineSync.question("Address du  client: ");
            const email = readlineSync.question("Email du client: ");
            const phone = readlineSync.question("Téléphone du client: ");
            const customerId = await customerModule.addCustomer(
              name,
              address,
              email,
              phone
            );
            console.log(`Etudiant ajouté avec l'id ${customerId}`);
            break;

          case "3":
            const updateId = readlineSync.question(
              `ID de l'etudiant à modifier :  `
            );
            const newName = readlineSync.question("Entrez le  nouveau nom: ");
            const newAdress = readlineSync.question(
              "Nouvelle Adress du client: "
            );
            const newEmail = readlineSync.question("Nouveau email: ");
            const newPhone = readlineSync.question(
              "Nouveau numero de téléphone: "
            );

            await customerModule.updateCustomer(
              updateId,
              newName,
              newAdress,
              newEmail,
              newPhone
            );
            console.log("Client modifié");
            break;
          case "4":
            const deleteId = readlineSync.question(
              "ID du client à supprimer: "
            );
            await customerModule.destroyCustomer(deleteId);
            console.log("Client supprimé");
            break;
          case "5":
            main();
            break;
          case "6":
            console.log("Au revoir !");
            break;

          default:
            console.log("Veuillez choisir une option entre 1 et 6");
            break;
        }
        break;
      case "2":
        console.log("1. Liste des produits");
        console.log("2. Ajouter un produit");
        console.log("3. Modifier un produit");
        console.log("4. Supprimer un produit");
        console.log("5. Retourner Au Menu principal");
        console.log("6. Quitter");
        const choix2 = readlineSync.question("Choisissez une option :");

        switch (choix2) {
          case "1":
            const products = await productModule.getProduct();
            console.log(products);
            break;

          case "2":
            const name = readlineSync.question("Nom du produit: ");
            const description = readlineSync.question(
              "description du  produit: "
            );
            const price = readlineSync.question("prix du produit: ");
            const stock = readlineSync.questionInt("stock du produit: ");
            const category = readlineSync.question("category du produit: ");
            const barcode = readlineSync.question("barre-code du produit: ");
            const status = readlineSync.question("status du produit: ");
            const productId = await productModule.addProduct(
              name,
              description,
              price,
              stock,
              category,
              barcode,
              status
            );
            console.log(`Produit ajouté avec l'id ${productId}`);
            break;

          case "3":
            const updateId = readlineSync.question(
              `ID de l'produit à modifier :  `
            );
            const newName = readlineSync.question(
              "Entrez le  nouveau nom du produit: "
            );
            const newDescription = readlineSync.question(
              "Nouvelle description du produit: "
            );
            const newPrice = readlineSync.question("Nouveau prix du produit: ");
            const newStock = readlineSync.question(
              "Nouvelle stock du produit: "
            );
            const newcategory = readlineSync.question(
              "Nouvelle catégorie du produit: "
            );
            const newBarecode = readlineSync.question(
              "Nouveau code barre du produit: "
            );
            const newStatus = readlineSync.question(
              "Nouveau statut du produit: "
            );

            await productModule.updateProduct(
              updateId,
              newName,
              newDescription,
              newPrice,
              newStock,
              newcategory,
              newBarecode,
              newStatus
            );
            console.log("produit modifié");
            break;
          case "4":
            const deleteId = readlineSync.question(
              "ID du client à supprimer: "
            );
            await productModule.destroyProduct(deleteId);
            console.log("Produit supprimé");
            break;
          case "5":
            main();
            break;
          case "6":
            console.log("Au revoir !");
            break;

          default:
            console.log("Veuillez choisir une option entre 1 et 6");
            break;
        }
        break;

      case "3":
        console.log("1. Liste des commandes");
        console.log("2. Ajouter un commande");
        console.log("3. Modifier un commande");
        console.log("4. Supprimer un commande");
        console.log("5. Retourner Au Menu principal");
        console.log("6. Quitter");
        choixx = readlineSync.question("Choisissez une option :");

        switch (choixx) {
          case "1":
            const order = await orderModule.getOrder();
            console.log(order);
            break;

          case "2":
            const datePurchase = readlineSync.question(
              "Entrez la date de la commande: "
            );

            const deliveryAddress = readlineSync.question(
              `l'address de livraison:  `
            );
            const client = await orderModule.getClient();
            let clientExists = false;
            let customerId;

            while (!clientExists) {
              customerId = readlineSync.questionInt(`l'id du client: `);

              for (let i = 0; i < client.length; i++) {
                if (customerId === client[i]) {
                  clientExists = true;
                  console.log("Client trouvé, id:", customerId);
                  break;
                }
              }

              if (!clientExists) {
                console.log("Ce client n'existe pas, veuillez réessayer.");
              }
            }

            const track = readlineSync.question("numero de la commande: ");

            const statusOrder = readlineSync.question(
              "status de la commande: "
            );
            const commande = {
              date_purchase: datePurchase,
              delivery_adress: deliveryAddress,
              customer_id: customerId,
              track_number: track,
              status: statusOrder,
            };
            console.log(commande);

            const mesDetails = [];

            let cmd = true;
            while (cmd) {
              const details = {};

              console.log("Entrez un details de la commande: ");

              const produit = await productModule.getProduit();
              let produitExists = false;
              let produitId;

              while (!produitExists) {
                produitId = details.produitId = readlineSync.question(
                  `Entrez l'id du produit : `
                );

                produitId = parseInt(details.produitId);

                for (let i = 0; i < produit.length; i++) {
                  if (produitId === produit[i]) {
                    produitExists = true;
                    console.log("Produit trouvé, id:", produitId);
                    break;
                  }
                }

                if (!produitExists) {
                  console.log("Ce produit n'existe pas, veuillez réessayer.");
                }
              }

              details.price = readlineSync.question(
                `Entrez le prix du produit : `
              );
              details.quantity = readlineSync.question(
                `Entrez la quantité du produit : `
              );

              mesDetails.push(details);
              console.log("Détails de la commande:", mesDetails);

              const tmp = readlineSync.question(
                "Appuyez sur : \n A pour ajouter un autre produit; \n S pour enregistrer la commande; \n Z pour quitter : "
              );

              switch (tmp.toUpperCase()) {
                case "A":
                  break;
                case "S":
                  cmd = false;
                  break;
                case "Z":
                  console.log("Commande annulée.");
                  main();
                  break;
                default:
                  console.log("Option non reconnue. Veuillez réessayer.");
                  break;
              }
            }

            const orderId = await orderModule.addOrder(commande);

            console.log(`La commande ajouté avec l'id ${orderId}`);

            for (let i = 0; i < mesDetails.length; i++) {
              const detail = mesDetails[i];
              const pu = await orderModule.getPrix(detail.produitId);

              detail.price = pu * detail.quantity;

              try {
                await orderModule.addDetail(
                  orderId,
                  detail.produitId,
                  detail.quantity,
                  detail.price
                );
                console.log("Détail enregistré:", detail);
              } catch (err) {
                console.error("Erreur lors de l'ajout du détail:", err);
              }
            }

            break;

          case "3":
            const updateId = readlineSync.question(
              `ID de la commande à modifier :  `
            );
            const newDate = readlineSync.question(
              "Entrez la nouvelle date de la commande: "
            );
            const newAdress = readlineSync.question(
              "Nouvelle adresse de la livraison: "
            );
            const newCustomerId = readlineSync.question(
              "Nouveau ID du client: "
            );
            const newTrack = readlineSync.question(
              "Nouveau numéro de la commande : "
            );
            const newStatus = readlineSync.question(
              "Nouveau statut de la commande: "
            );

            const newCommande = {
              date_purchase: newDate,
              delivery_adress: newAdress,
              customer_id: newCustomerId,
              track_number: newTrack,
              status: newStatus,
            };
            console.log("Nouvelle commande:", newCommande);

            const mesNewDetails = [];
            let newcCmd = true;

            while (newcCmd) {
              const details = {};
              console.log("Entrez un nouveau détail de la commande: ");

              details.produitId = readlineSync.question(
                `Entrez l'id du produit : `
              );

              // Validation des entrées pour le prix et la quantité
              details.newPrice = readlineSync.question(
                `Entrez le prix du produit (nombre) : `
              );
              while (isNaN(details.newPrice) || details.newPrice <= 0) {
                console.log("Le prix doit être un nombre valide.");
                details.newPrice = readlineSync.question(
                  `Entrez le prix du produit (nombre) : `
                );
              }

              details.newQuantity = readlineSync.question(
                `Entrez la quantité du produit (nombre) : `
              );
              while (isNaN(details.newQuantity) || details.newQuantity <= 0) {
                console.log("La quantité doit être un nombre valide.");
                details.newQuantity = readlineSync.question(
                  `Entrez la quantité du produit (nombre) : `
                );
              }

              mesNewDetails.push(details);
              console.log("Nouveaux détails de la commande:", mesNewDetails);

              const newTmp = readlineSync.question(
                "Appuyez sur : \n A pour ajouter un autre produit; \n S pour enregistrer la commande; \n Z pour quitter : "
              );
              switch (newTmp.toUpperCase()) {
                case "A":
                  break; // Continue à ajouter des détails
                case "S":
                  newcCmd = false; // Sortir de la boucle pour enregistrer la commande
                  break;
                case "Z":
                  console.log("Commande annulée.");
                  main(); // Retourner au menu principal
                  return; // Stopper l'exécution de cette partie
                default:
                  console.log("Option non reconnue. Veuillez réessayer.");
                  break;
              }
            }

            console.log("Mise à jour de la commande...");

            const orde = await orderModule.updateOrder(
              updateId,
              newDate,
              customerId,
              newAdress,
              newTrack,
              newStatus
            );
            console.log(`Commande modifiée, ID : ${updateId}`);

            // Mise à jour des nouveaux détails
            for (let i = 0; i < mesNewDetails.length; i++) {
              const detail = mesNewDetails[i];
              console.log(
                `Modification du détail pour le produit ID: ${detail.produitId}`
              );

              try {
                await orderModule.addDetail(
                  updateId, // Utilisation de l'ID de la commande modifiée
                  detail.produitId,
                  detail.newQuantity,
                  detail.newPrice
                );
                console.log("Nouveau détail ajouté/modifié:", detail);
              } catch (err) {
                console.error("Erreur lors de la modification du détail:", err);
              }
            }

            console.log(
              "Toutes les modifications de la commande sont terminées."
            );
            break;

            // const mesADetails = await orderModule.getDetailByOrderId(updateId);

            // const mesNewDetails = mesADetails.forEach(element => {
            //   console.log(element);

            // });
            // console.log(mesNewDetails);

            const newBarecode = readlineSync.question(
              "Nouveau code barre du produit: "
            );

            await productModule.updateProduct(
              updateId,
              newName,
              newDescription,
              newPrice,
              newStock,
              newcategory,
              newBarecode,
              newStatus
            );
            console.log("produit modifié");
            break;
          case "4":
            const deleteId = readlineSync.question(
              "ID du client à supprimer: "
            );
            await productModule.destroyProduct(deleteId);
            console.log("Produit supprimé");
            break;
          case "5":
            main();
            break;
          case "6":
            console.log("Au revoir !");
            break;

          default:
            console.log("Veuillez choisir une option entre 1 et 6");
            break;
        }
        break;

      case "5":
        console.log("1. Liste des payements");
        console.log("2. Ajouter un payement");
        console.log("3. Modifier un payement");
        console.log("4. Supprimer un payement");
        console.log("5. Retourner Au Menu principal");
        console.log("6. Quitter");
        const choixP = "";
        switch (choixP) {
          case "1":
            const payments = await paymentModule.getPayement();
            console.log(payments);
            break;

          case "2":
            // Récupérer les commandes disponibles pour sélectionner l'order_id
            const orders = await orderModule.getOrders();
            console.log("Commandes disponibles:", orders);
            const orderId = readlineSync.question(
              "Entrez l'ID de la commande : "
            );
            const datePayement = readlineSync.question(
              "Date du paiement (YYYY-MM-DD): "
            );
            const amount = readlineSync.questionFloat("Montant du paiement : ");
            const payementMethod = readlineSync.question(
              "Méthode de paiement : "
            );

            const paymentId = await paymentModule.addPayement(
              orderId,
              datePayement,
              amount,
              payementMethod
            );
            console.log(`Paiement ajouté avec l'ID ${paymentId}`);
            break;

          case "3":
            const updatePayId = readlineSync.question(
              `ID du paiement à modifier : `
            );

            // Récupérer les commandes disponibles pour sélectionner l'order_id
            const availableOrders = await orderModule.getOrders();
            console.log("Commandes disponibles:", availableOrders);

            const newOrderId = readlineSync.question(
              "Entrez le nouvel ID de la commande : "
            );
            const newDatePayement = readlineSync.question(
              "Nouvelle date du paiement (YYYY-MM-DD): "
            );
            const newAmount = readlineSync.questionFloat(
              "Nouveau montant du paiement : "
            );
            const newPayementMethod = readlineSync.question(
              "Nouvelle méthode de paiement : "
            );

            await paymentModule.updatePayement(
              updatePayId,
              newOrderId,
              newDatePayement,
              newAmount,
              newPayementMethod
            );
            console.log("Paiement modifié");
            break;

          case "4":
            const deletePayId = readlineSync.question(
              "ID du paiement à supprimer: "
            );
            await paymentModule.destroyPayement(deletePayId);
            console.log("Paiement supprimé");
            break;

          case "5":
            main(); // Retour au menu principal
            break;

          case "6":
            console.log("Au revoir !");
            break;

          default:
            console.log("Veuillez choisir une option entre 1 et 6");
            break;
        }
    }
  } catch (error) {}
}

main();
