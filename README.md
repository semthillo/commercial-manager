# ManagerApp

Bienvenue dans **ManagerApp** ! Ce projet est une application de gestion pour les clients, produits, commandes et paiements.

## Table des matières

1. [Introduction](#introduction)
2. [Installation](#installation)
3. [Utilisation](#utilisation)
4. [Modules](#modules)
5. [Auteur](#author)

## Introduction

ManagerApp est une application en ligne de commande qui permet de gérer les opérations suivantes :

- **Clients** : Ajouter, modifier, supprimer et lister les clients.
- **Produits** : Ajouter, modifier, supprimer et lister les produits.
- **Commandes** : Ajouter, modifier, supprimer et lister les commandes.
- **Paiements** : Ajouter, modifier, supprimer et lister les paiements.

## Installation

1. Clonez le dépôt :

    ```bash
    git clone https://https://github.com/semthillo/commercial-manager.git
    ```

2. Accédez au répertoire du projet :

    ```bash
    cd commercial-manager.
    ```

3. Installez les dépendances :

    ```bash
    npm install
    ```

## Utilisation

Pour démarrer l'application, exécutez la commande suivante :

```bash
node app.js
```

# Menu Principal

Vous verrez un menu principal vous permettant de choisir entre la gestion des clients, des produits, des commandes et des paiements.

## Gestion des Clients

- **Lister les clients** : Affiche la liste des clients.
- **Ajouter un client** : Ajoute un nouveau client.
- **Modifier un client** : Modifie les informations d'un client existant.
- **Supprimer un client** : Supprime un client existant.

## Gestion des Produits

- **Lister les produits** : Affiche la liste des produits.
- **Ajouter un produit** : Ajoute un nouveau produit.
- **Modifier un produit** : Modifie les informations d'un produit existant.
- **Supprimer un produit** : Supprime un produit existant.

## Gestion des Commandes

- **Lister les commandes** : Affiche la liste des commandes.
- **Ajouter une commande** : Ajoute une nouvelle commande.
- **Modifier une commande** : Modifie les détails d'une commande existante.
- **Supprimer une commande** : Supprime une commande existante.

## Gestion des Paiements

- **Lister les paiements** : Affiche la liste des paiements.
- **Ajouter un paiement** : Ajoute un nouveau paiement.
- **Modifier un paiement** : Modifie les détails d'un paiement existant.
- **Supprimer un paiement** : Supprime un paiement existant.

## Modules

### `customerManager.js`

Ce module gère les opérations liées aux clients, y compris :

- **getCustomer** : Récupère la liste des clients.
- **addCustomer** : Ajoute un nouveau client.
- **updateCustomer** : Modifie les informations d'un client.
- **destroyCustomer** : Supprime un client.

### `productManager.js`

Ce module gère les opérations liées aux produits, y compris :

- **getProduct** : Récupère la liste des produits.
- **addProduct** : Ajoute un nouveau produit.
- **updateProduct** : Modifie les informations d'un produit.
- **destroyProduct** : Supprime un produit.

### `orderManager.js`

Ce module gère les opérations liées aux commandes, y compris :

- **getOrder** : Récupère la liste des commandes.
- **addOrder** : Ajoute une nouvelle commande.
- **updateOrder** : Modifie les détails d'une commande.
- **destroyOrder** : Supprime une commande.
- **getClient** : Récupère la liste des clients.
- **getProduit** : Récupère la liste des produits.
- **getPrix** : Récupère le prix d'un produit.
- **addDetail** : Ajoute un détail à une commande.

### `paymentManager.js`

Ce module gère les opérations liées aux paiements, y compris :

- **getPayement** : Récupère la liste des paiements.
- **addPayement** : Ajoute un nouveau paiement.
- **updatePayement** : Modifie les détails d'un paiement.
- **destroyPayement** : Supprime un paiement.



## Author
[Seme Thillo](https://github.com/semthillo/)
