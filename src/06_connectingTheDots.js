/**
 * Finally, we will test your wit and angineering mindset.
 */

// You have a bunch of bank accounts:
// Bank of America, with 500 EUR,
// Bank of Tirana, with 1000 EUR,
// Bank of England, with 69 EUR,
// HSBC with 100 EUR,
// Bank of Italy with 200 EUR.

// You want to keep track of your money. To do that:
// 1. Store all the information in the most appropriate JS data structure you can think of.
// Note: You may want to add a unique identifier to each account.

const myAccounts = [
    {
        id: 1,
        bank: 'Bank of America',
        amount: 500
    },
    {
        id: 2,
        bank: 'Bank of Tirana',
        amount: 1000
    },
    {
        id: 3,
        bank: 'HSBC',
        amount: 100
    }, {
        id: 4,
        bank: 'Bank of Italy',
        amount: 200
    },
    {
        id: 5,
        bank: 'Bank of England',
        amount: 69
    }
]

// Now, without directly typing the data:
// 2. Find a way to find out how much money is in a selected account.

function getAmountByAccount(account) {
    const match = myAccounts.find(acc => acc.id === account.id)
    if (match) {
        return match.amount
    }
    return 'Account does not exist'
}
console.log('Amount: ', getAmountByAccount({
    id: 4,
    bank: 'Bank of Italy',
    amount: 200
}))

// 3. Find a way to find out how much money you have in total.

function getTotalAmount() {
    let total = 0;
    for (const account of myAccounts) {
        total += account.amount
    }
    return total;
}
const total = getTotalAmount()
console.log('Total: ', total)

// 4. Find a way to add money to a selected account.
// 4.1 And subtract too.

function addMoney(account, amount) {
    const match = myAccounts.find(acc => acc.id === account.id)
    if (match && amount > 0) {
        match.amount = match.amount + amount
    } else {
        return 'Account not found or amount is less than or equal to 0'
    }
}
console.log(addMoney({ id: 5, bank: 'Bank of England', amount: 69 }, 10))


function subtractMoney(account, amount) {
    const match = myAccounts.find(acc => acc.id === account.id)
    if (match) {
        const currentAmount = match.amount
        if (amount < currentAmount && amount > 0) {
            match.amount = match.amount - amount
        } else {
            return 'Amount is greater than the current amount in account or less than or equal to 0 '
        }
    } else {
        return 'Account not found'
    }
}
console.log(subtractMoney({ id: 4, bank: 'Bank of Italy', amount: 200 }, 500))
console.log(subtractMoney({ id: 2, bank: 'Bank of Tirana', amount: 1000 }, 100))
console.log('Accounts: ', myAccounts)

// 5. Each bank account has an account number. For this exercise, an account number is a 5 digit integer.
// Find a way to add that information into the existing shape.

function generateAccountNumber(account) {
    let accNumber = `1020${account.id}`
    return Number(accNumber)
}
for (const acc of myAccounts) {
    acc.accountNumber = generateAccountNumber(acc)
}
console.log('Accounts: ', myAccounts)