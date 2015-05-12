if (Accounts.find().count() === 0) {
    Accounts.insert({
      "bank":"Boursorama",
      "name":"Compte courant",
      "number":"0123456789"
    });

    Accounts.insert({
      "bank":"Boursorama",
      "name":"Livret",
      "number":"0123456779"
    });

    Accounts.insert({
      "bank":"Caisse épargne",
      "name":"Compte courant",
      "number":"0123456769"
    });

    Accounts.insert({
      "bank":"Caisse épargne",
      "name":"Livret A",
      "number":"0123456759"
    });
}
