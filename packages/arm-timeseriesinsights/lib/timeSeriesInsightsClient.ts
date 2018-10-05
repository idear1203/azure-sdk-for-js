/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "ms-rest-js";
import * as Models from "./models";
import * as Mappers from "./models/mappers";
import * as operations from "./operations";
import { TimeSeriesInsightsClientContext } from "./timeSeriesInsightsClientContext";


class TimeSeriesInsightsClient extends TimeSeriesInsightsClientContext {
  // Operation groups
  operations: operations.Operations;
  environments: operations.Environments;
  eventSources: operations.EventSources;
  referenceDataSets: operations.ReferenceDataSets;
  accessPolicies: operations.AccessPolicies;

  /**
   * Initializes a new instance of the TimeSeriesInsightsClient class.
   * @param credentials Credentials needed for the client to connect to Azure.
   * @param subscriptionId Azure Subscription ID.
   * @param [options] The parameter options
   */
  constructor(credentials: msRest.ServiceClientCredentials, subscriptionId: string, options?: Models.TimeSeriesInsightsClientOptions) {
    super(credentials, subscriptionId, options);
    this.operations = new operations.Operations(this);
    this.environments = new operations.Environments(this);
    this.eventSources = new operations.EventSources(this);
    this.referenceDataSets = new operations.ReferenceDataSets(this);
    this.accessPolicies = new operations.AccessPolicies(this);
  }
}

// Operation Specifications

export {
  TimeSeriesInsightsClient,
  TimeSeriesInsightsClientContext,
  Models as TimeSeriesInsightsModels,
  Mappers as TimeSeriesInsightsMappers
};
export * from "./operations";
