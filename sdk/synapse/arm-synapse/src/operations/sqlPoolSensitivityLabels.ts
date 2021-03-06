/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/sqlPoolSensitivityLabelsMappers";
import * as Parameters from "../models/parameters";
import { SynapseManagementClientContext } from "../synapseManagementClientContext";

/** Class representing a SqlPoolSensitivityLabels. */
export class SqlPoolSensitivityLabels {
  private readonly client: SynapseManagementClientContext;

  /**
   * Create a SqlPoolSensitivityLabels.
   * @param {SynapseManagementClientContext} client Reference to the service client.
   */
  constructor(client: SynapseManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets SQL pool sensitivity labels.
   * @summary Gets SQL pool sensitivity labels
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace
   * @param sqlPoolName SQL pool name
   * @param [options] The optional parameters
   * @returns Promise<Models.SqlPoolSensitivityLabelsListCurrentResponse>
   */
  listCurrent(resourceGroupName: string, workspaceName: string, sqlPoolName: string, options?: Models.SqlPoolSensitivityLabelsListCurrentOptionalParams): Promise<Models.SqlPoolSensitivityLabelsListCurrentResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace
   * @param sqlPoolName SQL pool name
   * @param callback The callback
   */
  listCurrent(resourceGroupName: string, workspaceName: string, sqlPoolName: string, callback: msRest.ServiceCallback<Models.SensitivityLabelListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace
   * @param sqlPoolName SQL pool name
   * @param options The optional parameters
   * @param callback The callback
   */
  listCurrent(resourceGroupName: string, workspaceName: string, sqlPoolName: string, options: Models.SqlPoolSensitivityLabelsListCurrentOptionalParams, callback: msRest.ServiceCallback<Models.SensitivityLabelListResult>): void;
  listCurrent(resourceGroupName: string, workspaceName: string, sqlPoolName: string, options?: Models.SqlPoolSensitivityLabelsListCurrentOptionalParams | msRest.ServiceCallback<Models.SensitivityLabelListResult>, callback?: msRest.ServiceCallback<Models.SensitivityLabelListResult>): Promise<Models.SqlPoolSensitivityLabelsListCurrentResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        workspaceName,
        sqlPoolName,
        options
      },
      listCurrentOperationSpec,
      callback) as Promise<Models.SqlPoolSensitivityLabelsListCurrentResponse>;
  }

  /**
   * Update sensitivity labels of a given SQL Pool using an operations batch.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace
   * @param sqlPoolName SQL pool name
   * @param parameters
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  update(resourceGroupName: string, workspaceName: string, sqlPoolName: string, parameters: Models.SensitivityLabelUpdateList, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace
   * @param sqlPoolName SQL pool name
   * @param parameters
   * @param callback The callback
   */
  update(resourceGroupName: string, workspaceName: string, sqlPoolName: string, parameters: Models.SensitivityLabelUpdateList, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace
   * @param sqlPoolName SQL pool name
   * @param parameters
   * @param options The optional parameters
   * @param callback The callback
   */
  update(resourceGroupName: string, workspaceName: string, sqlPoolName: string, parameters: Models.SensitivityLabelUpdateList, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  update(resourceGroupName: string, workspaceName: string, sqlPoolName: string, parameters: Models.SensitivityLabelUpdateList, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        workspaceName,
        sqlPoolName,
        parameters,
        options
      },
      updateOperationSpec,
      callback);
  }

  /**
   * Gets sensitivity labels of a given SQL pool.
   * @summary Gets sensitivity labels of a given SQL pool
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace
   * @param sqlPoolName SQL pool name
   * @param [options] The optional parameters
   * @returns Promise<Models.SqlPoolSensitivityLabelsListRecommendedResponse>
   */
  listRecommended(resourceGroupName: string, workspaceName: string, sqlPoolName: string, options?: Models.SqlPoolSensitivityLabelsListRecommendedOptionalParams): Promise<Models.SqlPoolSensitivityLabelsListRecommendedResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace
   * @param sqlPoolName SQL pool name
   * @param callback The callback
   */
  listRecommended(resourceGroupName: string, workspaceName: string, sqlPoolName: string, callback: msRest.ServiceCallback<Models.SensitivityLabelListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace
   * @param sqlPoolName SQL pool name
   * @param options The optional parameters
   * @param callback The callback
   */
  listRecommended(resourceGroupName: string, workspaceName: string, sqlPoolName: string, options: Models.SqlPoolSensitivityLabelsListRecommendedOptionalParams, callback: msRest.ServiceCallback<Models.SensitivityLabelListResult>): void;
  listRecommended(resourceGroupName: string, workspaceName: string, sqlPoolName: string, options?: Models.SqlPoolSensitivityLabelsListRecommendedOptionalParams | msRest.ServiceCallback<Models.SensitivityLabelListResult>, callback?: msRest.ServiceCallback<Models.SensitivityLabelListResult>): Promise<Models.SqlPoolSensitivityLabelsListRecommendedResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        workspaceName,
        sqlPoolName,
        options
      },
      listRecommendedOperationSpec,
      callback) as Promise<Models.SqlPoolSensitivityLabelsListRecommendedResponse>;
  }

  /**
   * Creates or updates the sensitivity label of a given column in a Sql pool
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace
   * @param sqlPoolName SQL pool name
   * @param schemaName The name of the schema.
   * @param tableName The name of the table.
   * @param columnName The name of the column.
   * @param parameters The column sensitivity label resource.
   * @param [options] The optional parameters
   * @returns Promise<Models.SqlPoolSensitivityLabelsCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, workspaceName: string, sqlPoolName: string, schemaName: string, tableName: string, columnName: string, parameters: Models.SensitivityLabel, options?: msRest.RequestOptionsBase): Promise<Models.SqlPoolSensitivityLabelsCreateOrUpdateResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace
   * @param sqlPoolName SQL pool name
   * @param schemaName The name of the schema.
   * @param tableName The name of the table.
   * @param columnName The name of the column.
   * @param parameters The column sensitivity label resource.
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, workspaceName: string, sqlPoolName: string, schemaName: string, tableName: string, columnName: string, parameters: Models.SensitivityLabel, callback: msRest.ServiceCallback<Models.SensitivityLabel>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace
   * @param sqlPoolName SQL pool name
   * @param schemaName The name of the schema.
   * @param tableName The name of the table.
   * @param columnName The name of the column.
   * @param parameters The column sensitivity label resource.
   * @param options The optional parameters
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, workspaceName: string, sqlPoolName: string, schemaName: string, tableName: string, columnName: string, parameters: Models.SensitivityLabel, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.SensitivityLabel>): void;
  createOrUpdate(resourceGroupName: string, workspaceName: string, sqlPoolName: string, schemaName: string, tableName: string, columnName: string, parameters: Models.SensitivityLabel, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.SensitivityLabel>, callback?: msRest.ServiceCallback<Models.SensitivityLabel>): Promise<Models.SqlPoolSensitivityLabelsCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        workspaceName,
        sqlPoolName,
        schemaName,
        tableName,
        columnName,
        parameters,
        options
      },
      createOrUpdateOperationSpec,
      callback) as Promise<Models.SqlPoolSensitivityLabelsCreateOrUpdateResponse>;
  }

  /**
   * Deletes the sensitivity label of a given column in a Sql pool
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace
   * @param sqlPoolName SQL pool name
   * @param schemaName The name of the schema.
   * @param tableName The name of the table.
   * @param columnName The name of the column.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, workspaceName: string, sqlPoolName: string, schemaName: string, tableName: string, columnName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace
   * @param sqlPoolName SQL pool name
   * @param schemaName The name of the schema.
   * @param tableName The name of the table.
   * @param columnName The name of the column.
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, workspaceName: string, sqlPoolName: string, schemaName: string, tableName: string, columnName: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace
   * @param sqlPoolName SQL pool name
   * @param schemaName The name of the schema.
   * @param tableName The name of the table.
   * @param columnName The name of the column.
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, workspaceName: string, sqlPoolName: string, schemaName: string, tableName: string, columnName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  deleteMethod(resourceGroupName: string, workspaceName: string, sqlPoolName: string, schemaName: string, tableName: string, columnName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        workspaceName,
        sqlPoolName,
        schemaName,
        tableName,
        columnName,
        options
      },
      deleteMethodOperationSpec,
      callback);
  }

  /**
   * Gets the sensitivity label of a given column
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace
   * @param sqlPoolName SQL pool name
   * @param schemaName The name of the schema.
   * @param tableName The name of the table.
   * @param columnName The name of the column.
   * @param sensitivityLabelSource The source of the sensitivity label. Possible values include:
   * 'current', 'recommended'
   * @param [options] The optional parameters
   * @returns Promise<Models.SqlPoolSensitivityLabelsGetResponse>
   */
  get(resourceGroupName: string, workspaceName: string, sqlPoolName: string, schemaName: string, tableName: string, columnName: string, sensitivityLabelSource: Models.SensitivityLabelSource, options?: msRest.RequestOptionsBase): Promise<Models.SqlPoolSensitivityLabelsGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace
   * @param sqlPoolName SQL pool name
   * @param schemaName The name of the schema.
   * @param tableName The name of the table.
   * @param columnName The name of the column.
   * @param sensitivityLabelSource The source of the sensitivity label. Possible values include:
   * 'current', 'recommended'
   * @param callback The callback
   */
  get(resourceGroupName: string, workspaceName: string, sqlPoolName: string, schemaName: string, tableName: string, columnName: string, sensitivityLabelSource: Models.SensitivityLabelSource, callback: msRest.ServiceCallback<Models.SensitivityLabel>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace
   * @param sqlPoolName SQL pool name
   * @param schemaName The name of the schema.
   * @param tableName The name of the table.
   * @param columnName The name of the column.
   * @param sensitivityLabelSource The source of the sensitivity label. Possible values include:
   * 'current', 'recommended'
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, workspaceName: string, sqlPoolName: string, schemaName: string, tableName: string, columnName: string, sensitivityLabelSource: Models.SensitivityLabelSource, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.SensitivityLabel>): void;
  get(resourceGroupName: string, workspaceName: string, sqlPoolName: string, schemaName: string, tableName: string, columnName: string, sensitivityLabelSource: Models.SensitivityLabelSource, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.SensitivityLabel>, callback?: msRest.ServiceCallback<Models.SensitivityLabel>): Promise<Models.SqlPoolSensitivityLabelsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        workspaceName,
        sqlPoolName,
        schemaName,
        tableName,
        columnName,
        sensitivityLabelSource,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.SqlPoolSensitivityLabelsGetResponse>;
  }

  /**
   * Enables sensitivity recommendations on a given column (recommendations are enabled by default on
   * all columns)
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace
   * @param sqlPoolName SQL pool name
   * @param schemaName The name of the schema.
   * @param tableName The name of the table.
   * @param columnName The name of the column.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  enableRecommendation(resourceGroupName: string, workspaceName: string, sqlPoolName: string, schemaName: string, tableName: string, columnName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace
   * @param sqlPoolName SQL pool name
   * @param schemaName The name of the schema.
   * @param tableName The name of the table.
   * @param columnName The name of the column.
   * @param callback The callback
   */
  enableRecommendation(resourceGroupName: string, workspaceName: string, sqlPoolName: string, schemaName: string, tableName: string, columnName: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace
   * @param sqlPoolName SQL pool name
   * @param schemaName The name of the schema.
   * @param tableName The name of the table.
   * @param columnName The name of the column.
   * @param options The optional parameters
   * @param callback The callback
   */
  enableRecommendation(resourceGroupName: string, workspaceName: string, sqlPoolName: string, schemaName: string, tableName: string, columnName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  enableRecommendation(resourceGroupName: string, workspaceName: string, sqlPoolName: string, schemaName: string, tableName: string, columnName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        workspaceName,
        sqlPoolName,
        schemaName,
        tableName,
        columnName,
        options
      },
      enableRecommendationOperationSpec,
      callback);
  }

  /**
   * Disables sensitivity recommendations on a given column
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace
   * @param sqlPoolName SQL pool name
   * @param schemaName The name of the schema.
   * @param tableName The name of the table.
   * @param columnName The name of the column.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  disableRecommendation(resourceGroupName: string, workspaceName: string, sqlPoolName: string, schemaName: string, tableName: string, columnName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace
   * @param sqlPoolName SQL pool name
   * @param schemaName The name of the schema.
   * @param tableName The name of the table.
   * @param columnName The name of the column.
   * @param callback The callback
   */
  disableRecommendation(resourceGroupName: string, workspaceName: string, sqlPoolName: string, schemaName: string, tableName: string, columnName: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace
   * @param sqlPoolName SQL pool name
   * @param schemaName The name of the schema.
   * @param tableName The name of the table.
   * @param columnName The name of the column.
   * @param options The optional parameters
   * @param callback The callback
   */
  disableRecommendation(resourceGroupName: string, workspaceName: string, sqlPoolName: string, schemaName: string, tableName: string, columnName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  disableRecommendation(resourceGroupName: string, workspaceName: string, sqlPoolName: string, schemaName: string, tableName: string, columnName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        workspaceName,
        sqlPoolName,
        schemaName,
        tableName,
        columnName,
        options
      },
      disableRecommendationOperationSpec,
      callback);
  }

  /**
   * Gets SQL pool sensitivity labels.
   * @summary Gets SQL pool sensitivity labels
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.SqlPoolSensitivityLabelsListCurrentNextResponse>
   */
  listCurrentNext(nextPageLink: string, options?: Models.SqlPoolSensitivityLabelsListCurrentNextOptionalParams): Promise<Models.SqlPoolSensitivityLabelsListCurrentNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listCurrentNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.SensitivityLabelListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listCurrentNext(nextPageLink: string, options: Models.SqlPoolSensitivityLabelsListCurrentNextOptionalParams, callback: msRest.ServiceCallback<Models.SensitivityLabelListResult>): void;
  listCurrentNext(nextPageLink: string, options?: Models.SqlPoolSensitivityLabelsListCurrentNextOptionalParams | msRest.ServiceCallback<Models.SensitivityLabelListResult>, callback?: msRest.ServiceCallback<Models.SensitivityLabelListResult>): Promise<Models.SqlPoolSensitivityLabelsListCurrentNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listCurrentNextOperationSpec,
      callback) as Promise<Models.SqlPoolSensitivityLabelsListCurrentNextResponse>;
  }

  /**
   * Gets sensitivity labels of a given SQL pool.
   * @summary Gets sensitivity labels of a given SQL pool
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.SqlPoolSensitivityLabelsListRecommendedNextResponse>
   */
  listRecommendedNext(nextPageLink: string, options?: Models.SqlPoolSensitivityLabelsListRecommendedNextOptionalParams): Promise<Models.SqlPoolSensitivityLabelsListRecommendedNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listRecommendedNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.SensitivityLabelListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listRecommendedNext(nextPageLink: string, options: Models.SqlPoolSensitivityLabelsListRecommendedNextOptionalParams, callback: msRest.ServiceCallback<Models.SensitivityLabelListResult>): void;
  listRecommendedNext(nextPageLink: string, options?: Models.SqlPoolSensitivityLabelsListRecommendedNextOptionalParams | msRest.ServiceCallback<Models.SensitivityLabelListResult>, callback?: msRest.ServiceCallback<Models.SensitivityLabelListResult>): Promise<Models.SqlPoolSensitivityLabelsListRecommendedNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listRecommendedNextOperationSpec,
      callback) as Promise<Models.SqlPoolSensitivityLabelsListRecommendedNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listCurrentOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/sqlPools/{sqlPoolName}/currentSensitivityLabels",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.sqlPoolName
  ],
  queryParameters: [
    Parameters.apiVersion,
    Parameters.filter
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.SensitivityLabelListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const updateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/sqlPools/{sqlPoolName}/currentSensitivityLabels",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.sqlPoolName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.SensitivityLabelUpdateList,
      required: true
    }
  },
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listRecommendedOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/sqlPools/{sqlPoolName}/recommendedSensitivityLabels",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.sqlPoolName
  ],
  queryParameters: [
    Parameters.apiVersion,
    Parameters.includeDisabledRecommendations,
    Parameters.skipToken,
    Parameters.filter
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.SensitivityLabelListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const createOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/sqlPools/{sqlPoolName}/schemas/{schemaName}/tables/{tableName}/columns/{columnName}/sensitivityLabels/{sensitivityLabelSource}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.sqlPoolName,
    Parameters.schemaName,
    Parameters.tableName,
    Parameters.columnName,
    Parameters.sensitivityLabelSource0
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.SensitivityLabel,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.SensitivityLabel
    },
    201: {
      bodyMapper: Mappers.SensitivityLabel
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const deleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/sqlPools/{sqlPoolName}/schemas/{schemaName}/tables/{tableName}/columns/{columnName}/sensitivityLabels/{sensitivityLabelSource}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.sqlPoolName,
    Parameters.schemaName,
    Parameters.tableName,
    Parameters.columnName,
    Parameters.sensitivityLabelSource0
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/sqlPools/{sqlPoolName}/schemas/{schemaName}/tables/{tableName}/columns/{columnName}/sensitivityLabels/{sensitivityLabelSource}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.sqlPoolName,
    Parameters.schemaName,
    Parameters.tableName,
    Parameters.columnName,
    Parameters.sensitivityLabelSource1
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.SensitivityLabel
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const enableRecommendationOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/sqlPools/{sqlPoolName}/schemas/{schemaName}/tables/{tableName}/columns/{columnName}/sensitivityLabels/{sensitivityLabelSource}/enable",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.sqlPoolName,
    Parameters.schemaName,
    Parameters.tableName,
    Parameters.columnName,
    Parameters.sensitivityLabelSource2
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const disableRecommendationOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/sqlPools/{sqlPoolName}/schemas/{schemaName}/tables/{tableName}/columns/{columnName}/sensitivityLabels/{sensitivityLabelSource}/disable",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.sqlPoolName,
    Parameters.schemaName,
    Parameters.tableName,
    Parameters.columnName,
    Parameters.sensitivityLabelSource2
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listCurrentNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  queryParameters: [
    Parameters.apiVersion,
    Parameters.filter
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.SensitivityLabelListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listRecommendedNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  queryParameters: [
    Parameters.apiVersion,
    Parameters.includeDisabledRecommendations,
    Parameters.skipToken,
    Parameters.filter
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.SensitivityLabelListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
