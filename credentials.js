// Create a public key from the Verbwrie Dashboard
// Add a Scope to it: "/v1/wallet/event/save"
const publicKey = "PUBLIC_KEY";

// Create a wallet application from Verbwire Dashboard
// Add respective allowed domains to it.
const applicationId = "WALLETS_APPLICATION_ID";

// Get an API key from Alchemy
const alchemyKey = "YOUR_ALCHEMY_KEY";

export const credentials = {
    publicKey,
    applicationId,
    alchemyKey,
};