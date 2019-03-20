/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "./models";
import * as Mappers from "./models/mappers";
import * as operations from "./operations";
import { ConsumptionManagementClientContext } from "./consumptionManagementClientContext";


class ConsumptionManagementClient extends ConsumptionManagementClientContext {
  // Operation groups
  budgets: operations.Budgets;
  operations: operations.Operations;

  /**
   * Initializes a new instance of the ConsumptionManagementClient class.
   * @param credentials Credentials needed for the client to connect to Azure.
   * @param subscriptionId Azure Subscription ID.
   * @param name Budget name.
   * @param [options] The parameter options
   */
  constructor(credentials: msRest.ServiceClientCredentials, subscriptionId: string, name: string, options?: Models.ConsumptionManagementClientOptions) {
    super(credentials, subscriptionId, name, options);
    this.budgets = new operations.Budgets(this);
    this.operations = new operations.Operations(this);
  }
}

// Operation Specifications

export {
  ConsumptionManagementClient,
  ConsumptionManagementClientContext,
  Models as ConsumptionManagementModels,
  Mappers as ConsumptionManagementMappers
};
export * from "./operations";
