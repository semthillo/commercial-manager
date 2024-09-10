const readlineSync = require("readline-sync");
const customerModule = require("./src/customerManager");
const productModule = require("./src/productManager");
const orderModule = require("./src/orderManager")

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
            case '1':
                const customer = await customerModule.getCustomer()
                console.log(customer);
             break;

            case '2':
                const name = readlineSync.question('Nom du client: ')
                const address = readlineSync.question('Address du  client: ')
                const email = readlineSync.question('Email du client: ')
                const phone = readlineSync.question('Téléphone du client: ')
                 const customerId = await customerModule.addCustomer(name, address, email, phone)
                console.log(`Etudiant ajouté avec l'id ${customerId}`);
                break;

                case '3':
                  const updateId = readlineSync.question(`ID de l'etudiant à modifier :  ` )
                  const  newName = readlineSync.question('Entrez le  nouveau nom: ')
                  const  newAdress = readlineSync.question('Nouvelle Adress du client: ')
                  const  newEmail = readlineSync.question('Nouveau email: ')
                  const  newPhone = readlineSync.question('Nouveau numero de téléphone: ')

                await customerModule.updateCustomer(updateId, newName, newAdress, newEmail, newPhone)
                console.log('Client modifié');
                break;
                case '4':
                  const deleteId = readlineSync.question('ID du client à supprimer: ')
                  await customerModule.destroyCustomer(deleteId)
                  console.log('Client supprimé');
                break;
                case '5':
                  main()
                break;
                case '6':
                  console.log('Au revoir !');
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
              case '1':
                  const products = await productModule.getProduct()
                  console.log(products);
               break;
  
              case '2':
                  const name = readlineSync.question('Nom du produit: ')
                  const description = readlineSync.question('description du  produit: ')
                  const price = readlineSync.question('prix du produit: ')
                  const stock = readlineSync.questionInt('stock du produit: ')
                  const category = readlineSync.question('category du produit: ')
                  const barcode = readlineSync.question('barre-code du produit: ')
                  const status = readlineSync.question('status du produit: ')
                   const productId = await productModule.addProduct(name, description, price, stock, category, barcode, status)
                  console.log(`Produit ajouté avec l'id ${productId}`);
                  break;
  
                  case '3':
                    const updateId = readlineSync.question(`ID de l'produit à modifier :  ` )
                    const  newName = readlineSync.question('Entrez le  nouveau nom du produit: ')
                    const  newDescription = readlineSync.question('Nouvelle description du produit: ')
                    const  newPrice = readlineSync.question('Nouveau prix du produit: ')
                    const  newStock = readlineSync.question('Nouvelle stock du produit: ')
                    const  newcategory = readlineSync.question('Nouvelle catégorie du produit: ')
                    const  newBarecode = readlineSync.question('Nouveau code barre du produit: ')
                    const  newStatus = readlineSync.question('Nouveau statut du produit: ')
  
                  await productModule.updateProduct(updateId, newName, newDescription, newPrice, newStock, newcategory, newBarecode, newStatus )
                  console.log('produit modifié');
                  break;
                  case '4':
                    const deleteId = readlineSync.question('ID du client à supprimer: ')
                    await productModule.destroyProduct(deleteId)
                    console.log('Produit supprimé');
                  break;
                  case '5':
                    main()
                  break;
                  case '6':
                    console.log('Au revoir !');
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
                case '1':
                    const order = await orderModule.getOrder()
                    console.log(order);
                 break;
    
                case '2':
                    const datePurchase = readlineSync.question('Entrez la date de la commande: ')
                    const customerId = readlineSync.questionInt(`l'id du client:  `)
                    const deliveryAddress = readlineSync.question(`l'address de livraison:  `)
                    const track = readlineSync.question('numero de la commande: ')
                    const statusOrder = readlineSync.question('status de la commande: ')

                     const orderId = await orderModule.addOrder(datePurchase, customerId, deliveryAddress, track, statusOrder)
                    console.log(`La commande ajouté avec l'id ${orderId}`);
                  //   const cmd = true
                  //   while (cmd) {
                  //     console.log('Entrez les details de la commande: ')
                  //  const produitId = readlineSync.question(`Entrez l'id du produit`)
                   
                  //  const price = readlineSync.question(`Entrez le prix du produit`)
                  //  const tmp = readlineSync.question('Appuyer sur : \n A pour ajouter un autre produit; \n S pour enregistrer la commande; \n Z pour quitter;')
                  //  if (tmp === 'A') {
                  //   cmd = true
                    
                  //  }else if(tmp === 'S'){
                  //   cmd = false
                  //  }
                  //  else{
                  //   main()
                  //  }
                  //  return cmd
                


                  //   }
                    

                    break;
    
                    case '3':
                      const updateId = readlineSync.question(`ID de l'produit à modifier :  ` )
                      const  newName = readlineSync.question('Entrez le  nouveau nom du produit: ')
                      const  newDescription = readlineSync.question('Nouvelle description du produit: ')
                      const  newPrice = readlineSync.question('Nouveau prix du produit: ')
                      const  newStock = readlineSync.question('Nouvelle stock du produit: ')
                      const  newcategory = readlineSync.question('Nouvelle catégorie du produit: ')
                      const  newBarecode = readlineSync.question('Nouveau code barre du produit: ')
                      const  newStatus = readlineSync.question('Nouveau statut du produit: ')
    
                    await productModule.updateProduct(updateId, newName, newDescription, newPrice, newStock, newcategory, newBarecode, newStatus )
                    console.log('produit modifié');
                    break;
                    case '4':
                      const deleteId = readlineSync.question('ID du client à supprimer: ')
                      await productModule.destroyProduct(deleteId)
                      console.log('Produit supprimé');
                    break;
                    case '5':
                      main()
                    break;
                    case '6':
                      console.log('Au revoir !');
                    break;
              
                default:
                    console.log("Veuillez choisir une option entre 1 et 6");
                    break;
              }
          break;

        case "4":
            console.log("1. Liste des Details");
            console.log("2. Ajouter un details");
            console.log("3. Modifier un details");
            console.log("4. Supprimer un details");
            console.log("5. Retourner Au Menu principal");
            console.log("6. Quitter");
             const choix4 = readlineSync.question("Choisissez une option :");

             switch (choix4) {
                case '1':
                    
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
             const choix5 = readlineSync.question("Choisissez une option :");

             switch (choix5) {
                case '1':
                    
                    break;
              
                default:
                    console.log("Veuillez choisir une option entre 1 et 6");
                    break;
              }
          break;

        case "5":
          break;
        default:
          console.log("Veuillez choisir une option entre 1 et 6");
          break;
      }
      }
      
    
   catch (error) {}
}

main();
