## API Report File for "@azure/container-registry"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import { OperationOptions } from '@azure/core-http';
import { PipelineOptions } from '@azure/core-http';
import { TokenCredential } from '@azure/core-http';

// @public (undocumented)
export interface ChangeableAttributes {
    deleteEnabled?: boolean;
    listEnabled?: boolean;
    readEnabled?: boolean;
    writeEnabled?: boolean;
}

// @public
export class ContainerRegistryClient {
    constructor(endpointUrl: string, credential: TokenCredential, options?: ContainerRegistryClientOptions);
    getAttributes(name: string, options?: GetAttributesOptions): Promise<RepositoryAttributes>;
}

// @public
export interface ContainerRegistryClientOptions extends PipelineOptions {
}

// @public
export interface GetAttributesOptions extends OperationOptions {
}

// @public
export interface RepositoryAttributes {
    changeableAttributes?: ChangeableAttributes;
    createdTime?: string;
    imageName?: string;
    lastUpdateTime?: string;
    manifestCount?: number;
    registry?: string;
    tagCount?: number;
}


// (No @packageDocumentation comment for this package)

```
