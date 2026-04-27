import { getMaxListeners } from "node:cluster";

export const users = { 
    admin: { email: 'admin@practicesoftwaretesting.com', password: 'welcome01' },
    customer: { email: 'customer2@practicesoftwaretesting.com', password: 'welcome01' },
    invalid: { email: 'fakeemail@gmail.com', password: 'fakepassword' }

} as const;