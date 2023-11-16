import { batchMintMatics } from "dandao"
const rawArgv = process.argv.slice(2);
batchMintMatics(137, 10000, rawArgv[0], res => {
    console.log(res)
}) 