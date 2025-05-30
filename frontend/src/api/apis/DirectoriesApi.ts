/* tslint:disable */
/* eslint-disable */
/**
 * FastAPI
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  DirectoryMetadataResponse,
  HTTPValidationError,
  RegisterDirectoryRequest,
  RegisteredDirectoryDTO,
  UnregisterDirectoryRequest,
} from '../models/index';
import {
    DirectoryMetadataResponseFromJSON,
    DirectoryMetadataResponseToJSON,
    HTTPValidationErrorFromJSON,
    HTTPValidationErrorToJSON,
    RegisterDirectoryRequestFromJSON,
    RegisterDirectoryRequestToJSON,
    RegisteredDirectoryDTOFromJSON,
    RegisteredDirectoryDTOToJSON,
    UnregisterDirectoryRequestFromJSON,
    UnregisterDirectoryRequestToJSON,
} from '../models/index';

export interface CancelInitializationDirectoryCancelInitializationDirectoryNamePostRequest {
    directoryName: string;
}

export interface GetDirectoryMetadataDirectoryMetadatadaDirectoryNameGetRequest {
    directoryName: string;
}

export interface RegisterDirectoryDirectoryPostRequest {
    registerDirectoryRequest: RegisterDirectoryRequest;
}

export interface UnregisterDirectoryDirectoryDeleteRequest {
    unregisterDirectoryRequest: UnregisterDirectoryRequest;
}

/**
 * 
 */
export class DirectoriesApi extends runtime.BaseAPI {

    /**
     * Cancel Initialization
     */
    async cancelInitializationDirectoryCancelInitializationDirectoryNamePostRaw(requestParameters: CancelInitializationDirectoryCancelInitializationDirectoryNamePostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<any>> {
        if (requestParameters['directoryName'] == null) {
            throw new runtime.RequiredError(
                'directoryName',
                'Required parameter "directoryName" was null or undefined when calling cancelInitializationDirectoryCancelInitializationDirectoryNamePost().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/directory/cancel-initialization/{directory_name}`.replace(`{${"directory_name"}}`, encodeURIComponent(String(requestParameters['directoryName']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        if (this.isJsonMime(response.headers.get('content-type'))) {
            return new runtime.JSONApiResponse<any>(response);
        } else {
            return new runtime.TextApiResponse(response) as any;
        }
    }

    /**
     * Cancel Initialization
     */
    async cancelInitializationDirectoryCancelInitializationDirectoryNamePost(requestParameters: CancelInitializationDirectoryCancelInitializationDirectoryNamePostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<any> {
        const response = await this.cancelInitializationDirectoryCancelInitializationDirectoryNamePostRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get Directory Metadata
     */
    async getDirectoryMetadataDirectoryMetadatadaDirectoryNameGetRaw(requestParameters: GetDirectoryMetadataDirectoryMetadatadaDirectoryNameGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DirectoryMetadataResponse>> {
        if (requestParameters['directoryName'] == null) {
            throw new runtime.RequiredError(
                'directoryName',
                'Required parameter "directoryName" was null or undefined when calling getDirectoryMetadataDirectoryMetadatadaDirectoryNameGet().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/directory/metadatada/{directory_name}`.replace(`{${"directory_name"}}`, encodeURIComponent(String(requestParameters['directoryName']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DirectoryMetadataResponseFromJSON(jsonValue));
    }

    /**
     * Get Directory Metadata
     */
    async getDirectoryMetadataDirectoryMetadatadaDirectoryNameGet(requestParameters: GetDirectoryMetadataDirectoryMetadatadaDirectoryNameGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DirectoryMetadataResponse> {
        const response = await this.getDirectoryMetadataDirectoryMetadatadaDirectoryNameGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * List Registered Directories
     */
    async listRegisteredDirectoriesDirectoryGetRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<RegisteredDirectoryDTO>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/directory/`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(RegisteredDirectoryDTOFromJSON));
    }

    /**
     * List Registered Directories
     */
    async listRegisteredDirectoriesDirectoryGet(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<RegisteredDirectoryDTO>> {
        const response = await this.listRegisteredDirectoriesDirectoryGetRaw(initOverrides);
        return await response.value();
    }

    /**
     * Register Directory
     */
    async registerDirectoryDirectoryPostRaw(requestParameters: RegisterDirectoryDirectoryPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RegisteredDirectoryDTO>> {
        if (requestParameters['registerDirectoryRequest'] == null) {
            throw new runtime.RequiredError(
                'registerDirectoryRequest',
                'Required parameter "registerDirectoryRequest" was null or undefined when calling registerDirectoryDirectoryPost().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/directory/`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: RegisterDirectoryRequestToJSON(requestParameters['registerDirectoryRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RegisteredDirectoryDTOFromJSON(jsonValue));
    }

    /**
     * Register Directory
     */
    async registerDirectoryDirectoryPost(requestParameters: RegisterDirectoryDirectoryPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RegisteredDirectoryDTO> {
        const response = await this.registerDirectoryDirectoryPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Unregister Directory
     */
    async unregisterDirectoryDirectoryDeleteRaw(requestParameters: UnregisterDirectoryDirectoryDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<any>> {
        if (requestParameters['unregisterDirectoryRequest'] == null) {
            throw new runtime.RequiredError(
                'unregisterDirectoryRequest',
                'Required parameter "unregisterDirectoryRequest" was null or undefined when calling unregisterDirectoryDirectoryDelete().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/directory/`,
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
            body: UnregisterDirectoryRequestToJSON(requestParameters['unregisterDirectoryRequest']),
        }, initOverrides);

        if (this.isJsonMime(response.headers.get('content-type'))) {
            return new runtime.JSONApiResponse<any>(response);
        } else {
            return new runtime.TextApiResponse(response) as any;
        }
    }

    /**
     * Unregister Directory
     */
    async unregisterDirectoryDirectoryDelete(requestParameters: UnregisterDirectoryDirectoryDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<any> {
        const response = await this.unregisterDirectoryDirectoryDeleteRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
