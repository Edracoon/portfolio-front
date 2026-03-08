type Env = {
    PORTFOLIO_URL: string | undefined,
    GOMOKU_URL: string | undefined,
}

const env: Env = {
    PORTFOLIO_URL: process.env.BUN_PUBLIC_PORTFOLIO_URL ?? "",
    GOMOKU_URL: process.env.BUN_PUBLIC_GOMOKU_URL ?? "",
}

export default env;