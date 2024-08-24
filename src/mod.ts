import { DependencyContainer } from "tsyringe";
import { IPostDBLoadMod } from "@spt/models/external/IPostDBLoadMod";
import { DatabaseServer } from "@spt/servers/DatabaseServer";
import { ILogger } from "@spt/models/spt/utils/ILogger";
import { IDatabaseTables } from "@spt/models/spt/server/IDatabaseTables";
import { JsonUtil } from "@spt/utils/JsonUtil";
//import { BundleLoader } from "@spt/loaders/BundleLoader";
//import { PreSptModLoader } from "@spt/loaders/PreSptModLoader";
//import * as fs from "fs";
//import * as path from "path";

class DVL_10_BlackVersion_Patcher implements IPostDBLoadMod 
{
    private db: IDatabaseTables;
    private logger: ILogger;
    private jsonUtil: JsonUtil;
    private modName: string = "DVL_10_BlackVersionPatcher";

    public postDBLoad(container: DependencyContainer): void 
    {
        //const bundleLoader = container.resolve<BundleLoader>("BundleLoader");
        this.logger = container.resolve<ILogger>("WinstonLogger");
        this.jsonUtil = container.resolve<JsonUtil>("JsonUtil");
        const databaseServer = container.resolve<DatabaseServer>("DatabaseServer");
        //const preSptModLoader = container.resolve<PreSptModLoader>("PreSptModLoader");

        //const modPath = preSptModLoader.getModPath(this.modName);
        this.db = databaseServer.getTables();

        // bundles.json 파일 로딩 및 번들 등록
        //this.loadBundles(bundleLoader, modPath);

        this.logger.info(`[${this.modName}] DVL-10 BlackVersion Patcher Loaded`);
    }
}

module.exports = { mod: new DVL_10_BlackVersion_Patcher() }